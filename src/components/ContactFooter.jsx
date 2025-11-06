import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const ContactFooter = () => {
  const phone = "+39 800 123 456";
  const email = "info@consulenzafinanziaria.it";
  const whatsappNumber = "+393331234567";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <section id="contatti" className="bg-gradient-to-b from-blue-50 to-white pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <div className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-blue-900">Richiedi una consulenza gratuita</h3>
            <p className="mt-2 text-slate-600">Compila il modulo per essere ricontattato entro 24 ore.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Nome" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <input type="text" placeholder="Cognome" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <input type="email" placeholder="Email" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <input type="tel" placeholder="Telefono" className="rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <select className="sm:col-span-2 rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option>Seleziona servizio</option>
                <option>Mutuo</option>
                <option>Prestito Personale</option>
                <option>Cessione del Quinto</option>
                <option>Finanziamento Aziendale</option>
                <option>Apertura Conto</option>
                <option>Ristrutturazione Debiti</option>
                <option>Consulenza</option>
              </select>
              <textarea placeholder="Messaggio" rows={4} className="sm:col-span-2 rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <button type="submit" className="sm:col-span-2 w-full px-6 py-3 rounded-md bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors">Invia richiesta</button>
            </form>
          </div>

          {/* Info + map */}
          <div className="space-y-6">
            <div className="rounded-xl bg-blue-900 text-white p-6">
              <h3 className="text-xl font-semibold">Contatti diretti</h3>
              <div className="mt-4 space-y-3">
                <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:underline"><Phone className="h-5 w-5"/> {phone}</a>
                <a href={`mailto:${email}`} className="flex items-center gap-2 hover:underline"><Mail className="h-5 w-5"/> {email}</a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500"> <MessageCircle className="h-5 w-5"/> WhatsApp</a>
                <p className="text-sm text-blue-100">Lun-Ven 9:00-18:30 • Sabato su appuntamento</p>
              </div>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-xl ring-1 ring-slate-200">
              <iframe
                title="Mappa Google"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.787650532525!2d12.49636531542276!3d41.9027833792191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61aa8f9f0c37%3A0x45f9d1fba07f92f!2sRome%2C%20Italy!5e0!3m2!1sen!2sit!4v1686754321000!5m2!1sen!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div id="vantaggi" className="mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900">Perché scegliere me</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { t: 'Affidabilità', d: 'Processi chiari e verifiche rigorose.' },
              { t: 'Velocità', d: 'Iter snelli e tempi certi.' },
              { t: 'Trasparenza', d: 'Costi e condizioni sempre esplicite.' },
              { t: 'Su misura', d: 'Soluzioni modellate sugli obiettivi.' },
            ].map((v) => (
              <div key={v.t} className="rounded-xl bg-white p-6 ring-1 ring-slate-200">
                <h3 className="font-semibold text-blue-900">{v.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p>© {new Date().getFullYear()} Consulente Finanziario. Tutti i diritti riservati.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-900">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900">Cookie</a>
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
              <a href="#" className="hover:text-slate-900">Facebook</a>
              <a href="#" className="hover:text-slate-900">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactFooter;
