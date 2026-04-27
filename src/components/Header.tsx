import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Empresas", href: "/empresas" },
    { name: "Denuncie", href: "/denuncia" },
    { name: "Sobre o Projeto", href: "/sobre" },
    { name: "Contato", href: "/contato" },
    { name: "Preciso de Ajuda", href: "/preciso-de-ajuda", highlight: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Awareness banner to set the activist tone */}
      <div className="bg-ink text-accent">
        <div className="container mx-auto px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-center">
          Transparência agora • Denuncie abusos • Proteja estudantes
        </div>
      </div>

      <div className="bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <span className="inline-flex items-center border-activist px-3 py-1 text-sm font-bold uppercase tracking-[0.2em] text-ink">
                Estágio
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-primary">
                Justo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-200 ${
                    item.highlight
                      ? "text-primary"
                      : isActive(item.href)
                      ? "text-ink"
                      : "text-muted-foreground hover:text-ink"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-accent rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-sm transition-all"
              >
                <Link to="/avaliar">Avaliar Empresa</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md shadow-lg transition-max-height duration-300 ${
              isMenuOpen ? "max-h-96 py-3" : "max-h-0 py-0"
            }`}
          >
            <div className="flex flex-col px-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md transition-colors duration-150 ${
                    isActive(item.href)
                      ? "text-ink bg-muted"
                      : item.highlight
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-ink hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                variant="default"
                size="sm"
                className="mt-2 w-full bg-primary text-primary-foreground rounded-full hover:bg-primary/90"
              >
                <Link to="/avaliar">Avaliar Empresa</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
