import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { createUserWithEmailAndPassword, type AuthError } from "firebase/auth";
import { firebase } from "@/firebase/config";

export const registerUser = defineAction({
    accept: "form",
    input: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        remenber_me: z.boolean().optional(),
    }),
    handler: async ({ name, email, password, remenber_me }, { cookies }) => {

        // Cookies
        if (remenber_me) {
            cookies.set("email", email, {
                expires: new Date(Date.now() + 1000 * 60 + 60 * 24 * 365), // 365 days
                path: "/",
            })
        }
        else {
            cookies.delete("email", {
                path: "/",
            });
        }

        // Creación de ususario

        try {
            const user = await createUserWithEmailAndPassword(
                firebase.auth, 
                email, 
                password
            );

            

            return { ok: true, message: "Usuario creado correctamente" };
        } catch (error) {

            const firebaseError = error as AuthError;

            if ( firebaseError.code === "auth/email-already-in-use") {
                throw new Error("El correo ya esta en uso");
            }
        }

        return { ok: true, message: "algo Salio mal" };
    },
});