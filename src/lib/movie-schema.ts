import * as z from 'zod';
// Schema for add movie form
export const movieSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is a required field',
  }),

  year: z.string().min(1, {
    message: 'Description is a required field',
  }),
});

export const defaultValues = { title: '', year: '' };
