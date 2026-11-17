import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publication = z.enum(['draft', 'published']);
const formation = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/formacion' }), schema: z.object({ title: z.string(), type: z.enum(['official', 'complementary', 'competency']), entity: z.string(), startDate: z.string().optional(), endDate: z.string().optional(), dateLabel: z.string().optional(), hours: z.number().positive().optional(), ects: z.number().positive().optional(), category: z.string(), description: z.string(), skills: z.array(z.string()).default([]), featured: z.boolean().default(false), order: z.number().default(0), status: publication }) });
const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiencia' }),
  schema: z.object({
    organisation: z.string(),
    role: z.string(),
    specialty: z.string().optional(),
    programme: z.string().optional(),
    area: z.string().optional(),
    professionalFamily: z.string().optional(),
    contractualWorkloadPercentage: z.number().min(0).max(100).optional(),
    experienceType: z.enum(['teaching-development', 'teaching-administration', 'tutoring', 'banking', 'administration', 'other']).default('other'),
    courseCode: z.string().optional(),
    moduleCode: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    dateLabel: z.string().optional(),
    mode: z.enum(['presential', 'online', 'virtual-classroom', 'hybrid']).optional(),
    teachingHours: z.number().nonnegative().optional(),
    tutoringHours: z.number().nonnegative().optional(),
    placementFollowUpHours: z.number().nonnegative().optional(),
    otherVerifiedHours: z.number().nonnegative().optional(),
    countsForTeachingTotal: z.boolean().default(false),
    modules: z.array(z.object({ code: z.string().optional(), title: z.string(), hours: z.number().nonnegative(), contents: z.array(z.string()).default([]) })).default([]),
    functions: z.array(z.string()).default([]),
    contents: z.array(z.string()).default([]),
    notes: z.string().optional(),
    verification: z.enum(['pending', 'estimated', 'declared', 'reviewed', 'documented']).default('pending'),
    status: publication,
  }),
});
const projects = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }), schema: z.object({ title: z.string(), summary: z.string(), description: z.string().optional(), category: z.string(), role: z.string().optional(), image: z.string().optional(), imageAlt: z.string().optional(), featured: z.boolean().default(false), externalUrl: z.string().min(1).optional(), status: publication }) });
const testimonials = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/testimonios' }), schema: z.object({ quote: z.string(), author: z.string().optional(), relationship: z.string().optional(), date: z.string().optional(), source: z.string().optional(), approved: z.boolean().default(false), status: publication }) });
export const collections = { formation, experience, projects, testimonials };
