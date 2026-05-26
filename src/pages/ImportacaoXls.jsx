import { useEffect, useRef, useState } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const tourSteps = [
  {
    id: 'spot-0',
    top: '50%', left: '50%', width: '0%', height: '0%',
    title: 'Tour - Importação xls',
    description: 'Use as direcionais ← e → para seguir.',
    side: 'over',
    align: 'center',
  },
  {
    id: 'spot-1',
    top: '11.5%', left: '2%', width: '42%', height: '9%',
    title: 'Dados cliente',
    description: 'Insira aqui os dados referentes ao projeto que deseja importar.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-2',
    top: '11%', left: '46%', width: '10%', height: '11%',
    title: 'Tipo de projeto',
    description: `
                    Selecione aqui o tipo de projeto que deseja importar. 
                    Importante selecionar o tipo corretamente para que a 
                    leitura consiga encontrar os elementos estruturais no projeto.
                    Para projetos específicos, como cintas, é preciso marcar o campo geral
                    e inserir a letra C.
                `,
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-3',
    top: '11%', left: '63%', width: '11%', height: '4%',
    title: 'Selecione projeto',
    description: 'Clique aqui para selecionar um projeto.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-4',
    top: '26.5%', left: '3%', width: '10%', height: '70%',
    title: 'Layout',
    description: 'O projeto a ser importado precisa respeitar este padrão para fazer a leitura.',
    side: 'left',
    align: 'center',
  },
  {
    id: 'spot-5',
    top: '25%', left: '14%', width: '15%', height: '10%',
    title: 'Exportar modelo',
    description: 'Clicando na grid com o botão direito, voce poderá fazer download de uma cópia do modelo a ser seguido.',
    side: 'right',
    align: 'start',
  },
  {
    id: 'spot-6',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Exemplo excel',
    description: 'Aqui um exemplo de como ficaria o lançamento das posições no excel.',
    side: 'over',
    align: 'center',
  },
  {
    id: 'spot-7',
    top: '30%', left: '16%', width: '82%', height: '36%',
    title: 'Importação projeto',
    description: 'Ao importar ele irá transcrever os dados para a grid.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-8',
    top: '19%', left: '71%', width: '12%', height: '4%',
    title: 'Gerar planilhamento',
    description: 'Clique para gerar e seguir.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-9',
    top: '56%', left: '0%', width: '100%', height: '36%',
    title: 'Grid de Lançamentos',
    description: 'As posições vão sendo armazenadas na grid abaixo. Repita o processo anterior para o mesmo elemento.',
    side: 'right',
    align: 'center',
  },{
    id: 'spot-10',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Grid de Lançamentos',
    description: 'Clicando com o botão direito temos algumas funções de ações com a grid. Vejamos..',
    side: 'over',
    align: 'center',
  },
];

export function ImportacaoXls() {
    const tourRef = useRef(null);
    const [tourCurrentStep, setTourCurrentStep] = useState(null);
const imgSources = {
        img1: '/assets/importacaoxls/importxls1.webp',
        img2: '/assets/importacaoxls/importxls2.webp',
        img3: '/assets/importacaoxls/importxls3.webp',
        img4: '/assets/importacaoxls/importxls4.webp'
    }
    let currentImg = imgSources.img1

    switch (tourCurrentStep) {
        case 'spot-4':
        case 'spot-5':
            currentImg = imgSources.img2
            break
        case 'spot-6':
            currentImg = imgSources.img3
            break
        case 'spot-7':
        case 'spot-8':
        case 'spot-9':
            currentImg = imgSources.img4
            break
        default: 
            currentImg
    }

  useEffect(() => {
    const tour = driver({
      showProgress: false,
      animate: true,
      allowClose: true,
      onHighlightStarted: (element) => {
        setTourCurrentStep(element?.id || null);
      },
      steps: tourSteps.map((s) => ({
        element: `#${s.id}`,
        popover: {
          title: s.title,
          description: s.description,
          side: s.side,
          align: s.align,
          nextBtnText: '>',
          prevBtnText: '<',
        },
      })),
    });
    
    tourRef.current = tour;
    tour.drive();
  }, []);


  return (
    <div className="space-y-4">
      <div className="relative inline-block">
        <img src={currentImg} alt="" />
        {tourSteps.map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="absolute pointer-events-none"
            style={{ top: s.top, left: s.left, width: s.width, height: s.height }}
          />
        ))}
      </div>
    </div>
  );
}

