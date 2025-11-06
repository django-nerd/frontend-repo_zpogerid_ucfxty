import React from 'react';
import { Phone, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react';

const Header = () => {
  const phone = "+39 800 123 456";
  const whatsappNumber = "+393331234567"; // international format
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}`;

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      {/* Top utility bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3 text-slate-600">
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors">
            <Phone className="h-4 w-4 text-blue-700" />
            <span className="font-medium">Numero Verde:</span>
            <span className="font-semibold">{phone}</span>
          </a>
          <span className="hidden md:inline text-slate-300">|</span>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-3 text-slate-500">
          <a href="#" aria-label="LinkedIn" className="hover:text-slate-900"><Linkedin className="h-4 w-4"/></a>
          <a href="#" aria-label="Facebook" className="hover:text-slate-900"><Facebook className="h-4 w-4"/></a>
          <a href="#" aria-label="Instagram" className="hover:text-slate-900"><Instagram className="h-4 w-4"/></a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-900 text-white grid place-items-center font-semibold">CF</div>
          <div>
            <div className="text-blue-900 font-semibold tracking-tight">Consulente Finanziario</div>
            <div className="text-xs text-slate-500">Mutui • Prestiti • Imprese</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#chi-sono" className="hover:text-blue-900">Chi Sono</a>
          <a href="#servizi" className="hover:text-blue-900">Servizi</a>
          <a href="#vantaggi" className="hover:text-blue-900">Vantaggi</a>
          <a href="#testimonianze" className="hover:text-blue-900">Testimonianze</a>
          <a href="#faq" className="hover:text-blue-900">FAQ</a>
          <a href="#contatti" className="px-4 py-2 rounded-md bg-blue-900 text-white hover:bg-blue-800 transition-colors">Richiedi consulenza</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
