"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentFormData } from "@/lib/schemas";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { treatments, appointmentTimeSlots, clinicInfo } from "@/data/constants";
import {
  Calendar,
  Clock,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";

export default function AppointmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Appointment submitted:", data);
      setIsSuccess(true);
      reset();
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Appointment Request Received!
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Thank you for booking with us. We will contact you shortly to confirm
            your appointment.
          </p>
          <Button onClick={() => setIsSuccess(false)}>
            Book Another Appointment
          </Button>
        </motion.div>
      </div>
    );
  }

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
              Book an Appointment
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Schedule Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Visit
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Fill out the form below to request an appointment. We will confirm
              your booking as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        {...register("name")}
                        error={errors.name?.message}
                        placeholder="Enter your full name"
                      />
                      <Input
                        label="Phone Number"
                        type="tel"
                        {...register("phone")}
                        error={errors.phone?.message}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Email Address"
                        type="email"
                        {...register("email")}
                        error={errors.email?.message}
                        placeholder="your@email.com"
                      />
                      <Input
                        label="Age"
                        type="number"
                        {...register("age")}
                        error={errors.age?.message}
                        placeholder="Your age"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                          Gender
                        </label>
                        <select
                          {...register("gender")}
                          className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                        {errors.gender && (
                          <p className="mt-1.5 text-sm text-red-500">
                            {errors.gender.message}
                          </p>
                        )}
                      </div>
                      <Select
                        label="Treatment"
                        {...register("treatment")}
                        error={errors.treatment?.message}
                        options={[
                          { value: "", label: "Select treatment" },
                          ...treatments.map((t) => ({
                            value: t.slug,
                            label: t.name,
                          })),
                        ]}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Preferred Date"
                        type="date"
                        min={today}
                        {...register("preferredDate")}
                        error={errors.preferredDate?.message}
                      />
                      <Select
                        label="Preferred Time"
                        {...register("preferredTime")}
                        error={errors.preferredTime?.message}
                        options={[
                          { value: "", label: "Select time" },
                          ...appointmentTimeSlots.map((time) => ({
                            value: time,
                            label: time,
                          })),
                        ]}
                      />
                    </div>

                    <Textarea
                      label="Message (Optional)"
                      {...register("message")}
                      placeholder="Any additional information or special requests..."
                    />

                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                        <p className="text-sm text-red-600 dark:text-red-400">
                          {submitError}
                        </p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          Book Appointment
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                      Clinic Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white text-sm">
                            Address
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {clinicInfo.address.line1}
                            <br />
                            {clinicInfo.address.line2}
                            <br />
                            {clinicInfo.address.city}, {clinicInfo.address.state} -{" "}
                            {clinicInfo.address.zip}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white text-sm">
                            Hours
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Mon-Sat: {clinicInfo.hours.weekdays}
                            <br />
                            Sunday: {clinicInfo.hours.sunday}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white text-sm">
                            Phone
                          </p>
                          <a
                            href={`tel:${clinicInfo.phone}`}
                            className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                          >
                            {clinicInfo.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="font-medium text-slate-900 dark:text-white text-sm mb-3">
                      What to Expect
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Confirmation within 24 hours",
                        "Flexible scheduling",
                        "Personalized consultation",
                        "Expert medical advice",
                        "Comfortable clinic environment",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
}
