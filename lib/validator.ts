import {z} from 'zod';
import { formatNumberWithDecimal } from './utils';

const currency = z
    .string()
    .refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))), 'Target must have exactly two decmial places.abs');
    

//Schema for inserting productions
export const insertProductionSchema = z.object({
    InsuredName: z.string().min(3,'Name must be at least 3 characters'),
    targetTotal: currency
})