import React from 'react';
import logotype from '../../assets/logotype.png';

export default function FooterSection() {
  return (
    <footer className="relative w-full pt-16 flex flex-col items-center bg-[#153D1C] text-white">
      
      {/* Footer Top / Logo + Contact */}
      <div className="w-full flex flex-col items-center mb-12 px-8">

        {/* Real Vania logotype — filtered to lime/yellow */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <img
            src={logotype}
            alt="Vania"
            className="h-[36px] object-contain"
            style={{ filter: 'brightness(0) saturate(100%) invert(93%) sepia(71%) saturate(700%) hue-rotate(20deg) brightness(110%)' }}
          />
        </div>
        
        <address className="not-italic">
          <p className="text-[16px] text-center text-white font-[500] leading-[1.7] mb-0">
            Téléphone : <a href="tel:+237690536012" className="hover:text-[#ccff00] transition-colors">+237 690 53 60 12</a>
          </p>
          <p className="text-[16px] text-center text-white font-[500] leading-[1.7] mb-6">
            WhatsApp : <a href="https://wa.me/243899428027" rel="noopener noreferrer" target="_blank" className="hover:text-[#ccff00] transition-colors">+243 899 42 80 27</a>
          </p>

          <p className="text-[17px] text-center text-[#ccff00] font-[600] leading-[1.6] mb-6">
            Vania Studio Marketing
          </p>

          <p className="text-[16px] text-center text-white font-[500] leading-[1.6]">
            3ᵉ étage Immeuble Bettomax,<br />Ancien Dalip, Douala, Cameroun
          </p>
        </address>
      </div>

      {/* Footer Links Grid */}
      <div className="w-full grid grid-cols-2 gap-x-8 mb-12 px-10">
        
        {/* Column 1 — Suivre */}
        <div className="flex flex-col gap-3">
          <div className="mb-2">
            <h4 className="text-[17px] font-[600] text-white pb-2 border-b-2 border-white/40 inline-block">Suivre</h4>
          </div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Facebook</a>
          <a href="https://www.instagram.com/vania.imo" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Instagram</a>
          <a href="https://www.tiktok.com/@vania.imo" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">TikTok</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Twitter / X</a>
        </div>

        {/* Column 2 — Support */}
        <div className="flex flex-col gap-3">
          <div className="mb-2">
            <h4 className="text-[17px] font-[600] text-white pb-2 border-b-2 border-white/40 inline-block">Support</h4>
          </div>
          <a href="mailto:contact@vania-residence.com" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Aide et Support</a>
          <a href="mailto:recrutement@vania-residence.com" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Recrutement</a>
          <a href="tel:+237690536012" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Parler à un conseiller</a>
        </div>

      </div>

      {/* Copyright strip – slightly darker green, like the design */}
      <div className="w-full border-t border-white/10 py-6 text-center">
        <p className="text-[13px] text-[#ccff00] font-[700] tracking-wide">
          &copy; 2026 Vania Studio Marketing — Tous droits réservés
        </p>
      </div>

    </footer>
  );
}
