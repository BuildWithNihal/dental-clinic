"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Heart,
  Target,
  Eye,
  BookOpen,
  Medal,
  Users,
  ChevronRight,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
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
              About Our Clinic
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Meet{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Dr. Anamika Mishra
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Dedicated to providing exceptional dermatological and cosmetic care
              with a focus on patient comfort, safety, and outstanding results.
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-3xl flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-8xl shadow-xl">
                  AM
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <SectionHeader
                title="Professional Biography"
                subtitle="About Dr. Mishra"
                centered={false}
              />
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Dr. Anamika Mishra is a highly qualified dermatologist with over 18
                years of clinical experience. She completed her MBBS and went on to
                earn a Diploma in Cosmetic Dermatology, equipping her with the
                expertise to handle both medical and aesthetic dermatology cases.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Since establishing her practice in 2006, Dr. Mishra has treated
                thousands of patients with compassion and skill. Her approach
                combines evidence-based medicine with cutting-edge technology to
                deliver the best possible outcomes.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                At Madan Mahal Clinic, she leads a team of dedicated professionals
                committed to providing personalized care in a comfortable,
                state-of-the-art environment.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        MBBS
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Medical Degree
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <Award className="w-8 h-8 text-emerald-600" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Diploma in Cosmetic Dermatology
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Specialized Training
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Mission, Vision & Philosophy"
            description="The principles that guide our practice and patient care."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card hover className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    To provide world-class dermatological and cosmetic care that
                    transforms lives. We are committed to advancing skin health
                    through innovation, education, and compassionate service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card hover className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    To be the leading dermatology clinic in Jabalpur, recognized for
                    excellence in patient care, advanced treatments, and beautiful
                    results that enhance confidence and quality of life.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card hover className="h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Medical Philosophy
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Every patient deserves personalized attention and ethical care.
                    We believe in transparent communication, evidence-based
                    treatments, and building lifelong relationships with our patients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="slate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Journey"
            subtitle="Experience & Timeline"
            description="A look at Dr. Mishra's professional journey and achievements."
          />

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200 dark:bg-emerald-800" />

            <div className="space-y-12">
              {[
                {
                  year: "2006",
                  title: "Practice Established",
                  description:
                    "Dr. Anamika Mishra established her dermatology practice in Jabalpur, bringing advanced skin care to the region.",
                },
                {
                  year: "2010",
                  title: "Expanded Services",
                  description:
                    "Added cosmetic dermatology and laser treatments to the clinic, offering comprehensive care.",
                },
                {
                  year: "2015",
                  title: "Advanced Technology",
                  description:
                    "Invested in state-of-the-art laser systems and surgical equipment for better patient outcomes.",
                },
                {
                  year: "2020",
                  title: "5000+ Patients Milestone",
                  description:
                    "Reached the milestone of successfully treating over 5000 patients with exceptional care.",
                },
                {
                  year: "Present",
                  title: "Continued Excellence",
                  description:
                    "Continuing to provide cutting-edge dermatological care with a focus on patient satisfaction.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-5 w-6 h-6 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900" />
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">
                        {milestone.year}
                      </p>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Certificates & Achievements */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Certifications & Achievements"
            subtitle="Excellence in Dermatology"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Medal,
                title: "MBBS",
                description: "Bachelor of Medicine and Surgery",
              },
              {
                icon: BookOpen,
                title: "Diploma in Cosmetic Dermatology",
                description: "Specialized training in aesthetic procedures",
              },
              {
                icon: Users,
                title: "5000+ Patients",
                description: "Successfully treated across India",
              },
              {
                icon: Award,
                title: "18+ Years Experience",
                description: "Dedicated to dermatological excellence",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {achievement.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
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
              Ready to Experience Expert Care?
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Book your appointment today and let Dr. Anamika Mishra help you
              achieve your skin and hair goals.
            </p>
            <Link href="/appointment">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                Book Appointment
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
