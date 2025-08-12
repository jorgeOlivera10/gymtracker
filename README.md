# Gym Tracker (PWA)

Archivos incluidos:
- index.html (app)
- manifest.webmanifest
- sw.js (service worker offline)
- icon-192.png, icon-256.png, icon-512.png
- apple-touch-icon-180.png

## Antes de publicar
1) Abre `index.html` y sustituye `REPLACE_WITH_YOUR_EXEC_URL` por tu URL `/exec` del Google Apps Script (backend que ya creamos).
   - Si pusiste `API_KEY` en el backend, rellena `GAS_API_KEY` en el HTML con la misma clave.
2) Sube todo a un repositorio nuevo en GitHub (por ejemplo `gymtracker`). Coloca estos archivos en la raíz.
3) En *Settings → Pages*: Source = `Deploy from a branch`, Branch = `main` y carpeta `/ (root)`.
4) Abre la URL de GitHub Pages. En iPhone (Safari): **Compartir → Añadir a pantalla de inicio**.

## Notas
- Funciona offline: guarda envíos en una cola y los sincroniza cuando hay conexión.
- El listado y los contadores de días se leen desde tu hoja de Google con las operaciones `list` y `days`.
- El catálogo de ejercicios aparece según el `tipo` (CHEST/BACK/LEGS). `Trail` oculta las series y muestra distancia/tiempo/ritmo.
