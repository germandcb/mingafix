import { firebase } from "@/firebase/config";
import { defineAction } from "astro:actions";
import { z } from "astro:content";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginUser = defineAction({
    accept: "form",
    input: z.object({
        email: z.string().email(),
        password: z.string().min(6),
        remenber_me: z.boolean().optional(),
    }),

    handler: async ({ email, password, remenber_me }, { cookies }) => {

        // Cookies
        if (remenber_me) {
            cookies.set("email", email, {
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 365 days
                path: "/",
            })
        }
        else {
            cookies.delete("email", {
                path: "/",
            })
        }


        // Verificar ususario y contraseña
        try {

            const user = await signInWithEmailAndPassword(
                firebase.auth,
                email,
                password
            )

            return { ok: true, message: "Usuario logueado correctamente" };

        } catch (error) {
            throw new Error("Usuario o contraseña incorrectos");
        }

        return { ok: true, message: "algo salio mal" };
    }

})