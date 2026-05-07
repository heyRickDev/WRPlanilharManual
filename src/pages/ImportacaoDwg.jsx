import { useEffect, useRef } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const tourSteps = [
  {
    id: 'spot-1',
    top: '9%', left: '2%', width: '42%', height: '9%',
    title: '1º passo',
    description: 'Insira aqui os dados referentes ao projeto que dejesa importar.',
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
];

export function ImportaçãoDwg() {
  const tourRef = useRef(null);

  useEffect(() => {
    const tour = driver({
      showProgress: true,
      animate: true,
      allowClose: true,
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
    <div className="relative inline-block">
      <img src="./src/assets/impdwg.jpg" alt="" />
      {tourSteps.map((s) => (
        <div
          key={s.id}
          id={s.id}
          className="absolute pointer-events-none"
          style={{ top: s.top, left: s.left, width: s.width, height: s.height }}
        />
      ))}
    </div>
  );
}
