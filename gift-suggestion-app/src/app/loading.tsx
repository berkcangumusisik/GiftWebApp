export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin text-6xl mb-4">🎁</div>
        <h2 className="text-2xl font-bold text-white mb-2">GiftGenius Yükleniyor</h2>
        <p className="text-gray-300">AI destekli hediye önerileri hazırlanıyor...</p>
      </div>
    </div>
  );
}
