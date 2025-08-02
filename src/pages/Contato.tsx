import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    tipo: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envio
    toast.success("Mensagem enviada com sucesso! Responderemos em breve.");
    console.log("Contato enviado:", formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Page Header */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
              <p className="text-xl text-white/90">
                Estamos aqui para ouvir suas sugestões, dúvidas e feedbacks
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Envie sua Mensagem
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="nome">Nome Completo *</Label>
                            <Input
                              id="nome"
                              value={formData.nome}
                              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                              placeholder="Seu nome"
                              required
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="seu.email@exemplo.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="tipo">Tipo de Contato *</Label>
                            <Select value={formData.tipo} onValueChange={(value) => setFormData({ ...formData, tipo: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o tipo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="duvida">Dúvida</SelectItem>
                                <SelectItem value="sugestao">Sugestão</SelectItem>
                                <SelectItem value="feedback">Feedback</SelectItem>
                                <SelectItem value="denuncia-tecnica">Problema Técnico</SelectItem>
                                <SelectItem value="parceria">Parceria</SelectItem>
                                <SelectItem value="imprensa">Imprensa</SelectItem>
                                <SelectItem value="outros">Outros</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="assunto">Assunto *</Label>
                            <Input
                              id="assunto"
                              value={formData.assunto}
                              onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                              placeholder="Resumo do seu contato"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="mensagem">Mensagem *</Label>
                          <Textarea
                            id="mensagem"
                            value={formData.mensagem}
                            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                            placeholder="Descreva sua mensagem em detalhes..."
                            className="min-h-[120px]"
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Info and FAQ */}
                <div className="space-y-6">
                  
                  {/* Contact Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Informações de Contato</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">contato@estagiojusto.com.br</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Horário de Atendimento</p>
                          <p className="text-sm text-muted-foreground">
                            Segunda a Sexta: 9h às 18h<br />
                            Sábado: 9h às 14h
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Tempo de Resposta</p>
                          <p className="text-sm text-muted-foreground">
                            Respondemos em até 24h durante dias úteis
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* FAQ Quick */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Perguntas Frequentes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Como posso avaliar uma empresa?</h4>
                        <p className="text-sm text-muted-foreground">
                          Acesse a página "Empresas" e clique em "Avaliar Empresa" ou use o formulário de avaliação.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Minhas denúncias são realmente anônimas?</h4>
                        <p className="text-sm text-muted-foreground">
                          Sim, garantimos total anonimato. Não compartilhamos dados pessoais com terceiros.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Como posso sugerir melhorias?</h4>
                        <p className="text-sm text-muted-foreground">
                          Use este formulário selecionando "Sugestão" como tipo de contato.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-medium mb-1">Empresas podem remover avaliações?</h4>
                        <p className="text-sm text-muted-foreground">
                          Não. Mantemos todas as avaliações legítimas para garantir transparência.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Emergency Contacts */}
                  <Card className="border-warning/20">
                    <CardHeader>
                      <CardTitle className="text-warning">Emergência ou Crise?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-medium">Centro de Valorização da Vida</h4>
                        <p className="text-sm text-muted-foreground">Apoio emocional 24h</p>
                        <p className="font-medium">📞 188</p>
                      </div>

                      <div>
                        <h4 className="font-medium">Disque Direitos Humanos</h4>
                        <p className="text-sm text-muted-foreground">Denúncias de violações</p>
                        <p className="font-medium">📞 100</p>
                      </div>

                      <div>
                        <h4 className="font-medium">Para casos graves</h4>
                        <p className="text-sm text-muted-foreground">
                          Em situações de risco imediato, procure ajuda através dos canais oficiais ou emergência.
                        </p>
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

export default Contato;