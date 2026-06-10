export function Features() {
    const features = [
      { number: 'Versão - W2026061001', improvements: [
        'Digitação Otimizada: Correção de erro na aplicação das fórmulas.', 
        'Leitor OCR: Removido leitura automática do módulo e mantido apenas no módulo Digitação Automatizada',
        'Importação automatizada: Corrigido erro ao encontrar caminho da pasta.'
      ] },
      { number: 'Versão - W2026060803', improvements: [
        'Leitor OCR: Comportamento de leitura no modo automático alterado. Agora é feito a deleção dos arquivos gerados (jpeg e txt) do resumo.',
        'Inserido botão de email para envio de arquivos PDF.',
        'Importação automatizada: Alteração de nomenclatura PDF > OCR.',
      ] },
    ];
  return (
    <section className="bg-bg">
      <h2 id='atualizacoes' className="text-3xl md:text-4xl font-bold mb-4 text-center">Atualizações</h2>
      {features.map((version, index) => (
        <div key={index} className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="text-center max-w-xl">
            <span className="text-indigo-400 text-sm font-bold tracking-widest mb-4 block">{version.number}</span>
            <ul className="text-gray-400 text-xl list-disc">
              {version.improvements.map((improvement, i) => <li className="text-left" key={i}>{improvement}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}