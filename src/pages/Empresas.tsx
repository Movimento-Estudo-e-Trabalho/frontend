import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Search, Filter, MapPin, Briefcase, DollarSign, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { companies } from "@/data/companies";

const Empresas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");



  const getRatingColor = (rating: number) => {
    if (rating >= 4) return "text-secondary";
    if (rating >= 3) return "text-accent";
    if (rating >= 2) return "text-warning";
    return "text-destructive";
  };

  const getRatingBadgeVariant = (rating: number) => {
    if (rating >= 4) return "default";
    if (rating >= 3) return "secondary";
    if (rating >= 2) return "outline";
    return "destructive";
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Empresas Avaliadas</h1>
              <p className="text-xl text-white/90">
                Descubra a realidade dos estágios através de avaliações reais de estudantes
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-lg shadow-card p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="md:col-span-2 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Buscar empresa..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Melhor Avaliação</SelectItem>
                      <SelectItem value="reviews">Mais Avaliado</SelectItem>
                      <SelectItem value="salary">Maior Bolsa</SelectItem>
                      <SelectItem value="recent">Mais Recente</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtros
                  </Button>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    {companies.length} empresas encontradas
                  </p>
                  <Button asChild>
                    <Link to="/avaliar">Avaliar Nova Empresa</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Companies List */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              {companies.map((company) => (
                <Card key={company.id} className="hover:shadow-elevated transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{company.name}</h3>
                          {company.warnings > 0 && (
                            <Badge variant="destructive" className="flex items-center">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              {company.warnings} alertas
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1" />
                            {company.area}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {company.city}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {company.avgSalary}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {company.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`flex items-center ${getRatingColor(company.rating)}`}>
                            <Star className="h-5 w-5 fill-current mr-1" />
                            <span className="text-xl font-bold">{company.rating}</span>
                          </div>
                          {company.trend === "up" && <TrendingUp className="h-4 w-4 text-secondary" />}
                          {company.trend === "down" && <AlertTriangle className="h-4 w-4 text-warning" />}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {company.reviewCount} avaliações
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Última atualização: {company.lastUpdate}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/empresas/${company.id}`}>Ver Detalhes</Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link to={`/avaliar?empresa=${company.id}`}>Avaliar</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Carregar Mais Empresas
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Empresas;