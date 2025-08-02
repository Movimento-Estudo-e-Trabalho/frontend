import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Chega de romantizar
            <br />
            <span className="text-accent">o estágio precarizado</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Transparência nas práticas de estágio. Avalie empresas, denuncie abusos 
            e ajude outros estudantes a tomar decisões informadas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link to="/empresas">
                <Search className="mr-2 h-5 w-5" />
                Buscar Empresas
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/denuncia">
                Denunciar Abuso
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-white/80">Empresas Avaliadas</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">2.5k+</div>
              <div className="text-white/80">Avaliações Reais</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-white/80">Anonimato Garantido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;