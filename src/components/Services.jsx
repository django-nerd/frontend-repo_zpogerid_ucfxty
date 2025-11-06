import React from 'react';
import { Home, CreditCard, Briefcase, Users, FileText, Building } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Mutui Prima Casa & Surroghe',
    desc: 'Soluzioni competitive e trasparenti per l’acquisto della prima casa o per migliorare il tuo mutuo con una surroga vantaggiosa.',
  },
  {
    icon: CreditCard,
    title: 'Prestiti Personali & Cessione del Quinto',
    desc: 'Finanziamenti rapidi e su misura, anche con trattenuta in busta paga per dipendenti e pensionati.',
  },
  {
    icon: Briefcase,
    title: 'Finanziamenti Aziendali & Professionisti',
    desc: 'Linee di credito, liquidità e investimenti per PMI e liberi professionisti con iter semplificati.',
  },
  {
    icon: Building,
    title: 'Apertura e Gestione Conti Correnti',
    desc: 'Supporto nella scelta del conto migliore e ottimizzazione dei costi bancari, anche per imprese.',
  },
  {
    icon: Users,
    title: 'Ristrutturazione Debiti & CRIF',
    desc: 'Soluzioni personalizzate per chi ha segnalazioni, consolidamento debiti e piani sostenibili.',
  },
  {
    icon: FileText,
    title: 'Consulenza & Pianificazione',
    desc: 'Analisi completa della tua situazione economica e piano strategico per obiettivi familiari e aziendali.',
  },
];

const Services = () => {
  return (
    <section id="servizi" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900">Servizi</h2>
          <p className="mt-3 text-slate-600">Una gamma completa per privati, famiglie e imprese. Approccio umano, consulenza indipendente, massima trasparenza.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl bg-white p-6 ring-1 ring-slate-200 hover:ring-blue-200 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-blue-900/10 text-blue-900 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-blue-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
