'use client';

interface GiftSuggestionsProps {
  suggestion: string;
  requestData: {
    recipient: string;
    age: string;
    gender?: string;
    interests?: string;
    budget?: string;
    occasion?: string;
  };
  onNewSearch: () => void;
}

export default function GiftSuggestions({ suggestion, requestData, onNewSearch }: GiftSuggestionsProps) {
  const formatSuggestion = (text: string) => {
    // Split by paragraphs and format them nicely
    const paragraphs = text.split('\n').filter(p => p.trim());
    
    return paragraphs.map((paragraph, index) => {
      // Check if it's a numbered list item
      if (paragraph.match(/^\d+\./)) {
        return (
          <div key={index} className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 rounded-lg border-l-4 border-blue-400 mb-3">
            <p className="text-white font-medium">{paragraph}</p>
          </div>
        );
      }
      
      // Check if it's a bullet point
      if (paragraph.match(/^[-•]/)) {
        return (
          <div key={index} className="bg-slate-700/30 p-3 rounded-lg mb-2">
            <p className="text-gray-300">{paragraph}</p>
          </div>
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} className="text-gray-300 mb-3 leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          🎁 Kişisel Hediye Önerileri
        </h2>
        <p className="text-gray-300">
          <span className="font-medium text-blue-400">{requestData.recipient}</span> için AI destekli hediye önerileri
        </p>
      </div>

      {/* Request Summary */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-lg p-6 mb-8 border border-slate-700/50">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          📝 Özet Bilgiler
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">👤 İsim:</span>
            <span className="font-medium text-white">{requestData.recipient}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">🎂 Yaş:</span>
            <span className="font-medium text-white">{requestData.age}</span>
          </div>
          
          {requestData.gender && (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">⚧ Cinsiyet:</span>
              <span className="font-medium text-white">{requestData.gender}</span>
            </div>
          )}
          
          {requestData.budget && (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">💰 Bütçe:</span>
              <span className="font-medium text-white">{requestData.budget}</span>
            </div>
          )}
          
          {requestData.occasion && (
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">🎉 Durum:</span>
              <span className="font-medium text-white">{requestData.occasion}</span>
            </div>
          )}
          
          {requestData.interests && (
            <div className="flex items-center space-x-2 md:col-span-2 lg:col-span-3">
              <span className="text-gray-400">❤️ İlgi Alanları:</span>
              <span className="font-medium text-white">{requestData.interests}</span>
            </div>
          )}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-xl shadow-lg p-6 mb-8 border border-slate-700/50">
        <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
          🤖 AI Hediye Önerileri
        </h3>
        
        <div className="prose prose-gray max-w-none">
          {formatSuggestion(suggestion)}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onNewSearch}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-blue-500/25"
        >
          🔄 Yeni Arama Yap
        </button>
        
        <button
          onClick={() => window.print()}
          className="px-8 py-3 bg-slate-700/50 text-gray-300 font-semibold rounded-lg border-2 border-slate-600/50 hover:border-slate-500/50 hover:bg-slate-700/70 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl"
        >
          🖨️ Yazdır
        </button>
        
        <button
          onClick={() => {
            const text = `${requestData.recipient} için hediye önerileri:\n\n${suggestion}`;
            navigator.clipboard.writeText(text);
            alert('Öneriler panoya kopyalandı!');
          }}
          className="px-8 py-3 bg-slate-700/50 text-gray-300 font-semibold rounded-lg border-2 border-slate-600/50 hover:border-slate-500/50 hover:bg-slate-700/70 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl"
        >
          📋 Kopyala
        </button>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>✨ Bu öneriler yapay zeka tarafından oluşturulmuştur</p>
        <p>🛍️ Satın almadan önce fiyat ve stok durumunu kontrol etmeyi unutmayın</p>
      </div>
    </div>
  );
}