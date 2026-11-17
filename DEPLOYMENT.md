# Despliegue en Hostinger

## Tipo de publicación

Este proyecto usa `output: 'static'` en Astro. No necesita un adaptador ni Node.js en producción para servir las páginas. Tras ejecutar `npm run build`, publica exclusivamente el contenido de `dist/`.

El formulario de contacto es la única funcionalidad que depende de un servicio externo: requiere un endpoint HTTPS configurado mediante `PUBLIC_CONTACT_ENDPOINT`. Hasta que exista, el formulario muestra un error controlado y ofrece el correo directo; no simula un envío correcto.

## Publicación manual segura

1. En Hostinger, identifica el directorio público exacto del dominio (habitualmente `public_html`, pero debe confirmarse en el panel).
2. Descarga una copia completa de ese directorio y conserva también cualquier configuración existente.
3. Antes de sustituir nada, revisa y conserva elementos que no sean parte de la web antigua: `.well-known`, verificaciones de dominio, reglas `.htaccess`, ficheros de redirección o integraciones ajenas al sitio. No modifiques la configuración de correo del dominio.
4. En local, ejecuta `npm ci`, `npm run check` y `npm run build`.
5. Sube el contenido de `dist/` a un directorio de prueba o subdominio si el plan lo permite. Comprueba las rutas, imágenes, sitemap, HTTPS y el formulario.
6. Cuando la revisión sea correcta, sustituye solo los archivos identificados como pertenecientes a la web antigua por el contenido de `dist/`. Mantén la copia de seguridad para restaurar rápidamente si fuera necesario.
7. Después de publicar, revisa `https://inmacontreras.com`, las rutas principales, el sitemap y los enlaces externos.

## Automatización desde GitHub

1. Crea un repositorio vacío llamado `inmacontreras-web` en GitHub sin inicializar README, licencia ni `.gitignore` remotos.
2. Inicializa este proyecto local, usa la rama `main`, realiza el primer commit y añade el remoto solo después de confirmar su URL.
3. Configura GitHub Actions para ejecutar `npm ci`, `npm run check` y `npm run build` en cada cambio de `main`.
4. Si el plan de Hostinger permite despliegues Git o SFTP automatizados, configura el paso de publicación para transferir solo `dist/` y almacena las credenciales exclusivamente en GitHub Secrets.
5. Si el plan no permite automatización, descarga el artefacto generado por la acción o compila localmente y aplica el procedimiento manual anterior.

Nunca publiques `.env`, tokens de GitHub, claves SMTP, credenciales SFTP ni el directorio `node_modules/`.
