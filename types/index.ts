import { z } from "zod";
import { insertProductionSchema } from "@/lib/validator";

export type Production = z.infer<typeof insertProductionSchema> & {
    id: string; 
    //whatever not in schema add here
    createdAt: Date;
}