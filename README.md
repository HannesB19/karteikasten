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

## Wiederholung früherer Bände und freiwillige Teile (ab v12.1)
Tipp aufs Bild des Kindes → „Profil bearbeiten“:
- **Wiederholung aus früheren Bänden:** Für jeden früheren Band der gewählten Bücher (z. B. bei Découvertes 2: Découvertes 1; bei Green Line 3: Green Line 1 und 2) „im Unterricht behandelt bis“ wählen – eine Unité/Unit oder eine Station darin, oder „ganz“ (Voreinstellung, wie bisher). Spätere Teile des früheren Bands kommen dann nicht mehr als Wiederholung, nicht als Antwortmöglichkeiten, nicht als Satzbau-Kacheln und nicht bei Frage–Antwort vor.
- **Freiwillige Teile üben (Plateaus, Bonus, freiwillige Stationen):** Voreinstellung aus. Aus = freiwillige Teile (laut Inhaltsverzeichnis, z. B. Plateaus, Découvertes 2 Unité 7 Station 3/4, Green Line Revisions) kommen nicht als Wiederholung und nicht als Antwortmöglichkeiten vor. Wählt das Kind einen freiwilligen Teil selbst als Einheit/Station, wird er trotzdem geübt.
Beide Einstellungen wandern mit „Lernstand sichern/holen“ mit (die neuere Profiländerung gilt). Die Markierung „freiwillig“ steckt in den Lernpaketen ab Stand 20.10.2026: Pakete einmal neu laden.

## Bosskampf, Belohnungen, Bonus-Spiele (ab v13)
- **Bosskampf:** Ab 80 % einer Einheit (Karten ab Fach 3) steht auf der Übersicht „⚔️ Bosskampf starten“. Aufgaben nur aus dieser Einheit, Übungsart wie zuletzt gewählt. Boss mit 10 Lebenspunkten, das Kind hat 3 Herzen: richtig = Treffer (jede 4. richtige in Folge doppelt), falsch = ein Herz weg. Kein Zeitdruck. Der Kampf ändert den Karteikasten nicht. Sieg = Trophäe für die Einheit (dauerhaft im Profil), Niederlage = aufmunternd, jederzeit neu.
- **Bonus-Tickets:** erster Bosssieg je Einheit 2, Einheit erstmals zu 100 % sicher 2, perfekte Session (alles beim ersten Versuch) 1, höchstens einmal am Tag. Einlösen über „🎮 Bonus-Spiel aussuchen“: Flipper (75 s), Ballon-Jagd (60 s) oder Emoji-Memory; ein Ticket = eine Runde.
- **Siegesmusik:** eigene kurze Melodie, Schalter „Siegesmusik“ in der Fußzeile; folgt auf dem iPad dem Stummschalter.
- Trophäen und Tickets wandern mit „Lernstand sichern/holen“ mit (beide Geräte werden zusammengeführt, nichts geht verloren). Spielrekorde bleiben auf dem Gerät.
- **Verschoben:** „Lernverlauf exportieren/löschen“ und „Übungsstand zurücksetzen“ stehen jetzt im Profil (Tipp aufs Bild → „Profil bearbeiten“ → „Lernverlauf und Übungsstand“) und gelten nur für dieses Kind. Der Test-Knopf neben der Stimmauswahl entfällt; die Stimme liest beim Wechsel selbst eine Probe vor.
- Ausrollen: `index.html` und `sw.js` (VERSION 10) hochladen.

## Mutmach-Sprüche (ab v13.1)
- **Was:** kurze, warme Sätze in Du-Form auf einer kleinen Karte mit einem freundlichen Monster (eigene Grafik, Formen und Farben wie die Bosse, aber lächelnd). 78 eigene Sätze, nach Situation gruppiert: Start, nach Fehlern (tröstend, „noch nicht“), Fehlerserie, Comeback, Serie richtiger Antworten, Ergebnis normal, Ergebnis schwierig (Anstrengung loben), Bosskampf verloren, Sieg (Boss gewonnen oder alles beim ersten Versuch), Rückkehr nach Pause, allgemein.
- **Anzeige:** In der Session nie über Eingaben: nach einer Antwort schwebt die Karte oben (ca. 4 s, Antippen schließt, nächste Aufgabe blendet sie sofort aus); beim Start steht sie unter dem Antwortbereich. Auf der Ergebnisseite und nach dem Bosskampf steht sie fest als Karte.
- **Dosierung:** höchstens ein Spruch je 4 Aufgaben und höchstens 3 je Session (Start eingerechnet), nur bei einem Anlass und nie sicher (2 Fehler in Folge 80 %, 1 Fehler 20 %, 4 Fehler in Folge immer, Comeback 70 %/25 %, 5 richtige in Folge 80 %, Start 50 %, Rückkehr nach mindestens 3 Tagen immer). Kein Satz aus den letzten drei Anzeigen des Kindes (gemerkt je Profil, `kk.v1.mut.<id>`, zusammen mit dem Tag der letzten Session).
- **Schalter** „Mutmach-Sprüche“ in der Fußzeile (Standard an, `kk.v1.opt.mut`).
- **Vorlesen:** nur beim Start und auf der Ergebnisseite, nur mit „Antworten vorlesen“ an, nur bei der Übungsart Schreiben, nur mit deutscher Stimme auf dem Gerät und nicht über die Siegesmusik; sonst schweigt die Karte.
- Ausrollen: `index.html` und `sw.js` (VERSION 10) hochladen.

