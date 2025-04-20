import { registerUser, logout, loginUser, loginWithGoogle } from "./auth";

export const server = {
    // acciones de autenticacion
    registerUser,
    logout,
    loginUser,
    loginWithGoogle
}