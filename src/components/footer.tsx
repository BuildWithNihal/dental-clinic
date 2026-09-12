import Link from "next/link";
import { clinicInfo, navLinks } from "@/data/constants";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-lg">
                AM
              </div>
              <div>
                <p className="font-bold text-white text-lg">
                  {clinicInfo.doctorName}
                </p>
                <p className="text-xs text-slate-400">
                  {clinicInfo.clinicName}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing advanced dermatology and cosmetic treatments with a
              personalized approach. Your skin health is our priority.
            </p>
            <div className="flex gap-3">
              <a
                href={clinicInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Treatments</h3>
            <ul className="space-y-2">
              {[
                "Acne Treatment",
                "Hair Transplant",
                "Botox & Fillers",
                "Skin Tightening",
                "PRP Therapy",
                "Chemical Peel",
              ].map((treatment) => (
                <li key={treatment}>
                  <Link
                    href="/treatments"
                    className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  {clinicInfo.address.line1}, {clinicInfo.address.line2},{" "}
                  {clinicInfo.address.city}, {clinicInfo.address.state} -{" "}
                  {clinicInfo.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                <span className="text-sm text-slate-400">
                  Mon-Sat: {clinicInfo.hours.weekdays}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {clinicInfo.clinicName}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
