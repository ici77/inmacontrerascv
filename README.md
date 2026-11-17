# inmacontreras.com

Web profesional de Inma Contreras, orientada a la docencia tecnológica, la formación profesional y el desarrollo de recursos digitales.

## Tecnologías

- [Astro](https://astro.build/) con TypeScript estricto.
- Tailwind CSS.
- Content Collections para formación y experiencia profesional.
- Generación estática y sitemap automático.

## Desarrollo local

Requiere una versión LTS actual de Node.js y npm.

```bash
npm install
npm run dev
```

La web estará disponible en la dirección indicada por Astro, normalmente `http://localhost:4321`.

## Validación y compilación

```bash
npm run check
npm run build
```

`npm run build` genera la web de producción en `dist/`. Solo esa carpeta debe publicarse en el directorio público del dominio; no se debe copiar el código fuente a `public_html`.

## Formulario de contacto

La web es estática. El formulario requiere un endpoint HTTPS externo para enviar mensajes de forma real. Configura en el entorno de compilación:

```bash
PUBLIC_CONTACT_ENDPOINT=https://tu-endpoint-seguro.example/contacto
```

El endpoint debe validar los datos en servidor, aplicar protección antispam y enviar el mensaje a `hola@inmacontreras.com` sin exponer credenciales. No guardes claves en este repositorio.

## Despliegue

Consulta [DEPLOYMENT.md](DEPLOYMENT.md) para el procedimiento seguro de publicación en Hostinger y la estrategia de automatización desde GitHub.
"# inmacontrerascv" 
