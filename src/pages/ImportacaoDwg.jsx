import { useEffect, useRef, useState } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const tourSteps = [
  {
    id: 'spot-1',
    top: '11.5%', left: '2%', width: '42%', height: '9%',
    title: '1º passo',
    description: 'Insira aqui os dados referentes ao projeto que deseja importar.',
    side: 'bottom',
    align: 'start',
  },
  {
    id: 'spot-2',
    top: '11%', left: '46%', width: '14%', height: '11%',
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
    top: '12%', left: '62%', width: '10.5%', height: '2.5%',
    title: '3º passo',
    description: 'Clique para selecionar o arquivo DWG ou DXF.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-4',
    top: '27%', left: '0%', width: '100%', height: '80%',
    title: '4º passo',
    description: `Após breve tempo, o projeto irá abrir abaixo.
                    A partir daqui temos algumas opções para seguirmos:
                    Planilhamento do projeto por inteiro ou planilhamento de alguns elementos do projeto.`,
    side: 'left',
    align: 'end',
  },
  {
    id: 'spot-5',
    top: '23.5%', left: '1%', width: '10%', height: '.5%',
    title: 'Separar elemento',
    description: 'Por padrão na leitura será unificado os elementos que forem semelhantes, por exemplo, v3=v6. Habilite esta opção para tratá-los como elementos separados.',
    side: 'left',
    align: 'end',
  },
  {
    id: 'spot-6',
    top: '23.5%', left: '12%', width: '3%', height: '.5%',
    title: 'Layer',
    description: 'Podemos desabilitar alguns layers para facilitar a visualização e a leitura do projeto.',
    side: 'left',
    align: 'end',
  },
  {
    id: 'spot-7',
    top: '28%', left: '41%', width: '18%', height: '45%',
    title: 'Layer',
    description: 'Desabilite/habilite o layer clicando no ícone da lampada.',
    side: 'left',
    align: 'end',
  },
  {
    id: 'spot-8',
    top: '23.5%', left: '16.5%', width: '2%', height: '.5%',
    title: 'Email',
    description: 'Clicando aqui pode ser enviado um email com o projeto em anexo para análise e correção de leitura.',
    side: 'left',
    align: 'end',
  },
  {
    id: 'spot-9',
    top: '23.5%', left: '31.5%', width: '37%', height: '59%',
    title: 'Email',
    description: 'O projeto já vai anexado, basta preencher os campos.',
    side: 'right',
    align: 'start',
  },{
    id: 'spot-10',
    top: '36.5%', left: '32%', width: '17%', height: '.5%',
    title: 'Email',
    description: 'Preencha o campo CC com seu email para retorno.',
    side: 'left',
    align: 'center',
  },{
    id: 'spot-11',
    top: '49%', left: '32.5%', width: '35%', height: '32%',
    title: 'Email',
    description: 'Descreva aqui o problema encontrado, quanto mais detalhado for melhor para a equipe analisar o problema.',
    side: 'left',
    align: 'start',
  },
  {
    id: 'spot-12',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Gerar planilhamento',
    description: 'A partir daqui você pode clicar em gerar planilhamento, contudo, recomendamos que seja feito uma limpeza em partes do projeto que não são importantes para a extração dos dados, exemplo o carimbo.',
    side: 'over',
    align: 'end',
  },
  {
    id: 'spot-13',
    top: '60%', left: '68%', width: '18%', height: '14%',
    title: 'Gerar planilhamento',
    description: 'Vamos dar um zoom no carimbo..',
    side: 'left',
    align: 'center',
  },
  {
    id: 'spot-14',
    top: '27%', left: '0%', width: '100%', height: '80%',
    title: 'Carimbo',
    description: 'Note que o carimbo é formado por várias linhas, que podem onerar a leitura causando lentidão. Vamos removê-lo!',
    side: 'top',
    align: 'center',
  },
  {
    id: 'spot-15',
    top: '23.5%', left: '28%', width: '7%', height: '.5%',
    title: 'Detalhar trecho',
    description: 'Para isso, clique aqui e uma tela de edição irá abrir.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-16',
    top: '25%', left: '57%', width: '15%', height: '40%',
    title: 'Detalhar trecho',
    description: 'Enquadre o carimbo.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-17',
    top: '14.3%', left: '19.5%', width: '1%', height: '2%',
    title: 'Detalhar trecho',
    description: 'Clique aqui ou o botão delete.',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-18',
    top: '14.3%', left: '8.3%', width: '1%', height: '2%',
    title: 'Detalhar trecho',
    description: 'Clique aqui para salvar a edição e voltar para a tela principal.',
    side: 'bottom',
    align: 'center',
  },

//   {
//     id: 'spot-6',
//     top: '10.5%', left: '16%', width: '13.5%', height: '2.5%',
//     title: '6º passo',
//     description: 'Preencha as datas de previsão de entrega e de conferencia.',
//     side: 'left',
//     align: 'end',
//   },{
//     id: 'spot-7',
//     top: '10.5%', left: '31%', width: '10%', height: '2.5%',
//     title: '7º passo',
//     description: 'Escolha o conferencista.',
//     side: 'left',
//     align: 'end',
//   },{
//     id: 'spot-8',
//     top: '10.5%', left: '43%', width: '6%', height: '2.5%',
//     title: '8º passo',
//     description: 'A cor de conferencia caso deseje alterar. O padrão é em vermelho.',
//     side: 'left',
//     align: 'end',
//   },{
//     id: 'spot-9',
//     top: '10.5%', left: '51%', width: '10%', height: '2.5%',
//     title: '9º passo',
//     description: 'Clique em gravar planilhamento para prosseguir para a tela de conferencia. Será salvo no banco de dados e poderá ser acessado a qualquer momento.',
//     side: 'left',
//     align: 'end',
//   }
];

export function ImportaçãoDwg() {
    const tourRef = useRef(null);
    const [tourCurrentStep, setTourCurrentStep] = useState(null);
const imgSources = {
        img1: '/assets/importacaodwg/impdwg.jpg',
        img2: '/assets/importacaodwg/impdwg2.jpg',
        img3: '/assets/importacaodwg/impdwg3.jpg',
        img4: '/assets/importacaodwg/impdwg4.jpg',
        img5: '/assets/importacaodwg/impdwg5.jpg',
        img6: '/assets/importacaodwg/impdwg6.jpg',
        img7: '/assets/importacaodwg/impdwg7.jpg',
        img8: '/assets/importacaodwg/impdwg8.jpg',
        img9: '/assets/importacaodwg/impdwg9.jpg',
        img10: '/assets/importacaodwg/impdwg10.jpg',
        img11: '/assets/importacaodwg/impdwg11.jpg',
        img12: '/assets/importacaodwg/impdwg12.jpg',
    }
    let currentImg = imgSources.img1

    switch (tourCurrentStep) {
        case 'spot-4':
        case 'spot-5':
        case 'spot-6':
        case 'spot-8':
        case 'spot-12':
        case 'spot-13':
            currentImg = imgSources.img2
            break
        case 'spot-7':
            currentImg = imgSources.img5
            break  
        case 'spot-9':
        case 'spot-10':
        case 'spot-11':
            currentImg = imgSources.img6
            break
        case 'spot-14':
        case 'spot-15':
            currentImg = imgSources.img7
            break
        case 'spot-16':
        case 'spot-17':
        case 'spot-18':
        case 'spot-19':
        case 'spot-20':
            currentImg = imgSources.img8
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
