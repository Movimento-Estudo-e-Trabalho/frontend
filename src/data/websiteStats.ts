export interface DenunciaStats {
    denunciasRecebidas: number;
    empresasAlertadas: number;
    estudantesProtegidos: string;
}

export interface WebsiteStats {
    empresasAvaliadas: string;
    estudantesAtivos: string;
    denunciasProcessadas: number;
    empresasMudaram: number;
}

export const denunciaStats: DenunciaStats = {
    denunciasRecebidas: 247,
    empresasAlertadas: 89,
    estudantesProtegidos: "1.2k+"
};

export const websiteStats: WebsiteStats = {
    empresasAvaliadas: "500+",
    estudantesAtivos: "2.5k+",
    denunciasProcessadas: 89,
    empresasMudaram: 12
}; 