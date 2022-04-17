# Programmeren Eindopdracht
https://github.com/HR-CMGT/PRG08-2021-2022

## A. Ontwerp

Deadline: 2022-04-03

https://classroom.github.com/assignment-invitations/5a108699404777309e2e40667e7fb09f/status

https://github.com/HR-CMGT-Classroom/prg08-2022-week7-LuukFTF

### A.1 Info

#### Requirements

Concept 
    - [-] Wat is jouw TLE project, en wat is daarvoor jouw concept? Hoe draagt dit bij aan Rotterdam:Duurzame Stad?
    - [x] beschrijving van concept buiten tle om
    - [x] Wat is de toegevoegde waarde van AI in jouw concept?
    - [x] Welke data heb je nodig en hoe kom je daar aan?
    - [x] Welke library / algoritme denk jij dat geschikt is voor jouw concept?
    - [x] Beschrijf de de uiteindelijke vorm (Website, app, installatie, etc).
    - [x] Beschrijf kort de eindgebruiker en de doelgroep.

Prototype
    - [x] gebruik een van de algoritmes uit les 2 t/m 7 (of andere in overleg)
    - [x] prototype uitwerken
    - [x] code staat in github classroom
    - [x] live online
    - [x] screencast

Extra
    - [-] scatterplot voor data uit kaggle
    - [x] accuracy van het prototype tonen
    - [x] accuracy verbeteren door algoritme te tweaken (leguit)


#### Planning

- [x] Concept
    - [x] kies concept casus en beschrijf
    - [x] beschrijf toegevoegde waarde in concept
    - [x] kies en beschrijf de uiteindelijke vorm van het product
    - [x] beschrijf doelgroep
    - [x] kies library/algoritme
    - [x] data inventarisatie
- [x] Prototype
    - [x] init project & repo
    - [x] schets prototype
    - [x] werk prototype uit
        - [x] maak todos
        - [x] maak uitgebreidere data
        - [x] word2vec data prepare
        - [x] data random & split
        - [x] decisiontree genereren en tekenen
        - [x] prediction (word2vec input omzetten + decisiontree)
    - [x] extra
        - [x] accuracy
        - [x] accuracy verbeteren uitleg
        - [-] scatterplot
    - [x] code in github classroom
    - [x] check requirements
    - [x] project live online
    - [x] screencast & inleverdocument
    - [x] last check & inleveren

#### Ideeen

Reflax korenopstelling
Autofill templating (prometheus / choirapp)

### A.2 Concept

Ter informatie vooraf: ik volg geen TLE, dus ik heb een eigen project gepakt waarbij ik een concept bij kan toepassen.

#### Casus

Bij een applicatie waarbij je projecten/items/events moet aanmaken vanuit een moderator omgeving voor een proces of gebruikers.
In dit geval de app waar ik zelf mee bezig ben voor een project: "choirapp". Een app voor koren als ondersteuning bij het repeteren.

#### Concept

Automatische templating voor het aanmaken van een nieuw event.
Het voorspellen van het type event op basis van info uit event. 

De toegevoegde waarde van AI in dit concept is dat het je een boel tijd scheelt omdat je niet elke keer alle info zelf hoeft in te vullen bij herhalende/standaard taken. Het ultieme doel is namelijk dat je na het invullen van 2 velden gelijk de rest van het item gevuld heb.

De vorm van dit concept word in de webapp geïmplementeerd, bij het invullen van gegevens worden automatisch de lege velden (in dit geval het genre veld) ingevuld.

#### Doelgroep

*"Vocal Popgroup Re-flax is een popkoor uit Hendrik-Ido-Ambacht met 80 zangers en zangeressen. Een warme en hechte groep, die vier- tot zevenstemmig hun repertoire zingt. In vijftien jaar is Re-flax uitgegroeid tot één van de beste popkoren van ons land. Re-flax is niet alleen bekend in Hendrik-Ido-Ambacht, maar als koor ook in Zwijndrecht, Dordrecht, Papendrecht, Alblasserdam, Ridderkerk en verder in de regio. Door het TV programma Korenslag en het optreden op Koningsdag is Re-flax landelijk bekend."*

##### Belangrijke stakeholders

