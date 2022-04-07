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
- [ ] prototype uit stap 2 is uitgewerkt tot werkende applicatie
- [ ] gebruiksvriendelijke interface
- [ ] gericht op eindgebruikers uit de doelgroep
- [ ] duidelijke beschrijvende naam
- [ ] code op github classroom
- [ ] live online

bonus: 
- [ ] je hebt getest met eindgebruikers uit doelgroep
- [ ] voeg resultaat toe aan inleverdocument


Reflectie:
- [ ] pitch de uitwerking aan project team
- [ ] verzamel feedback van team
- [ ] screencast eindproduct
- [ ] link naar online product
- [ ] reflectiedocument (techniek):
  - Heeft het gekozen algoritme / library goed gewerkt voor jouw toepassing? Zou een ander algoritme / library beter kunnen werken? Heb je dit geprobeerd?
  - Heb je genoeg data kunnen verzamelen? Zou jouw applicatie beter kunnen worden als er meer of betere data is? Hoe kom je aan betere data?
  - Vindt er training van een model plaats in het prototype en/of in het eindproduct? Licht dit toe.
  - Heeft de data een verborgen voorkeur? Wat wordt hier mee bedoeld?
  - Wat voor accuracy vind jij goed genoeg voor jouw toepassing?
  - Zijn er privacy concerns in je app? Denk aan het opslaan / versturen van gevoelige data.
- [ ] reflectiedocument (eindproduct):
  - Wat voor feedback heb je gekregen van je TLE team?
  - Is jouw werk bruikbaar voor het eindproduct van TLE? Ga je er aan doorwerken? Waarom wel of niet?
  - Heeft AI waarde toegevoegd aan je concept, of had dit ook zonder AI gekund?
  - Ben je zelf tevreden met het eindresultaat? Werkt het zo goed als je verwacht / gehoopt had? Waarom wel of niet?
  - Is je app zodanig goed dat eindgebruikers er zonder verdere instructies mee uit de voeten kunnen? Waarom wel of niet?

### Planning

- [o] Uitwerking
  - [x] data uitgebreider maken
  - [o] prototype naar volledig werkende applicatie bouwen (js)
      - [x] aparte data training pagina en gebruikers pagina
      - [x] form met auto prediction
      - [ ] word2vec beter toepassen
      - [ ] backend & frontend gescheiden (?word2vec api maken)
  - [ ] interactie ontwerp maken (frontend design)
  - [ ] interface gebruik vriendelijk maken (frontend code)
  - [o] naam bedenken
  - [ ] requirements check
  - [ ] live online met link
  - [ ] bonus: getest en uitkomsten document
  
- [ ] Reflectie
  - [ ] pitch maken
  - [ ] pitchen
  - [ ] feedback van team verzamelen
  - [ ] screencast
  - [ ] reflectiedocument (techniek)
  - [ ] reflectiedocument (eindproduct)
  - [ ] last check
  - [ ] inleveren lms & github classroom

### Ideeen

### Notes

Erik:
Hi, als je de voorbeeldcode uit de les gebruikt kan je maxTreeDepth proberen. Je vindt een aantal settings in 
https://github.com/lagodiuk/decision-tree-js/blob/master/decision-tree.js
 
Op diezelfde site staat ook het random forest algoritme. Die maakt meerdere decision trees en kijkt dan welke voorspelling het meest voorkomt. Je kan kijken of dat beter werkt dan 1 Decision Tree.
https://github.com/lagodiuk/decision-tree-js


### Data

https://docs.google.com/spreadsheets/d/1crHZ8N6VWFBZ7w_J_b0eonGZ5mGg3ZC5Nl0yJtKpul4/edit?usp=sharing
https://docs.google.com/spreadsheets/d/1656qP6X36Ul7AYE5Eqxre1qaXebedPEuE5kVhP6u9Es/edit?usp=sharing
https://docs.google.com/spreadsheets/d/14JE3mtTRQRs9I3Nj5Fmaz0dLd6BfbAnu0AfHpD0_ZTE/edit?usp=sharing
https://docs.google.com/spreadsheets/d/1IY2Js78tVNMbxbckO3ldwdw5BKZvZXz5oUoEeymDFuc/edit?usp=sharing

###