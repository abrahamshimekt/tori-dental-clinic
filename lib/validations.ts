import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),
  phone: z
    .string()
    .min(9, "Phone number must be at least 9 digits")
    .max(15, "Phone number is too long")
    .regex(/^[\d\s+\-()]+$/),
  email: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  message: z.string().max(500, "Message is too long").optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const services = [
  "General Dentistry",
  "Emergency Dental Care (24/7)",
  "Teeth Cleaning",
  "Root Canal Treatment",
  "Cosmetic Dentistry",
  "Tooth Extraction",
  "Dental Implants",
  "Pediatric Dentistry",
  "Other",
];
