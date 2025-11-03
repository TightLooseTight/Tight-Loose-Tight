// ===== TLT App – JS (sv/no/dk) – 3×5 spørsmål – radar (maks 25) =====

// ---- Localization ----
const L = {
  no: {
    subtitle:"Refleksjonsverktøy for lederstil",
    p1:"Velg språk og gå videre.",
    info_h1: "Refleksjonsverktøy for ledelse",
    info_lead: `Tight–Loose–Tight er en tilnærming til ledelse som brukes for å balansere styring og frihet i gjennomføring av oppgaver. Dette er spesielt nyttig for oss i Gjensidige, hvor vi ønsker både tydelig retning, rom for autonomi og kontinuerlig læring.`,
    info_p1: `Metodikken bygger på Tight–Loose–Tight (TLT): først tydelig retning og rammer (Tight), deretter reell autonomi og eierskap i gjennomføringen (Loose), og til slutt systematisk oppfølging, kvalitet og læring (Tight).`,
    info_ul: [
      "Hensikten med dette verktøyet er å gi deg et språk og et utgangspunkt for å reflektere rundt din måte å lede på.",
      `Verktøyet hjelper deg til å utforske hvordan du balanserer Tight–Loose–Tight i din hverdag:
Tight: Hvor tydelig er du på retning, mandat og rammer?
Loose: Hvordan legger du til rette for frihet, autonomi og eierskap?
Tight: Hvordan sikrer du oppfølging, læring og endring?`,
      "Selvevaluering: Du vurderer deg selv på en skala fra 1–5, der 1 er lav og 5 er høy. Poenget er starte en refleksjon om hva som du har styrker, og hvor du kan utvikle din ledelse.",
      `Samtalestarter: Verktøyet er laget for refleksjon og dialog.
Dine svar er anonyme og det er kun du som kan se dine score/feedback.`
    ],
    info_foot: "Tips: Gjør testen raskt første gang, og vend tilbake etter noen uker for å se utvikling.",

    nameLbl:"Skriv inn ditt navn",
    nameHelp:"Navnet lagres lokalt på enheten og brukes i resultatene.",
    testYourself:"Test deg selv",
    update:"Oppdater resultater",
    readmore:"Les resultater",
    reset:"Nullstill",
    resultsTitle:(n)=>`Her er dine resultater${n?` (${n})`:''}`,
    badges:{ strong:"Sterk", balanced:"Balansert", weak:"Svak" },
    toastName:"Navn oppdatert",
    confirmReset:"Nullstill alle svar?",
  },
  dk: {
    subtitle:"Refleksionsværktøj for lederstil",
    p1:"Vælg sprog og gå videre.",
    info_h1: "Om denne selvtest",
    info_lead: "Dette er et enkelt refleksionsværktøj – ikke en facitliste. Formålet er at give dig et sprog og et afsæt for dialog om ledelse – ikke at “måle” dig.",
    info_p1: "Metoden bygger på Tight–Loose–Tight (TLT): først tydelig retning og rammer (Tight), derefter reel autonomi og ejerskab i gennemførelsen (Loose), og til sidst systematisk opfølgning, kvalitet og læring (Tight).",
    info_ul: [
      "Selvtest: Du vurderer dig selv – resultaterne gemmes kun lokalt på din enhed.",
      "Samtalestarter: Testen er lavet til dialog og refleksion, ikke certificering.",
      "Praktisk: Dine scorer peger på, hvad du kan forstærke eller justere i hverdagen.",
      "Effekt: Balance mellem styring, autonomi og opfølgning giver fart, læring og kvalitet."
    ],
    info_foot: "Tip: Udfør testen hurtigt første gang, og vend tilbage efter et par uger for at se fremskridt.",

    nameLbl:"Skriv dit navn",
    nameHelp:"Navnet gemmes lokalt på enheden og bruges i resultaterne.",
    testYourself:"Test dig selv",
    update:"Opdater resultater",
    readmore:"Læs resultater",
    reset:"Nulstil",
    resultsTitle:(n)=>`Her er dine resultater${n?` (${n})`:''}`,
    badges:{ strong:"Stærk", balanced:"Afbalanceret", weak:"Svag" },
    toastName:"Navn opdateret",
    confirmReset:"Nulstil alle svar?",
  },
  se: {
    subtitle:"Reflektionsverktyg för ledarskap",
    p1:"Välj språk och gå vidare.",
     info_h1: "Om detta självtest",
    info_lead: "Detta är ett enkelt reflektionsverktyg – inte en facit. Syftet är att ge dig ett språk och en startpunkt för samtal om ledarskap – inte att ”mäta” dig.",
    info_p1: "Metodiken bygger på Tight–Loose–Tight (TLT): först tydlig riktning och ramar (Tight), därefter verklig autonomi och ägarskap i genomförandet (Loose), och till sist systematisk uppföljning, kvalitet och lärande (Tight).",
    info_ul: [
      "Självtest: Du bedömer dig själv – resultaten sparas endast lokalt på din enhet.",
      "Samtalsstartare: Testet är gjort för dialog och reflektion, inte certifiering.",
      "Praktiskt: Dina poäng visar vad du kan förstärka eller justera i vardagen.",
      "Effekt: Balans mellan styrning, autonomi och uppföljning ger fart, lärande och kvalitet."
    ],
    info_foot: "Tips: Gjør testen raskt første gang, og vend tilbake etter noen uker for å se utvikling.",

    nameLbl:"Skriv in ditt namn",
    nameHelp:"Namnet sparas lokalt på enheten och används i resultaten.",
    testYourself:"Testa dig själv",
    update:"Uppdatera resultat",
    readmore:"Visa resultat",
    reset:"Nollställ",
    resultsTitle:(n)=>`Här är dina resultat${n?` (${n})`:''}`,
    badges:{ strong:"Stark", balanced:"Balanserad", weak:"Svag" },
    toastName:"Namn uppdaterat",
    confirmReset:"Nollställa alla svar?",
  }
};