## Lernprofil (ab v13.2)
- **Was:** Lern! prüft für jedes Kind, wie gut es ein Wort beim nächsten Mal noch weiß (frühestens 20 Stunden später, dazwischen nicht geübt), je nachdem, wie das Wort davor geübt wurde. Drei Merkmale: **wie geübt** (lesen und schreiben · schreiben und hören, die Lösung wurde vorgelesen · hören und sprechen), **Tageszeit** (morgens 5–12 · nachmittags 12–17 · abends 17–5 Uhr) und **Runden am Tag** (eine Runde · mehrere hintereinander mit Pausen bis 30 min · über den Tag verteilt).
- **Fair gerechnet:** Neue Wörter sind schwerer. Verglichen wird deshalb jede Übungsstufe (an wie vielen Tagen das Wort vorher dran war) mit ihrem eigenen Schnitt, gedämpft gegen Zufall. Eine Erkenntnis gibt es erst, wenn zwei Stufen je mindestens 20 Wiederholungen an 3 Tagen haben und die beste mindestens 8 Prozentpunkte vorn liegt. Vorher bleibt alles wie bisher.
- **Anwendung bei neuen Wörtern:** hören und sprechen → im Mix mehr Sprechaufgaben (45 statt 30 %), neue Wörter zuerst; lesen und schreiben → im Mix weniger Sprechen (15 %), neue Wörter schriftlich; schreiben und hören → neue Wörter werden nach der Antwort vorgelesen, auch wenn „Antworten vorlesen“ aus ist. Tageszeit: zur deutlich schwächeren Tageszeit höchstens 3 statt 6 neue Wörter (mehr Wiederholung). Runden: Tipp auf der Ergebnisseite, bei „hintereinander“ heißt der Knopf „Gleich noch eine Runde“.
- **Anzeige:** Kind: ein Lerntipp auf der Startseite (täglich wechselnd). Eltern: Profil bearbeiten → „Lernprofil“ mit Quote je Stufe, Anzahl und Fazit; Schalter „Lernprofil beim Üben anwenden“ je Profil (Standard an, `kk.v1.stil.<id>`).
- **Daten:** nur der Lernverlauf auf dem Gerät (geholte Lernstände anderer Geräte zählen mit). Neues Feld `vorgelesen` im Lernverlauf; ältere Einträge zählen als „lesen und schreiben“, wenn sie keine Sprechaufgaben sind.
- Ausrollen: `index.html` und `sw.js` (VERSION 11) hochladen.

## Einstellungen (ab v13.3)
- **⚙️ oben rechts** (Profilseite, Startseite, Ergebnisseite; nicht in der Session): eine Seite für alles, was man selten braucht. Abschnitte: **Kinder** (Liste mit „Bearbeiten“ und „Kind hinzufügen“; dort weiter Bücher, Wiederholung, freiwillige Teile, Lernstand sichern/holen, Lernprofil, Lernverlauf, Zurücksetzen, Löschen), **Vorlesen** („Antworten vorlesen“, Stimme Englisch und Französisch gleichzeitig wählbar, Probe beim Wechsel), **Spaß** („Überraschungen und Siegesmusik“ als ein Schalter), **Lernpakete**, **Über Lern!** (Speicherhinweis).
- **Fest übernommen, ohne Schalter:** Mutmach-Sprüche (Dosierung regelt die App) und Lernprofil (Auswertung bleibt im Profil-Editor sichtbar). Alte gespeicherte Schalterwerte (`kk.v1.opt.mut`, `kk.v1.opt.musik`, `kk.v1.stil.<id>`) werden nicht mehr gelesen.
- **Lernpakete:** Ohne Paket steht die Klappe wie bisher aufgeklappt auf der Profilseite (Einrichtung). Sobald ein Paket geladen ist, liegt sie in den Einstellungen; auf der Profilseite führt „⚙️ Lernpakete verwalten“ dorthin.
- **Fußzeile:** nur noch Hinweis zur Herkunft der Inhalte und Version.
- Ausrollen: `index.html` und `sw.js` (VERSION 12) hochladen.
