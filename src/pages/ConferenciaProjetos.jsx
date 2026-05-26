import { useEffect, useRef, useState } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const tourSteps = [
  // {
  //   id: 'spot-0',
  //   top: '50%', left: '50%', width: '0%', height: '0%',
  //   title: 'Tour - Conferencia projetos',
  //   description: 'Use as direcionais ← e → para seguir.',
  //   side: 'over',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-1',
  //   top: '0%', left: '0%', width: '100%', height: '100%',
  //   title: 'Filtro de seleção',
  //   description: 'Comece filtrando a consulta pela obra a ser conferida.',
  //   side: 'over',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-2',
  //   top: '11%', left: '1%', width: '12%', height: '1%',
  //   title: 'Selecionar obra',
  //   description: 'Selecione a obra desejada',
  //   side: 'bottom',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-3',
  //   top: '11%', left: '15%', width: '11%', height: '1%',
  //   title: 'Selecionar data',
  //   description: 'Insira a data de prev. conferencia para filtrar. Campo obrigatório para prosseguir.',
  //   side: 'bottom',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-4',
  //   top: '11%', left: '28%', width: '42%', height: '1%',
  //   title: 'Demais parâmetros',
  //   description: 'Selecione cada um dos parametros para filtrar ou deixe em branco para consultar "todos".',
  //   side: 'bottom',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-5',
  //   top: '14.5%', left: '15%', width: '8%', height: '.1%',
  //   title: 'Calculo de conferencia',
  //   description: 'Desmarque essa caixa caso queira consultar um período muito grande, visto que ele desconsidera o cálculo de conferencia a ser exibido, sendo assim mais rápido o resultado.',
  //   side: 'right',
  //   align: 'start',
  // },
  // {
  //   id: 'spot-6',
  //   top: '10.5%', left: '72%', width: '14%', height: '2%',
  //   title: 'Consultar',
  //   description: 'Clique aqui para consultar projetos a conferir.',
  //   side: 'bottom',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-7',
  //   top: '0%', left: '0%', width: '100%', height: '100%',
  //   title: 'Resultado',
  //   description: 'Clicando sobre o projeto com o botão direito temos algumas opções. Vejamos!',
  //   side: 'over',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-8',
  //   top: '35%', left: '32%', width: '10%', height: '.2%',
  //   title: 'Alterar Obra',
  //   description: 'Clicando aqui podemos alterar a obra do projeto selecionado',
  //   side: 'bottom',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-9',
  //   top: '26%', left: '33.5%', width: '27%', height: '35%',
  //   title: 'Alterar Obra',
  //   description: 'Preencha os campos desejados e clique em salvar',
  //   side: 'bottom',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-10',
  //   top: '38.5%', left: '32%', width: '10%', height: '.2%',
  //   title: 'Duplicar Obra',
  //   description: 'Não é possível fazer alteração em um projetos que está com outro conferencia. O que se pode fazer é duplicar o mesmo projeto clicando nessa opção.',
  //   side: 'bottom',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-11',
  //   top: '26%', left: '33.5%', width: '27%', height: '35%',
  //   title: 'Duplicar Obra',
  //   description: 'Novamente a tela abrirá e voce seleciona agora o novo conferencista que irá duplicar o projeto.',
  //   side: 'bottom',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-12',
  //   top: '42%', left: '32%', width: '10%', height: '.2%',
  //   title: 'Exclusão de projeto',
  //   description: 'Clicando aqui voce deleta o projeto da base de dados do WR.',
  //   side: 'bottom',
  //   align: 'center',
  // },
  // {
  //   id: 'spot-13',
  //   top: '28%', left: '32%', width: '8%', height: '.5%',
  //   title: 'Conferencia otimizado',
  //   description: 'Clicando aqui você será redirecionado para a tela da digitação otimizada onde poderá fazer a conferencia por lá.',
  //   side: 'bottom',
  //   align: 'center',
  // },
  {
    id: 'spot-14',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Conferencia otimizado',
    description: 'Perceba que ficou importado ali na grid abaixo para conferencia.',
    side: 'over',
    align: 'center',
  },
  {
    id: 'spot-15',
    top: '25.5%', left: '32%', width: '8%', height: '.1%',
    title: 'Conferencia de projetos',
    description: 'Clicando aqui temos efetivamente a tela de conferencia onde o planilhador irá passando peça por peça. Vejamos',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-16',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Conferencia de projetos',
    description: 'Vejamos algumas opções da tela de conferencia.',
    side: 'over',
    align: 'center',
  },
  {
    id: 'spot-17',
    top: '20%', left: '1%', width: '1.6%', height: '.1%',
    title: 'Filtros',
    description: 'Clique aqui e filtre com os parametros a sua escolha.',
    side: 'right',
    align: 'center',
  },
  {
    id: 'spot-18',
    top: '20%', left: '5%', width: '9%', height: '.1%',
    title: 'Parâmetros de conferência',
    description: 'Clique aqui caso deseje alterar o conferencista para este projeto.',
    side: 'right',
    align: 'center',
  },
  {
    id: 'spot-19',
    top: '20%', left: '16%', width: '6%', height: '.1%',
    title: 'Visualizar projeto',
    description: 'Veja o projeto importado sendo ele na forma original ou o conferido (Conferido refere-se a cópia do projeto que é criado ao importar sendo armazenado as edições feitas dentro da ferramenta, bem como os traços de conferido que ele marca no projeto.).',
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-20',
    top: '20%', left: '24%', width: '6%', height: '.1%',
    title: 'Conferir resumo',
    description: `Aqui voce será direcionado a conferencia de resumos onde irá fazer um tipo de conferencia onde visa marcar o resumo <b>(Função ainda precisa de ajustes)</b>.`,
    side: 'bottom',
    align: 'center',
  },
  {
    id: 'spot-21',
    top: '20%', left: '32.5%', width: '11%', height: '.1%',
    title: 'Planilhado X Resumo',
    description: `Aqui você terá acesso a tela de comparativo do que foi planilhado do projeto e do resumo. <br />
                  <b>(Função ainda precisa de ajustes)</b>.`,
    side: 'bottom',
    align: 'center',
  }
];

export function ConferenciaProjetos() {
    const tourRef = useRef(null);
    const [tourCurrentStep, setTourCurrentStep] = useState(null);
const imgSources = {
        img1: '/assets/conferenciaprojetos/confproj1.webp',
        img2: '/assets/conferenciaprojetos/confproj2.webp',
        img3: '/assets/conferenciaprojetos/confproj3.webp',
        img4: '/assets/conferenciaprojetos/confproj4.webp',
        img5: '/assets/conferenciaprojetos/confproj5.webp',
        img6: '/assets/conferenciaprojetos/confproj6.webp',
        img7: '/assets/conferenciaprojetos/confproj7.webp',
    }
    let currentImg = imgSources.img1

    switch (tourCurrentStep) {
        case 'spot-6':
            currentImg = imgSources.img2
            break
        case 'spot-7':
        case 'spot-8':
        case 'spot-10':
        case 'spot-12':
        case 'spot-13':
        case 'spot-15':
            currentImg = imgSources.img3
            break
        case 'spot-9':
        case 'spot-11':
            currentImg = imgSources.img4
            break
        case 'spot-14':
            currentImg = imgSources.img5
            break
        case 'spot-16':
        case 'spot-17':
        case 'spot-18':
        case 'spot-19':
        case 'spot-20':
        case 'spot-21':
            currentImg = imgSources.img6
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

