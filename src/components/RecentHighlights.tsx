import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const RecentHighlights = () => {
  const recentReviews = [
    {
      id: 1,
      company: "TechCorp Solutions",
      area: "Desenvolvimento",
      rating: 4.2,
      summary: "Ambiente colaborativo, mas carga horária excessiva",
      timeAgo: "2 dias atrás",
      salary: "R$ 1.200",
      trend: "up"
    },
    {
      id: 2,
      company: "Marketing Plus",
      area: "Marketing Digital",
      rating: 2.1,
      summary: "Exploração de mão de obra, sem supervisão adequada",
      timeAgo: "1 semana atrás",
      salary: "R$ 400",
      trend: "down"
    },
    {
      id: 3,
      company: "Design Studio Pro",
      area: "UX/UI Design",
      rating: 4.8,
      summary: "Excelente mentoria e projetos reais",
      timeAgo: "3 dias atrás",
      salary: "R$ 1.500",
      trend: "up"
    }
  ];

  const alerts = [
    {
      id: 1,
      company: "FastFood Chain",
      type: "Assédio Moral",
      reports: 5
    },
    {
      id: 2,
      company: "Retail Corp",
      type: "Carga Excessiva",
      reports: 8
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Radar da comunidade</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Destaques recentes</h2>
            <p className="text-muted-foreground text-lg mt-3">
              Avaliações e alertas que acendem o debate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest reviews */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Últimas avaliações
              </h3>

              <div className="space-y-4">
                {recentReviews.map((review) => (
                  <Card key={review.id} className="border-activist hover:shadow-elevated transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg">{review.company}</h4>
                          <p className="text-muted-foreground">{review.area}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                            <span className="font-medium">{review.rating}</span>
                          </div>
                          {review.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-secondary" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-warning" />
                          )}
                        </div>
                      </div>

                      <p className="text-foreground mb-3">{review.summary}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{review.salary}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {review.timeAgo}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/empresas/${review.id}`}>Ver detalhes</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button variant="outline" asChild className="border-ink text-ink hover:bg-ink/5">
                  <Link to="/empresas">Ver todas as avaliações</Link>
                </Button>
              </div>
            </div>

            {/* Alerts and reports */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
                Alertas recentes
              </h3>

              <div className="space-y-4">
                {alerts.map((alert) => (
                  <Card key={alert.id} className="border-warning/40">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">{alert.company}</h4>
                      <div className="flex items-center justify-between">
                        <Badge variant="destructive">{alert.type}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {alert.reports} denúncias
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 p-6 bg-card rounded-2xl border-activist">
                <h4 className="font-semibold mb-3">Sofreu abuso ou humilhação?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Denuncie de forma segura e anônima. Sua experiência pode proteger outros estudantes.
                </p>
                <Button variant="default" size="sm" className="w-full bg-primary text-primary-foreground" asChild>
                  <Link to="/denuncia">Denunciar agora</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentHighlights;