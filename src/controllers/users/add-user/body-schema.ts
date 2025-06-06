// Warning: This file not use inversion of dependency, but it is a good practice to use it.

import { z } from 'zod';

export const addUserBodySchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
});
