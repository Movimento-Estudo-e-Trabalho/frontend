export interface Company {
    id: number;
    name: string;
    area: string;
    city: string;
    rating: number;
    reviewCount: number;
    avgSalary: string;
    lastUpdate: string;
    trend: "up" | "down" | "stable";
    tags: string[];
    warnings: number;
}

export const companies: Company[] = [
    {
        id: 1,
        name: "TechCorp Solutions",
        area: "Tecnologia",
        city: "São Paulo",
        rating: 4.2,
        reviewCount: 47,
        avgSalary: "R$ 1.200",
        lastUpdate: "2 dias atrás",
        trend: "up",
        tags: ["Ambiente colaborativo", "Mentoria"],
        warnings: 0
    },
    {
        id: 2,
        name: "Marketing Plus",
        area: "Marketing",
        city: "Rio de Janeiro",
        rating: 2.1,
        reviewCount: 23,
        avgSalary: "R$ 400",
        lastUpdate: "1 semana atrás",
        trend: "down",
        tags: ["Carga excessiva"],
        warnings: 3
    },
    {
        id: 3,
        name: "Design Studio Pro",
        area: "Design",
        city: "Belo Horizonte",
        rating: 4.8,
        reviewCount: 31,
        avgSalary: "R$ 1.500",
        lastUpdate: "3 dias atrás",
        trend: "up",
        tags: ["Excelente mentoria", "Projetos reais"],
        warnings: 0
    },
    {
        id: 4,
        name: "Legal Advisors",
        area: "Direito",
        city: "Brasília",
        rating: 3.5,
        reviewCount: 18,
        avgSalary: "R$ 800",
        lastUpdate: "5 dias atrás",
        trend: "stable",
        tags: ["Aprendizado"],
        warnings: 1
    },
    {
        id: 5,
        name: "FastFood Chain",
        area: "Varejo",
        city: "São Paulo",
        rating: 1.8,
        reviewCount: 67,
        avgSalary: "R$ 300",
        lastUpdate: "1 dia atrás",
        trend: "down",
        tags: ["Exploração"],
        warnings: 8
    }
]; 