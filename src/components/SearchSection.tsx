import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, Briefcase, DollarSign } from "lucide-react";
import { useState } from "react";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");

  const handleSearch = () => {
    // TODO: Implementar lógica de busca
    console.log({ searchTerm, area, city, salary });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              Acesso rápido a informação real
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Busque empresas por área, cidade ou remuneração</h2>
            <p className="text-muted-foreground text-lg mt-3">
              Encontre informações diretas de quem viveu o estágio.
            </p>
          </div>

          {/* Search panel with activist framing */}
          <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 border-activist">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Nome da empresa..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={area} onValueChange={setArea}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Área" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tecnologia">Tecnologia</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="administracao">Administração</SelectItem>
                  <SelectItem value="direito">Direito</SelectItem>
                  <SelectItem value="engenharia">Engenharia</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="rh">Recursos Humanos</SelectItem>
                  <SelectItem value="financas">Finanças</SelectItem>
                </SelectContent>
              </Select>

              <Select value={city} onValueChange={setCity}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Cidade" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sao-paulo">São Paulo</SelectItem>
                  <SelectItem value="rio-janeiro">Rio de Janeiro</SelectItem>
                  <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
                  <SelectItem value="brasilia">Brasília</SelectItem>
                  <SelectItem value="salvador">Salvador</SelectItem>
                  <SelectItem value="curitiba">Curitiba</SelectItem>
                  <SelectItem value="porto-alegre">Porto Alegre</SelectItem>
                  <SelectItem value="recife">Recife</SelectItem>
                </SelectContent>
              </Select>

              <Select value={salary} onValueChange={setSalary}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Bolsa" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nao-remunerado">Não remunerado</SelectItem>
                  <SelectItem value="ate-500">Até R$ 500</SelectItem>
                  <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
                  <SelectItem value="1000-1500">R$ 1.000 - R$ 1.500</SelectItem>
                  <SelectItem value="1500-2000">R$ 1.500 - R$ 2.000</SelectItem>
                  <SelectItem value="acima-2000">Acima de R$ 2.000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button onClick={handleSearch} className="flex-1 bg-primary text-primary-foreground">
                <Search className="mr-2 h-4 w-4" />
                Buscar Empresas
              </Button>
              <Button variant="outline" className="sm:w-auto border-ink text-ink hover:bg-ink/5">
                <Filter className="mr-2 h-4 w-4" />
                Filtros Avançados
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;