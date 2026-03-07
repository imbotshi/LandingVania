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
        
        <p className="text-[16px] text-center text-white font-[500] leading-[1.7] mb-0">
          Téléphone : +237 690 53 60 12
        </p>
        <p className="text-[16px] text-center text-white font-[500] leading-[1.7] mb-6">
          WhatsApp : +243 899 42 80 27
        </p>

        <p className="text-[17px] text-center text-[#ccff00] font-[600] leading-[1.6] mb-6">
          Vania Studio Marketing
        </p>

        <p className="text-[16px] text-center text-white font-[500] leading-[1.6]">
          Adresse : 3e étage immeuble<br/>
          Bettomax, Ancien Dalip, Douala
        </p>
      </div>

      {/* Footer Links Grid */}
      <div className="w-full grid grid-cols-2 gap-x-8 mb-12 px-10">
        
        {/* Column 1 — Suivre */}
        <div className="flex flex-col gap-3">
          <div className="mb-2">
            <h4 className="text-[17px] font-[600] text-white pb-2 border-b-2 border-white/40 inline-block">Suivre</h4>
          </div>
          <a href="#" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Facebook</a>
          <a href="#" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Instagram</a>
          <a href="#" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Tiktok</a>
          <a href="#" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Linkedin</a>
          <a href="#" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Twitter</a>
        </div>

        {/* Column 2 — Support */}
        <div className="flex flex-col gap-3">
          <div className="mb-2">
            <h4 className="text-[17px] font-[600] text-white pb-2 border-b-2 border-white/40 inline-block">Support</h4>
          </div>
          <a href="#" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Aide et Support</a>
          <a href="#" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Recrutement</a>
          <a href="#" className="text-[15px] text-white/80 hover:text-[#ccff00] transition-colors">Parler à un service</a>
        </div>

      </div>

      {/* Copyright strip – slightly darker green, like the design */}
      <div className="w-full border-t border-white/10 py-6 text-center">
        <p className="text-[13px] text-[#ccff00] font-[700] tracking-wide">
          Tous droit réservés@Vania2026
        </p>
      </div>

    </footer>
  );
}
