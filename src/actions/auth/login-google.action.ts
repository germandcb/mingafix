import { firebase } from "@/firebase/config";
import { defineAction } from "astro:actions";
import { db, User, eq } from "astro:db";
import { z } from "astro:schema";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

interface infoUser { 
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
}

export const loginWithGoogle = defineAction({
    accept: 'json',
    input: z.any(),
    handler: async ( credentials ) => {

        const credential = GoogleAuthProvider.credentialFromResult(credentials);


        if ( !credential ) {
            throw new Error('Google SignIn falló')
        }

        await signInWithCredential(firebase.auth, credential)

        const { uid, displayName, email, photoURL }  = await firebase.auth.currentUser as infoUser;
        
        // Verificar si el usuario ya está registrado en la base de datos
        const existingUser = await db.select().from(User).where(eq(User.id, uid));
        
        // Verificar que el usuario no exista
        if ( existingUser.length > 0 ) {
            // El usuario ya existe, no es necesario registrarlo nuevamente
            return { ok: true, message: "Usuario logueado correctamente" };
        }

        const currentUser = {
            id: uid,
            name: displayName,
            email: email,
            image: photoURL
        }

        // Registrar ususario en la base de datos
        await db.insert(User).values(currentUser);

        return {ok: true};
        
    }

})