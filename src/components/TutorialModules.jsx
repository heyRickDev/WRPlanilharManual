import { useState } from 'react';
import { NewFeature } from './NewFeature';

const modules = [
  {
    title: 'Importação DWG/DXF',
    videos: [
      { title: 'Planilhamento por resumo detalhado', duration: '3min', videoId: 'Z632Cu6hI6U' },
    ],
    relevant: true
  },
  {
    title: 'Leitura OCR',
    videos: [
      { title: 'Demonstração de utilização do módulo', duration: '12min', videoId: 'ku3uHZk9uPs' },

    ],
    relevant: true
  },
  {
    title: 'Importação XLS',
    videos: [

    ],
  },
  {
    title: 'Digitação Otimizada',
    videos: [

    ],
  },
  {
    title: 'Importação Automatizada',
    videos: [
      { title: 'Leitura automática do resumo - OCR', duration: '2min', videoId: '4n8G4H55BRk' },
    ],
    relevant: true
  },
  {
    title: 'Minhas Conferências',
    videos: [

    ],
  },
  {
    title: 'Conferências Projetos',
    videos: [

    ],
  },
  {
    title: 'Análise Gerencial',
    videos: [

    ],
  },
];

export function TutorialModules() {
  const [openIndex, setOpenIndex] = useState(null);
  const [playing, setPlaying] = useState(null);

  const toggle = (i) => {
    setOpenIndex(i === openIndex ? null : i);
    setPlaying(null);
  };

  const playVideo = (moduleIdx, videoIdx) => {
    setPlaying(`${moduleIdx}-${videoIdx}`);
  };

  return (
    <section id="modulos" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 id='demonstracoes' className="text-3xl md:text-4xl font-bold mb-4">Demonstrações em Vídeo</h2>
          <p className="text-gray-400 text-lg">
            Acompanhe os tutoriais em vídeo de cada módulo do sistema.
          </p>
        </div>
        <div className="space-y-3">
          {modules.map((mod, i) => {
            const isOpen = i === openIndex;
            return (
              <div key={mod.title} className={`${mod.relevant ? 'animated-border hover:bg-amber-200/10' : '' } bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300`}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{mod.title}{mod.relevant ? <NewFeature/> : null}</h3>
                  </div>
                  <div className={`ml-4 w-8 h-8 flex items-center justify-center rounded-full border border-border transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 border-t border-border pt-4">
                    <div className="grid grid-cols-1 gap-4">
                      {mod.videos.map((video, vIdx) => {
                        const isPlaying = playing === `${i}-${vIdx}`;
                        return (
                          <div
                            key={video.videoId}
                            className="group bg-neutral-900/50 rounded-xl overflow-hidden border border-border hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            onClick={() => !isPlaying && playVideo(i, vIdx)}
                          >
                            <div className="aspect-video bg-neutral-800 flex items-center justify-center relative overflow-hidden">
                              {isPlaying ? (
                                <iframe
                                  src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                                  title={video.title}
                                  className="absolute inset-0 w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              ) : (
                                <>
                                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-400/10" />
                                  <div className="w-14 h-14 rounded-full bg-indigo-600/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
                                    <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z" />
                                    </svg>
                                  </div>
                                  <span className="absolute bottom-2 right-2 bg-black/70 text-xs text-gray-300 px-2 py-0.5 rounded font-medium">{video.duration}</span>
                                </>
                              )}
                            </div>
                            <div className="p-4">
                              <h4 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{video.title}</h4>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
