### Oppgave for intervju hos Vipps

Oppgaven var todelt, en for backend og en for frontend.

Backenddelen bestod av en HTTP GET-metode, der jeg skulle innhente informasjon ved å interagere med Wikipedias API. Gitt en "topic" skulle jeg ta i bruk en gitt query på formen `https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=[topic]` for å innente artikkelen, før jeg skulle printe ut antall forekomster av temaet i tekstfeltet til artikkelen. 

For frontenddelen måtte jeg gjøre backenddelen til et API jeg kunne kalle på, og skrive frontend som kaller på dette APIet. Her skulle vi kunne skrive inn et tema og få antall forekomster av ordet vist som resultat. 

Jeg kunne ta i bruk hvilket som helst språk og rammeverk, så jeg gikk for Django Python backend (hadde ikke brukt dette tidligere), og React med Javascript frontend. Har under studiet brukt Express.js til å lage en server backend, men har brukt python en del i det siste og så på det som en fin utfordring og morsom oppgave å lage en webserver i Python.

#### Hvordan kjøre koden

Først må en starte opp serveren. Dette gjøres ved å navigere seg til mappen `backend` og utføre kommandoen `python3 manage.py runserver`. Gitt at man har installert Django vil serveren starte opp på port `8000`.

For å starte opp frontendklienten navigerer man seg til mappen `frontend` og utfører kommandoen `npm install`, etterfulgt av `npm start`. Ved å gå til `http://localhost:3000` vil man nå få opp frontendklienten.
