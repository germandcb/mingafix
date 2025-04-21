import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const createReport = defineAction({
    accept: 'form',
    input: z.any(),
    handler: async ( credentials ) => {
    }
})