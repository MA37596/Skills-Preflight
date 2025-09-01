# Living Shapes Architecture Website

Een moderne website voor Living Shapes Architecture met drag & drop functionaliteit en hover effecten.

## Functionaliteiten

- **Gradient achtergrond** - Mooie paars-blauwe gradient die het witte logo perfect laat uitkomen
- **Hover effecten** - Bij hover over project afbeeldingen wordt de tweede afbeelding getoond met smooth transitie
- **Drag & Drop** - Projecten kunnen van positie worden gewisseld door ze te slepen
- **Responsive design** - Geoptimaliseerd voor 960x500 pixels resolutie
- **Gecentreerde layout** - Alle content is zowel horizontaal als verticaal gecentreerd

## Technische Vereisten

- Docker en Docker Compose
- PHP 7.4+
- MariaDB/MySQL
- Nginx

## Installatie en Opstarten

### 1. Clone het project
```bash
git clone [repository-url]
cd Skills-Preflight
```

### 2. Start de Docker containers
```bash
docker-compose up -d
```

### 3. Wacht tot alle services zijn opgestart
```bash
docker-compose ps
```

### 4. Open de website
- **Website**: http://localhost
- **phpMyAdmin**: http://localhost:1088

## Project Structuur

```
Skills-Preflight/
├── public/                 # Website bestanden
│   ├── index.php          # Homepage
│   ├── projects.php       # Projecten pagina
│   ├── style.css          # Styling
│   └── script.js          # JavaScript functionaliteit
├── docker/                # Docker configuratie
│   └── nginx.conf         # Nginx configuratie
├── docker-compose.yml      # Docker services
├── .env                   # Environment variables
└── README.md              # Dit bestand
```

## Projecten

De website toont 4 architectuurprojecten:

1. **The Hive** - Madrid, Spain
2. **B'Fly** - Tijuana, Mexico  
3. **Bonsai** - Kyoto, Japan
4. **L'Camou** - Vancouver, Canada

Elk project heeft twee afbeeldingen:
- **Hoofdafbeelding**: Buitenkant van het gebouw
- **Tweede afbeelding**: Binnenkant van het gebouw

## Gebruik

### Navigatie
- Klik op "Bekijk Meer!" op de homepage om naar de projecten te gaan
- Gebruik de browser's back button om terug te gaan

### Drag & Drop
- Klik en sleep project boxes om ze van positie te wisselen
- Visuele feedback toont waar het project wordt geplaatst

### Hover Effecten
- Hover over project afbeeldingen om de binnenkant te zien
- Smooth transitie tussen buiten- en binnenkant

## Technische Details

### CSS Features
- CSS Grid voor 2x2 layout
- Flexbox voor centrering
- CSS Transitions voor smooth animaties
- Backdrop-filter voor glassmorphism effect

### JavaScript Features
- HTML5 Drag & Drop API
- Event listeners voor drag events
- DOM manipulation voor element swapping
- Visual feedback tijdens drag operaties

### Responsive Design
- Vaste afmetingen voor 960x500 resolutie
- Overflow hidden om scrolling te voorkomen
- Gecentreerde content

## Troubleshooting

### Database connectie problemen
```bash
# Herstart MariaDB container
docker-compose restart mariadb

# Check logs
docker-compose logs mariadb
```

### Website niet bereikbaar
```bash
# Check of alle containers draaien
docker-compose ps

# Herstart alle services
docker-compose down && docker-compose up -d
```

### Afbeeldingen niet zichtbaar
- Controleer of alle .jpg bestanden in de root directory staan
- Controleer bestandsnamen en paden in projects.php

## Contact

Living Shapes Architecture
- Email: info@livingshapes.com
- Phone: +31 20 123 4567

## Licentie

Dit project is ontwikkeld voor Living Shapes Architecture.
