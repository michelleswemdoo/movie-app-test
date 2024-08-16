import * as z from 'zod';

export const movieSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is a required field',
  }),

  description: z.string().min(1, {
    message: 'Description is a required field',
  }),
});

export const defaultValues = { title: '', description: '' };