// Alle spørsmål – tre språk
const QUESTIONS = {
  no: {
    t1: [
      "Jeg tar ansvar for at vi har en felles forståelse av strategisk retning",
      "Jeg sikrer at vi er enige om vårt mandat og formål",
      "Jeg sikrer tydelighet i prioriteringer og forventede resultater",
      "Jeg tar ansvar for at roller og grensesnitt er avklart",
      "Jeg tar ansvar for at rammer og arbeidsform er klare og hensiktsmessige"
    ],
    loose: [
      "Jeg gir rom og har tillit til at de som har ansvar finner gode løsninger",
      "Jeg skaper et trygt miljø for utforskning, testing og deling",
      "Jeg fjerner hindringer som bremser fart og flyt",
      "Jeg bidrar til åpenhet og transparens i alle retninger",
      "Jeg er tilgjengelig når teamet trenger støtte"
    ],
    t2: [
      "Jeg følger opp resultater og sikrer at tilbakemeldinger deles",
      "Jeg skaper rom for refleksjon og læring",
      "Jeg sikrer utvikling ved å identifisere suksess og forbedringsområder",
      "Jeg deler suksesshistorier og læring med andre",
      "Jeg gjennomfører nødvendige endringer, selv når det er krevende"
    ]
  },

  dk: {
    t1: [
      "Jeg tager ansvar for, at vi har en fælles forståelse af strategisk retning",
      "Jeg sikrer, at vi er enige om vores mandat og formål",
      "Jeg sikrer tydelighed i prioriteringer og forventede resultater",
      "Jeg tager ansvar for, at roller og grænseflader er afklarede",
      "Jeg tager ansvar for, at rammer og arbejdsform er klare og hensigtsmæssige"
    ],
    loose: [
      "Jeg giver rum og har tillid til, at dem som har ansvar finder gode løsninger",
      "Jeg skaber et trygt miljø for udforskning, test og deling",
      "Jeg fjerner hindringer, som bremser fart og flow",
      "Jeg bidrager til åbenhed og transparens i alle retninger",
      "Jeg er tilgængelig, når teamet har brug for støtte"
    ],
    t2: [
      "Jeg følger op på resultater og sikrer, at tilbagemeldinger deles",
      "Jeg skaber rum for refleksion og læring",
      "Jeg sikrer udvikling ved at identificere succes og forbedringsområder",
      "Jeg deler succeshistorier og læring med andre",
      "Jeg gennemfører nødvendige ændringer, selv når det er krævende"
    ]
  },

  se: {
    t1: [
      "Jag tar ansvar för att vi har en gemensam förståelse för den strategiska riktningen",
      "Jag ser till att vi är överens om vårt mandat och ändamål",
      "Jag säkerställer tydlighet i prioriteringar och förväntade resultat",
      "Jag tar ansvar för att roller och gränssnitt är klara",
      "Jag tar ansvar för att ramar och arbetsform är tydliga och ändamålsenliga"
    ],
    loose: [
      "Jag skapar utrymme och har förtroende för att de som har ansvar hittar bra lösningar",
      "Jag skapar en trygg miljö för utforskning, testning och delning",
      "Jag undanröjer hinder som bromsar fart och flyt",
      "Jag bidrar till öppenhet och transparens åt alla håll",
      "Jag finns tillgänglig när teamet behöver stöd"
    ],
    t2: [
      "Jag följer upp resultat och säkerställer att feedback delas",
      "Jag skapar utrymme för reflektion och lärande",
      "Jag säkerställer utveckling genom att identifiera framgångar och förbättringsområden",
      "Jag delar framgångshistorier och lärdomar med andra",
      "Jag genomför nödvändiga förändringar, även när det är krävande"
    ]
  }
};
// Resultat-tekster per språk og kategori
const RES_TEXT = {
  no: {
    t1: {
      weak: `{name}, du har nok ikke tydeliggjort retning, mandat og prioriteringer godt nok. Roller og grensesnitt fremstår uklare. Dette skaper usikkerhet. Erfarer du at dere går i samme retning?

Praktisk tips:
Ta ansvar for dialog om retning og mål, kommuniser hvorfor før hva, involver teamet i målsetting, og avklar roller og grensesnitt tydelig. Spør om hva som trengs for skape klarhet.`,
      balanced: `{name}, du har tatt ansvar for tydelig retning og mandat, men kanskje er det ikke helt forankret? Roller og rammer er kjent, men gir noe tvil. Du har kanskje skapt delvis klarhet – hva mangler for å gi full trygghet?

Praktisk tips:
Bli omforent rundt mandatet. Avklar prioriteringer sammen, bruk korte refleksjonsrunder for forankring, og sikre tydelighet – det gir rom for autonomi.`,
      strong: `{name}, du har samlet teamet rundt retning og gir trygghet til autonomi i arbeidet. Roller og rammer er tydelige, og samhandling effektiv. Hvordan holder du dette levende over tid?

Praktisk tips:
Fortsett å invitere til dialog om retning og mål, bruk læring fra teamet til å justere rammer og grensesnitt – det sikrer felles retning og eierskap på tvers av Gjensidige.`
    },
    loose: {
      weak: `{name}, du har nok ikke brukt nok tid på å bygge tillit og støtte frem autonomi, noe som kan hemme eierskap og selvstendig utforskning. Stoler du egentlig på dine ansatte? 

Praktisk tips:
Velg ett område hvor du bevisst lar andre bestemme løsning — og reflekter sammen etterpå. Skap trygghet ved å anerkjenne initiativ og læring. Still åpne spørsmål.`,
      balanced: `{name}, du gir handlingsrom, men kan ha en tendens til å bli detaljstyrende når presset øker. Hvordan kan du unngå detaljstyring?

Praktisk tips:
Formaliser arenaer for deling og åpenhet. Tren på å “stå i” ubehaget av å ikke ha full kontroll – det bygger gjensidig tillit.`,
      strong: `{name}, du balanserer frihet og ansvar slik at andre har rom til å utforske og utvikle løsninger. Det oppleves at du viser tillit og legger til rette for autonomi og eierskap. Hvordan sikrer du at frihet og ansvar er i balanse over tid?

Praktisk tips:
Fortsett å invitere til dialog om hvordan du kan støtte andre i å fjerne barrierer for å sette fart. Bruk teamets læring til å forbedre prosesser.`
    },
    t2: {
      weak: `{name}, du følger nok opp, men det oppleves sporadisk og med lite refleksjon og læring. Du følger kanskje opp i form av kontroll eller rapportering?

Praktisk tips:
Sett av tid til refleksjon i møter. Inviter andre til å dele læring. Flytt fokus fra “hva gikk galt” til “hva lærte vi” – læring skaper fremdrift og trygghet. Tør å dele egne feil.`,
      balanced: `{name}, du har følger opp, men refleksjon, læring og forbedring skjer sporadisk. Fører læringen til faktiske endringer? 

Praktisk tips:
Etabler en fast rytme for refleksjon og tilbakemelding under og etter leveranser. Tør å dele egne feil. Vis at læring skaper endringer.`,
      strong: `{name}, du kombinerer tydelig ansvar med læringskultur og utviklingsorientert oppfølging. Hvordan kan du styrke læring utover eget team?

Praktisk tips:
Fortsett dialogen med teamet rundt kontinuerlig forbedring, utforsking og samhandling. Inviter andre team til å lære av deres erfaringer.`
    }
  },

  dk: {
    t1: {
      weak: `{name}, du har nok ikke tydeliggjort retning, mandat og prioriteringer godt nok. Roller og grænseflader fremstår uklare. Det skaber usikkerhed. Oplever du, at I bevæger jer i samme retning?

Praktisk tip:
Tag ansvar for dialog om retning og mål, kommuniker hvorfor før hvad, involver teamet i målsætningen, og afklar roller og grænseflader tydeligt. Spørg, hvad der skal til for at skabe klarhed.`,
      balanced: `{name}, du har taget ansvar for tydelig retning og mandat, men måske er det ikke helt forankret? Roller og rammer er kendte, men skaber lidt tvivl. Du har måske skabt delvis klarhed – hvad mangler for at skabe fuld tryghed?

Praktisk tip:
Skab enighed om mandatet. Afklar prioriteringer sammen, brug korte refleksionsrunder til forankring, og sikr tydelighed – det giver rum for autonomi.`,
      strong: `{name}, du har samlet teamet omkring retningen og giver tryghed til autonomi i arbejdet. Roller og rammer er tydelige, og samarbejdet fungerer godt. Hvordan holder du dette levende over tid?

Praktisk tip:
Fortsæt med at invitere til dialog om retning og mål. Brug læring fra teamet til at justere rammer og grænseflader – det sikrer fælles retning og ejerskab på tværs af Gjensidige.`
    },
    loose: {
      weak: `{name}, du har nok ikke brugt nok tid på at opbygge tillid og støtte autonomi, hvilket kan hæmme ejerskab og selvstændig udforskning. Stoler du egentlig på dine medarbejdere?

Praktisk tip:
Vælg ét område, hvor du bevidst lader andre finde løsningen – og reflekter sammen bagefter. Skab tryghed ved at anerkende initiativ og læring. Stil åbne spørgsmål.`,
      balanced: `{name}, du giver handlefrihed, men kan have en tendens til at blive detaljestyret, når presset stiger. Hvordan kan du undgå detaljestyring?

Praktisk tip:
Formaliser arenaer for deling og åbenhed. Træn i at “stå i” ubehaget ved ikke at have fuld kontrol – det styrker gensidig tillid.`,
      strong: `{name}, du balancerer frihed og ansvar på en måde, der giver andre rum til at udforske og udvikle løsninger. Det opleves, at du viser tillid og fremmer autonomi og ejerskab. Hvordan sikrer du, at frihed og ansvar forbliver i balance over tid?

Praktisk tip:
Fortsæt med at invitere til dialog om, hvordan du kan støtte andre i at fjerne barrierer, der hindrer fremdrift. Brug teamets læring til at forbedre processer.`
    },
    t2: {
      weak: `{name}, du følger nok op, men det opleves sporadisk og med lidt refleksion og læring. Du følger måske op gennem kontrol eller rapportering?

Praktisk tip:
Sæt tid af til refleksion i møder. Inviter andre til at dele læring. Flyt fokus fra “hvad gik galt” til “hvad lærte vi” – læring skaber fremdrift og tryghed. Vov at dele egne fejl.`,
      balanced: `{name}, du følger op, men refleksion, læring og forbedring sker sporadisk. Leder læringen til faktiske ændringer?

Praktisk tip:
Etabler en fast rytme for refleksion og tilbagemelding under og efter leverancer. Vov at dele egne fejl. Vis at læring fører til ændringer.`,
      strong: `{name}, du kombinerer tydeligt ansvar med læringskultur og udviklingsorienteret opfølgning. Hvordan kan du styrke læring ud over dit eget team?

Praktisk tip:
Fortsæt dialogen med teamet om kontinuerlig forbedring, udforskning og samarbejde. Inviter andre teams til at lære af jeres erfaringer.`
    }
  },

  se: {
    t1: {
      weak: `{name}, du har kanske inte tydliggjort riktning, mandat och prioriteringar tillräckligt. Roller och gränssnitt framstår oklara. Detta skapar osäkerhet. Upplever du att ni går åt samma håll?

Praktiskt tips:
Ta ansvar för dialog om riktning och mål, kommunicera varför före vad, involvera teamet i målsättning och klargör roller och gränssnitt tydligt. Fråga vad som behövs för att skapa klarhet.`,
      balanced: `{name}, du har tagit ansvar för tydlig riktning och mandat, men kanske är det inte helt förankrat? Roller och ramar är kända men skapar viss tvekan. Du har kanske skapat delvis tydlighet – vad saknas för att skapa full trygghet?

Praktiskt tips:
Bli överens om mandatet. Klargör prioriteringar tillsammans, använd korta reflektionsrundor för förankring och säkerställ tydlighet – det ger utrymme för autonomi.`,
      strong: `{name}, du har samlat teamet kring riktningen och skapat trygghet för autonomi i arbetet. Roller och ramar är tydliga och samarbetet effektivt. Hur håller du detta levande över tid?

Praktiskt tips:
Fortsätt bjuda in till dialog om riktning och mål. Använd lärdomar från teamet för att justera ramar och gränssnitt – det säkerställer gemensam riktning och ägarskap inom Gjensidige.`
    },
    loose: {
      weak: `{name}, du har kanske inte lagt tillräckligt med tid på att bygga förtroende och stödja autonomi, något som kan hämma ägarskap och självständig utforskning. Litar du verkligen på dina medarbetare?

Praktiskt tips:
Välj ett område där du medvetet låter andra bestämma lösning – och reflektera tillsammans efteråt. Skapa trygghet genom att erkänna initiativ och lärande. Ställ öppna frågor.`,
      balanced: `{name}, du ger handlingsutrymme, men kan ha en tendens att bli detaljstyrande när trycket ökar. Hur kan du undvika detaljstyrning?

Praktiskt tips:
Formaliser arenor för delning och öppenhet. Öva på att “stå i” obehaget av att inte ha full kontroll – det bygger ömsesidigt förtroende.`,
      strong: `{name}, du balanserar frihet och ansvar så att andra har utrymme att utforska och utveckla lösningar. Du visar förtroende och stödjer autonomi och ägarskap. Hur säkerställer du att frihet och ansvar förblir i balans över tid?

Praktiskt tips:
Fortsätt bjuda in till dialog om hur du kan stödja andra i att ta bort hinder som bromsar framsteg. Använd teamets lärdomar för att förbättra processer.`
    },
    t2: {
      weak: `{name}, du följer upp men det känns sporadiskt och med lite reflektion och lärande. Följer du kanske upp genom kontroll eller rapportering?

Praktiskt tips:
Sätt av tid för reflektion i möten. Bjud in andra att dela lärande. Flytta fokus från “vad gick fel” till “vad lärde vi oss” – lärande skapar framsteg och trygghet. Våga dela egna misstag.`,
      balanced: `{name}, du följer upp, men reflektion, lärande och förbättring sker sporadiskt. Leder lärandet till faktiska förändringar?

Praktiskt tips:
Etablera en fast rytm för reflektion och återkoppling under och efter leveranser. Våga dela egna misstag. Visa att lärande leder till förändring.`,
      strong: `{name}, du kombinerar tydligt ansvar med lärandekultur och utvecklingsorienterad uppföljning. Hur kan du stärka lärandet utöver ditt eget team?

Praktiskt tips:
Fortsätt dialogen med teamet kring kontinuerlig förbättring, utforskning och samarbete. Bjud in andra team att lära av era erfarenheter.`
    }
  }
};


