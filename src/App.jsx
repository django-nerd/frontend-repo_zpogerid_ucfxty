import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TestimonialsFAQ from './components/TestimonialsFAQ';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <Hero />
        <section id="chi-sono" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-blue-900">Chi Sono</h2>
              <p className="mt-4 text-slate-600">Sono un consulente finanziario con esperienza pluriennale nel settore bancario. Accompagno famiglie, professionisti e imprese nelle scelte più importanti: dall’acquisto della casa alla crescita aziendale. Lavoro con un approccio umano, ascolto attivo e massima trasparenza per individuare la soluzione più adatta ai tuoi obiettivi.</p>
              <ul className="mt-4 list-disc list-inside text-slate-600 space-y-1">
                <li>Certificazioni e aggiornamento continuo</li>
                <li>Rete di partner bancari e finanziari selezionati</li>
                <li>Consulenze su appuntamento in presenza o da remoto</li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1600&auto=format&fit=crop"
                alt="Consulente finanziario in ufficio"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <Services />
        <TestimonialsFAQ />
        <section id="blog" className="py-20 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-blue-900">Blog</h2>
              <p className="mt-2 text-slate-600">Educazione finanziaria, novità sui tassi, consigli pratici per mutui e prestiti.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Guida pratica al mutuo prima casa: passaggi e documenti',
                  img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
                },
                {
                  title: 'Cessione del quinto: quando conviene davvero',
                  img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
                },
                {
                  title: 'Tassi e mercato: come leggere le ultime novità',
                  img: 'https://images.unsplash.com/photo-1520607162513-2e1e8f8133c8?q=80&w=1600&auto=format&fit=crop',
                },
              ].map((p) => (
                <article key={p.title} className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
                  <img src={p.img} alt={p.title} className="h-44 w-full object-cover" loading="lazy" />
                  <div className="p-5">
                    <h3 className="font-semibold text-blue-900">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">Leggi l'articolo per scoprire consigli pratici e aggiornamenti utili per le tue decisioni finanziarie.</p>
                    <a href="#" className="mt-3 inline-block text-sm font-medium text-blue-900 hover:underline">Leggi di più</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
