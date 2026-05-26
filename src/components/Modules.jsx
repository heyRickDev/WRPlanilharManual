import { useEffect } from "react";
import { ImportaçãoDwg } from '../pages/ImportacaoDwg';
import { ImportacaoXls } from '../pages/ImportacaoXls';
import { DigitacaoOtimizada } from '../pages/DigitacaoOtimizada';
import { LeituraOcr } from '../pages/LeituraOcr';
import { ImportacaoAutomatizada } from '../pages/ImportacaoAutomatizada';
import { MinhasConferencias } from '../pages/MinhasConferencias';
import { ConferenciasProjetos } from '../pages/ConferenciasProjetos';
import { AnaliseGerencial } from '../pages/AnaliseGerencial';
import { TutorialModules } from '../components/TutorialModules';
import { NewFeature } from "./NewFeature";

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
  { title: 'Leitura OCR', desc: 'Extraia os caracteres de arquivos PDF ou JPEG utilizando detector de caracteres (OCR).', relevant: true },
  { title: 'Importação XLS', desc: 'Importe arquivos XLS (Excel) para extrair os dados da planilha.' },
  { title: 'Digitação Otimizada', desc: 'Aqui voce insere manualmente as posições de seus projetos.' },
  { title: 'Importação Automatizada', desc: 'Configure uma pasta que deseje para fazer a leitura automática.' },
  { title: 'Minhas Conferências', desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.' },
  { title: 'Conferências Projetos', desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.' },
  { title: 'Análise Gerencial', desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.' },
];

export function Modal({ module, onClose }) {
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

export function Modules({ onOpenDoc }) {

  return (
    <section id="modulos" className="py-24 px-6 bg-neutral-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Módulos do Sistema</h2>
          <p className="text-gray-400 text-lg">A ferramenta permite que o planilhador se utilize de alguns módulos para bem atender a sua necessidade. Abaixo voce confere com detalhe cada um deles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, i) => (
            <div onClick={() => onOpenDoc(m)} key={i} className={`group bg-surface border-2 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-md relative overflow-hidden cursor-pointer ${m.relevant ? 'animated-border hover:shadow-amber-500' : 'border-border hover:border-indigo-500/50 hover:shadow-indigo-400'}`}>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${m.relevant ? 'from-amber-400 to-amber-100' : 'from-indigo-500 to-cyan-400'} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <h3 className="text-lg font-semibold mb-2">{m.title}{m.relevant ? <NewFeature/> : null}</h3>
              <p className="text-gray-400 text-sm mb-4">{m.desc}</p>
              <span className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors">Ver mais →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}