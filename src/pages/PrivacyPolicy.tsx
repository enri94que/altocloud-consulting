import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">
          Política de Privacidad
        </h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p className="text-sm text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">1. Responsable del Tratamiento</h2>
            <p>
              El responsable del tratamiento de los datos personales recogidos a través de este sitio web es 
              <strong> Altocloud Consulting</strong>, con domicilio en España.
            </p>
            <p>
              Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactarnos 
              a través de: <a href="mailto:info@altocloud.es" className="text-primary hover:underline">info@altocloud.es</a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">2. Datos que Recopilamos</h2>
            <p>Recopilamos los siguientes tipos de datos personales:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Datos de identificación:</strong> nombre, apellidos, empresa.</li>
              <li><strong>Datos de contacto:</strong> dirección de correo electrónico, número de teléfono.</li>
              <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">3. Finalidad del Tratamiento</h2>
            <p>Sus datos personales serán tratados con las siguientes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gestionar las solicitudes de información y contacto enviadas a través de los formularios.</li>
              <li>Responder a consultas y proporcionar información sobre nuestros servicios.</li>
              <li>Enviar comunicaciones comerciales sobre productos y servicios similares, previo consentimiento.</li>
              <li>Mejorar la experiencia de navegación y el funcionamiento del sitio web.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">4. Base Legal del Tratamiento</h2>
            <p>El tratamiento de sus datos se fundamenta en:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consentimiento:</strong> al enviar un formulario de contacto o solicitud de demo.</li>
              <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y la experiencia del usuario.</li>
              <li><strong>Ejecución de contrato:</strong> cuando sea necesario para la prestación de servicios solicitados.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">5. Conservación de Datos</h2>
            <p>
              Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad 
              para la que se recogieron, y posteriormente durante los plazos legalmente establecidos.
            </p>
            <p>
              Los datos de contacto comercial se conservarán hasta que solicite su supresión o revoque su consentimiento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">6. Derechos del Interesado</h2>
            <p>De acuerdo con el RGPD, usted tiene derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Acceso:</strong> conocer qué datos personales tratamos sobre usted.</li>
              <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong>Limitación:</strong> solicitar la limitación del tratamiento en determinadas circunstancias.</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede contactarnos en: 
              <a href="mailto:info@altocloud.es" className="text-primary hover:underline"> info@altocloud.es</a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">7. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales 
              contra el acceso no autorizado, la alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">8. Cookies</h2>
            <p>
              Este sitio web puede utilizar cookies para mejorar la experiencia del usuario. 
              Para más información, consulte nuestra política de cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">9. Reclamaciones</h2>
            <p>
              Si considera que el tratamiento de sus datos personales vulnera la normativa, tiene derecho a 
              presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): 
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> www.aepd.es</a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold text-foreground">10. Modificaciones</h2>
            <p>
              Nos reservamos el derecho a modificar esta política de privacidad para adaptarla a novedades 
              legislativas o jurisprudenciales. Los cambios serán publicados en esta página.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/" className="text-primary hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
