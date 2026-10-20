# Lern! als Web-App (PWA)

Bis v10 hieß die App „Karteikasten“; Repository, Adresse und Speicherstände bleiben gleich.

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

## Auf anderen Geräten weiterlernen (ab v12)
Der Lernstand liegt nur auf dem Gerät. Zum Mitnehmen auf ein anderes iPad dient eine Datei je Kind über iCloud Drive (kein Server, kein Konto):

**Sichern** (altes Gerät): Tipp aufs Bild des Kindes → „Profil bearbeiten“ → Abschnitt „Auf anderen Geräten weiterlernen“ → **Lernstand sichern**, oder nach einer Session auf dem Ergebnisbildschirm **Lernstand sichern**. Das Teilen-Menü geht auf → **In Dateien sichern** → **iCloud Drive › Lern** (Ordner beim ersten Mal anlegen) → Sichern. Datei: `Lern_<Name>_JJJJ-MM-TT.json`. „Alle Kinder in einer Datei sichern“ erzeugt `Lern_Alle_…json`. Ohne Teilen-Menü (Mac, alter Browser) wird die Datei heruntergeladen (Ordner Downloads). Der Knopf auf dem Ergebnisbildschirm ist hervorgehoben, wenn noch nie gesichert wurde oder schon eine weitere Session ungesichert ist. Automatisch sichern kann die App nicht (Browser erlauben Dateien nur nach einem Tipp).

**Holen** (neues Gerät): Auf einem leeren Gerät („Wer lernt?“) **Lernstand von einem anderen Gerät holen**, sonst im Profil **Lernstand holen** → Datei aus iCloud Drive › Lern wählen. Lern! führt zusammen statt zu überschreiben: je Karte gilt der neuere Stand, der Lernverlauf wird ohne Doppelte ergänzt, Name/Foto/Stand: das jeweils Neuere. Danach steht z. B. „12 Karten aktualisiert, 30 neue Einträge, nichts überschrieben, was neuer war“. Mehrfaches Holen derselben Datei ändert nichts. Passt die Datei zu keinem Kind auf dem Gerät, fragt Lern!, zu welchem Kind sie gehört (oder „Als neues Kind anlegen“) und erkennt das Kind beim nächsten Mal selbst.

Wichtig: Die **Lernpakete** sind nicht in der Lernstand-Datei; auf dem neuen Gerät einmal unter „Lernpakete verwalten“ laden. Wer auf beiden Geräten übt: nach dem Üben sichern, auf dem anderen Gerät vor dem Üben holen.
