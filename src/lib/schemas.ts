import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  age: z.coerce.number().min(1, "Age must be at least 1").max(120, "Please enter a valid age"),
  gender: z.string().min(1, "Please select a gender"),
  treatment: z.string().min(1, "Please select a treatment"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
