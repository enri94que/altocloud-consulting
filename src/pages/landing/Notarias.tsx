import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, 
  Users, 
  Clock, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Workflow,
  BarChart3,
  Lock
} from "lucide-react";
import logoAltocloudAsset from "@/assets/logo-altocloud.png.asset.json";
const logoAltocloud = logoAltocloudAsset.url;
import { Link } from "react-router-dom";

const Notarias = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    notaria: "",
    mensaje: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Solicitud enviada",
      description: "Nos pondremos en contacto contigo en breve.",
    });
    
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      notaria: "",
      mensaje: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    {
      icon: FileText,
      title: "Gestión Documental Integrada",
      description: "Centraliza todos los documentos de tus clientes y operaciones en un único sistema seguro y accesible."
    },
    {
      icon: Users,
      title: "Relación con Clientes",
      description: "Mantén un historial completo de cada cliente, sus operaciones pasadas y futuras necesidades."
    },
    {
      icon: Clock,
      title: "Automatización de Procesos",
      description: "Reduce el tiempo administrativo con flujos de trabajo automatizados y recordatorios inteligentes."
    },
    {
      icon: Shield,
      title: "Seguridad y Cumplimiento",
      description: "Cumple con todas las normativas de protección de datos con la seguridad de nivel empresarial de Salesforce."
    },
    {
      icon: BarChart3,
      title: "Informes y Análisis",
      description: "Obtén visibilidad completa del rendimiento de tu notaría con dashboards personalizados."
    },
    {
      icon: Workflow,
      title: "Integración con Sistemas",
      description: "Conecta Salesforce con tus herramientas actuales de facturación, contabilidad y gestión."
    }
  ];

  const features = [
    "Seguimiento de escrituras y actas",
    "Gestión de agenda y citas",
    "Control de plazos legales",
    "Facturación automatizada",
    "Portal de clientes",
    "Firma digital integrada"
  ];

  return (
    <>
      <Helmet>
        <title>Salesforce para Notarías | CRM Especializado | Altocloud</title>
        <meta 
          name="description" 
          content="Optimiza la gestión de tu notaría con Salesforce. Gestión documental, relación con clientes, automatización de procesos y cumplimiento normativo. Consultor certificado." 
        />
        <link rel="canonical" href="https://altocloud-consulting.com/notarias" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-background border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/">
                <img src={logoAltocloud} alt="Altocloud Consulting" className="h-10 object-contain" />
              </Link>
              <a href="tel:+34912560299" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+34 912 56 02 99</span>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#032D60] via-[#0176D3] to-[#1B96FF] overflow-hidden">
          <div className="absolute inset-0 bg-white/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Especialistas en Salesforce para Notarías
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Digitaliza tu <span className="text-orange-400">Notaría</span> con Salesforce
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
                  Optimiza la gestión de clientes, documentos y procesos con el CRM líder mundial. 
                  Aumenta la eficiencia y ofrece un servicio excepcional.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a href="#contacto">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                      Solicitar demostración
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* Contact Form Card */}
              <Card className="bg-white/95 backdrop-blur shadow-2xl border-0" id="contacto">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Solicita información
                    </h2>
                    <p className="text-muted-foreground">
                      Te contactaremos en menos de 24 horas
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre completo *</Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          placeholder="+34 600 000 000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notaria">Nombre de la Notaría</Label>
                        <Input
                          id="notaria"
                          name="notaria"
                          value={formData.notaria}
                          onChange={handleChange}
                          placeholder="Notaría de..."
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mensaje">¿Cómo podemos ayudarte?</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tus necesidades..."
                        rows={3}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-salesforce-blue hover:bg-salesforce-blue/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Solicitar información"}
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground">
                      Al enviar este formulario aceptas nuestra{" "}
                      <Link to="/politica-privacidad" className="underline hover:text-foreground">
                        política de privacidad
                      </Link>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="mb-4">Beneficios</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué Salesforce para tu Notaría?
              </h2>
              <p className="text-lg text-muted-foreground">
                Transforma la manera en que gestionas tu notaría con herramientas diseñadas 
                para aumentar la productividad y mejorar la experiencia del cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border hover:border-salesforce-blue/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-salesforce-blue/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-salesforce-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">Funcionalidades</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Todo lo que necesitas para gestionar tu notaría
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Salesforce se adapta a las necesidades específicas de tu notaría, 
                  ofreciendo herramientas especializadas para cada área de tu práctica.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a href="#contacto">
                    <Button size="lg" className="bg-salesforce-blue hover:bg-salesforce-blue/90">
                      Ver demostración personalizada
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-salesforce-blue/20 to-orange-500/20 rounded-2xl p-8 lg:p-12">
                  <div className="bg-background rounded-xl shadow-xl p-6 space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-border">
                      <Building2 className="h-8 w-8 text-salesforce-blue" />
                      <div>
                        <h4 className="font-semibold">Panel de Notaría</h4>
                        <p className="text-sm text-muted-foreground">Vista general del día</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Escrituras pendientes</span>
                        <Badge>12</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Citas hoy</span>
                        <Badge variant="secondary">8</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm">Documentos por firmar</span>
                        <Badge variant="outline">5</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Lock className="h-5 w-5" />
                <span>Datos 100% seguros</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5" />
                <span>Cumplimiento RGPD</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5" />
                <span>Consultor Certificado Salesforce</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#032D60] to-[#0176D3]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para transformar tu notaría?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Agenda una demostración personalizada y descubre cómo Salesforce 
              puede ayudarte a optimizar tu práctica notarial.
            </p>
            <a href="#contacto">
              <Button size="lg" variant="secondary">
                Solicitar demostración gratuita
              </Button>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <Link to="/">
                <img src={logoAltocloud} alt="Altocloud Consulting" className="h-8 object-contain" />
              </Link>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="mailto:enrique@altocloud-consulting.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">enrique@altocloud-consulting.com</span>
                </a>
                <a href="tel:+34912560299" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+34 912 56 02 99</span>
                </a>
              </div>
              <Link to="/politica-privacidad" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Notarias;