// ---- Felles resultat-tekster (samme for T/L/T) ----
function evalTextGeneric(score, name, lang='no'){
  const weak = score < 13;      // <52% av 25
  const strong = score >= 20;   // ≥80% av 25
  const n = name || (lang==='dk'?'Du':'Du');
  const T = {
    no:{
      weak: `${n}, her har du litt å jobbe med. Prioritér denne delen de neste ukene: gjør én konkret endring, test i liten skala, og be om tilbakemeldinger.`,
      mid:  `${n}, du er på god vei. Velg 1–2 vaner å forsterke, og gjør dem synlige for teamet (f.eks. sjekkliste, demo eller fast review).`,
      strong:`${n}, dette er et tydelig styrkeområde. Hold nivået ved å gjøre det repeterbart (enkle standarder/ritualer) og del praksisen med andre.`
    },
    dk:{
      weak: `${n}, her er der noget at arbejde med. Prioritér dette område de næste uger: lav én konkret ændring, test i lille skala, og bed om feedback.`,
      mid:  `${n}, du er godt på vej. Vælg 1–2 vaner at forstærke, og gør dem synlige for teamet (fx tjekliste, demo eller fast review).`,
      strong:`${n}, dette er et klart styrkeområde. Hold niveauet ved at gøre det gentageligt (enkle standarder/ritualer) og del praksis med andre.`
    },
    se:{
      weak: `${n}, här finns det att jobba med. Prioritera detta område de kommande veckorna: gör en konkret förändring, testa i liten skala och be om feedback.`,
      mid:  `${n}, du är på god väg. Välj 1–2 vanor att förstärka och gör dem synliga för teamet (t.ex. checklista, demo eller fast review).`,
      strong:`${n}, detta är ett tydligt styrkeområde. Behåll nivån genom att göra det återkommande (enkla standarder/ritualer) och dela praktiken med andra.`
    }
  };
  if (strong) return T[lang].strong;
  if (weak)   return T[lang].weak;
  return T[lang].mid;
}

