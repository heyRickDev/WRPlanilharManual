export function Footer() {
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
