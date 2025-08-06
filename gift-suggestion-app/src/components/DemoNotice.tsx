'use client';

export default function DemoNotice() {
  return (
    <div className="max-w-4xl mx-auto mb-6 p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg backdrop-blur-sm">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <span className="text-2xl">🚧</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-amber-300 mb-2">
            Demo Modu Aktif
          </h3>
          <p className="text-amber-100 text-sm mb-2">
            OpenAI API anahtarı bulunamadı. Demo modunda çalışıyorsunuz.
          </p>
          <div className="space-y-1 text-xs text-amber-200">
            <p>✅ Form çalışıyor ve validasyon aktif</p>
            <p>✅ Dummy hediye önerileri gösterilecek</p>
            <p>🤖 Gerçek AI önerileri için .env.local dosyasında OpenAI API anahtarını ekleyin</p>
            <p>📝 Format: OPENAI_API_KEY=sk-your-api-key-here</p>
          </div>
        </div>
      </div>
    </div>
  );
}