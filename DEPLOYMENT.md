# Despliegue en Hostinger

## Tipo de publicación

Este proyecto usa `output: 'static'` en Astro. No necesita un adaptador ni Node.js en producción para servir las páginas. Tras ejecutar `npm run build`, publica exclusivamente el contenido de `dist/`.

El formulario de contacto usa un endpoint PHP independiente en `/api/contacto.php`. Este endpoint requiere PHPMailer, SMTP autenticado y un archivo de configuración privado fuera de `public_html`. Hasta completar esa configuración y recibir una prueba real, el formulario muestra un error controlado y ofrece el correo directo; no simula un envío correcto.

## Publicación manual segura

1. En Hostinger, identifica el directorio público exacto del dominio (habitualmente `public_html`, pero debe confirmarse en el panel).
2. Descarga una copia completa de ese directorio y conserva también cualquier configuración existente.
3. Antes de sustituir nada, revisa y conserva elementos que no sean parte de la web antigua: `.well-known`, verificaciones de dominio, reglas `.htaccess`, ficheros de redirección o integraciones ajenas al sitio. No modifiques la configuración de correo del dominio.
4. En local, ejecuta `npm ci`, `npm run check` y `npm run build`.
5. Sube el contenido de `dist/` a un directorio de prueba o subdominio si el plan lo permite. Comprueba las rutas, imágenes, sitemap y HTTPS.
6. Publica `server/contact-api/contacto.php` en `/home/u998873880/public_html/api/contacto.php`. Las dependencias de PHPMailer permanecen en `/home/u998873880/contact-private/vendor/`; configura el archivo privado en `/home/u998873880/contact-private/contact-config.php` y el límite de frecuencia en `/home/u998873880/contact-private/rate-limit/`, como se describe en `server/contact-api/README.md`.
7. Realiza un envío de prueba desde el formulario y confirma la recepción en `hola@inmacontreras.com` antes de declararlo operativo.
8. Cuando la revisión sea correcta, sustituye solo los archivos identificados como pertenecientes a la web antigua por el contenido de `dist/`. Mantén la copia de seguridad para restaurar rápidamente si fuera necesario.
9. Después de publicar, revisa `https://inmacontreras.com`, las rutas principales, el sitemap y los enlaces externos. En despliegues posteriores, no borres `public_html/api/` ni la configuración privada.

## Automatización desde GitHub

El workflow `.github/workflows/deploy.yml` se ejecuta en cada `push` a `main` y permite ejecución manual desde la pestaña **Actions** de GitHub. Usa Node.js 22, ejecuta `npm ci`, `npm run check` y `npm run build`, y comprueba `dist/index.html` y `dist/contacto/index.html` antes de transferir.

La transferencia crea un archivo comprimido solo con `dist/` y lo extrae sobre `/home/u998873880/domains/inmacontreras.com/public_html/`. No usa borrado ni sincronización destructiva, y excluye explícitamente `api`, `.well-known` y `.htaccess`. El endpoint PHP y su configuración privada quedan intactos.

Después de un despliegue, comprueba la página de GitHub Actions, `https://inmacontreras.com`, `/contacto/` y el formulario. Si una versión falla, recupera los archivos afectados desde la copia de seguridad realizada antes del despliegue manual; el workflow no elimina archivos ni puede restaurar automáticamente una versión anterior.

Nunca publiques `.env`, tokens de GitHub, claves SMTP, credenciales SFTP ni el directorio `node_modules/`.
