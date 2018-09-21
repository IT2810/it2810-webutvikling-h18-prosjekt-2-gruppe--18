# Prosjekt-2
IT 2810 Dokumentasjon

Intro	1
Oppnåelsen av krav	1
Timeliste	2
Oppgavefordeling	3
Testing	3
Strukturen	3
Filstruktur	3
Komponentstruktur	4
Ressurser brukt	5


Intro
Gruppemedlemmer: 
Filip Hagen
Truls Andreas Berglund
Simon Nordvold Barak
Link til websiden: 
http://it2810-18.idi.ntnu.no/prosjekt2/ 
Link til repository:
https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-2-gruppe--18

Oppnåelsen av krav
Kravene til dette prosjektet var i grove trekk: 
Bruk av REACT
Bruk av AJAX
Responsivt web design
Testing på forskjellige plattformer
Bruk av git/version control

Måten vi gikk frem på for å løse disse kravene var først å tildele oppgavene og så diskutere hvordan hver enkelt komponent skulle designes for å oppfylle oppgavene. Etter at hver enkelt komponent var designet diskuterte vi og implementerte en felles måte for komponentene å dele informasjon (variabler). Spesielt mellom Choices og basis-komponentene.
Vi valgte å gå igjennom stylingen og responsiv design til slutt, etter at alt annet var ferdig. Dette kan vi se i ettertid at vi burde brukt litt mer tid til å få et godt overblikk over, før vi startet med funksjonaliteten.

Ajax kravet løste vi på forskjellige måter. Noen av oss brukte axios, mens andre brukte fetch metoden. Begge fungerte fint, og vi bestemte oss for å beholde begge metodene fremfor å ha en felles en for å vise at vi kan bruke begge to. 
Vi hadde litt problemer med å linke til lokale ressurser i starten før vi oppdaget at vi måtte legge filene i public fremfor src, etter det funket det fint. 

Responsiv design løste vi igjennom å bruke viewport og mediaqueryes. Viewport brukte vi for å lage en standard størrelse på ulike elementer i DOM-et. Mediaqueryes brukte vi også for å øke størrelsene på blant annet font når størrelsen på skjermen ble for liten til at man komfortabelt kunne lese det. 

Under prosjektet brukte vi Git i samsvar med Trello for å holde orden på ulike issues. Vi skrev generelle issues for hver komponent og de ulike kravene vi måtte oppfylle for at vi skulle unngå å måtte lage nye issues igjennom designprosessen. Vi separerte de ulike issue-ene inn i to-do, doing, testing og done. Alle issuene gikk igjennom hele prosessen utenom noen spesifikke issues som ikke kunne testes på en realistisk måte.
Branchene på git repositoriet var delt inn i de forskjellige issuene og 
Linken for trello siden vår:
https://trello.com/b/BfoavabV/prosjekt-2 
Testing
Vi har testet på 4 forskjellige enheter og flere forskjellige nettlesere. Av nettlesere har vi testet de 3 mest brukte nettleserne; chrome, edge og firefox for å oppnå størst mulig test coverage. Vi har også testet på ulike skjermstørrelser og enheter, blant annet: 

13,7” 1920x1080px (laptop)
5,5” 1440x2560px (mobil)
5,2” 1080x1920px (mobil)
5,8” 1440x2960px (mobil: Samsung Galaxy S8)

På alle testene har siden blitt minimalt forandret og opprettholdt den designen vi prøvde å gå for. På mobilene brukte vi den standard nettleseren. 
Vi hadde litt problemer i starten med at vi antok at mobilene hadde færre pixler enn laptopene og brukte dermed antall pixler for å endre på layoutet. Etter at vi begynte med viewPort og vh og vw så fikset dette problemet seg (og media queries).
Vertikal  visning på mobil viser seg å gå fint ved testing, men måtte legge til noe ekstra for å få horisontalt modus til å gå fint. Dersom skjermen var mye høyere enn vid så ble hamburger knappen borte i verste fall, ettersom da var skjermen vid nok til å kunne bruke desktop designet.

Strukturen
Filstruktur
PRO2
public
media
Audio
Images
TextJSON
src
components
Category.jsx
Choices.jsx
Display.jsx
TextComponent.jsx
Visuals.jsx
Tab.js
Navigation.js
AudioComponent.js
App.css
Filstrukturen over er ikke alle filene som er i systemet vårt, men viser bare på en oversiktlig måte hvordan vi har strukturert filene våre. 
Mappene under media inneholder alle lydene, bildene og diktene vi bruker som ressurser på siden. Disse filene blir hentet ut med fetch() og axios() kall,og bare hentet når de skal tas i bruk. 
Komponentstruktur
Her er strukturen over komponentene (som overføres til html-en)
App
Display
Navigation
Tab
AudioComponent
TextComponent
Visuals
Category
Choices
Her var utfordringen å hente variablene (sjekk boksene) som ble endret i choices og få de over til hver enkelt av de display. Når de kommer dit skulle hver enkelt tab ta ned variabelen og velge tilfeldige filer basert på hvilke sjekkbokser som var valgt. 
Vi valgte å bruke prop systemet ved både opp og ned-sending av variabler. Vi sendte en metode ned fra parent slik at child komponenten kunne bruke denne til å sende variabler opp, og brukte vanlig prop med et enkelt variabel for sending ned. 
Sendingen ble altså slik:
Choices->Category->Display->Tab->komponent
Ressurser brukt
Inspirasjon:
https://blog.visme.co/wp-content/uploads/2016/09/website4-1024x512.jpg

Tutorials: 
https://www.w3schools.com/howto/howto_js_sidenav.asp
https://www.youtube.com/watch?v=Ke90Tje7VS0&t=6921s
https://www.w3schools.com/css/css_grid.asp
https://www.w3schools.com/css/css3_flexbox.asp



Hjelpsomme sider:
https://stackoverflow.com/questions/37949981/call-child-method-from-parent
https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript 

Bilder og lyd:
www.freesound.org
www.soundible.com
https://www.flaticon.com/ 

