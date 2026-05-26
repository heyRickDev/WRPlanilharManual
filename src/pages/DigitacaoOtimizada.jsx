import { useEffect, useRef, useState } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const tourSteps = [
  {
    id: 'spot-0',
    top: '50%', left: '50%', width: '0%', height: '0%',
    title: 'Tour - Digitação Otimizada',
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
    top: '11%', left: '46%', width: '14%', height: '11%',
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
    top: '12%', left: '62%', width: '15%', height: '7%',
    title: 'Gerar planilhamento',
    description: 'Clique aqui para iniciar o planilhamento manual.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-4',
    top: '25%', left: '0%', width: '100%', height: '80%',
    title: 'Digitação Manual',
    description: `Aqui voce tem o acesso a livre inserção dos valores de maneira manual.`,
    side: 'left',
    align: 'center',
  },
  {
    id: 'spot-5',
    top: '32%', left: '14%', width: '3%', height: '3%',
    title: 'Inserir elemento',
    description: 'Clique em inserir ou F2 para habilitar a caixa de inserção  .',
    side: 'right',
    align: 'start',
  },
  {
    id: 'spot-6',
    top: '39%', left: '14%', width: '21%', height: '3%',
    title: 'Elemento e multiplicador',
    description: 'Insira o nome do elemento estrutural e caso queira adicionar um multiplicador para este elemento.',
    side: 'right',
    align: 'start',
  },
  {
    id: 'spot-7',
    top: '45%', left: '14%', width: '21%', height: '3%',
    title: 'Observação geral',
    description: 'Aqui voce pode adicionar uma observação para o elemento. Será aplicado para cada posição adicionada desse elemento.',
    side: 'right',
    align: 'start',
  },
  {
    id: 'spot-8',
    top: '33%', left: '40%', width: '30%', height: '20%',
    title: 'Inserção de posições',
    description: 'Agora é só ir preenchendo os valores de cada posição.',
    side: 'left',
    align: 'end',
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
  },{
    id: 'spot-11',
    top: '60.5%', left: '22%', width: '9%', height: '.1%',
    title: 'Agrupar',
    description: 'Aqui podemos agrupar os elementos/posições que forem iguais, incrementando na quantidade.',
    side: 'right',
    align: 'center',
  },
  {
    id: 'spot-12',
    top: '63.5%', left: '22%', width: '9%', height: '.1%',
    title: 'Detalhar variável',
    description: 'Para peças que são variáveis podemos clicar aqui e uma tela irá abrir onde iremos gerar as variáveis.',
    side: 'right',
    align: 'center',
  },
  {
    id: 'spot-13',
    top: '30%', left: '16%', width: '69%', height: '10%',
    title: 'Variáveis',
    description: 'Insira os valores "Inicial" e "Final" para cada parcial e clique em gerar variáveis',
    side: 'bottom',
    align: 'end',
  },
  {
    id: 'spot-14',
    top: '40%', left: '32%', width: '25%', height: '50%',
    title: 'Variáveis',
    description: 'Os valores serão carregados abaixo. Basta fechar a tela e prosseguir',
    side: 'top',
    align: 'center',
  },
  {
    id: 'spot-15',
    top: '66.5%', left: '22%', width: '9%', height: '.1%',
    title: 'Divisões de variáveis',
    description: 'Caso queira dividir uma variável criada clique aqui. Você poderá dividir por quantidade ou comprimento.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-16',
    top: '69.5%', left: '22%', width: '9%', height: '2%',
    title: 'Editar elemento/posição',
    description: 'Ações para a aplicar a posição selecionada.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-17',
    top: '74.5%', left: '22%', width: '9%', height: '.2%',
    title: 'Multiplicação',
    description: 'Aqui você poderá multiplicar todos os elementos já lançados na grid por um valor inserido.',
    side: 'top',
    align: 'center',
  },
  {
    id: 'spot-18',
    top: '77%', left: '22%', width: '9%', height: '.2%',
    title: 'Alterar tipo de Aço',
    description: 'Clique aqui aplicar outro tipo de aço a todos os elementos.',
    side: 'right',
    align: 'end',
  },
  {
    id: 'spot-19',
    top: '80%', left: '22%', width: '9%', height: '.2%',
    title: 'Ordenar elemento/posição',
    description: 'Clicando aqui os elementos serão reordenados por "elemento estrutural" e depois por "posição" em modo crescente.',
    side: 'right',
    align: 'end',
  },
  {
    id: 'spot-20',
    top: '83%', left: '22%', width: '9%', height: '.2%',
    title: 'Alterar Observação',
    description: 'Aqui voce aplica outra observação para a posição selecionada.',
    side: 'right',
    align: 'end',
  },
  {
    id: 'spot-21',
    top: '86.5%', left: '22%', width: '9%', height: '.2%',
    title: 'Exportar excel',
    description: 'Clicando aqui voce pode exportar os valores lançados para um arquivo em excel que será gerado.',
    side: 'right',
    align: 'end',
  },
  {
    id: 'spot-22',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Resumo planilhamento',
    description: 'Tendo feito todos os lançamentos e ajustes..',
    side: 'right',
    align: 'end',
  },
  {
    id: 'spot-23',
    top: '25%', left: '65%', width: '12%', height: '.1%',
    title: 'Resumo planilhamento',
    description: 'Clique aqui para prosseguir',
    side: 'right',
    align: 'end',
  },
];

export function DigitacaoOtimizada() {
    const tourRef = useRef(null);
    const [tourCurrentStep, setTourCurrentStep] = useState(null);
const imgSources = {
        img1: '/assets/digitacaootimizada/digitotim1.webp',
        img2: '/assets/digitacaootimizada/digitotim2.webp',
        img3: '/assets/digitacaootimizada/digitotim3.webp',
        img4: '/assets/digitacaootimizada/digitotim4.webp',
        img5: '/assets/digitacaootimizada/digitotim5.webp',
        img6: '/assets/digitacaootimizada/digitotim6.webp',
    }
    let currentImg = imgSources.img1

    switch (tourCurrentStep) {
        case 'spot-4':
        case 'spot-5':
            currentImg = imgSources.img2
            break
        case 'spot-6':
        case 'spot-7':
        case 'spot-8':
        case 'spot-9':
            currentImg = imgSources.img3
            break
        case 'spot-10':
        case 'spot-11':
        case 'spot-12':
        case 'spot-15':
        case 'spot-16':
        case 'spot-17':
        case 'spot-18':
        case 'spot-19':
        case 'spot-20':
        case 'spot-21':
            currentImg = imgSources.img4
            break
        case 'spot-13':
        case 'spot-14':
            currentImg = imgSources.img5
            break
        case 'spot-22':
        case 'spot-23':
            currentImg = imgSources.img6
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

