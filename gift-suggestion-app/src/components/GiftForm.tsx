'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormData {
  recipient: string;
  age: string;
  gender: string;
  interests: string;
  budget: string;
  occasion: string;
  relationship: string;
}

interface GiftFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isLoading: boolean;
}

const validationSchema = Yup.object({
  recipient: Yup.string().required('Alıcının adı gereklidir'),
  age: Yup.number()
    .required('Yaş bilgisi gereklidir')
    .min(1, 'Yaş 1-120 arasında olmalıdır')
    .max(120, 'Yaş 1-120 arasında olmalıdır'),
  relationship: Yup.string().required('İlişkinizi belirtiniz'),
});

const initialValues: FormData = {
  recipient: '',
  age: '',
  gender: '',
  interests: '',
  budget: '',
  occasion: '',
  relationship: ''
};

export default function GiftForm({ onSubmit, isLoading }: GiftFormProps) {

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl p-6 lg:p-8 h-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl lg:text-3xl font-black text-white mb-2">
          🎁 Mükemmel Hediyeyi Bulalım!
        </h2>
        <p className="text-gray-300">
          Birkaç basit soruyla sevdikleriniz için en doğru hediyeyi keşfedin ✨
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await onSubmit(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Alıcı Adı */}
            <div>
              <label htmlFor="recipient" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center">
                <span className="mr-2">👤</span>
                Kim için hediye arıyorsunuz? *
              </label>
              <Field
                type="text"
                id="recipient"
                name="recipient"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 hover:bg-slate-700/70"
                placeholder="Örn: Annem Ayşe, Kardeşim Mehmet, Arkadaşım Sarah..."
              />
              <ErrorMessage name="recipient" component="p" className="mt-1 text-sm text-red-400" />
            </div>

            {/* İlişki */}
            <div>
              <label htmlFor="relationship" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center">
                <span className="mr-2">💝</span>
                Bu kişi sizin neyiniz? *
              </label>
              <Field
                as="select"
                id="relationship"
                name="relationship"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-slate-700/70 cursor-pointer"
              >
                <option value="" className="bg-slate-800 text-gray-400">Yakınlığınızı seçin...</option>
                <option value="anne" className="bg-slate-800 text-white">👩 Annem</option>
                <option value="baba" className="bg-slate-800 text-white">👨 Babam</option>
                <option value="eş" className="bg-slate-800 text-white">💕 Eşim/Sevgilim</option>
                <option value="kardeş" className="bg-slate-800 text-white">👫 Kardeşim</option>
                <option value="arkadaş" className="bg-slate-800 text-white">👯 Arkadaşım</option>
                <option value="iş arkadaşı" className="bg-slate-800 text-white">💼 İş Arkadaşım</option>
                <option value="akraba" className="bg-slate-800 text-white">👨‍👩‍👧‍👦 Akrabam</option>
                <option value="öğretmen" className="bg-slate-800 text-white">👨‍🏫 Öğretmenim</option>
                <option value="diğer" className="bg-slate-800 text-white">🤝 Diğer</option>
              </Field>
              <ErrorMessage name="relationship" component="p" className="mt-1 text-sm text-red-400" />
            </div>

            {/* Yaş ve Cinsiyet */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center">
                  <span className="mr-2">🎂</span>
                  Kaç yaşında? *
                </label>
                <Field
                  type="number"
                  id="age"
                  name="age"
                  min="1"
                  max="120"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 hover:bg-slate-700/70"
                  placeholder="Yaşını yazın..."
                />
                <ErrorMessage name="age" component="p" className="mt-1 text-sm text-red-400" />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center">
                  <span className="mr-2">⚧️</span>
                  Cinsiyeti (opsiyonel)
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-slate-700/70 cursor-pointer"
                >
                  <option value="" className="bg-slate-800 text-gray-400">Belirtmek istemiyorum</option>
                  <option value="Kadın" className="bg-slate-800 text-white">👩 Kadın</option>
                  <option value="Erkek" className="bg-slate-800 text-white">👨 Erkek</option>
                  <option value="Diğer" className="bg-slate-800 text-white">🏳️‍⚧️ Diğer</option>
                </Field>
              </div>
            </div>

            {/* İlgi Alanları */}
            <div>
              <label htmlFor="interests" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center">
                <span className="mr-2">❤️</span>
                Neleri seviyor? Hangi hobileri var?
              </label>
              <Field
                as="textarea"
                id="interests"
                name="interests"
                rows={3}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder-gray-400 hover:bg-slate-700/70"
                placeholder="Örn: Kahve içmeyi seviyor, kitap okuyor, yoga yapıyor, film izliyor, bahçıvanlık, müzik, teknoloji meraklısı..."
              />
              <p className="mt-1 text-sm text-gray-400">
                💡 Ne kadar çok detay verirseniz, o kadar kişisel öneriler alırsınız!
              </p>
            </div>

            {/* Bütçe */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center">
                <span className="mr-2">💰</span>
                Hediye bütçeniz ne kadar?
              </label>
              <Field
                as="select"
                id="budget"
                name="budget"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-slate-700/70 cursor-pointer"
              >
                <option value="" className="bg-slate-800 text-gray-400">Bütçe seçin...</option>
                <option value="0-100 TL" className="bg-slate-800 text-white">🪙 Küçük sürpriz (0-100 TL)</option>
                <option value="100-300 TL" className="bg-slate-800 text-white">💸 Makul hediye (100-300 TL)</option>
                <option value="300-500 TL" className="bg-slate-800 text-white">🎁 Özel hediye (300-500 TL)</option>
                <option value="500-1000 TL" className="bg-slate-800 text-white">💎 Değerli hediye (500-1000 TL)</option>
                <option value="1000-2000 TL" className="bg-slate-800 text-white">👑 Lüks hediye (1000-2000 TL)</option>
                <option value="2000+ TL" className="bg-slate-800 text-white">🌟 Premium hediye (2000+ TL)</option>
                <option value="Bütçe sınırım yok" className="bg-slate-800 text-white">♾️ Bütçe sınırım yok</option>
              </Field>
            </div>

            {/* Özel Durum */}
            <div>
              <label htmlFor="occasion" className="block text-sm font-semibold text-gray-300 mb-2 flex items-center">
                <span className="mr-2">🎉</span>
                Hangi özel gün için?
              </label>
              <Field
                as="select"
                id="occasion"
                name="occasion"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-slate-700/70 cursor-pointer"
              >
                <option value="" className="bg-slate-800 text-gray-400">Özel günü seçin...</option>
                <option value="Doğum günü" className="bg-slate-800 text-white">🎂 Doğum günü</option>
                <option value="Yılbaşı" className="bg-slate-800 text-white">🎊 Yılbaşı</option>
                <option value="Sevgililer Günü" className="bg-slate-800 text-white">💕 Sevgililer Günü</option>
                <option value="Anneler Günü" className="bg-slate-800 text-white">🌸 Anneler Günü</option>
                <option value="Babalar Günü" className="bg-slate-800 text-white">👔 Babalar Günü</option>
                <option value="Mezuniyet" className="bg-slate-800 text-white">🎓 Mezuniyet</option>
                <option value="Terfi/Başarı" className="bg-slate-800 text-white">🏆 Terfi/Başarı kutlaması</option>
                <option value="Düğün/Nişan" className="bg-slate-800 text-white">💒 Düğün/Nişan</option>
                <option value="Geçmiş olsun" className="bg-slate-800 text-white">🤗 Geçmiş olsun hediyesi</option>
                <option value="Teşekkür" className="bg-slate-800 text-white">🙏 Teşekkür hediyesi</option>
                <option value="Genel hediye" className="bg-slate-800 text-white">💝 Özel gün yok, sadece sürpriz</option>
              </Field>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 relative overflow-hidden ${
                isLoading || isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 active:scale-95 shadow-lg hover:shadow-blue-500/25'
              }`}
            >
              {isLoading || isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium">🤖 AI Analiz Ediliyor...</span>
                    <span className="text-xs opacity-75 mt-1">Bu işlem 10-30 saniye sürebilir</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xl">🎁</span>
                  <span>Hediye Önerilerimi Göster!</span>
                  <span className="text-xl">✨</span>
                </div>
              )}
              
              {/* Loading Progress Bar */}
              {(isLoading || isSubmitting) && (
                <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
                  <div className="h-full bg-white/60 animate-pulse" style={{
                    animation: 'loading-bar 3s ease-in-out infinite'
                  }}></div>
                </div>
              )}
            </button>
          </Form>
        )}
      </Formik>

      <div className="mt-6 text-center text-sm text-gray-400 space-y-2">
        <p>🤖 Yapay zeka ile kişiye özel hediye önerileri</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <span className="flex items-center">🔒 Bilgileriniz güvende</span>
          <span className="flex items-center">⚡ 30 saniyede sonuç</span>
          <span className="flex items-center">🆓 Tamamen ücretsiz</span>
        </div>
      </div>
    </div>
  );
}