- Koorleden (hoofdgebruikers)
- Bestuur
- Commissieleden
- Technische Commissie 
- Songcoach
- Koorvertegenwoordiger
- Fysiek Publiek
- Online Publiek
- Theater Organisatie
- Video Productie Team

Personas vanuit [onderzoek](https://luukftf.github.io/docfx-portfolio/main/hr-cmgt/buildingblocks/bb-doelgroep.html)

##### Persona 1
*Koorleden onder 50*

**Juliette de Vries**   
Koorlid - Hoge Alt  
42, getrouwd, Hendrik-Ido-Ambacht - NL


**Bio**  
Rollen Reflax: Koorlid in de Hoge Alten  
Juliette heeft een fulltime kantoorbaan en werkt van maandag tot vrijdag van 9 tot 5. Ze is een echte business women en heeft het daarom door de weeks heel druk.  
Ze spreek vloeiend nederlands en is goed in engels.  

**Personaliteit**  
Opgeven: ★★★☆☆ (3)  
Geïrriteerd Worden: ★★★☆☆ (3.3)  
Digitaal Georganiseerd: ★★★★☆ (3.8)    
Wanneer er een digitaal probleem is vraag juliette vaak eerst even snel aan iemand binnen het huis, als die geen antwoord hebben of er niet zijn zoekt zij het op internet op. Als dat ook niet werkt gaat ze naar vrienden.    

**Devices**  
Algemeen: Mobiel & Desktop    
Forum: Mobiel & Desktop    
Rehearse: Mobiel    
Muziek Oefen Methode: Rehearse tijdens het koken & Download bestanden om in de auto te oefenen.  
  
**Dagindeling**     
Wanneer muziek oefenen: Maandag, Dinsdag, Woensdag in de auto onderweg naar huis vanaf werk. (17:00-18:30) in het Weekend na het avondeten. (19:00-20:00)    
Wanneer actief op het forum: Donderdag voor de repetitie (12:00-19:00) + Zondag 14:00-20:00 of Maandagavond (17:00-20:00)   

**Apps**  
Veel Gebruikte Apps: Whatsapp, Youtube, Facebook, Microsoft Teams, Instagram, Spotify   
Meest Favoriete App: Whatsapp    
Slechtste App: Werk Gerelateerde Apps   
Gemiddelde tijd per dag op telefoon: 3.6 uur   
Hoelaat op social media: Vaak na het avondeten (19:00-21:00)    
  
**Motivations**  
Motivatie Algemeen:   
- Shows
- Samen zijn
- Eindproduct neerzetten  
Motivatie Goals/Leren: 
- Beter leren zingen
- Betere danspasjes  

##### Persona 2
*Koorleden 50+*

**Peter Jansen**   
Koorlid - Bas 
59, getrouwd, Zwijndrecht - NL  

**Bio**  
Rollen Reflax: Koorlid in de bassen partij  
Peter heeft een part time kantoorbaan en werk op Dinsdag, Woensdag en Donderdag. Daarnaast is hij in zijn vrije tijd (hobby) fotograaf. Hij heeft een rustige levenstyle, in vergelijking met vroeger heeft hij het nu heel rustig omdat hij niet meer fulltime werkt: hij wilde zich meer zichten op zijn hobby.  
Hij spreekt vloeiend nederlands en een goede basis engels. Maar heeft zijn telefoon en apps vooral in het nederlands staan.

**Personaliteit**  
Opgeven: ★★★☆☆ (2.7)  
Geïrriteerd Worden: ★★☆☆☆ (2.2)  
Digitaal Georganiseerd: ★★★☆☆ (3.4)  
Wanneer er een digitaal probleem is vraag hij altijd eerst aan iemand in het huis, werkt dat niet dan gaat hij vaak naar familie en vrienden die altijd wel zijn probleem kunnen oplossen.  



**Devices**  
Algemeen: Mobile, Tablet & Desktop  
Forum: Tablet & Mobile  
Rehearse: Mobile  
Muziek Oefen Methode: Rehearse tijdens het opruimen en schoonmaken & Bestanden downloaden voor media player en versterker in het kantoortje.  

**Dagindeling**  
Wanneer muziek oefenen: Dinsdag & Donderdag in de auto onderweg naar huis vanaf werk. (16:00-18:00) En op 2 of 3 vrije dagen in de middag (14:00-17:00)  
Wanneer actief op het forum: Donderdag voor de repetitie (12:00-19:00) + Zondag (14:00-20:00) of Maandagmiddag (14:00-17:00)  

**Apps**  
Veel Gebruikte Apps: Whatsapp, Facebook, Youtube, Facebook messenger, Spotify   
Meest Favoriete App: Facebook   
Slechtste App: Digid/Belastingdienst   
Gemiddelde tijd per dag op telefoon: 3.3 uur   
Hoelaat op social media: Overdag (8:00-19:00) en vaak savonds (19:00-00:00)   

**Motivations**  
Motivatie Algemeen: 
- Gezelligheid
- Mooi zingen
- Shows
Motivatie Goals/Leren: 
- Betere uitstraling krijgen 
- Nieuwe zangtechnieken leren
  

#### Library/Algoritme

Word2Vec > KNN / Decision Tree

Ik gebruik heb word2vec algoritme om de context uit complexe teksten te halen. (Word Embeddings) Deze vectors gebruik ik samen met andere informatie in een KNN of DecisionTree algoritme om een lable mee te classificeren.

Voor het word2vec algoritme ga ik experimenteren tussen een aantal datasets.

Het toepassen van een word embedding algoritme past goed bij het analyseren van een stuk text. In plaats van dat je elk karakter individueel laten analyseren door het algoritme, dan zou je namelijk veel te veel informatie hebben zonder enige context van taal. 

Het K Nearest Neighbor alogoritme kan perfect werken voor een simpele analysatie van de data, wel is het lastig bij grote hoeveelheden data omdat het model de data is. Daarom ga ik waarschijnlijk liever het DecisionTree algoritme gebruiken omdat hier wel een model gegenereerd word. Ook kan je hierbij gelijk zien waarom bepaalde keuzes gemaakt worden.

*Word Embeddings*   
https://www.youtube.com/watch?v=gQddtTdmG_8  
https://www.youtube.com/watch?v=5PL0TmQhItY  

*word2vec node*   
https://www.npmjs.com/package/word2vec  
https://github.com/Planeshifter/node-word2vec  

*word2vec resources*   
https://webbylab.com/blog/how-to-train-word2vec-model-with-nodejs-in-5-steps/  
https://spacy.io/usage/linguistic-features#vectors-similarity  
https://winkjs.org/wink-nlp/getting-started.html  
https://codesandbox.io/s/32n4w2kmz5?file=/src/index.js  
https://radimrehurek.com/gensim/models/word2vec.html  
https://learn.ml5js.org/#/reference/word2vec  

*KNN*   
https://learn.ml5js.org/#/reference/knn-classifier  

*DecisionTree*  


*Plain Text Datasets*  
https://www.kaggle.com/datasets/yufengdev/bbc-fulltext-and-category  
https://www.kaggle.com/datasets/mikeortman/wikipedia-sentences  
https://www.kaggle.com/datasets/nltkdata/web-text-corpus  
https://www.kaggle.com/datasets/ltcmdrdata/plain-text-wikipedia-202011  

**Word Vector Datasets**  
https://www.kaggle.com/datasets/rtatman/glove-global-vectors-for-word-representation  




#### Datainventarisatie

##### Datasets

`choir_events.csv`

Dit is een dataset die ik zelf bijelkaar heb gezocht. Het bestaat uit 8 attributes waarvan 1 het trainingslabel is. De attributes zijn: title, location, city, date, start_time, end_time, teams, lable.

- title: string (text)
- location: string (word)
- city: string (word)
- date: date
- start_time: time
- end_time: time
- teams: array of strings (words)

- lable: string (word)

##### Flow 


1. Word2Vec input: (strings (texts, words), dates, times)  
title, location, city, date, start_time, end_time, teams, lable.

2. tussendata: (wordvecs, numbers)
- title: array of ints (wordvecs)
- location: string (word)
- city: string (word)
- date: day
- start_time: int
- end_time: int
- teams: array of strings
*De raw inputs worden verwerkt naar getallen die een algoritme kan gebruiken.*


1. Output Lable:  
- lable (rehearsal, recording, show, preparation, meeting, festival)  
*En als output lable word er een classificatie gedaan tussen 6 mogelijkheden.*

### A.3 Prototype

### Schets

![](prg08-prototype-schets.jpg)

### Demo

https://luukftf.github.io/prg08-eindopdracht/

https://youtu.be/cSR-S9fWRQw

### Uitleg Code

Bij de "backend" code word de data uit de raw dataset omgezet naar meer bruikbaardere formaten. Voor de stukken text is het idee om dit om te zetten naar word vectors zodat een algoritme hier ook wat aan heeft. Dit laatste krijg ik voorelkaar met het word2vec algoritme, daarin laad in nederlandse vectors in en kan is zo nederlandse texten omzetten naar woordvectors.

Zodra deze data ready is, word dit in de "frontend" gebruikt om een decisiontree te genereren en vervolgens kan je een prediction daarop uitvoeren. Je kan in de confusionmatrix zien hoe accuraat deze tree is.

#### Libraries Gebruikt 
backend
- nodejs
- word2vec
- fs
- csvtojson
- json2csv
- kaggle datasets

frontend
- scss
- decisiontree
- papaparse
- vegatree

## Commands

### Backend

Letop: het word2vec library werkt alleen op gnu/linux

Install Backend
```bash
apt install nodejs
```

Setup Backend
```bash
npm i
```

Build Backend
```bash

```

Watch Backend
```bash

```

Start Backend
```bash
node .
```

### Frontend

Install Frontend
```bash
npm install -g sass
```

Setup Frontend
```bash

```

Build Frontend
```bash
sass src/scss/style.scss docs/css/style.css
```

Watch Frontend
```bash
sass --watch src/scss/style.scss docs/css/style.css
```

Start Frontend  
Load `docs/index.html`

### Accuracy Uitleg

In eerste instantie heb ik de data direct gebruikt zoals het in de raw dataset staat. Maar hier kwam ik erachter dat een boel kolommen niet bijdraagde aan een betere prediction. De datum was bijvoorbeeld te abstract en je hebt er veel meer aan om de dag van de week te weten. Dus word de datum omgezet. Hetzelfde met de tijd: die word omgezet naar een nummer inplaats van string.

Ik merk ook dat elke keer wanneer je de decisiontree genereerd er totaal andere uitkomsten zijn, dit komt doordat de data word gehusseld en er andere trainingsdata gebruikt word. Ook zijn sommige keuzes te specifiek. Dit komt omdat ik een relatief kleine dataset heb gebruikt (70~ entries). Bij de volgende variant ga ik de hoeveelheid data velen malen groter maken om de accuracy te verhogen.

De accuracy was nu op zijn hoogst 90% en op zijn laagste 30%, wat nogsteeds beter dan willekeurig is.


### B. Uitvoering

Deadline: 2022-04-17

https://classroom.github.com/assignment-invitations/196b79544475a9ca052e0a693d821bdb/status

https://github.com/HR-CMGT-Classroom/prg08-2022-week9-LuukFTF

### Requirements

Uitwerking
- [x] prototype uit stap 2 is uitgewerkt tot werkende applicatie
- [x] gebruiksvriendelijke interface
- [x] gericht op eindgebruikers uit de doelgroep
- [x] duidelijke beschrijvende naam
- [x] code op github classroom
- [x] live online
- [x] je hebt getest met eindgebruikers uit doelgroep
- [x] voeg testresultaat toe aan inleverdocument

Reflectie:
- [x] pitch de uitwerking aan project team
- [x] verzamel feedback van team
- [x] screencast eindproduct
- [x] link naar online product
- [x] reflectiedocument (techniek):
  - Heeft het gekozen algoritme / library goed gewerkt voor jouw toepassing? Zou een ander algoritme / library beter kunnen werken? Heb je dit geprobeerd?
  - Heb je genoeg data kunnen verzamelen? Zou jouw applicatie beter kunnen worden als er meer of betere data is? Hoe kom je aan betere data?
  - Vindt er training van een model plaats in het prototype en/of in het eindproduct? Licht dit toe.
  - Heeft de data een verborgen voorkeur? Wat wordt hier mee bedoeld?
  - Wat voor accuracy vind jij goed genoeg voor jouw toepassing?
  - Zijn er privacy concerns in je app? Denk aan het opslaan / versturen van gevoelige data.
- [x] reflectiedocument (eindproduct):
  - Wat voor feedback heb je gekregen van je TLE team?
  - Is jouw werk bruikbaar voor het eindproduct van TLE? Ga je er aan doorwerken? Waarom wel of niet?
  - Heeft AI waarde toegevoegd aan je concept, of had dit ook zonder AI gekund?
  - Ben je zelf tevreden met het eindresultaat? Werkt het zo goed als je verwacht / gehoopt had? Waarom wel of niet?
  - Is je app zodanig goed dat eindgebruikers er zonder verdere instructies mee uit de voeten kunnen? Waarom wel of niet?

### Planning

- [x] Uitwerking
  - [x] data uitgebreider maken
  - [x] prototype naar volledig werkende applicatie bouwen (js)
      - [x] aparte data training pagina en gebruikers pagina
      - [x] form met auto prediction
      - [-] word2vec beter toepassen
      - [-] backend & frontend gescheiden (?word2vec api maken)
  - [x] interactie ontwerp maken (frontend design)
  - [x] interface gebruik vriendelijk maken (frontend code)
  - [x] naam bedenken
  - [x] live online met link
  - [x] test voorbereiden
  - [x] test afnemen
  - [x] test uitkomsten
  - [x] requirements check

- [x] Reflectie
  - [x] pitch maken
  - [x] pitchen
  - [x] feedback van team verzamelen
  - [x] screencast
  - [x] reflectiedocument (techniek)
  - [x] reflectiedocument (eindproduct)
  - [x] last check
  - [ ] inleveren lms & github classroom

### Ideeen

### Notes

Erik:
Hi, als je de voorbeeldcode uit de les gebruikt kan je maxTreeDepth proberen. Je vindt een aantal settings in 
https://github.com/lagodiuk/decision-tree-js/blob/master/decision-tree.js
 
Op diezelfde site staat ook het random forest algoritme. Die maakt meerdere decision trees en kijkt dan welke voorspelling het meest voorkomt. Je kan kijken of dat beter werkt dan 1 Decision Tree.
https://github.com/lagodiuk/decision-tree-js


### Accuracy

De accuracy van deze verbeterd versie ligt hoger (rond de 75-90%), ook kan ik zien in de confusion matrix dat de fouten die gemaakt worden geen grote problemen veroorzaken.

Bij de vorige versie lag de accuracy tussen de 30 en 90%, hier zie je een groot verschil, het is nu een stuk consistenter.

Ik heb de accuracy verbeterd door meer data toe te voegen aan de dataset. Ook heb ik zo divers mogelijke data erin toegevoegd.

**Zie demo & reflectie voor verdere uitleg**

### Naam

ChoirAI
RehearsAIl
AI Moderator
Templating Algorithm
TemplateAI
TemplaterAI
TemplatingAI
Templating Buddy
Artificial Operations
TemplatingBot
RoboBuddy
Smart Templater

**Choirapp Templating Buddy**

### Demo Link

https://luukftf.github.io/prg08-eindopdracht/

### Usability Testopzet
Evalueren van je user interface ontwerp
Testen met gebruikers van je product

#### Product Under Test
*What’s being tested? What are the business and experience goals of the product?*

Project Choir App - Events:
specifiek het aanmaken van events met de templatingAI

Op desktop, mobile en tablet.

#### Type Of Test

Clickthrough Test

#### Business Case
*Why are we doing this test? What are the benefits? What are the risks of not testing?*

Ik wil te weten komen of hoe ik het ontworpen heb, ook logisch aanvoelt voor de gebruikers. De voordelen zijn dat ik erachter kom waar de pijnpunten bij de gebruikers liggen. Het risico van niet testen zou kunnen zijn dat er een flow of features in zitten die de gemiddelde gebruiker helemaal niet begrijpt.

#### Test Objectives
*What are the goals of the usability test? What specific questions will be answered? What hypotheses will be tested?*

Ik wil te weten komen of de algemene flow van dit onderdeel goed is. Ook wil ik weten hoe iemand verwacht dat de templating AI werkt en hoe iemand zich voelt wanneer er een voorspelling word gedaan.

Ik denk dat in eerste instantie iemand verrast of in de war is en na een paar keer te hebben gebruikt het heel intuïtief werkt.

#### Participants
*How many participants will be recruited? What are their key characteristics?*

De test moet uitgevoerd worden door mensen die lid zijn of werken bij/met/voor koren.

In een perfect scenario zou ik voor elke doelgroep per device soort een test willen uitvoeren.

1. Koorleden onder 50
2. Koorleden 50+
3. Extra taken (bestuur/techniek/commissieleden etc)

Maar in dit geval is het als eerste test ook goed om de test uit te voeren met maar een paar mensen.

#### Equipment
*What equipment is required? How will you record the data?*

De test word uitgevoerd op een laptop. Tijdens de test word het scherm opgenomen en audio opnames gemaakt op die laptop.

Voor de mobile/tablet tests word er een telefoon/tablet gebruikt met schermopname software. 

#### Responsibilities
*Who is involved in the test and what are their responsibilities?*

Lucas van der Vegt: Test Klaarzetten, Opname Starten, Uitleg, Begeleiding, & Aantekeningen Maken

#### Location & Date
*Where and when will the test take place? When and how will the results be shared?*

1 op 1 in het echt, locatie maakt niet uit.

De onderzoeksresultaten worden netjes samengevoegd en gevisualiseerd. Deze worden uiteindelijk verwerkt in het eindverslag van programmeren 8.

#### Procedure
*What are the main steps in the test procedure?*

1. Deelnemer welkom heten en op gemak stellen
2. Toestemming vragen (toestemmingsformulier) en introductie (product word getest niet de persoon)
3. Recording Starten
4. Per test task: Scenario en taak voorleggen (zonder de stappen in detail te beschrijven!)
5. Tussendoor: Deelnemer vragen hardop te denken (Thinking Aloud Protocol)
6. Tussendoor: Open vragen stellen en doorvragen (niet sturen!)
7. Eventueel achteraf verduidelijkingsvragen stellen
8. Recording Beëindigen

#### Test Tasks
*What are the test tasks?*

1. Ga naar de event create pagina en vul gegevens voor een realistisch event in.

2. Refresh de event create pagina en experimenteer met gegevens.
   
### Test Uitkomsten

https://youtu.be/1sOBA3F2kgU

Observaties vanuit de gebruiker:

De add knop was niet duidelijk (de icons laadde niet)
Er is geen datepicker, de volgorde van datum is niet in het nederlandse format
Het team select ding is onduidelijk
Het verschil tussen location en city is niet gelijk duidelijk
Alleen maar kleine letters werken
Het label form element blijft op 1 ding
Hoe het label word aangegeven is duidelijk
Het doel en de flow van het create scherm is duidelijk en intuïtief


### Demo Video

https://youtu.be/ZkRzctgZ3WU


### Pitch Opzet

**1 Context** & **2 Problem**  
*Bij een goede pitch is het belangrijk om als eerste het probleem voor te leggen. Dit is de basis voor jouw oplossing, oftewel jouw product. Om dit probleem duidelijk te maken moet je als eerste de context geven voor je probleem.*

Je weet wel wanneer je voor werk of school items moet toevoegen in een agenda app. Je moet dan veel informatie invoeren zodat iedereen alle details weet, dit kost te veel tijd en moeite.

**3 Solution**  
*Vervolgens laat je een kleine rust vallen en geef je direct daarna de oplossing, oftewel jouw idee of product. Op die manier het heel duidelijk wat jouw idee is en waarom dit een goede oplossing is.*  

Als oplossing hebben wij hiervoor: Templating Buddy. Deze AI helpt jou met herhalende saaie, maar belangrijke taken.

**4 Why better**  
*Vervolgens is het belangrijk om te benoemen waarom jouw idee beter is dan andere al bestaande concepten.*  

In een organisatie met vrijwilligers, berust de werkdruk volledig op vrijetijds werk en moeten mensen veel eigen initiatief tonen. Om dit zo soepel mogelijk te laten verlopen moet iedereen met kleine moeite veel voor elkaar kunnen krijgen.


**5 Features / Facts**  
*Vervolgens benoem je een paar key features die jouw idee nog verder omhoog krikken.*  
Bij het het invoeren van de gegevens word er realtime een voorspelling gedaan in de lege velden.
Ook veranderd de kleur van het item op basis van welk label dit heeft.

**6 Market Potential**  
*En het laatste onderdeel van het hoofd stuk is het benoemen van het markt potentie. Wat is de doelgroep en hoeveel mensen lopen er met dit rond met ditzelfde probleem en welke mensen zouden nog meer gebruik kunnen van kunnen maken.*  

Er zijn in nederland veel koren, muziekgroepen en orkesten die niet tot hun volledige potentieel komen, door de hoeveelheid management die er nodig is met een grote groep vrijwilligers. Dit product zou voor die honderden organisaties geweldig zijn om meer voor elkaar te kunnen krijgen.


**7 Call to Action**  
*Het kan belangrijk zijn dat je aan het einde van je pitch vraag om een bepaalde actie, zo gaat na je verhaal iemand er nog aandacht aan besteden mocht diegene geinspireert zijn.*  

Voel jij je aangesproken en denk je dat dit jouw organisatie kan helpen. Download de app dan nu in de appstore & playstore! (of voor meer info ga naar de website)


**8 Catchphrase**  
*En als allerlaatste geef je nog een krachtige eindzin.*  

Choir Templating Buddy: waarom moeilijk doen als het makkelijk kan!

### Pitch Video

https://youtu.be/Oe8lcTIrPuU


### Pitch Feedback

"Erg goede slideshow, je legt duidelijk uit wat het doet en waarom je het nodig zou hebben. Rare impliciete focus op koren wanneer er veel meer verschillende vrijwilligersorganisaties zijn. Goede call to action op het einde" - Dani Verschoor

### Reflectiedocument

#### Techniek

*Heeft het gekozen algoritme / library goed gewerkt voor jouw toepassing? Zou een ander algoritme / library beter kunnen werken? Heb je dit geprobeerd?*

Ja het decision tree algoritme werkte goed en consistent. Het word2vec algoritme werkt daar in tegen niet helemaal als ik had gehoopt, het hielp ook niet mee dat er geen local javascript library voor te vinden was en de node.js versie ook bijna niet. Voor het eindproduct was het mogelijk om zonder dit algoritme te werken, hierdoor had ik geen natural language processing waardoor de titel velden niet bruikbaar waren voor de AI.

Voor de decision tree had ik een ander algoritme kunnen gebruiken (bijv KNN of een neural netwerk), zo'n algoritme zou wat diepere analyses kunnen maken en is minder gefocust op 1 specifieke uitkomst. Het handige aan decisiontree is daarintegen wel dat je precies kan zien welke keuzes worden gemaakt (white box).
Met een ander algoritme had ik waarschijnlijk meer gehad aan de vector die kwam uit word2vec, voor de decision tree was dit teveel informatie.

Ik heb naast decisiontree en word2vec geen andere algoritmes geprobeerd voor deze applicatie.


*Heb je genoeg data kunnen verzamelen? Zou jouw applicatie beter kunnen worden als er meer of betere data is? Hoe kom je aan betere data?*

Voor het eerste prototype is dit goed genoeg, wel is het algoritme momenteel vooral getrained op de data van 1 specifieke organisatie en is het een klein aantal. Daarom krijg je soms funky voorspellingen. Als dit op grote schaal zou worden gebruikt zou je meer (diverse) data nodig hebben vanuit meerdere organisaties.

Er zijn een paar methodes om in deze situatie aan meer data te kunnen komen.

Ten eerste kan je organisaties vragen of zij passende data kunnen leveren.
Ten tweede zou je zelf data kunnen genereren op basis van realistische scenarios of kunnen variëren omp data die er al is. (Dit maakt het dan minder realistisch, maar wel een stuk diverser en dus accurater)
Daarnaast zou je via het internet open source data kunnen gebruiken.
Het is ook mogelijk om data te verkrijgen via de gebruiker in de app, maar dan is security en privacy een belangrijk focuspunt.

*Vindt er training van een model plaats in het prototype en/of in het eindproduct? Licht dit toe.*

Voor het word2vec gedeelte van de applicatie word het trainen van het model volledig los van de frontend gedaan. Dit word vanuit een los backend gedeelte gemanaged. Ik het eindproduct zou het wel mogelijk moeten zijn om via een apart admin webinterface taken hier taken op uit te voeren.

De decisiontree word momenteel wel in de frontend getrained bij elke refresh (vanuit de csv data in de frontend). Uiteindelijk zou je dit eigenlijk niet in de frontend willen hebben, maar in een adminomgeving het model kunnen genereren waarna elke gebruiker hetzelfde pretrained model gebruikt.


*Heeft de data een verborgen voorkeur? Wat wordt hier mee bedoeld?*

De data en dus het model heeft een verborgen voorkeur, dit komt omdat het een kleine hoeveelheid data is, waardoor er soms rare specifieke patronen ontdekt die op grote schaal helemaal niet juist zijn. Ook zijn er sommige labels die vaker voorkomen in de data waardoor je deze vaker in de uitkomst hebt (maar dit zou ook een goed ding kunnen zijn). Per label verschilt ook hoe goed het erop getraind is om dezelfde reden. Als je niks invoerd geeft het vaak al iets van een antwoord. De data en informatie heeft geen betrekking op mensen dus er is geen zorg voor discriminatie.


*Wat voor accuracy vind jij goed genoeg voor jouw toepassing?*

De accuracy van deze verbeterd versie ligt hoger (rond de 75-90%), ook kan ik zien in de confusion matrix dat de fouten die gemaakt worden geen grote problemen veroorzaken of in de buurt zitten.


*Zijn er privacy concerns in je app? Denk aan het opslaan / versturen van gevoelige data.*

In deze versie word de volledige dataset in de frontend geladen, dit is een privacy concern voor alle mensen en organisaties die deze data hebben aangeleverd, in een volgende versie zou dit apart gedaan moeten worden (zoals ik al eerder heb benoemd) 
Voor de gebruiker van de app zijn er 0 privacy concerns omdat de interactie met de AI volledig op de frontend gebeurd, pas wanneer er een entry word submit gaat dit met de backend contact maken. (waar er gelet moet worden op de laatste en beste security & privacy practices)

#### Eindproduct

*Wat voor feedback heb je gekregen van je TLE team?*

Ik neem geen deel aan TLE dus ik heb gevraagd aan een paar klasgenoten of zij feedback konden geven, dit is wat ze gezegd hebben:

"Erg goede slideshow, je legt duidelijk uit wat het doet en waarom je het nodig zou hebben. Rare impliciete focus op koren wanneer er veel meer verschillende vrijwilligersorganisaties zijn. Goede call to action op het einde" - Dani Verschoor

*Is jouw werk bruikbaar voor het eindproduct van TLE? Ga je er aan doorwerken? Waarom wel of niet?*

Ik volg geen TLE, maar ik heb deze opdracht gebruikt binnen een project waar ik zelf mee bezig ben, op termijn kan ik deze kennis over AI toepassen in die applicatie om het fijner te maken voor de eindgebruiker. Ik vind zelf dat eerst de applicatie zelf bouwen belangrijker is, dat je later zo'n AI feature eraan toe voegd. 

*Heeft AI waarde toegevoegd aan je concept, of had dit ook zonder AI gekund?*

De applicatie zou zonder AI ook prima werken, maar zo'n AI feature voegt toch wel een extra iets toe wat de gebruiker wel een beetje verder helpt. Dit samen met andere features maakt een mooi geheel plaatje.

*Ben je zelf tevreden met het eindresultaat? Werkt het zo goed als je verwacht / gehoopt had? Waarom wel of niet?*

Ik ben tevreden met het eindresultaat, natuurlijk is dit maar een prototype en heb ik een stuk van het volledig eindproduct gesimuleerd. Maar dit laat wel mooi zien hoe deze templating ai verwerkt kan worden in zo'n applicatie. Wel zou er in een volgende versie een boel veranderingen gemaakt kunnen worden, zoals bijvoorbeeld het kunnen verwerken van textdata met word2vec en de `team` arrays.

*Is je app zodanig goed dat eindgebruikers er zonder verdere instructies mee uit de voeten kunnen? Waarom wel of niet?*

Door middel van de usertest weet ik dat de gebruiker zonder uitleg begrijpt wat er gedaan moet worden en wat waar zit en waaromd at er zit. De interface is industrie standaard en er gebeuren geen rare dingen, het is een simpele form met als toevoegen de AI die je helpt. Je word wel de eerste keer dat je het gebruikt een beetje positief verrast dat zo'n feature er in zit.