import { registerUser, logout, loginUser, loginWithGoogle } from "./auth";
import { createReport, getReportsById } from "./reports";

export const server = {
    // acciones de autenticacion
    registerUser,
    logout,
    loginUser,
    loginWithGoogle,

    // Acciones de reportes
    createReport,
    getReportsById
}