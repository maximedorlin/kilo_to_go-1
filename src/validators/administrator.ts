import { z } from "zod";

export const QuaterValidator = z.object({
  // ...
  name_quater: z.string().min(1),
  population: z.union([z.string(), z.number()]).transform(String),
  sup: z.union([z.string(), z.number()]).transform(String),
  geom: z.string().optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  // ...
});

export const SubdivisionValidator = z.object({
  name_subdivision: z.string().min(1, "Le nom de la subdivision est requis"),
  population: z.number().min(0, "La population doit être positive"),
  repart: z.number().min(0, "La répartition doit être positive"),
  primaire: z.number().min(0, "Le nombre d'écoles primaires doit être positif"),
  ppublic: z.number().min(0, "Le nombre d'écoles publiques doit être positif"),
  secondaire: z
    .number()
    .min(0, "Le nombre d'écoles secondaires doit être positif"),
  created_at: z.string().datetime().optional(), // Si présent dans BaseData
  updated_at: z.string().datetime().optional(), // Si présent dans BaseData
});

export const DiseaseValidator = z.object({
  disease_name: z.string().min(1, "Le nom de la maladie est requis"),
  disease_symptoms: z
    .string()
    .min(1, "les symptomes de la maladie sont requis"),
  predefined_category: z
    .string()
    .min(0, "les catégories prédefinies sont requises"),
  custom_category: z.string().min(0, "La catégorie du client est requise"),
});
export const EquipmentValidator = z.object({
  equipment_name: z.string({ message: "required" }),
  equipment_quantity: z.number({ message: "required" }),
});

export const PersonnelValidator = z.object({
  personnel_type: z.string({ message: "required" }),
  personnel_description: z.string({ message: "required" }),
});
