

## Plan: Corregir Layout en páginas de servicios

### Problema detectado

Las páginas de **Optimización**, **Administración** y **Consultoría** no incluyen el componente `Layout` que proporciona el menú de navegación y el footer. Actualmente usan:

```jsx
return (
  <>
    <SEO ... />
    <main>...</main>
  </>
);
```

Mientras que la página de **Implementación** (que funciona correctamente) usa:

```jsx
return (
  <Layout>
    <SEO ... />
    ...secciones...
  </Layout>
);
```

### Solución

Modificar las tres páginas para que usen el componente `Layout` igual que Implementación:

### 1. OptimizacionAjustes.tsx

**Cambios:**
- Añadir import: `import Layout from "@/components/layout/Layout";`
- Envolver contenido con `<Layout>` en lugar de fragmento `<>`
- Eliminar el tag `<main>` (Layout ya proporciona estructura)
- Adaptar la sección hero para usar `bg-hero-gradient` como en Implementación

### 2. AdministracionSoporte.tsx

**Cambios:**
- Añadir import: `import Layout from "@/components/layout/Layout";`
- Envolver contenido con `<Layout>` en lugar de fragmento `<>`
- Eliminar el tag `<main>`
- Adaptar la sección hero para usar `bg-hero-gradient`

### 3. ConsultoriaEstrategica.tsx

**Cambios:**
- Añadir import: `import Layout from "@/components/layout/Layout";`
- Envolver contenido con `<Layout>` en lugar de fragmento `<>`
- Eliminar el tag `<main>`
- Adaptar la sección hero para usar `bg-hero-gradient`

### Estructura final de cada archivo

```jsx
import Layout from "@/components/layout/Layout";
// ... otros imports

const NombrePagina = () => {
  return (
    <Layout>
      <SEO ... />
      <section className="py-20 bg-hero-gradient">
        {/* Hero content */}
      </section>
      {/* Otras secciones */}
    </Layout>
  );
};
```

### Beneficios

- **Consistencia visual**: Todas las páginas de servicios tendrán el mismo look and feel
- **Navegación funcional**: El menú aparecerá en todas las páginas
- **Footer presente**: El pie de página se mostrará correctamente
- **Mantenibilidad**: Cambios en Layout se aplicarán automáticamente a todas las páginas

