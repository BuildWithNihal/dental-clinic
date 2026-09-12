"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { testimonials } from "@/data/constants";
import { Star, ChevronRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function TestimonialsPage() {
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
              Testimonials
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Patients Say
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Real stories from real patients who have experienced exceptional
              care at our clinic.
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel autoPlay interval={5000}>
            {testimonials.slice(0, 4).map((testimonial) => (
              <div key={testimonial.id} className="px-4 sm:px-8">
                <Card className="max-w-3xl mx-auto">
                  <CardContent className="p-8 sm:p-12 text-center">
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {testimonial.location}
                        </p>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">
                          {testimonial.treatment}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white text-center mt-16 mb-12">
            All Reviews
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeInUp}>
                <Card hover className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                    <blockquote className="text-slate-700 dark:text-slate-300 mb-4 italic line-clamp-3">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
              Experience the Difference
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Join thousands of satisfied patients who have trusted us with their
              skin and hair care needs.
            </p>
            <Link href="/appointment">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Book Your Appointment
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