// ---- State ----
const STATE_KEY = 'tlt_calc_v3_3x5';
let st = { lang:'no', name:'', answers:{ t1:Array(5).fill(null), loose:Array(5).fill(null), t2:Array(5).fill(null) }, expanded:{t1:false,loose:false,t2:false} };
const $ = (q)=>document.querySelector(q);

// ---- Save/Load ----
function save(){ try{ localStorage.setItem(STATE_KEY, JSON.stringify(st)); }catch{} }
function load(){
  try{ const raw = localStorage.getItem(STATE_KEY); if(raw) st = JSON.parse(raw); }catch{}
  applyLang();
  const nameEl = $('#name'); if (nameEl) nameEl.value = st.name || '';
  const inline = $('#userNameInline'); if (inline) inline.textContent = st.name? st.name : '';
  renderAccordion();
  // re-aktivér valgte piller
  Object.entries(st.answers).forEach(([k,arr])=>arr.forEach((v,i)=>{
    if(v){ const el=document.querySelector(`.pill[data-q="${k}-${i}"][data-v="${v}"]`); if(el) el.classList.add('active'); }
  }));
  updateScoreboxes(false);
}

// ---- Apply localization to DOM ----
function applyLang(){
  const t=L[st.lang];
  // Side 1
  const subtitle = $('#subtitle'); if(subtitle) subtitle.textContent=t.subtitle;
  const p1 = $('#p1-text'); if(p1) p1.textContent=t.p1;

  // Info-side (side 2)
  const ih1 = $('#info-h1'); if(ih1) ih1.textContent = t.info_h1;
  const ilead = $('#info-lead'); if(ilead) ilead.textContent = t.info_lead;
  const ip1 = $('#info-p1'); if(ip1) ip1.textContent = t.info_p1;
  const ul = document.getElementById('info-ul'); if(ul){ ul.innerHTML=''; t.info_ul.forEach(item => { const li=document.createElement('li'); li.textContent=item; ul.appendChild(li); }); }
  const ifoot = $('#info-foot'); if(ifoot) ifoot.textContent = t.info_foot;

  // Side 3 (navn)
  const lbl = $('#lbl-name'); if(lbl) lbl.textContent=t.nameLbl;
  const help = document.getElementById('p3-help'); if(help) help.textContent=t.nameHelp;

  // Side 4 (test)
  const p4Title = $('#p4-title'); if(p4Title) p4Title.textContent=t.testYourself;
  const btnCalc = $('#btn-calc'); if(btnCalc) btnCalc.textContent=t.update;
  const btnRead = $('#btn-readmore'); if(btnRead) btnRead.textContent=t.readmore;
  const btnReset = $('#btn-reset'); if(btnReset) btnReset.textContent=t.reset;

  // Side 5 (resultater)
  const p5Title = $('#p5-title'); if(p5Title) p5Title.textContent=t.resultsTitle(st.name);
}

