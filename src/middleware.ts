import type { MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";
import { firebase } from "./firebase/config";

const privateRoutes = ["/profile", "/profile/reposts"];
const notAuthenticatedRoutes = ["/login", "/register", "/profile/*", "/reports/*"];

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(({ url, request, locals, redirect }, next) => {
    const isLoggedIn = !!firebase.auth.currentUser;
    const user = firebase.auth.currentUser;

    locals.isLoggedIn = isLoggedIn;
    
    if (user) { 
        locals.user = {
            email: user.email!,
            name: user.displayName!,
            avatar: user.photoURL ?? '',
            emailVerified: user.emailVerified,
        };
    }

    // Redireccionar a la página de inicio si el usuario no está autenticado y trata de acceder a una ruta privada
    if ( !isLoggedIn && privateRoutes.includes(url.pathname) ) { 
        return redirect('/login');
    }

    // Redireccionar a la página de inicio si el usuario está autenticado y trata de acceder a una ruta no autenticada
    if ( isLoggedIn && notAuthenticatedRoutes.includes(url.pathname) ) { 
        return redirect('/');
    }


    return next();
});