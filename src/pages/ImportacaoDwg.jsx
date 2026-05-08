import { useEffect, useRef, useState } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const tourSteps = [
  {
    id: 'spot-1',
    top: '9%', left: '2%', width: '42%', height: '9%',
    title: '1º passo',
    description: 'Insira aqui os dados referentes ao projeto que deseja importar.',
    side: 'right',
    align: 'start',
  },
  {
    id: 'spot-2',
    top: '8%', left: '46%', width: '14%', height: '11%',
    title: '2º passo',
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
    top: '9.4%', left: '62%', width: '10.5%', height: '2.8%',
    title: '3º passo',
    description: 'Clique para selecionar o arquivo DWG ou DXF.',
    side: 'left',
    align: 'end',
  },
  {
    id: 'spot-4',
    top: '15%', left: '62%', width: '10.5%', height: '2.8%',
    title: '4º passo',
    description: 'Após selecionar o arquivo, aguarde ele carregar em tela e clique aqui para processar.',
    side: 'left',
    align: 'end',
  },
  {
    id: 'spot-5',
    top: '10.5%', left: '1.5%', width: '13%', height: '2.5%',
    title: '5º passo',
    description: 'Aqui você pode inserir alguma observação para especificar melhor o projeto.',
    side: 'left',
    align: 'end',
  },
  {
    id: 'spot-6',
    top: '10.5%', left: '16%', width: '13.5%', height: '2.5%',
    title: '6º passo',
    description: 'Preencha as datas de previsão de entrega e de conferencia.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-7',
    top: '10.5%', left: '31%', width: '10%', height: '2.5%',
    title: '7º passo',
    description: 'Escolha o conferencista.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-8',
    top: '10.5%', left: '43%', width: '6%', height: '2.5%',
    title: '8º passo',
    description: 'A cor de conferencia caso deseje alterar. O padrão é em vermelho.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-9',
    top: '10.5%', left: '51%', width: '10%', height: '2.5%',
    title: '9º passo',
    description: 'Clique em gravar planilhamento para prosseguir para a tela de conferencia. Será salvo no banco de dados e poderá ser acessado a qualquer momento.',
    side: 'left',
    align: 'end',
  }
];

export function ImportaçãoDwg() {
    const tourRef = useRef(null);
    const [tourCurrentStep, setTourCurrentStep] = useState(null);
    const imgSources = {
        img1: './src/assets/importacaodwg/impdwg.jpg',
        img2: './src/assets/importacaodwg/impdwg2.jpg'
    }
    let currentImg = imgSources.img1

    switch (tourCurrentStep) {
        case 'spot-5':
        case 'spot-6':
        case 'spot-7':
        case 'spot-8':
        case 'spot-9':
        case 'spot-10':
            currentImg = imgSources.img2
            break
        default: 
            currentImg
    }

    console.log(tourCurrentStep)

  useEffect(() => {
    const tour = driver({
      showProgress: false,
      animate: true,
      allowClose: true,
      onHighlightStarted: (element) => {
        setTourCurrentStep(element?.id || null);
      },
    //   onDestroyStarted: () => {
    //     setTourCurrentStep(null);
    //   },
      steps: tourSteps.map((s) => ({
        element: `#${s.id}`,
        popover: {
          title: s.title,
          description: s.description,
          side: s.side,
          align: s.align,
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
