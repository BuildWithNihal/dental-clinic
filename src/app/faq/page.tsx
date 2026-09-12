"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/data/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";
import { clinicInfo } from "@/data/constants";

const categories = ["All", ...new Set(faqs.map((faq) => faq.category))];

export default function FAQPage() {
  return (
    <div>
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-teal-200/30 dark:bg-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">
              FAQ
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Find answers to common questions about our treatments, services, and
              clinic.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion items={faqs} searchable categories={categories} />

          <div className="mt-16 p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Can&apos;t find what you&apos;re looking for? Feel free to reach out to us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${clinicInfo.phone}`}>
                <Button>
                  <Phone className="w-4 h-4" />
                  Call Us
                </Button>
              </a>
              <a
                href={`https://wa.me/${clinicInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
