export default function Logo() {
  return (
    <div className="relative group">
      {/* Main logo with modern gradient */}
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 cursor-default drop-shadow-2xl">
        GiftGenius
      </div>
      
      {/* Glowing background effect */}
      <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500">
        GiftGenius
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute -top-3 -right-3 text-2xl animate-pulse opacity-80">✨</div>
      <div className="absolute -bottom-2 -left-2 text-xl animate-bounce opacity-80">🎁</div>
    </div>
  );
}