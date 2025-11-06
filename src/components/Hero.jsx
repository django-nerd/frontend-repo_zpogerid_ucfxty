import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-blue-50 text-blue-900 px-3 py-1 text-xs font-semibold tracking-wide ring-1 ring-blue-100">Professionista Certificato</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-900">Soluzioni finanziarie su misura per ogni esigenza</h1>
          <p className="mt-4 text-lg text-slate-600">Mutui, prestiti, cessione del quinto, finanziamenti aziendali e consulenze personalizzate. Trasparenza, affidabilità e velocità al tuo servizio.</p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contatti" className="px-6 py-3 rounded-md bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors">Richiedi una consulenza gratuita</a>
            <a href="#servizi" className="px-6 py-3 rounded-md border border-slate-300 text-blue-900 font-medium hover:bg-slate-50 transition-colors">Scopri i servizi</a>
          </div>
        </div>

        {/* Quick quote form */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4 bg-white/80 backdrop-blur rounded-xl p-4 ring-1 ring-slate-200">
          <input type="text" placeholder="Nome e Cognome" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <input type="tel" placeholder="Telefono" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <select className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200">
            <option>Seleziona servizio</option>
            <option>Mutuo Prima Casa</option>
            <option>Surroga Mutuo</option>
            <option>Prestito Personale</option>
            <option>Cessione del Quinto</option>
            <option>Finanziamento Aziendale</option>
            <option>Apertura Conto</option>
            <option>Ristrutturazione Debiti</option>
          </select>
          <button className="w-full md:w-auto px-6 py-2.5 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors">Richiedi Preventivo</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
