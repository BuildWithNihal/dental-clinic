"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Carousel } from "@/components/ui/carousel";
import { Accordion } from "@/components/ui/accordion";
import { stats, treatments, testimonials, faqs, clinicInfo } from "@/data/constants";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  Calendar,
  ChevronRight,
  Activity,
  Users,
  Award,
  Star,
  Shield,
  Clock,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-teal-200/30 dark:bg-teal-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Trusted by 5000+ Patients
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Healthy Skin.
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Beautiful Confidence.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                Advanced Dermatology, Cosmetic Procedures, Hair Restoration and
                Laser Treatments in Jabalpur. Expert care from Dr. Anamika Mishra,
                practicing since 2006.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/appointment">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href={`tel:${clinicInfo.phone}`}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </Button>
                </a>
                <a
                  href={`https://wa.me/${clinicInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Mon-Sat: {clinicInfo.hours.weekdays}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    Certified Dermatologist
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white font-bold text-6xl sm:text-8xl mx-auto mb-6 shadow-xl">
                      AM
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {clinicInfo.doctorName}
                    </h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {clinicInfo.doctor.qualifications.join(" | ")}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">
                      Practicing Since {clinicInfo.doctor.experienceSince}
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                    <Star className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      4.9/5 Rating
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      5000+ Reviews
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-slate-400 flex justify-center pt-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-slate-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-emerald-600 dark:bg-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-emerald-100 text-sm sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <Section background="slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <SectionHeader
                title="About Dr. Anamika Mishra"
                subtitle="Your Trusted Dermatologist"
                centered={false}
              />
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                With over 18 years of experience in dermatology and cosmetic
                procedures, Dr. Anamika Mishra is a leading expert in Jabalpur.
                Her qualifications include MBBS and a Diploma in Cosmetic
                Dermatology, making her uniquely qualified to provide
                comprehensive skin care solutions.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                At Madan Mahal Clinic, we combine advanced medical technology
                with compassionate care to deliver exceptional results for every
                patient.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about">
                  <Button>
                    Learn More About Us
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Award, title: "MBBS Qualified", desc: "Medical Excellence" },
                { icon: Shield, title: "18+ Years", desc: "Clinical Experience" },
                { icon: Users, title: "5000+ Patients", desc: "Successfully Treated" },
                { icon: Star, title: "4.9 Rating", desc: "Patient Satisfaction" },
              ].map((item, index) => (
                <Card key={index} hover className="text-center p-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Treatments"
            subtitle="Comprehensive Care"
            description="We offer a wide range of dermatological and cosmetic treatments tailored to your unique needs."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {treatments.slice(0, 12).map((treatment, index) => (
              <motion.div key={treatment.slug} variants={fadeInUp}>
                <Link href={`/treatments/${treatment.slug}`}>
                  <Card hover className="h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                        {treatment.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {treatment.description}
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
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/treatments">
              <Button variant="outline" size="lg">
                View All Treatments
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="emerald">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Patient Testimonials"
            subtitle="What Our Patients Say"
            description="Hear from our patients about their experience with Dr. Anamika Mishra and our clinic."
          />

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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>

          <div className="text-center mt-8">
            <Link href="/testimonials">
              <Button variant="ghost">
                Read More Testimonials
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Got Questions?"
            description="Find answers to common questions about our treatments, clinic, and services."
          />

          <Accordion items={faqs} searchable categories={["General", "Treatments", "Clinic"]} />

          <div className="text-center mt-8">
            <Link href="/faq">
              <Button variant="ghost">
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Book your appointment today and take the first step towards healthier,
              more radiant skin. Our expert team is here to help you achieve your
              aesthetic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment">
                <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                  <Calendar className="w-5 h-5" />
                  Book Appointment Now
                </Button>
              </Link>
              <a href={`tel:${clinicInfo.phone}`}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Phone className="w-5 h-5" />
                  Call: {clinicInfo.phone}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
