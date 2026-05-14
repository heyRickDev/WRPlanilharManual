import { useState, useEffect } from 'react';
import { ImportaçãoDwg } from './pages/ImportacaoDwg';
import { ImportacaoXls } from './pages/ImportacaoXls';
import { DigitacaoOtimizada } from './pages/DigitacaoOtimizada';
import { LeituraOcr } from './pages/LeituraOcr';
import { ImportacaoAutomatizada } from './pages/ImportacaoAutomatizada';
import { MinhasConferencias } from './pages/MinhasConferencias';
import { ConferenciasProjetos } from './pages/ConferenciasProjetos';
import { AnaliseGerencial } from './pages/AnaliseGerencial';
import { TutorialModules } from './components/TutorialModules';

const modulePages = {
  'Importação DWG/DXF': ImportaçãoDwg,
  'Importação XLS': ImportacaoXls,
  'Digitação Otimizada': DigitacaoOtimizada,
  'Leitura OCR': LeituraOcr,
  'Importação Automatizada': ImportacaoAutomatizada,
  'Minhas Conferências': MinhasConferencias,
  'Conferências Projetos': ConferenciasProjetos,
  'Análise Gerencial': AnaliseGerencial,
};

const modules = [
  { title: 'Importação DWG/DXF', desc: 'Importe arquivos DWG ou DXF para fazer a leitura automática.' },
  { title: 'Importação XLS', desc: 'Importe arquivos XLS (Excel) para extrair os dados da planilha.' },
  { title: 'Digitação Otimizada', desc: 'Aqui voce insere manualmente as posições de seus projetos.' },
  { title: 'Leitura OCR', desc: 'Extraia os caracteres de arquivos PDF ou JPEG utilizando OCR.' },
  { title: 'Importação Automatizada', desc: 'Configure uma pasta que deseje para fazer a leitura automática.' },
  { title: 'Minhas Conferências', desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.' },
  { title: 'Conferências Projetos', desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.' },
  { title: 'Análise Gerencial', desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.' },
];

const features = [
  { num: '01', title: 'Lorem Ipsum Dolor', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.' },
  { num: '02', title: 'Consectetur Adipiscing', desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.' },
  { num: '03', title: 'Eiusmod Tempor', desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.' },
  { num: '04', title: 'Magna Aliqua', desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Módulos', 'Demonstrações', 'Atualizações'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-border shadow-lg' : ''}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">WRPlanilhar</a>
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{l}</a>
            </li>
          ))}
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Menu">
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>
      {open && (
        <ul className="md:hidden bg-bg border-b border-border px-6 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} onClick={() => setOpen(false)} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-indigo-400 to-cyan-400 bg-clip-text text-transparent">WRPlanilhar</h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8">Software de planilhamento eletrônico</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#updates" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20">Ver novidades</a>
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

function Modal({ module, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const ModulePage = modulePages[module.title];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-surface border border-border rounded-2xl w-full max-w-6xl p-8 shadow-2xl max-h-[90vh] overflow-y-hidden" onClick={(e) => e.stopPropagation()}>
        {ModulePage && <ModulePage />}
      </div>
    </div>
  );
}

function Modules({ onOpenDoc }) {
  return (
    <section id="modulos" className="py-24 px-6 bg-neutral-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Módulos do Sistema</h2>
          <p className="text-gray-400 text-lg">A ferramenta permite que o planilhador se utilize de alguns módulos para bem atender a sua necessidade. Abaixo voce confere com detalhe cada um deles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div onClick={() => onOpenDoc(m)} key={i} className="group bg-surface border border-border rounded-2xl p-6 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 relative overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-semibold mb-2">{m.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{m.desc}</p>
              <span className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors">Ver mais →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-bg">
      <h2 id='updates' className="text-3xl md:text-4xl font-bold mb-4 text-center">Atualizações</h2>
      {/* {features.map((f, i) => (
        <div key={i} className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="text-center max-w-xl">
            <span className="text-indigo-400 text-sm font-bold tracking-widest mb-4 block">{f.num}</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{f.title}</h3>
            <p className="text-gray-400 text-lg">{f.desc}</p>
          </div>
        </div>
      ))} */}
    </section>
  );
}

function Footer() {
  const cols = [
    { title: 'Produto', links: ['Módulos', 'Preços', 'Atualizações'] },
    { title: 'Recursos', links: ['Documentação', 'Manuais', 'API'] },
    { title: 'Suporte', links: ['Contato', 'FAQ', 'Comunidade'] },
  ];

  return (
    <footer className="bg-neutral-950/50 border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <span className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">WRPlanilhar</span>
          <p className="text-gray-500 text-sm mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="md:col-span-3 grid grid-cols-3 gap-8">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border text-center text-gray-500 text-sm">
        © 2026 WRPlanilhar. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Modules onOpenDoc={setSelectedModule} />
        <Features />
        <TutorialModules />
      </main>
      {/* <Footer /> */}
      {selectedModule && <Modal module={selectedModule} onClose={() => setSelectedModule(null)} />}
    </>
  );
}
