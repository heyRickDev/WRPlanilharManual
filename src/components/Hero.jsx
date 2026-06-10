export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-indigo-400 to-cyan-400 bg-clip-text text-transparent">WRPlanilhar</h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">Software de planilhamento eletrônico</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#atualizacoes" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20">Ver novidades</a>
          <a href="#modulos" className="px-6 py-3 bg-surface hover:bg-surface/80 rounded-xl font-semibold border border-border transition-all hover:-translate-y-0.5">Explorar Módulos</a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce">
        <span>Role para explorar</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}