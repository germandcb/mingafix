import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const registerUser = defineAction({
    accept: "form",
    input: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        remenber_me: z.boolean().optional(),
    }),
    handler: async ( { name, email, password, remenber_me })  => {

        console.log("Register User", { name, email, password, remenber_me });
        return true;
    },

});