# Karteikasten als Web-App (PWA)

Inhalt dieses Ordners: `index.html`, `manifest.webmanifest`, `sw.js`, `icons/`. Alles 1:1 hochladen, Pfade sind relativ.

## Auf GitHub Pages bereitstellen (nur Webseite)
1. Auf github.com einloggen, oben rechts **+ → New repository**, Name `karteikasten`, **Public**, anlegen.
2. Im neuen Repository **Add file → Upload files**: den **Inhalt** dieses Ordners (index.html, manifest.webmanifest, sw.js und den Ordner `icons`) ins Fenster ziehen, **Commit changes**.
3. **Settings → Pages**: Source „Deploy from a branch", Branch `main`, Ordner `/ (root)`, **Save**.
4. Nach 1 bis 2 Minuten erreichbar unter `https://<user>.github.io/karteikasten/`.

## Auf dem iPad/iPhone installieren
Adresse in **Safari** öffnen → **Teilen** → **Zum Home-Bildschirm** → Hinzufügen. Danach startet die App wie eine normale App, auch offline.

## Neue Version ausrollen
`index.html` ersetzen und in `sw.js` die Zeile `const VERSION = "1";` hochzählen, beide Dateien neu hochladen; geöffnete Apps zeigen dann „Neue Version verfügbar – neu laden".

Lernpakete und Lernstände liegen im Gerät (IndexedDB/localStorage), nicht im Service-Worker-Cache; sie bleiben bei Updates erhalten.
