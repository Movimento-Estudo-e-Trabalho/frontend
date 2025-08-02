import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Upload, Eye } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Avaliar = () => {
  const [formData, setFormData] = useState({
    empresa: "",
    area: "",
    tempoAtuacao: "",
    tipoContrato: "",
    bolsa: "",
    ambiente: 0,
    supervisao: 0,
    aprendizado: 0,
    cargaTrabalho: 0,
    exploracao: 0,
    textoLivre: "",
    anexos: null as File[] | null
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envio
    toast.success("Avaliação enviada com sucesso! Obrigado por contribuir com nossa comunidade.");
    console.log("Avaliação enviada:", formData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({ ...formData, anexos: Array.from(files) });
    }
  };

  const StarRating = ({ value, onChange, label }: { 
    value: number; 
    onChange: (value: number) => void; 
    label: string; 
  }) => {
    return (
      <div className="space-y-2">
        <Label className="text-sm font-medium">{label}</Label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-6 w-6 cursor-pointer transition-colors ${
                star <= value
                  ? "fill-accent text-accent"
                  : "text-muted-foreground hover:text-accent"
              }`}
              onClick={() => onChange(star)}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          {value === 0 && "Clique para avaliar"}
          {value === 1 && "Muito ruim"}
          {value === 2 && "Ruim"}
          {value === 3 && "Regular"}
          {value === 4 && "Bom"}
          {value === 5 && "Excelente"}
        </p>
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="empresa">Nome da Empresa *</Label>
              <Input
                id="empresa"
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                placeholder="Nome completo da empresa"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="area">Área do Estágio *</Label>
                <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a área" />
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
                    <SelectItem value="vendas">Vendas</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="tempoAtuacao">Tempo de Atuação *</Label>
                <Select value={formData.tempoAtuacao} onValueChange={(value) => setFormData({ ...formData, tempoAtuacao: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Quanto tempo trabalhou" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="menos-1-mes">Menos de 1 mês</SelectItem>
                    <SelectItem value="1-3-meses">1 a 3 meses</SelectItem>
                    <SelectItem value="3-6-meses">3 a 6 meses</SelectItem>
                    <SelectItem value="6-12-meses">6 a 12 meses</SelectItem>
                    <SelectItem value="mais-12-meses">Mais de 12 meses</SelectItem>
                    <SelectItem value="ainda-trabalho">Ainda trabalho lá</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tipoContrato">Tipo de Contrato *</Label>
                <Select value={formData.tipoContrato} onValueChange={(value) => setFormData({ ...formData, tipoContrato: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de vínculo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="estagio-remunerado">Estágio Remunerado</SelectItem>
                    <SelectItem value="estagio-nao-remunerado">Estágio Não Remunerado</SelectItem>
                    <SelectItem value="estagio-obrigatorio">Estágio Obrigatório</SelectItem>
                    <SelectItem value="trainee">Programa Trainee</SelectItem>
                    <SelectItem value="jovem-aprendiz">Jovem Aprendiz</SelectItem>
                    <SelectItem value="voluntario">Trabalho Voluntário</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="bolsa">Bolsa/Remuneração *</Label>
                <Select value={formData.bolsa} onValueChange={(value) => setFormData({ ...formData, bolsa: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Valor da bolsa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nao-remunerado">Não remunerado</SelectItem>
                    <SelectItem value="ate-300">Até R$ 300</SelectItem>
                    <SelectItem value="300-500">R$ 300 - R$ 500</SelectItem>
                    <SelectItem value="500-800">R$ 500 - R$ 800</SelectItem>
                    <SelectItem value="800-1200">R$ 800 - R$ 1.200</SelectItem>
                    <SelectItem value="1200-1600">R$ 1.200 - R$ 1.600</SelectItem>
                    <SelectItem value="1600-2000">R$ 1.600 - R$ 2.000</SelectItem>
                    <SelectItem value="acima-2000">Acima de R$ 2.000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Avalie sua experiência</h3>
              <p className="text-muted-foreground">
                Seja honesto e específico. Suas avaliações ajudam outros estudantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StarRating
                value={formData.ambiente}
                onChange={(value) => setFormData({ ...formData, ambiente: value })}
                label="Ambiente de Trabalho"
              />

              <StarRating
                value={formData.supervisao}
                onChange={(value) => setFormData({ ...formData, supervisao: value })}
                label="Qualidade da Supervisão"
              />

              <StarRating
                value={formData.aprendizado}
                onChange={(value) => setFormData({ ...formData, aprendizado: value })}
                label="Aprendizado Real"
              />

              <StarRating
                value={formData.cargaTrabalho}
                onChange={(value) => setFormData({ ...formData, cargaTrabalho: value })}
                label="Carga de Trabalho vs Bolsa"
              />
            </div>

            <div className="max-w-md mx-auto">
              <StarRating
                value={formData.exploracao}
                onChange={(value) => setFormData({ ...formData, exploracao: value })}
                label="Nível de Exploração (1 = muito explorado, 5 = nada explorado)"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="textoLivre">Relato Detalhado</Label>
              <Textarea
                id="textoLivre"
                value={formData.textoLivre}
                onChange={(e) => setFormData({ ...formData, textoLivre: e.target.value })}
                placeholder="Conte sobre sua experiência: o que foi bom, o que foi ruim, quais atividades realizou, como foi o ambiente, supervisão, etc."
                className="min-h-[150px]"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Seja específico! Detalhe situações, conte o que aprendeu (ou não), como foi tratado, etc.
              </p>
            </div>

            <div>
              <Label htmlFor="anexos">Anexos (Opcional)</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6">
                <div className="text-center">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Anexe documentos que comprovem sua experiência
                  </p>
                  <input
                    id="anexos"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => document.getElementById('anexos')?.click()}
                  >
                    Selecionar Arquivos
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Contrato, certificados, e-mails, etc.
                  </p>
                </div>
              </div>
              {formData.anexos && formData.anexos.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium">Arquivos selecionados:</p>
                  <ul className="text-sm text-muted-foreground">
                    {formData.anexos.map((file, index) => (
                      <li key={index}>• {file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <Eye className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-2">Revisão Final</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><strong>Empresa:</strong> {formData.empresa || "Não informado"}</p>
                    <p><strong>Área:</strong> {formData.area || "Não informado"}</p>
                    <p><strong>Bolsa:</strong> {formData.bolsa || "Não informado"}</p>
                    <p><strong>Avaliação Geral:</strong> {
                      formData.ambiente && formData.supervisao && formData.aprendizado && formData.cargaTrabalho && formData.exploracao
                        ? ((formData.ambiente + formData.supervisao + formData.aprendizado + formData.cargaTrabalho + formData.exploracao) / 5).toFixed(1)
                        : "Não concluído"
                    }/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Avaliar Empresa</h1>
              <p className="text-xl text-white/90">
                Compartilhe sua experiência real e ajude outros estudantes
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Etapa {currentStep} de {totalSteps}</span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round((currentStep / totalSteps) * 100)}% concluído
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form Card */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {currentStep === 1 && "Informações Básicas"}
                    {currentStep === 2 && "Avaliação por Critérios"}
                    {currentStep === 3 && "Relato e Anexos"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    {renderStep()}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                        disabled={currentStep === 1}
                      >
                        Anterior
                      </Button>

                      {currentStep < totalSteps ? (
                        <Button
                          type="button"
                          onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
                        >
                          Próximo
                        </Button>
                      ) : (
                        <Button type="submit">
                          Enviar Avaliação
                        </Button>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Privacy Notice */}
              <Card className="mt-6 border-primary/20 bg-primary/5">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Privacidade:</strong> Sua avaliação será publicada de forma anônima. 
                    Não compartilhamos dados pessoais. Todas as informações são criptografadas e seguras.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Avaliar;