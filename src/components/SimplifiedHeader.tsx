export default function SimplifiedHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-purple-500/20 h-20">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Webfrens"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-semibold text-white">Webfrens</span>
          </div>
        </div>
      </div>
    </div>
  );
} 