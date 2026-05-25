import { useState, useEffect } from 'react';
import { ImportaçãoDwg } from './pages/ImportacaoDwg';
import { ImportacaoXls } from './pages/ImportacaoXls';
import { DigitacaoOtimizada } from './pages/DigitacaoOtimizada';
import { LeituraOcr } from './pages/LeituraOcr';
import { ImportacaoAutomatizada } from './pages/ImportacaoAutomatizada';
import { MinhasConferencias } from './pages/MinhasConferencias';
import { ConferenciasProjetos } from './pages/ConferenciasProjetos';
import { AnaliseGerencial } from './pages/AnaliseGerencial';
import { TutorialModules } from './components/TutorialModules';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { NewFeature } from './components/NewFeature';
import { Modal, Modules } from './components/Modules';
import './globals.css'

export default function App() {
  const [selectedModule, setSelectedModule] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Modules onOpenDoc={setSelectedModule} />
        <TutorialModules />
        <Features />
      </main>
      {/* <Footer /> */}
      {selectedModule && <Modal module={selectedModule} onClose={() => setSelectedModule(null)} />}
    </>
  );
}
