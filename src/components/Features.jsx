export function Features() {
    const features = [
      { num: '01', title: 'Lorem Ipsum Dolor', desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.' },
      { num: '02', title: 'Consectetur Adipiscing', desc: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.' },
      { num: '03', title: 'Eiusmod Tempor', desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.' },
      { num: '04', title: 'Magna Aliqua', desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.' },
    ];
  return (
    <section className="bg-bg">
      <h2 id='updates' className="text-3xl md:text-4xl font-bold mb-4 text-center">Atualizações</h2>
      {features.map((f, i) => (
        <div key={i} className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="text-center max-w-xl">
            <span className="text-indigo-400 text-sm font-bold tracking-widest mb-4 block">{f.num}</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{f.title}</h3>
            <p className="text-gray-400 text-lg">{f.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}