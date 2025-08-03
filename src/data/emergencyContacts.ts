export interface EmergencyContact {
    name: string;
    description: string;
    phone: string;
    type: "emergency" | "support" | "legal" | "health";
}

export interface SupportResource {
    name: string;
    description: string;
    url: string;
    type: "legal" | "health" | "government";
}

export const emergencyContacts: EmergencyContact[] = [
    {
        name: "CVV - Centro de Valorização da Vida",
        description: "Apoio emocional e prevenção do suicídio",
        phone: "188",
        type: "emergency"
    },
    {
        name: "Disque 100",
        description: "Denúncias de violações de direitos humanos",
        phone: "100",
        type: "support"
    },
    {
        name: "Polícia Militar",
        description: "Emergências e situações de perigo",
        phone: "190",
        type: "emergency"
    },
    {
        name: "SAMU",
        description: "Emergências médicas",
        phone: "192",
        type: "emergency"
    }
];

export const supportResources: SupportResource[] = [
    {
        name: "Ministério Público do Trabalho",
        description: "Denúncias trabalhistas e orientação jurídica",
        url: "https://denuncia.sit.trabalho.gov.br/home",
        type: "legal"
    },
    {
        name: "Superintendência Regional do Trabalho",
        description: "Fiscalização e denúncias trabalhistas",
        url: "https://www.gov.br/trabalho-e-previdencia/pt-br",
        type: "government"
    },
    {
        name: "Defensoria Pública",
        description: "Assistência jurídica gratuita",
        url: "https://www.defensoria.sp.def.br/",
        type: "legal"
    },
    {
        name: "OAB - Ordem dos Advogados",
        description: "Orientação jurídica e encaminhamentos",
        url: "https://www.oab.org.br/",
        type: "legal"
    },
    {
        name: "CAPS - Centro de Atenção Psicossocial",
        description: "Atendimento psicológico gratuito",
        url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/caps",
        type: "health"
    },
    {
        name: "Centros de Saúde Mental",
        description: "Atendimento psicológico e psiquiátrico",
        url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-mental",
        type: "health"
    }
]; 