// ---- Page navigation ----
function showPage(i){ document.querySelectorAll('.page').forEach((p,idx)=>p.classList.toggle('hidden', idx!==i-1)); }

// ---- Flag clicks / set active ----
document.addEventListener('click', (e)=>{
  if(e.target && e.target.id==='flag-no'){ st.lang='no'; save(); applyLang(); $('#flag-no')?.classList.add('active'); $('#flag-dk')?.classList.remove('active'); $('#flag-se')?.classList.remove('active'); }
  if(e.target && e.target.id==='flag-dk'){ st.lang='dk'; save(); applyLang(); $('#flag-dk')?.classList.add('active'); $('#flag-no')?.classList.remove('active'); $('#flag-se')?.classList.remove('active'); }
  if(e.target && e.target.id==='flag-se'){ st.lang='se'; save(); applyLang(); $('#flag-se')?.classList.add('active'); $('#flag-no')?.classList.remove('active'); $('#flag-dk')?.classList.remove('active'); }
});
function setFlag(){
  $('#flag-no')?.classList.toggle('active', st.lang==='no');
  $('#flag-dk')?.classList.toggle('active', st.lang==='dk');
  $('#flag-se')?.classList.toggle('active', st.lang==='se');
}

// ---- Wire up nav buttons (must exist in DOM) ----
function wireNav(){
  $('#p1-next')?.addEventListener('click', ()=> showPage(2));
  $('#p2-prev')?.addEventListener('click', ()=> showPage(1));
  $('#p2-next')?.addEventListener('click', ()=> showPage(3));
  $('#p3-prev')?.addEventListener('click', ()=> showPage(2));
  $('#p3-next')?.addEventListener('click', ()=> showPage(4));
  $('#p4-prev')?.addEventListener('click', ()=> showPage(3));
  $('#p4-next')?.addEventListener('click', ()=> showPage(5));
  $('#p5-prev')?.addEventListener('click', ()=> showPage(4));
}

