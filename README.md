
# IMHOTION
## Technologien
 - Netlify (Hosting)
 - Netlify CMS (Backend)
 - Astro (Framework)
 - React
 - Angular
## Idee
Voor mijn eindwerk was ik op zoek naar iets nieuws en uitdagends in het web development eco systeem en ik wou graag iets doen met veel 'content', iets dat mocht aandacht trekken.
Daarom dacht ik dus aan portfolios, daarna ben ik beginnen zoeken welke nieuwe technologien die ik zou kunnen leren voor dit werk. Zo kwam ik terecht op Astro, een content-first framework die bekend geworden is door razendsnelle laadtijden op de webpagina's die Astro gebruiken.

Later kwam ik in contact met Imhotep Vandeputte (founder van IMHOTION), waarmee ik al eens een project heb uitgewerkt.
En hij vertelde mij hoe een hekel hij had aan WIX en hoe lastig het soms in omgaan is.
dus kwamen we op het idee dat ik een systeem zou kunnen maken waarbij hij makkelijk zijn portfolio kan aanvullen dankzij enkel tekstjes en foto's up te loaden via een CMS.
Ook stoorde hij zich aan de laadtijden van WIX. opnieuw een probleem die ik al van plan was aan te pakken door met Astro te werken. Zo ben ik dus aan het idee van mijn eindwerk gekomen.

## Stappen
- Stap 1: Uitzoeken welke structuur de data binnen een CMS moet hebben en hoe ik die verzogt en efficient kan opbouwen. Hierbij ook rekening houdende met hou ik de data zal verwerken in Astro. Voor zover ik zie werkt Astro graag met Markdown files. Dus ik zou eens moeten uitzoeken of er een systeem bestaat waarin ik met Markdown kan werken en het gebruikersvriendelijk houden voor de klant.

- Stap 2: De CMS klaarzetten qua structuur en verbinding met de applicatie

- Stap 3: Authenticatie voor het CMS gedeelte van de applicatie opzetten, zodat enkel IMHOTION toegang zal hebben tot de functionaliteit van het uploaden/aanpassen van hun portfolio
  
- Stap 4: Het project starten en de setup met Astro in orde brengen. 

- Stap 5: Componenten/Layout op een modulaire wijze opbouwen zodat ik makkelijk via het CMS een proper portfolio kan weergeven aan de klant, Dit zal dus alle HTML en CSS inhouden. met wat javascript voor interactieve elementen. Het zal hier vooral gaan om leren omgaan met Astro en de data die ik binnenkrijg van de CMS.  Er bestaat al een design voor Imhotion.com maar deze zal wat aangepast worden, maar toch voorzie ik geen grote verandering in 80% van de applicatie.
  
- Stap 6: Testen en verbeteringen brengen waar nodig in de code
  
- Stap 6.5 (extra): Ik zou graag ook eens mezelf verdiepen in SEO, maar heb op het eerste opzicht gelezen dat dit moeilijk gaat met Astro? lijkt mij wat vreemd dus ik zal wat verder zoek aangezien dit wel belangrijk is voor iemand die wilt gevonden worden met zijn portfolio.
  
- Stap 7: Alle data in de CMS steken zodat IMHOTION verder kan van waar ze geindigt zijn.


### Opdeling datasets gebaseerd op layouts
#### Home:
- Videos
	- Tags (featured, new)
	- videoUrl
	- type(file/youtube)
- Widgets

#### Movies
- Hero banner video
- Videos
	- tag(category)
	- videoUrl
	- type(file/youtube)

#### Actors
- Actors
	- Name
	- Social links
	- image link

#### About
- About texts
- Widgets

#### Widget
- Image/video url
- type(image/text/video)
- Layout type....
- text
- text2
#### Project
- Hero Image
- Tags: ( featured? homePage?)
- Category
- Title
- Short Description (In case of featured or homepage)
- List of Widgets
	- Layout/component
		- Text (Optional)
		- Image
			- PositionY: (top, bottom)
			- PositionX: (Left, right)
			- Size?
		- Video
		- Youtube URL




## Bronnenlijst:
Imhotion: https://www.imhotion.com/porsche

NetlifyCMS Widgets: https://v1.netlifycms.org/docs/widgets/#list

DecapCMS: https://decapcms.org/

CMS Custom Widget: https://www.netlify.com/blog/2017/06/20/extending-netlify-cms-part-one-custom-widgets/ 

Custom Widget: https://decapcms.org/docs/custom-widgets/

Custom Widget example: https://codesandbox.io/s/nifty-black-s8eih?fontsize=14&hidenavigation=1&theme=dark

Filtered Folder Collections: https://decapcms.org/docs/collection-types/#filtered-folder-collections

Astro SEO: https://github.com/jonasmerlin/astro-seo

