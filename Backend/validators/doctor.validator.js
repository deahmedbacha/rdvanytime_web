const { z } = require('zod');

const searchDoctorsSchema = z.object({
  ville: z.string().optional().default(''),
  type: z.string().optional().default(''),
});

const doctorByIdSchema = z.object({
  docId: z.string().min(1, 'Doctor ID is required'),
});

module.exports = { searchDoctorsSchema, doctorByIdSchema };
