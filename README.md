# Import Vision · Landing

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Motion + Lenis.

## Editar contenido
Todo el texto, los datos de contacto y las imágenes están en **`src/content.ts`**.
Los campos marcados `TODO` (WhatsApp, teléfono, correo, dirección, horarios, redes, razón social, dominio, testimonios) están vacíos a propósito:
- Al llenar `contact.whatsapp`, todos los botones "Agendar" abren WhatsApp con un mensaje listo.
- Al llenar `contact.address`, aparece el mapa en la sección de contacto.
- Al agregar `testimonials`, aparece la sección de testimonios.
- En `npm run dev` se muestra un aviso con los datos de contacto que faltan (no aparece en producción).

Fuentes del contenido: `CONTENIDO.md` y `assets-cliente/`.

## Correr en local
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # versión de producción
```

## Desplegar (Vercel)
1. Subir el repositorio a GitHub.
2. En vercel.com → "Add New Project" → importar el repo (detecta Next.js solo).
3. Conectar el dominio y actualizar `site.url` en `src/content.ts` (se usa en SEO, sitemap y Open Graph).

## Marca
- `public/brand/logo.svg` / `logo-light.svg`: logo completo (símbolo redibujado + wordmark vectorizado del original).
- `public/brand/lockup*.svg`: versión horizontal para el header.
- `public/brand/logo-original-transparent.png`: original del cliente sin fondo (respaldo).
- Favicons y Open Graph en `src/app/` (icon.png, apple-icon.png, favicon.ico, opengraph-image.png).

## Fotos
Créditos en `assets-cliente/CREDITOS-FOTOS.md` (Unsplash License). Se recomienda reemplazarlas por fotos reales de las jornadas.
# import-vision
