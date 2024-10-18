import React, { createContext, useState, useContext, useEffect } from "react";
import {jwtDecode} from 'jwt-decode'; // Utilisé pour décoder le token JWT

// Crée le contexte d'authentification
const AuthContext = createContext(null);

// Fonction pour valider et décoder le token JWT
const isTokenValid = (token) => {
    try {
        const decoded = jwtDecode(token);  // Décodage du token
        const currentTime = Date.now() / 1000; // Temps actuel en secondes
        return decoded.exp > currentTime;  // Retourne vrai si le token n'est pas expiré
    } catch (error) {
        return false;  // Token invalide
    }
};

// Fonction pour extraire le rôle de l'utilisateur à partir du token
const getUserRoleFromToken = (token) => {
    try {
        const decoded = jwtDecode(token);
        return decoded.type || null;  // Le rôle est généralement inclus dans le token
    } catch (error) {
        return null;
    }
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && isTokenValid(token)) {
            setIsAuthenticated(true);
            setUserRole(getUserRoleFromToken(token));   
        } else {
            setIsAuthenticated(false);
            setUserRole(null);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUserRole(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, logout, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour accéder au contexte
export const useAuth = () => useContext(AuthContext);

// Composant pour restreindre l'accès en fonction du rôle
export const RequireRole = ({ allowedRoles, children }) => {
    const { isAuthenticated, userRole } = useAuth();

    if (!isAuthenticated || !allowedRoles.includes(userRole)) {
        return <p>Vous n'êtes pas autorisé à accéder à cette ressource.</p>;
    }

    return children;  // Si l'utilisateur a un rôle autorisé, il accède au contenu
};
