import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Marco R.',
    text: 'Professionalità impeccabile. In poche settimane ho ottenuto la surroga con una rata più bassa del 18%.',
  },
  {
    name: 'Sara e Luca',
    text: 'Mutuo prima casa senza stress. Spiegazioni chiare e assistenza continua fino alla firma.',
  },
  {
    name: 'Studio Bianchi',
    text: 'Per la nostra attività ci ha guidato su finanziamenti e ottimizzazione dei costi bancari. Risultati concreti.',
  },
];

const faqs = [
  {
    q: 'Quali documenti servono per richiedere un mutuo?',
    a: 'Documento d’identità, codice fiscale, documenti di reddito (busta paga/UNICO), estratti conto e documentazione dell’immobile.',
  },
  {
    q: 'In quanto tempo posso ottenere un prestito personale?',
    a: 'In media 24-72 ore dall’approvazione. I tempi possono variare in base a importo e profilo.',
  },
  {
    q: 'Posso richiedere soluzioni se ho segnalazioni in CRIF?',
    a: 'Sì, valutiamo percorsi personalizzati di ristrutturazione debiti e consolidamento, caso per caso.',
  },
];

const TestimonialsFAQ = () => {
  return (
    <section id="testimonianze" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-blue-900">Testimonianze</h2>
            <div className="mt-6 space-y-6">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="mt-3 text-slate-700">“{t.text}”</p>
                  <p className="mt-2 text-sm font-medium text-slate-500">{t.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div id="faq">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900">FAQ</h2>
            <dl className="mt-6 space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
                  <dt className="font-semibold text-blue-900">{f.q}</dt>
                  <dd className="mt-2 text-slate-600 text-sm">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFAQ;
