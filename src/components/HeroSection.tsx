import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-ink text-white">
      {/* Visual manifesto backdrop */}
      <div className="absolute inset-0">
        <img
          src="/imgs/estudante.jpg"
          alt="Estudantes unidos contra a precarização"
          className="w-full h-full object-cover opacity-65 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-hero opacity-90" />
        <div className="absolute inset-0 bg-activist-stripes opacity-50" />
        <div className="absolute inset-0 bg-signal" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div className="space-y-6 animate-rise">
            {/* Tagline with militant framing */}
            <span className="inline-flex items-center border-2 border-WHITE/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              ICEX UFMG
            </span>

            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-glow">
              Chega de romantizar
              <br />
              <span className="inline-flex items-center bg-accent text-ink px-4 py-2 mt-4 uppercase tracking-[0.12em]">
                O estágio precarizado.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
              Denuncie exploração, exponha abusos e fortaleça a pressão coletiva.
              Informação pública protege quem está começando.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-ink hover:bg-accent/90">
                <Link to="/empresas">
                  <Search className="mr-2 h-5 w-5" />
                  Pesquisar Empresas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                <Link to="/denuncia">Registrar Denúncia</Link>
              </Button>
            </div>
          </div>

          {/* Movement stats as campaign posters */}
          <div className="space-y-6 animate-rise">
            {/* Tactical stat block for militant energy */}
            <div className="bg-white/95 text-ink rounded-2xl p-6 shadow-pulse border-activist">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                Termômetro do movimento
              </p>
              <h2 className="text-3xl font-bold mt-3">Transparência que enfrenta abuso</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Cada relato amplia a pressão sobre empresas e instituições.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <p className="text-xs text-muted-foreground">Empresas</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">2.5k+</div>
                  <p className="text-xs text-muted-foreground">Avaliações</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <p className="text-xs text-muted-foreground">Anonimato</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-white/80 rounded-2xl p-6 bg-white/5">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Ação imediata</p>
              <h3 className="text-2xl font-bold mt-3">Compartilhe sua experiência hoje.</h3>
              <Button asChild size="sm" className="mt-4 bg-secondary text-white hover:bg-secondary-700">
                <Link to="/avaliar">Avaliar Empresa</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
