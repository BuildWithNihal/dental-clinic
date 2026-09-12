"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { treatments } from "@/data/constants";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Shield,
  ChevronRight,
  Activity,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function TreatmentDetailPage() {
  const params = useParams();
  const treatment = treatments.find((t) => t.slug === params.slug);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Treatment Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The treatment you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/treatments">
            <Button>
              <ArrowLeft className="w-4 h-4" />
              Back to Treatments
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedTreatments = treatments.filter((t) =>
    treatment.related?.includes(t.slug)
  );

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
            className="max-w-3xl"
          >
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Treatments
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
                {treatment.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {treatment.name}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              {treatment.description}
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SectionHeader title="Overview" centered={false} />
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {treatment.overview}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <SectionHeader title="Symptoms" centered={false} />
                <ul className="grid sm:grid-cols-2 gap-3">
                  {treatment.symptoms.map((symptom) => (
                    <li key={symptom} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <SectionHeader title="Causes" centered={false} />
                <ul className="grid sm:grid-cols-2 gap-3">
                  {treatment.causes.map((cause) => (
                    <li key={cause} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{cause}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <SectionHeader title="Treatment Process" centered={false} />
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {treatment.treatmentProcess}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <SectionHeader title="Benefits" centered={false} />
                <ul className="grid sm:grid-cols-2 gap-3">
                  {treatment.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <SectionHeader title="Recovery" centered={false} />
                <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                  <Clock className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300">{treatment.recovery}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <SectionHeader title="Frequently Asked Questions" centered={false} />
                <Accordion items={treatment.faqs} />
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                        Book a Consultation
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Schedule an appointment with Dr. Anamika Mishra to discuss
                        your treatment options.
                      </p>
                      <Link href="/appointment">
                        <Button className="w-full">
                          Book Appointment
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Expert Care
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Flexible Scheduling
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          Personalized Treatment
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {relatedTreatments.length > 0 && (
        <Section background="slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Related Treatments"
              subtitle="You May Also Like"
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTreatments.map((relatedTreatment) => (
                <motion.div
                  key={relatedTreatment.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/treatments/${relatedTreatment.slug}`}>
                    <Card hover className="h-full">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                          <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                          {relatedTreatment.name}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                          {relatedTreatment.description}
                        </p>
                        <div className="flex items-center gap-1 mt-4 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                          Learn More
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      )}
    </div>
  );
}
