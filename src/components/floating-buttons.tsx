"use client";

import { Phone, Calendar, MessageCircle } from "lucide-react";
import { clinicInfo } from "@/data/constants";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 no-print">
      <a
        href={`https://wa.me/${clinicInfo.whatsapp.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:block text-sm font-medium">WhatsApp</span>
      </a>
      <a
        href={clinicInfo.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-800 hover:bg-slate-900 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Get Directions"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="hidden sm:block text-sm font-medium">Directions</span>
      </a>
      <a
        href={`tel:${clinicInfo.phone}`}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:block text-sm font-medium">Call</span>
      </a>
      <a
        href="/appointment"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Book Appointment"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden sm:block text-sm font-medium">Book Now</span>
      </a>
    </div>
  );
}
