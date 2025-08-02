import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, Heart, TrendingUp, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Sobre o EstágioJusto</h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Uma plataforma criada por estudantes, para estudantes, com o objetivo de 
                acabar com a romantização e exploração dos estágios no Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Chega de aceitar o inaceitável. Chega de romantizar exploração. 
                  É hora de dar transparência real às práticas de estágio no Brasil.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="p-8">
                    <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Proteger</h3>
                    <p className="text-muted-foreground">
                      Proteger estudantes de práticas abusivas e exploratórias através da informação e transparência.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Conectar</h3>
                    <p className="text-muted-foreground">
                      Criar uma comunidade onde estudantes compartilham experiências reais sobre estágios.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-8">
                    <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Transformar</h3>
                    <p className="text-muted-foreground">
                      Pressionar por mudanças nas práticas de estágio através de dados e evidências.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <AlertTriangle className="h-16 w-16 text-warning mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-6">O Problema que Enfrentamos</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-card p-8 rounded-lg shadow-card">
                  <p className="text-lg leading-relaxed mb-6">
                    No Brasil, a cultura do estágio se tornou sinônimo de exploração disfarçada de "oportunidade". 
                    Empresas aproveitam-se da vulnerabilidade dos estudantes para obter mão de obra barata, 
                    muitas vezes sem oferecer aprendizado real ou condições dignas de trabalho.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-destructive/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-3">Problemas Comuns</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Carga horária excessiva (acima das 6h permitidas)</li>
                        <li>• Atividades que não agregam conhecimento</li>
                        <li>• Assédio moral e ambiente tóxico</li>
                        <li>• Bolsas irrisórias ou inexistentes</li>
                        <li>• Falta de supervisão adequada</li>
                        <li>• Pressão psicológica e humilhação</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/10 p-6 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-3">Nossa Solução</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Transparência total sobre empresas</li>
                        <li>• Avaliações anônimas e seguras</li>
                        <li>• Sistema de denúncias protegido</li>
                        <li>• Informações sobre remuneração real</li>
                        <li>• Comunidade de apoio mútuo</li>
                        <li>• Dados para pressionar mudanças</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed">
                    <strong>Não somos contra os estágios.</strong> Somos contra a exploração. 
                    Acreditamos que estágios podem e devem ser experiências transformadoras, 
                    mas isso só acontece quando há transparência, respeito e condições dignas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Como Funciona</h2>
                <p className="text-xl text-muted-foreground">
                  Uma plataforma simples, segura e eficaz para compartilhar a verdade sobre estágios
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Avalie sua Experiência</h3>
                        <p className="text-muted-foreground">
                          Compartilhe sua experiência real de estágio de forma anônima e segura. 
                          Avalie critérios como ambiente, aprendizado, remuneração e exploração.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Pesquise Empresas</h3>
                        <p className="text-muted-foreground">
                          Consulte avaliações reais antes de aceitar uma oportunidade. 
                          Veja médias salariais, ambiente de trabalho e alertas da comunidade.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Denuncie Abusos</h3>
                        <p className="text-muted-foreground">
                          Caso sofra qualquer tipo de abuso ou exploração, denuncie de forma 
                          segura e anônima. Sua denúncia pode proteger outros estudantes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Construa o Futuro</h3>
                        <p className="text-muted-foreground">
                          Juntos, criamos uma base de dados que pressiona empresas a melhorar 
                          suas práticas e ajuda estudantes a fazer escolhas informadas.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">Nosso Impacto</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-white/80">Empresas Avaliadas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">2.5k+</div>
                  <div className="text-white/80">Estudantes Ativos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">89</div>
                  <div className="text-white/80">Denúncias Processadas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">12</div>
                  <div className="text-white/80">Empresas Mudaram</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Junte-se à Mudança</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Cada avaliação, cada denúncia, cada compartilhamento nos ajuda a construir 
                um futuro onde estágios são oportunidades reais de crescimento, não exploração.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/avaliar">Avaliar Empresa</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/empresas">Buscar Empresas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sobre;