import cabin3 from '../assets/cabins/cabin3.png';
import cabin5 from '../assets/cabins/cabin5.png';
import cabin6 from '../assets/cabins/cabin6.png';
import cabin7 from '../assets/cabins/cabin7.png';
import cabin8 from '../assets/cabins/cabin8.png';
import cabin9 from '../assets/cabins/cabin9.png';
import cabin10 from '../assets/cabins/cabin10.png';
import cabin13 from '../assets/cabins/cabin13.png';
import cabin14 from '../assets/cabins/cabin14.png';
import cabin16 from '../assets/cabins/cabin16.png';
import cabin17 from '../assets/cabins/cabin17.png';
import cabin18 from '../assets/cabins/cabin18.png';
import type { Cabin } from '../model/cabin';

export const cabins: Cabin[] = [
    {
        id: 'cabin-001',
        images: [cabin3],
        categories: ['Innsjø', 'Romantisk'],
        title: 'Vannkanten',
        description: 'Vannkanten ligger gjemt langs den rolige bredden av en rolig innsjø i Seljord, og er en sjarmerende, intim hytte laget for romantiske utflukter. Dette petite tilfluktsstedet, designet for to, utstråler varme med sitt rustikke treinteriør og myke, naturlige lys som strømmer gjennom store vinduer. Tilbring late morgener på å ro over den glassaktige innsjøen i den medfølgende båten, eller bare slapp av på den private kaien, og se vannet kruse under solnedgangens gylne glød. Fraværet av Wi-Fi og moderne distraksjoner fremmer en dyp forbindelse med partneren din og naturen rundt. Kveldene tilbringes best sammenkrøllet ved peisen, nipper til vin og lytter til den milde bølgen. Med sine idylliske omgivelser og gjennomtenkte innslag er Vannkanten det ultimate fristed for par som ønsker å tenne gnisten igjen.',
        maxGuests: 2,
        location: 'Seljord, Telemark',
        amenities: ['Brygge', 'Båt', 'Solnedgang', 'Peis', 'Stjernehimmel'],
        pricePerNight: 850,
    },
    {
        id: 'cabin-005',
        images: [cabin5],
        categories: ['Skog', 'Enkel'],
        title: 'Granly',
        description: 'Omgitt av høye grantrær i de fredelige skogene på Eidsvoll, er Granly en enkel, men fortryllende hytte som inviterer deg til å gjenopprette kontakten med naturen. Dette enkle tilfluktsstedet er perfekt for de som søker en tilbake-til-det grunnleggende opplevelse, med et koselig interiør varmet opp av en tradisjonell peis. Fraværet av moderne distraksjoner skaper en rolig atmosfære, ideell for å lese, reflektere eller bare lytte til raslingen av blader. Wi-Fi er tilgjengelig for de som trenger å holde kontakten, og nærliggende turstier fører til skjulte glenninger og naturskjønne utsiktspunkter. Enten du er alenereisende, et par eller en liten gruppe, tilbyr Granly en sjanse til å senke farten og nyte skogens skjønnhet, med fantastiske solnedganger og stjerneklare netter som bidrar til magien.',
        maxGuests: 3,
        location: 'Eidsvoll, Akershus',
        amenities: ['Peis', 'Wifi', 'Turstier', 'Solnedgang', 'Stjernehimmel'],
        pricePerNight: 600,
    },
    {
        id: 'cabin-006',
        images: [cabin6, cabin17, cabin18],
        categories: ['Fjell', 'Avsides'],
        title: 'Høgfjellbu',
        description: 'Høyt oppe i den uberørte villmarken i Rondane, er Høgfjellbu en tradisjonell fjellhytte som legemliggjør ånden av ensomhet og eventyr. Dette tilfluktsstedet er omgitt av dramatiske topper og endeløse himmelstrøk, og tilbyr fantastisk utsikt og en dyp følelse av fred. Det rustikke interiøret, med sine håndlagde tremøbler og glødende peis, skaper et varmt fristed etter en dag med utforsking av nærliggende turstier. Et velutstyrt kjøkken gjør det enkelt å tilberede solide måltider, mens fraværet av moderne støy sikrer en dyp forbindelse med naturen. Perfekt for par eller små grupper, Høgfjellbu er en inngangsport til friluftsaktiviteter som skigåing, fotturer eller bare å nyte stjerneklare netter og pulserende solnedganger som gjør denne alpine flukten virkelig uforglemmelig.',
        maxGuests: 4,
        location: 'Rondane, Innlandet',
        amenities: ['Peis', 'Turstier', 'Kjøkken', 'Solnedgang', 'Stjernehimmel'],
        pricePerNight: 1100,
    },
    {
        id: 'cabin-007',
        images: [cabin7],
        categories: ['Innsjø', 'Familie'],
        title: 'Sjøgløtt',
        description: 'Sjøgløtt ligger ved en glitrende innsjø i Norefjells bølgende åser, og er en familievennlig hytte som blander komfort med eventyr. Med god plass til seks, har dette luftige tilfluktsstedet en lys, åpen stue, et fullt utstyrt kjøkken og store vinduer som rammer inn fantastisk utsikt over innsjøen. Bare noen skritt fra en sandstrand er den perfekt for bading, fiske eller roing i den inkluderte båten. Wi-Fi holder alle underholdt, mens peisen gir varme til kjølige kvelder. Nærliggende stier inviterer til utforskning, og de livlige solnedgangene over vannet skaper et magisk bakteppe for familiegrill. Enten det er å bygge sandslott, se på stjernene eller dele historier ved bålet, er Sjøgløtt et sted hvor familier kan skape varige minner i hjertet av naturen.',
        maxGuests: 6,
        location: 'Norefjell, Viken',
        amenities: ['Båt', 'Strøm', 'Wifi', 'Peis', 'Turstier', 'Solnedgang'],
        pricePerNight: 1250,
    },
    {
        id: 'cabin-008',
        images: [cabin8],
        categories: ['Romantisk', 'Luksus'],
        title: 'Eventyrhytta',
        description: 'Eventyrhytta ligger bortgjemt i Geirangers dramatiske fjordland og er en luksuriøs, romantisk hytte som føles som et eventyr som våkner til live. Dette eksklusive tilfluktsstedet er designet for par, og har et privat boblebad, en koselig peis og gulv-til-tak-vinduer som viser majestetisk fjellutsikt. Det slanke, moderne interiøret mykes opp av rustikke innslag, og skaper en intim atmosfære perfekt for spesielle anledninger. Slapp av i badstuen etter en dag med turstier i nærheten, eller se stjerneblikk fra dekk mens nattehimmelen glitrer over. Et fullt utstyrt kjøkken gir mulighet for romantiske middager, mens fraværet av distraksjoner sikrer uavbrutt kvalitetstid. Med sine fantastiske omgivelser og gjennomtenkte fasiliteter er Eventyrhytta det ultimate reisemålet for par som søker en blanding av eventyr og nytelse.',
        maxGuests: 2,
        location: 'Geiranger, Møre og Romsdal',
        amenities: ['Badstu', 'Peis', 'Stjernehimmel', 'Kjøkken', 'Turstier'],
        pricePerNight: 2200,
    },
    {
        id: 'cabin-009',
        images: [cabin9],
        categories: ['Skog', 'Familie'],
        title: 'Tretopphytten',
        description: 'Tretopphytten ligger høyt blant tretoppene i Hurdals frodige skoger, og er en unik hytte som lover et uforglemmelig familieeventyr. Hevet over skogbunnen, tilbyr dette unike tilfluktsstedet panoramautsikt over den omkringliggende villmarken og en følelse av å leve blant fuglene. Det koselige interiøret, komplett med et fullt utstyrt kjøkken og strøm, sørger for komfort, mens den nærliggende innsjøen og den medfølgende båten inviterer til vannbasert moro. Turstier snor seg gjennom skogen, og fører til skjulte lysninger som er perfekte for piknik eller dyreliv. Med plass til fem er denne hytta ideell for familier som søker en blanding av spenning og avslapning, med pulserende solnedganger og stjerneklare netter som gir et snev av magi til hvert opphold.',
        maxGuests: 5,
        location: 'Hurdal, Akershus',
        amenities: ['Strøm', 'Kjøkken', 'Båt', 'Turstier', 'Solnedgang'],
        pricePerNight: 1350,
    },
    {
        id: 'cabin-010',
        images: [cabin10],
        categories: ['Avsides', 'Enkel'],
        title: 'Stillhet',
        description: 'Skjult dypt i Setesdals røffe landskap, er Stillhet en minimalistisk hytte designet for de som ønsker en fullstendig flukt fra den moderne verden. Uten strøm eller rennende vann tilbyr dette enkle tilfluktsstedet en sjelden mulighet til å koble fra og fordype deg i naturens rytme. Det rustikke interiøret, varmet opp av en knitrende peis, skaper et koselig fristed, mens villmarken rundt inviterer til stille ettertanke. Tilbring dagene med å gå turstier i nærheten eller bare sitte på verandaen og se pulserende solnedganger forsvinne til en blendende stjernehimmel. Perfekt for alenereisende eller par som søker ensomhet, Stillhet er et sted å lade opp, reflektere og finne fred i den uberørte skjønnheten til den norske landsbygda.',
        maxGuests: 2,
        location: 'Setesdal, Agder',
        amenities: ['Peis', 'Solnedgang', 'Stjernehimmel', 'Turstier'],
        pricePerNight: 500,
    },
    {
        id: 'cabin-013',
        images: [cabin13],
        categories: ['Skog', 'Familie'],
        title: 'Bjørkheim',
        description: 'Bjørkheim ligger i hjertet av Tinns frodige skoger, og er en romslig, familievennlig hytte som føles som et hjem borte fra hjemmet. Med plass til fem, har dette innbydende tilfluktsstedet en lys stue, et fullt utstyrt kjøkken og store vinduer som bringer skjønnheten til den omkringliggende naturen innendørs. Nærliggende naturstier snor seg gjennom skogen, perfekt for familieturer, dyrelivsspotting eller bare la barna løpe fritt. Wi-Fi holder alle underholdt, mens peisen gir varme til koselige kvelder fylt med brettspill eller historiefortelling. De pulserende solnedgangene og den klare stjernehimmelen skaper en magisk atmosfære, noe som gjør Bjørkheim til en ideell base for familier som søker en blanding av eventyr, avslapning og kvalitetstid i naturen.',
        maxGuests: 5,
        location: 'Tinn, Telemark',
        amenities: ['Turstier', 'Kjøkken', 'Wifi', 'Peis', 'Solnedgang', 'Stjernehimmel'],
        pricePerNight: 1150,
    },
    {
        id: 'cabin-014',
        images: [cabin14],
        categories: ['Luksus', 'Fjell'],
        title: 'Alpine Luxury',
        description: 'Alpine Luxury ligger i hjertet av Oppdals alpine paradis, og er en moderne, eksklusiv hytte som redefinerer fjelllivet. Med ski-in/ski-out-tilgang til løyper i verdensklasse, er dette romslige tilfluktsstedet perfekt for familier eller grupper som søker eventyr og nytelse. Det elegante interiøret kan skilte med et toppmoderne kjøkken, en brølende peis og gulv-til-tak-vinduer som viser imponerende fjellutsikt. Slapp av i den private badstuen etter en dag med ski eller fotturer i nærheten, eller samles rundt spisebordet for gourmetmåltider. Med Wi-Fi og elektrisitet som sikrer moderne komfort, blander Alpine Luxury sømløst raffinement med den røffe skjønnheten til fjellene. Levende solnedganger og stjerneklare netter gir et snev av magi til denne uforglemmelige alpine flukten.',
        maxGuests: 6,
        location: 'Oppdal, Trøndelag',
        amenities: ['Turstier', 'Kjøkken', 'Badstu', 'Peis', 'Wifi', 'Solnedgang'],
        pricePerNight: 2400,
    },
    {
        id: 'cabin-016',
        images: [cabin16],
        categories: ['Skog', 'Enkel'],
        title: 'Lyngly',
        description: 'Gjemt blant de forblåste lyngheiene på Lindesnes, er Lyngly en rustikk hytte som tilbyr en enkel, autentisk flukt ut i naturen. Uten strøm inviterer dette sjarmerende tilfluktsstedet deg til å omfavne et roligere tempo, med en knitrende peis som gir varme og stemning. Det omkringliggende landskapet, med sine bølgende åser og livlige villblomster, er perfekt for fotturer eller stille ettertanke. Stier i nærheten fører til naturskjønne utsiktspunkter, og den klare stjernehimmelen over gjør stjernekikking til et nattlig ritual. Ideell for alenereisende eller små grupper, er Lyngly et sted å koble fra den moderne verden og gjenoppta kontakten med den tidløse skjønnheten til den norske landsbygda, med fantastiske solnedganger som gir et snev av magi til hvert opphold.',
        maxGuests: 3,
        location: 'Lindesnes, Agder',
        amenities: ['Peis', 'Strøm', 'Turstier', 'Solnedgang', 'Stjernehimmel'],
        pricePerNight: 550,
    }
];