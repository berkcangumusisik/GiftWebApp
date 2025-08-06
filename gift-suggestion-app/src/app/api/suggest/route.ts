import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// OpenAI istemcisi yapılandırması
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Form verileri interface'i
interface FormData {
  recipient: string;
  age: string;
  gender: string;
  interests: string;
  budget: string;
  occasion: string;
  relationship: string;
}

// Hediye önerisi interface'i
interface GiftSuggestion {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  emoji: string;
  where: string;
  whyPerfect: string;
  rating: number;
}

// Kişiselleştirilmiş prompt oluşturma fonksiyonu
function createPersonalizedPrompt(formData: FormData): string {
  const { recipient, age, gender, interests, budget, occasion, relationship } = formData;
  
  return `Sen hediye önerilerinde uzman bir AI asistanısın. Aşağıdaki kişi için TAM OLARAK 6 ADET hediye önerisi hazırla:

KIŞI BİLGİLERİ:
- İsim: ${recipient}
- Yaş: ${age}
- Cinsiyet: ${gender || 'Belirtilmemiş'}
- İlgi Alanları: ${interests || 'Belirtilmemiş'}
- Bütçe: ${budget || 'Esnek'}
- Özel Durum: ${occasion || 'Genel hediye'}
- İlişki: ${relationship}

YANIT FORMATI (JSON formatında döndür):
{
  "suggestions": [
    {
      "id": 1,
      "name": "Hediye Adı",
      "description": "Hediye açıklaması",
      "price": "Fiyat aralığı",
      "category": "Kategori",
      "emoji": "Uygun emoji",
      "where": "Nereden alınabileceği",
      "whyPerfect": "Neden mükemmel olduğu",
      "rating": 4.5
    }
  ]
}

ÖNEMLİ KURALLAR:
1. TAM OLARAK 6 hediye önerisi ver
2. Her hediye farklı kategoride olsun (Teknoloji, Wellness, Lifestyle, Eğitim, Gıda, Müzik, Spor, Moda, vb.)
3. Bütçeye uygun öneriler sun
4. Yaş grubuna uygun seçimler yap
5. İlgi alanlarını dikkate al
6. İlişki durumuna göre kişiselleştir
7. Türkiye'de bulunabilecek ürünler öner
8. Her hediye için net fiyat aralığı belirt (TL cinsinden)
9. Rating 4.0-5.0 arasında olsun
10. Emoji seçimi hediyeye uygun olsun

Kişiselleştirme örnekleri:
- Eğer ilgi alanlarında "kitap" varsa kitap önerebilirsin
- Eğer "spor" varsa spor ekipmanları önerebilirsin
- Yaş 20-30 arası için teknoloji ağırlıklı öneriler
- Yaş 40+ için daha mature seçimler
- Erkek/kadın tercihlerine göre ayarla

Sadece JSON formatında yanıt ver, başka açıklama yapma.`;
}

// OpenAI API çağrısı için yardımcı fonksiyon
async function generateGiftSuggestions(formData: FormData): Promise<GiftSuggestion[]> {
  try {
    const prompt = createPersonalizedPrompt(formData);
    
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS || '2000'),
      temperature: parseFloat(process.env.OPENAI_TEMPERATURE || '0.7'),
    });

    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
      throw new Error('OpenAI yanıtı boş geldi');
    }

    // JSON parse et
    try {
      const parsedResponse = JSON.parse(responseContent);
      return parsedResponse.suggestions;
    } catch (parseError) {
      console.error('JSON parse hatası:', parseError);
      console.log('Ham yanıt:', responseContent);
      throw new Error('OpenAI yanıtı işlenirken hata oluştu');
    }

  } catch (error) {
    console.error('OpenAI API Hatası:', error);
    throw new Error('Hediye önerisi oluşturulurken bir hata oluştu: ' + (error as Error).message);
  }
}

// POST endpoint
export async function POST(request: NextRequest) {
  try {
    // API anahtarı kontrolü
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'OpenAI API anahtarı yapılandırılmamış',
          isConfigured: false
        },
        { status: 400 }
      );
    }

    const formData: FormData = await request.json();

    // Form verilerini validate et
    if (!formData.recipient || !formData.age || !formData.relationship) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Eksik form verileri' 
        },
        { status: 400 }
      );
    }

    // OpenAI API çağrısı yap
    const suggestions = await generateGiftSuggestions(formData);

    return NextResponse.json({
      success: true,
      suggestions,
      requestData: formData,
      isOpenAI: true
    });

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: (error as Error).message 
      },
      { status: 500 }
    );
  }
}

// GET endpoint - API durumu kontrolü
export async function GET() {
  return NextResponse.json({
    status: 'OK',
    isConfigured: !!process.env.OPENAI_API_KEY,
    model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo'
  });
}