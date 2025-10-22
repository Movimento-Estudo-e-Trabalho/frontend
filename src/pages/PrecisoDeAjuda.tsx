import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Heart, Shield, Users, BookOpen, MessageCircle, AlertTriangle } from "lucide-react";
import { emergencyContacts, supportResources } from "@/data/emergencyContacts";

const PrecisoDeAjuda = () => {
    return (
        <div className="min-h-screen">
            <Header />

            <main className="pt-16">
                {/* Page Header */}
                <section className="bg-gradient-hero text-black py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="flex justify-center mb-4">
                                <Heart className="h-16 w-16 text-accent" />
                            </div>
                            <h1 className="text-4xl font-bold mb-4">Preciso de Ajuda</h1>
                            <p className="text-xl text-black/90">
                                Você não está sozinho. Aqui você encontra apoio e recursos para sua situação
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">

                            {/* Emergency Notice */}
                            <Card className="mb-8 border-red-200 bg-red-50">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2 text-red-800">Situação de Emergência?</h3>
                                            <p className="text-sm text-red-700 mb-3">
                                                Se você está em perigo imediato ou pensando em se machucar, ligue para o CVV agora:
                                            </p>
                                            <Button
                                                className="bg-red-600 hover:bg-red-700 text-white"
                                                onClick={() => window.open('tel:188')}
                                            >
                                                <Phone className="mr-2 h-4 w-4" />
                                                LIGAR AGORA - 188
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                                {/* Main Content */}
                                <div className="lg:col-span-2 space-y-6">

                                    {/* Emergency Contacts */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <Phone className="mr-2 h-5 w-5" />
                                                Contatos de Emergência
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {emergencyContacts.map((contact) => (
                                                    <div key={contact.phone} className="p-4 border rounded-lg">
                                                        <h4 className="font-semibold mb-2">{contact.name}</h4>
                                                        <p className="text-sm text-muted-foreground mb-2">
                                                            {contact.description}
                                                        </p>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="w-full"
                                                            onClick={() => window.open(`tel:${contact.phone}`)}
                                                        >
                                                            <Phone className="mr-2 h-4 w-4" />
                                                            {contact.phone}{contact.phone === "188" || contact.phone === "100" ? " (24h)" : ""}
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Support Resources */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <Shield className="mr-2 h-5 w-5" />
                                                Recursos de Apoio
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {supportResources.filter(resource => resource.type === "legal" || resource.type === "government").map((resource) => (
                                                    <div key={resource.name} className="p-4 border rounded-lg">
                                                        <h4 className="font-semibold mb-2">{resource.name}</h4>
                                                        <p className="text-sm text-muted-foreground mb-2">
                                                            {resource.description}
                                                        </p>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="w-full"
                                                            onClick={() => window.open(resource.url, '_blank')}
                                                        >
                                                            Acessar Site
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Mental Health Support */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <Heart className="mr-2 h-5 w-5" />
                                                Apoio à Saúde Mental
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {supportResources.filter(resource => resource.type === "health").map((resource) => (
                                                    <div key={resource.name} className="p-4 border rounded-lg">
                                                        <h4 className="font-semibold mb-2">{resource.name}</h4>
                                                        <p className="text-sm text-muted-foreground mb-2">
                                                            {resource.description}
                                                        </p>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="w-full"
                                                            onClick={() => window.open(resource.url, '_blank')}
                                                        >
                                                            {resource.name.includes("CAPS") ? "Encontrar CAPS" : "Mais Informações"}
                                                        </Button>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6">

                                    {/* Quick Actions */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Ações Rápidas</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <Button
                                                variant="default"
                                                className="w-full"
                                                onClick={() => window.open('/denuncia', '_self')}
                                            >
                                                <Shield className="mr-2 h-4 w-4" />
                                                Fazer Denúncia
                                            </Button>

                                            <Button
                                                variant="outline"
                                                className="w-full"
                                                onClick={() => window.open('/contato', '_self')}
                                            >
                                                <MessageCircle className="mr-2 h-4 w-4" />
                                                Falar Conosco
                                            </Button>

                                            <Button
                                                variant="outline"
                                                className="w-full"
                                                onClick={() => window.open('/sobre', '_self')}
                                            >
                                                <BookOpen className="mr-2 h-4 w-4" />
                                                Sobre o Projeto
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    {/* Support Community */}
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Comunidade de Apoio</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <Users className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="font-medium">Grupos de Apoio</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            Conecte-se com outros estudantes
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <MessageCircle className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="font-medium">Chat de Apoio</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            Conversas anônimas e seguras
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <BookOpen className="h-5 w-5 text-primary" />
                                                    <div>
                                                        <p className="font-medium">Recursos Educativos</p>
                                                        <p className="text-sm text-muted-foreground">
                                                            Materiais sobre direitos trabalhistas
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Important Notice */}
                                    <Card className="border-blue-200 bg-blue-50">
                                        <CardHeader>
                                            <CardTitle className="text-lg text-blue-800">Lembre-se</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-blue-700">
                                                • Você não está sozinho<br />
                                                • Pedir ajuda é um sinal de força<br />
                                                • Existem pessoas prontas para te apoiar<br />
                                                • Sua situação é temporária
                                            </p>
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

export default PrecisoDeAjuda; 