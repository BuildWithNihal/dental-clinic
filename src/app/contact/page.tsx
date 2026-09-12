"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { clinicInfo } from "@/data/constants";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
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
              Contact Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Have a question or want to schedule an appointment? Reach out to us
              through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Send Us a Message
                  </h2>
                  <form
                    action={`mailto:${clinicInfo.email}`}
                    method="POST"
                    encType="text/plain"
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="flex min-h-[120px] w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          Phone
                        </p>
                        <a
                          href={`tel:${clinicInfo.phone}`}
                          className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                          {clinicInfo.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          Email
                        </p>
                        <a
                          href={`mailto:${clinicInfo.email}`}
                          className="text-emerald-600 dark:text-emerald-400 hover:underline"
                        >
                          {clinicInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          Address
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {clinicInfo.address.line1}
                          <br />
                          {clinicInfo.address.line2}
                          <br />
                          {clinicInfo.address.city}, {clinicInfo.address.state} -{" "}
                          {clinicInfo.address.zip}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">
                          Clinic Hours
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          Mon-Sat: {clinicInfo.hours.weekdays}
                          <br />
                          Sunday: {clinicInfo.hours.sunday}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${clinicInfo.phone}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium text-slate-900 dark:text-white">
                        Call Now
                      </span>
                    </a>
                    <a
                      href={`https://wa.me/${clinicInfo.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium text-slate-900 dark:text-white">
                        WhatsApp Chat
                      </span>
                    </a>
                    <a
                      href={clinicInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Navigation className="w-5 h-5 text-emerald-600" />
                      <span className="font-medium text-slate-900 dark:text-white">
                        Get Directions
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section background="slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Visit Our Clinic"
            subtitle="Location"
            description="We are conveniently located in Jabalpur. Visit us for world-class dermatological care."
          />

          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
            <iframe
              src={clinicInfo.googleMapsEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            />
          </div>
        </div>
      </Section>

      <section className="py-16 sm:py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Take the first step towards healthier, more confident skin. Book
              your appointment today.
            </p>
            <Link href="/appointment">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Book Appointment
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
