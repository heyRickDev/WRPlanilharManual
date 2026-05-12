import { useEffect, useRef, useState } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const tourSteps = [
  {
    id: 'spot-1',
    top: '11%', left: '2%', width: '42%', height: '9%',
    title: 'Dados do cliente',
    description: 'Insira aqui os dados referentes ao projeto que deseja importar.',
    side: 'right',
    align: 'start',
  },
  {
    id: 'spot-2',
    top: '10.5%', left: '46%', width: '14%', height: '11%',
    title: 'Tipo de Projeto',
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
    top: '12.2%', left: '62%', width: '10.5%', height: '2.8%',
    title: 'Selecionar Projeto',
    description: 'Clique para selecionar o arquivo PDF ou JPEG.',
    side: 'bottom',
    align: 'end',
  },
  {
    id: 'spot-4',
    top: '17.5%', left: '62%', width: '10.5%', height: '2.8%',
    title: 'Analisar projeto ',
    description: 'Após selecionar o arquivo, aguarde ele carregar em tela e clique aqui para processar.',
    side: 'bottom',
    align: 'end',
  },
  {
    id: 'spot-5',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Tela de seleção de área',
    description: 'Após análise e conversão da imagem, será exibida nessa tela para fazer a seleção do resumo.',
    side: 'left',
    align: 'end',
  },
  {
    id: 'spot-6',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Seleção de área',
    description: 'Amplie a imagem na parte do resumo. Note no canto superior esquerdo que é exibido o valor da escala.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-7',
    top: '12%', left: '1%', width: '6%', height: '1.5%',
    title: 'Escala de zoom',
    description: 'Importante se atentar para a escala. Caso tenha menos de 60% a leitura dos caracteres tende a ser menos assertiva, logo opte por enquadrar o resumo numa proporção de pelo menos 60%.',
    side: 'bottom',
    align: 'end',
  },{
    id: 'spot-8',
    top: '29%', left: '23%', width: '74%', height: '55.5%',
    title: 'Área enquadrada',
    description: 'Clique e arraste para formar a seleção. Poderá ser feito mais de um elemento por vez, caso seja possível enquadrar. Ao soltar ele irá planilhar na grid ao lado esquerdo.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-9',
    top: '16%', left: '1%', width: '18.5%', height: '25%',
    title: 'Grid com posições',
    description: 'Será armazenado aqui todas as posições selecionadas. Repita o processo selecionando outros elementos estruturais.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-10',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Detalhe a notar',
    description: 'Note que neste caso deveremos fazer em mais de uma parte a leitura desse mesmo elemento, pois não cabe no enquadramento.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-11',
    top: '12.5%', left: '9%', width: '11.5%', height: '1%',
    title: 'Último elemento selecionado',
    description: 'Note também que aqui fica gravado o valor do último elemento estrutural lido. Logo basta selecionar o restante que ele irá considerar as posições referente ao último elemento. Pode ser alterado manualmente o valor neste campo para aplicar para as próximas leituras.',
    side: 'bottom',
    align: 'center',
  },{
    id: 'spot-12',
    top: '33%', left: '37%', width: '60%', height: '54%',
    title: 'Enquadre o restante',
    description: 'Selecione o restante das posições para finalizar o elemento estrutural.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-13',
    top: '78%', left: '1%', width: '18.5%', height: '20%',
    title: 'Tabela de resumos',
    description: 'Conforme for adicionando posições a tabela de resumo será formada aqui. E poderá ser conferida com a tabela de resumos do projeto.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-14',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Alterações',
    description: 'Caso necessite alterar valores, na grid ao lado poderá ser feito correções de maneira individual.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-15',
    top: '16%', left: '1%', width: '18.5%', height: '58%',
    title: 'Alterações individuais',
    description: 'Basta clicar na célula desejada e alterar o valor. Ao sair da célula o valor será atualizado, bem como a tabela de resumos abaixo.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-16',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Funções de edições em lote',
    description: 'Existem outras funções de alterações que podem ser acessadas clicando com o botão direito sobre o elemento. Vejamos algumas delas...',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-17',
    top: '35.7%', left: '12.6%', width: '12%', height: '0.1%',
    title: 'Filtro',
    description: 'Clique aqui para abrir a janela de filtros caso deseje conferir alguma posição em específico, por exemplo, quando houver divergencia de valores por bitola na tabela de resumos.',
    side: 'right',
    align: 'center',
  },{
    id: 'spot-18',
    top: '20%', left: '1%', width: '18.5%', height: '45%',
    title: 'Filtro',
    description: 'Selecione os parâmetros e clique em seleção.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-19',
    top: '39.5%', left: '12.6%', width: '12%', height: '0.1%',
    title: 'Renomear elemento',
    description: 'Use esta opção caso queira alterar de uma vez só o nome do elemento estrutural.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-20',
    top: '43%', left: '40%', width: '18.5%', height: '18%',
    title: 'Renomear elemento',
    description: 'Insira o novo valor para o elemento.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-21',
    top: '21%', left: '1%', width: '18.5%', height: '33%',
    title: 'Renomear elemento',
    description: 'Alterado o valor para todas as posições daquele elemento.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-22',
    top: '42.5%', left: '12.6%', width: '12%', height: '0.1%',
    title: 'Inserção de posição',
    description: 'Clicando aqui você pode inserir uma nova posição manualmente.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-23',
    top: '42.5%', left: '1%', width: '18.5%', height: '3%',
    title: 'Inserção de posição',
    description: 'A inserção é feita acima da posição que foi clicada. Note que ele já preenche os valores de elemento e posição automáticamente. Preencha os demais valores e prossiga.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-24',
    top: '46%', left: '12.6%', width: '12%', height: '6%',
    title: 'Exclusões',
    description: 'Temos opções de deletar posições ou o elemento inteiro, ou ainda caso queira pode ser zerado a grid selecionando "Excluir Todos".',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-25',
    top: '55%', left: '12.6%', width: '12%', height: '4%',
    title: 'Multiplicações',
    description: 'Clique aqui para multiplicar todos por um valor ou apenas o elemento selecionado.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-26',
    top: '62.5%', left: '12.6%', width: '12%', height: '.3%',
    title: 'Tipo de aço',
    description: 'Aqui você altera o tipo de aço entre CA, XC e AR.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-27',
    top: '67%', left: '12.6%', width: '12%', height: '.3%',
    title: 'Exportação planilha excel',
    description: 'Caso deseje exportar esta grid para excel clique aqui e um arquivo com todos os dados será gerado.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-28',
    top: '0%', left: '0%', width: '100%', height: '100%',
    title: 'Funções',
    description: 'Estas são as funções para facilitar a alteração em lote pelo planilhador.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-29',
    top: '33.3%', left: '12.6%', width: '12%', height: '0.1%',
    title: 'Gerar planilhamento',
    description: 'Tendo feito as devidas correções, clique aqui para prosseguir.',
    side: 'left',
    align: 'end',
  },{
    id: 'spot-30',
    top: '10.5%', left: '1.5%', width: '60%', height: '2.5%',
    title: 'Salvar planilhamento',
    description: 'Preencha os campos e clique em gravar planilhamento.',
    side: 'left',
    align: 'end',
  }
];

