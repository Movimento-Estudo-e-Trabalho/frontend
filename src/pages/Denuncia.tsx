import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, AlertTriangle, Lock, FileText, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { denunciaStats } from "@/data/websiteStats";

const Denuncia = () => {
  const [formData, setFormData] = useState({
    empresa: "",
    tipoAbuso: "",
    relato: "",
    anexos: null as File[] | null,
    contatoPosterior: false,
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envio
    toast.success("Denúncia enviada com sucesso. Seu relato é importante para nossa comunidade.");
    console.log("Denúncia enviada:", formData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({ ...formData, anexos: Array.from(files) });
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
              <div className="flex justify-center mb-4">
                <Shield className="h-16 w-16 text-accent" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Denuncie Práticas Abusivas</h1>
              <p className="text-xl text-white/90">
                Seu relato é seguro, anônimo e pode proteger outros estudantes
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* Security Notice */}
              <Card className="mb-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Sua Privacidade é Garantida</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Todos os dados são criptografados e armazenados de forma segura</li>
                        <li>• Sua identidade permanece completamente anônima</li>
                        <li>• Não compartilhamos informações com terceiros</li>
                        <li>• Você pode escolher se deseja ser contactado posteriormente</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-5 w-5" />
                        Formulário de Denúncia
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Empresa */}
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

                        {/* Tipo de Abuso */}
                        <div>
                          <Label htmlFor="tipoAbuso">Tipo de Abuso *</Label>
                          <Select value={formData.tipoAbuso} onValueChange={(value) => setFormData({ ...formData, tipoAbuso: value })}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o tipo de abuso" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="assedio-moral">Assédio Moral</SelectItem>
                              <SelectItem value="assedio-sexual">Assédio Sexual</SelectItem>
                              <SelectItem value="carga-excessiva">Carga de Trabalho Excessiva</SelectItem>
                              <SelectItem value="humilhacao">Humilhação</SelectItem>
                              <SelectItem value="discriminacao">Discriminação</SelectItem>
                              <SelectItem value="exploracao-trabalho">Exploração de Mão de Obra</SelectItem>
                              <SelectItem value="falta-supervisao">Falta de Supervisão</SelectItem>
                              <SelectItem value="ambiente-toxico">Ambiente Tóxico</SelectItem>
                              <SelectItem value="outros">Outros</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Relato */}
                        <div>
                          <Label htmlFor="relato">Relato Detalhado *</Label>
                          <Textarea
                            id="relato"
                            value={formData.relato}
                            onChange={(e) => setFormData({ ...formData, relato: e.target.value })}
                            placeholder="Descreva em detalhes o que aconteceu. Sinta-se livre para incluir ou omitir datas; evite mencionar ou nomear pessoas diretamente envolvidas."
                            className="min-h-[150px]"
                            required
                          />
                          <p className="text-xs text-muted-foreground mt-1">
                            Quanto mais detalhes, melhor poderemos entender e categorizar sua denúncia.
                          </p>
                        </div>

                        {/* Upload de Anexos */}
                        <div>
                          <Label htmlFor="anexos">Evidências (Opcional)</Label>
                          <div className="border-2 border-dashed border-border rounded-lg p-6">
                            <div className="text-center">
                              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground mb-2">
                                Arraste arquivos aqui ou clique para selecionar
                              </p>
                              <input
                                id="anexos"
                                type="file"
                                multiple
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
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
                                PDF, DOC, imagens até 10MB cada
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

                        {/* Contato Posterior */}
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="contato"
                              checked={formData.contatoPosterior}
                              onCheckedChange={(checked) =>
                                setFormData({ ...formData, contatoPosterior: checked as boolean })
                              }
                            />
                            <Label htmlFor="contato" className="text-sm">
                              Aceito ser contactado posteriormente (opcional e seguro)
                            </Label>
                          </div>

                          {formData.contatoPosterior && (
                            <div>
                              <Label htmlFor="email">Email de Contato</Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="seu.email@exemplo.com"
                              />
                              <p className="text-xs text-muted-foreground mt-1">
                                Usado apenas para acompanhamento da denúncia. Nunca compartilhado.
                              </p>
                            </div>
                          )}
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                          Enviar Denúncia
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">

                  {/* Help Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Precisa de Ajuda?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Centro de Valorização da Vida</h4>
                        <p className="text-sm text-muted-foreground">
                          Apoio emocional e prevenção do suicídio
                        </p>
                        <p className="font-medium">188 (24h)</p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Disque 100</h4>
                        <p className="text-sm text-muted-foreground">
                          Denúncias de violações de direitos humanos
                        </p>
                        <p className="font-medium">100 (24h)</p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Ministério Público do Trabalho</h4>
                        <p className="text-sm text-muted-foreground">
                          Denúncias trabalhistas
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-2"
                          onClick={() => window.open('https://denuncia.sit.trabalho.gov.br/home', '_blank')}
                        >
                          Acessar Site
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Stats Card */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Impacto das Denúncias</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Denúncias recebidas</span>
                          <span className="font-semibold">{denunciaStats.denunciasRecebidas}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Empresas alertadas</span>
                          <span className="font-semibold">{denunciaStats.empresasAlertadas}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Estudantes protegidos</span>
                          <span className="font-semibold">{denunciaStats.estudantesProtegidos}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Denuncia;