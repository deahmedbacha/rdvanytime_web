const { z } = require('zod');

const updateSettingsSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
  taille: z.number().nullable().optional(),
  poids: z.number().nullable().optional(),
  blood_type: z.string().nullable().optional(),
  Fumeur: z.boolean().optional(),
  Alcool: z.boolean().optional(),
  Marie: z.boolean().optional(),
  maladieCronique: z.array(z.string()).nullable().optional(),
  chirurgie: z.array(z.string()).nullable().optional(),
  allergie: z.array(z.string()).nullable().optional(),
  medicament: z.array(z.string()).nullable().optional(),
});

module.exports = { updateSettingsSchema };
