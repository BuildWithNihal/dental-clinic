"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clinicInfo } from "@/data/constants";

export default function TermsPage() {
  return (
    <div>
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-teal-200/30 dark:bg-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Terms of{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  By accessing or using the services provided by Madan Mahal Clinic
                  (Cuticare Skin Clinic), you agree to be bound by these Terms of
                  Service. If you do not agree to these terms, please do not use our
                  services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Medical Disclaimer
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The information provided on this website is for general
                  informational purposes only and is not a substitute for
                  professional medical advice, diagnosis, or treatment. Always seek
                  the advice of a qualified healthcare provider with any questions
                  you may have regarding a medical condition.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. Appointment Cancellation
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We request at least 24 hours notice for appointment cancellations.
                  Late cancellations or no-shows may be subject to a cancellation
                  fee. We understand that emergencies happen and will consider each
                  situation individually.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Payment Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Payment is due at the time of service unless other arrangements
                  have been made. We accept cash, credit cards, and digital payment
                  methods. Detailed invoices are provided for insurance
                  reimbursement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  All content on this website, including text, graphics, logos, and
                  images, is the property of Madan Mahal Clinic and is protected by
                  copyright laws. Unauthorized use is prohibited.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  6. Contact Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  If you have any questions about these Terms of Service, please
                  contact us at{" "}
                  <a
                    href={`mailto:${clinicInfo.email}`}
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    {clinicInfo.email}
                  </a>{" "}
                  or call us at{" "}
                  <a
                    href={`tel:${clinicInfo.phone}`}
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    {clinicInfo.phone}
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
