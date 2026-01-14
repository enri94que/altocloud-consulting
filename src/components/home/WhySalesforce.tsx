import { CheckCircle2, Cloud, Shield, BarChart3, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Cloud,
    title: "100% en la nube",
    description: "Accede a tus datos desde cualquier lugar y dispositivo.",
  },
  {
    icon: Shield,
    title: "Seguridad empresarial",
    description: "Cumplimiento normativo y protección de datos de primer nivel.",
  },
  {
    icon: BarChart3,
    title: "Análisis avanzado",
    description: "Dashboards e informes en tiempo real para tomar mejores decisiones.",
  },
  {
    icon: Users,
    title: "Visión 360° del cliente",
    description: "Unifica toda la información de tus clientes en un solo lugar.",
  },
  {
    icon: Sparkles,
    title: "IA integrada",
    description: "Aprovecha Einstein AI para predicciones y automatizaciones inteligentes.",
  },
  {
    icon: CheckCircle2,
    title: "Escalabilidad",
    description: "Crece sin límites. Salesforce se adapta a empresas de cualquier tamaño.",
  },
];

const WhySalesforce = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              ¿Por qué Salesforce?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              El CRM #1 del mundo por una razón
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Salesforce no es solo un CRM, es la plataforma líder en automatización de ventas Salesforce 
              y gestión de clientes empresarial. Con más de 150.000 empresas confiando en Salesforce, 
              es la elección preferida para la transformación digital España. Como consultor Salesforce España, 
              te ayudo con la implementación CRM profesional que tu negocio necesita.
            </p>
            <div className="flex items-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary">150K+</div>
                <div className="text-sm text-muted-foreground">Empresas</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold text-primary">#1</div>
                <div className="text-sm text-muted-foreground">CRM Global</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <benefit.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySalesforce;
