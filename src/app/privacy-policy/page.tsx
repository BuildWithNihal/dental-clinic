"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { clinicInfo } from "@/data/constants";

export default function PrivacyPolicyPage() {
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
              Privacy{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Policy
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
                  1. Introduction
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  At Madan Mahal Clinic, we are committed to protecting your privacy
                  and personal information. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you
                  visit our website or use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  2. Information We Collect
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  We may collect information that you provide directly to us,
                  including:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Medical information relevant to your treatment</li>
                  <li>Appointment and scheduling information</li>
                  <li>Payment and billing information</li>
                  <li>Communications you send to us</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2">
                  <li>Provide and manage your medical care</li>
                  <li>Schedule and confirm appointments</li>
                  <li>Send appointment reminders and follow-up communications</li>
                  <li>Process payments and billing</li>
                  <li>Improve our services and patient experience</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  4. Data Security
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information. However, no
                  electronic transmission or storage is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  5. Contact Us
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact
                  us at{" "}
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
              <Button>
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
