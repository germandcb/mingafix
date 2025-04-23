/// <reference path="../types/global.d.ts" />
/// <reference types="astro/client" />

interface User { 
    uid: string;
    email: string;
    name: string;
    avatar: string;
    emailVerified: boolean;
}

declare namespace App { 
    interface Locals { 
        isLoggedIn: boolean;
        user: User | null;
    }
}