// ---- Name handlers ----
function wireName(){
  $('#btn-ok')?.addEventListener('click', ()=>{
    st.name=$('#name').value.trim(); save();
    const i=$('#userNameInline'); if(i) i.textContent=st.name||'';
    const toastMsg = (st.lang==='dk') ? L.dk.toastName : (st.lang==='se' ? L.se.toastName : L.no.toastName);
    toast(toastMsg);
  });
  $('#btn-edit')?.addEventListener('click', ()=>{
    const n=$('#name'); n?.focus(); n?.select();
  });
}

// ---- Accordion (3×5) ----
function renderAccordion(){
  const acc = $('#acc');
  if (!acc) return;

  acc.innerHTML = '';

  // Spørsmål for valgt språk, faller tilbake til norsk hvis noe mangler
  const currentQs = QUESTIONS[st.lang] || QUESTIONS.no;

  const sections = [
    ['t1', 'Tight (1)'],
    ['loose', 'Loose'],
    ['t2', 'Tight (2)']
  ];

  sections.forEach(([key, label]) => {
    const questions = currentQs[key];
    const isOpen = !!st.expanded[key];

    const it = document.createElement('div');
    it.className = 'acc-item' + (isOpen ? ' open' : '');

    it.innerHTML = `
      <div class="acc-hd" data-key="${key}">
        <h3>${label}</h3>
        <span>${isOpen ? '−' : '+'}</span>
      </div>
      <div class="acc-bd">
        ${questions.map((text, idx) => `
          <div class="q">
            <p><strong>${idx + 1}.</strong> ${text}</p>
            <div class="scale" role="group" aria-label="Skala for ${key}-${idx}">
              ${[1,2,3,4,5].map(v => `
                <span class="pill" data-q="${key}-${idx}" data-v="${v}" tabindex="0">${v}</span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    acc.appendChild(it);
  });
}

// Toggle accordion + choose scale pills
document.body.addEventListener('click',(e)=>{
  const hd=e.target.closest?.('.acc-hd');
  if(hd){
    const k=hd.dataset.key; st.expanded[k]=!st.expanded[k]; save(); renderAccordion();
    Object.entries(st.answers).forEach(([key,arr])=>arr.forEach((v,i)=>{ if(v){ const el=document.querySelector(`.pill[data-q="${key}-${i}"][data-v="${v}"]`); if(el) el.classList.add('active'); } }));
    return;
  }
  const pill=e.target.closest?.('.pill');
  if(pill){
    const q=pill.dataset.q, v=Number(pill.dataset.v);
    document.querySelectorAll(`.pill[data-q="${q}"]`).forEach(p=>p.classList.remove('active'));
    pill.classList.add('active');
    const [key,idx]=q.split('-'); st.answers[key][Number(idx)]=v; save(); return;
  }
});

// ---- Scores & badges ----
function sum(a){return a.reduce((x,v)=>x+(Number(v)||0),0);}
function badge25(score, lang){
  if(score >= 20) return {t:L[lang].badges.strong, cls:'ok'};
  if(score >= 13) return {t:L[lang].badges.balanced, cls:'warn'};
  return {t:L[lang].badges.weak, cls:'bad'};
}

function updateScoreboxes(hideQuestions){
  const s1=sum(st.answers.t1), sL=sum(st.answers.loose), s2=sum(st.answers.t2);
  [['t1',s1],['loose',sL],['t2',s2]].forEach(([k,s])=>{
    const sb=document.getElementById('sb-'+k), sbb=document.getElementById('sbb-'+k), sbv=document.getElementById('sbv-'+k);
    if(sb && sbb && sbv){
      if(s>0){ sb.classList.remove('disabled'); const b=badge25(s, st.lang); sbb.innerHTML=`<span class="badge ${b.cls}">${b.t}</span>`; sbv.textContent=`${s}/25`; }
      else { sb.classList.add('disabled'); sbb.textContent='–'; sbv.textContent='–'; }
    }
  });
  if(hideQuestions){ st.expanded={t1:false,loose:false,t2:false}; save(); renderAccordion(); }
  fillResultsPage();
}

function fillResultsPage(){
  const scores = { t1: sum(st.answers.t1), loose: sum(st.answers.loose), t2: sum(st.answers.t2) };
  const inline=$('#userNameInline'); if(inline) inline.textContent = st.name || '';

  Object.entries(scores).forEach(([k,s])=>{
    const r=document.getElementById('r-'+k), rv=document.getElementById('rv-'+k),
          rb=document.getElementById('rb-'+k), rt=document.getElementById('rt-'+k);
    if(r && rv && rb && rt){
      if(s>0){
        r.classList.remove('disabled');
        const b=badge25(s, st.lang);
        rb.innerHTML=`<span class="badge ${b.cls}">${b.t}</span>`;
        rv.textContent=`${s}/25`;
        rt.textContent=evalTextGeneric(s, st.name, st.lang);
      } else {
        r.classList.add('disabled');
        rb.textContent='–'; rv.textContent='–'; rt.textContent='';
      }
    }
  });

  // Radar trygt: vis kun når noe er besvart
  const any = scores.t1>0 || scores.loose>0 || scores.t2>0;
  const radar = document.getElementById('radar');
  const svg   = document.getElementById('radarSvg');
  if (radar) radar.classList.toggle('hidden', !(any && svg));
  if (any && svg){
    try { drawRadar(scores); }
    catch(e){ console.warn('Radar disabled due to error:', e); radar?.classList.add('hidden'); }
  }
}

// ---- Radar (maks 25) ----
function drawRadar(scores){
  const svg = document.getElementById('radarSvg');
  if(!svg) return;

  const cx=180, cy=190, R=130, rings=5, NS='http://www.w3.org/2000/svg';
  svg.innerHTML='';

  const toXY = (deg, ratio) => {
    const rad = (deg - 90) * Math.PI / 180;
    return [ cx + Math.cos(rad)*R*ratio, cy + Math.sin(rad)*R*ratio ];
  };
  const axes = [
    { k:'t1',    a:   0, l:'Tight (1)' },
    { k:'loose', a: 120, l:'Loose'     },
    { k:'t2',    a: 240, l:'Tight (2)' }
  ];

  // grid
  for(let i=1;i<=rings;i++){
    const ratio = i/rings;
    const pts = axes.map(ax => toXY(ax.a, ratio)).map(p=>p.join(',')).join(' ');
    const g = document.createElementNS(NS,'polygon');
    g.setAttribute('points', pts);
    g.setAttribute('fill', 'none');
    g.setAttribute('stroke', 'rgba(255,255,255,0.12)');
    g.setAttribute('stroke-width', '1');
    svg.appendChild(g);
  }

  // akser + labels
  axes.forEach(ax=>{
    const [x,y] = toXY(ax.a, 1);
    const line = document.createElementNS(NS,'line');
    line.setAttribute('x1', cx); line.setAttribute('y1', cy);
    line.setAttribute('x2', x ); line.setAttribute('y2', y );
    line.setAttribute('stroke', 'rgba(255,255,255,0.18)');
    line.setAttribute('stroke-width', '1');
    svg.appendChild(line);

    const [lx,ly] = toXY(ax.a, 1.15);
    const txt = document.createElementNS(NS,'text');
    txt.setAttribute('x', lx); txt.setAttribute('y', ly);
    txt.setAttribute('fill', '#9aa4b2');
    txt.setAttribute('font-size', '12');
    txt.setAttribute('text-anchor', 'middle');
    txt.textContent = ax.l;
    svg.appendChild(txt);
  });

  // maks-polygon
  const maxPts = axes.map(ax => toXY(ax.a, 1)).map(p=>p.join(',')).join(' ');
  const maxPoly = document.createElementNS(NS,'polygon');
  maxPoly.setAttribute('points', maxPts);
  maxPoly.setAttribute('fill', 'none');
  maxPoly.setAttribute('stroke', 'var(--brand-2)');
  maxPoly.setAttribute('stroke-width', '2');
  svg.appendChild(maxPoly);

  // bruker-polygon
  const clamp25 = v => Math.max(0, Math.min(25, v||0));
  const ratios  = axes.map(ax => clamp25(scores[ax.k]) / 25);
  const userPts = axes.map((ax,i)=> toXY(ax.a, ratios[i]) ).map(p=>p.join(',')).join(' ');
  const userPoly = document.createElementNS(NS,'polygon');
  userPoly.setAttribute('points', userPts);
  userPoly.setAttribute('fill', 'rgba(10,124,255,0.20)');
  userPoly.setAttribute('stroke', 'var(--brand)');
  userPoly.setAttribute('stroke-width', '2');
  svg.appendChild(userPoly);
}

// ---- Buttons: calc / readmore / reset ----
function wireButtons(){
  $('#btn-calc')?.addEventListener('click', ()=>{ updateScoreboxes(true); 
    const t = (st.lang==='dk') ? 'Resultater opdateret' : (st.lang==='se' ? 'Resultat uppdaterat' : 'Resultater oppdatert');
    toast(t);
  });
  $('#btn-readmore')?.addEventListener('click', ()=> showPage(5));
  $('#btn-reset')?.addEventListener('click', ()=>{
    const ask = (st.lang==='dk') ? L.dk.confirmReset : (st.lang==='se' ? L.se.confirmReset : L.no.confirmReset);
    if(confirm(ask)){
      st.answers={ t1:Array(5).fill(null), loose:Array(5).fill(null), t2:Array(5).fill(null) };
      save(); renderAccordion(); updateScoreboxes(false);
    }
  });
}

// ---- Toast ----
function toast(msg){
  const d=document.createElement('div'); d.textContent=msg;
  Object.assign(d.style,{position:'fixed',left:'50%',bottom:'28px',transform:'translateX(-50%)',padding:'10px 14px',background:'#0c1527',color:'#eef2f7',border:'1px solid rgba(255,255,255,.15)',borderRadius:'10px',boxShadow:'0 10px 25px rgba(0,0,0,.35)',zIndex:9999});
  document.body.appendChild(d); setTimeout(()=>d.remove(),1400);
}

// ---- Init ----
function init(){
  setFlag();
  applyLang();
  renderAccordion();
  load();
  wireNav();
  wireName();
  wireButtons();
  showPage(1);
}

// Start når DOM er klar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
