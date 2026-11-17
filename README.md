# Inma Contreras — Portfolio profesional

Portfolio profesional de Inma Contreras, docente de programación y desarrollo web, desarrolladora web y creadora de recursos educativos digitales.

El sitio presenta mi experiencia docente en Formación Profesional para el Empleo (FPE), mi formación académica y técnica, y los proyectos tecnológicos que desarrollo. Entre ellos destacan Perrolia, iniciativa digital de la que soy fundadora, y DevCampus, un proyecto educativo propio concebido como un manual digital vivo que evoluciona con las necesidades del alumnado.

## Objetivo de la web

Este portfolio está dirigido principalmente a:

- Centros de formación y empresas de Formación Profesional para el Empleo.
- Entidades educativas y organizaciones interesadas en colaboraciones docentes.
- Empresas que necesitan formación tecnológica o diseño de contenidos educativos.

## Contenido del sitio

- [Inicio](/)
- [Experiencia profesional](/experiencia/)
- [Formación](/formacion/)
- [DevCampus](/devcampus/)
- [Contacto](/contacto/)

La experiencia profesional incluye el desarrollo de proyectos propios, como Perrolia y DevCampus. No existen rutas independientes de proyectos ni metodología en esta versión.

## Tecnologías utilizadas

- [Astro](https://astro.build/) 7, con generación estática.
- TypeScript estricto.
- Tailwind CSS mediante el plugin oficial de Vite.
- Content Collections de Astro para la formación, experiencia y proyectos.
- `@astrojs/sitemap` para el sitemap XML.

## Instalación local

Requiere una versión LTS actual de Node.js y npm.

```bash
git clone <URL_DEL_REPOSITORIO>
cd inmacontreras-web
npm ci
npm run dev
```

Astro mostrará en la consola la URL de desarrollo local, normalmente `http://localhost:4321`.

## Scripts disponibles

- `npm run dev` — inicia el entorno de desarrollo local.
- `npm run start` — alias del entorno de desarrollo.
- `npm run check` — ejecuta la comprobación de Astro y TypeScript.
- `npm run build` — genera la versión estática de producción en `dist/`.
- `npm run preview` — sirve localmente la compilación de producción.

## Variables de entorno

El único valor de entorno previsto actualmente es la URL pública del endpoint seguro del formulario de contacto. Copia el ejemplo y adapta el valor en tu entorno:

```bash
cp .env.example .env
```

```env
PUBLIC_CONTACT_ENDPOINT=https://tu-endpoint-seguro.example/contacto
```

No añadas claves API, credenciales SMTP ni tokens a `.env.example` ni al repositorio.

## Formulario de contacto

El formulario de `/contacto/` permite solicitar colaboraciones escribiendo a través de la web o directamente a [hola@inmacontreras.com](mailto:hola@inmacontreras.com).

La web es estática. Para que el envío funcione realmente, `PUBLIC_CONTACT_ENDPOINT` debe apuntar a un endpoint HTTPS externo que valide los datos, aplique protección antispam y envíe el mensaje al correo profesional. No hay proveedor de envío configurado ni se afirma que el envío esté operativo mientras ese endpoint no exista.

## Despliegue en Hostinger

El sitio se publicará en <https://inmacontreras.com>. Ejecuta:

```bash
npm run check
npm run build
```

Publica exclusivamente el contenido generado en `dist/` en el directorio público del dominio. No copies el código fuente de Astro, `node_modules/` ni los archivos `.env` a `public_html`.

Consulta [DEPLOYMENT.md](DEPLOYMENT.md) para el procedimiento de copia de seguridad, pruebas y sustitución segura de la versión anterior. No hay una integración automática de GitHub configurada todavía.

## Proyectos relacionados

- [Perrolia](https://perrolia.com)
- [DevCampus](/devcampus/) · proyecto público: <https://devcampus.es>
- [GitHub](https://github.com/inma2709)

## Autoría

**María Inmaculada Contreras Íñiguez**
Docente de programación y desarrollo web · Desarrolladora web · Diseño de recursos educativos digitales.

- Web: <https://inmacontreras.com>
- LinkedIn: <https://www.linkedin.com/in/ici77/>
- Correo profesional: [hola@inmacontreras.com](mailto:hola@inmacontreras.com)

## Licencia

No se ha especificado una licencia de reutilización. Los derechos sobre el código, fotografías, textos, materiales didácticos y demás contenidos pertenecen a sus respectivos titulares.