export function LeituraOcr() {
    const tourRef = useRef(null);
    const [tourCurrentStep, setTourCurrentStep] = useState(null);
    const imgSources = {
        img1: './src/assets/leituraocr/leituraocr1.jpg',
        img2: './src/assets/leituraocr/leituraocr2.jpg',
        img3: './src/assets/leituraocr/leituraocr3.jpg',
        img4: './src/assets/leituraocr/leituraocr4.jpg',
        img5: './src/assets/leituraocr/leituraocr5.jpg',
        img6: './src/assets/leituraocr/leituraocr6.jpg',
        img7: './src/assets/leituraocr/leituraocr7.jpg',
        img18: './src/assets/leituraocr/leituraocr18.jpg',
        img19: './src/assets/leituraocr/leituraocr19.jpg',
        img20: './src/assets/leituraocr/leituraocr20.jpg',
        img21: './src/assets/leituraocr/leituraocr21.jpg',
        img22: './src/assets/leituraocr/leituraocr22.jpg',
        img23: './src/assets/leituraocr/leituraocr23.jpg',
    }
    let currentImg = imgSources.img1

    switch (tourCurrentStep) {
        case 'spot-5':
          currentImg = imgSources.img2
          break
        case 'spot-6':
        case 'spot-7':
        case 'spot-8':
          currentImg = imgSources.img3
          break
        case 'spot-9':
          currentImg = imgSources.img4
          break
        case 'spot-10':
        case 'spot-11':
          currentImg = imgSources.img5
          break
        case 'spot-12':
          currentImg = imgSources.img6
          break
        case 'spot-13':
        case 'spot-14':
        case 'spot-15':
          currentImg = imgSources.img7
          break
        case 'spot-16':
        case 'spot-17':
        case 'spot-19':
        case 'spot-22':
        case 'spot-24':
        case 'spot-25':
        case 'spot-26':
        case 'spot-27':
        case 'spot-28':
        case 'spot-29':
          currentImg = imgSources.img18
          break
        case 'spot-18':
          currentImg = imgSources.img19
          break
        case 'spot-20':
          currentImg = imgSources.img20
          break
        case 'spot-21':
          currentImg = imgSources.img21
          break
        case 'spot-23':
          currentImg = imgSources.img22
          break
        case 'spot-30':
          currentImg = imgSources.img23
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
