import { Helmet } from 'react-helmet-async';
import logoAltocloudAsset from "@/assets/logo-altocloud.png.asset.json";

interface OrganizationSchemaProps {
  type: 'organization';
}

interface ServiceSchemaProps {
  type: 'service';
  name: string;
  description: string;
  url: string;
}

interface WebPageSchemaProps {
  type: 'webpage';
  name: string;
  description: string;
  url: string;
}

type StructuredDataProps = OrganizationSchemaProps | ServiceSchemaProps | WebPageSchemaProps;

const StructuredData = (props: StructuredDataProps) => {
  const siteUrl = 'https://altocloud.es';

  const getSchema = () => {
    switch (props.type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Altocloud',
          description: 'Consultor de Salesforce® certificado especializado en implementación de Sales Cloud, Service Cloud, Nonprofit Cloud y Starter Suite.',
          url: siteUrl,
          logo: `${siteUrl}${logoAltocloudAsset.url}`,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            availableLanguage: ['Spanish', 'English'],
          },
          sameAs: [],
          areaServed: {
            '@type': 'Country',
            name: 'Spain',
          },
          knowsAbout: [
            'Salesforce',
            'Sales Cloud',
            'Service Cloud',
            'Nonprofit Cloud',
            'CRM',
            'Customer Relationship Management',
          ],
        };
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: props.name,
          description: props.description,
          url: `${siteUrl}${props.url}`,
          provider: {
            '@type': 'Organization',
            name: 'AltoCloud',
            url: siteUrl,
          },
          areaServed: {
            '@type': 'Country',
            name: 'Spain',
          },
          serviceType: 'Consultoría CRM',
        };
      case 'webpage':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: props.name,
          description: props.description,
          url: `${siteUrl}${props.url}`,
          isPartOf: {
            '@type': 'WebSite',
            name: 'AltoCloud',
            url: siteUrl,
          },
        };
      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
