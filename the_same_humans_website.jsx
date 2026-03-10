import { useState, useEffect, useRef, useCallback } from "react";

const REVOLUTIONS = [
  { id: "agriculture", name: "Agricultural Revolution", date: "~10,000 BC", shortDate: "10000 BC", color: "#8B6914", icon: "\u{1F33E}", chapter: 2,
    summary: "The Natufian woman who scattered seeds near water did not know she was starting the first technological revolution. She was feeding her children. Her practical choice created surplus, hierarchy, organized warfare, codified law, and civilization itself.",
    tremor: "Anonymous cultivators experiment with wild grains in the Levant, hedging against unreliable foraging after the Younger Dryas cold snap.",
    fever: "Surplus creates demographic capital \u2014 more children, more mouths, a population trap. Settlements like \u00c7atalh\u00f6y\u00fck swell to 9,000 people. Priests mythologize farming as divine gift.",
    collision: "Farmers are shorter, sicker, more malnourished than foragers. Wealth inequality emerges around grain storage. Hunter-gatherer bands are pushed to marginal lands. The first organized warfare begins over territory and stored surplus.",
    negotiation: "The Code of Hammurabi regulates agricultural disputes. Organized religion provides social cohesion at scale. Class structures formalize. The apparatus of civilization emerges \u2014 judges, tax collectors, irrigation engineers.",
    newNormal: "By the Bronze Age, agriculture is simply how humans live. The foraging past becomes inconceivable. The violence and disease of the transition are forgotten.",
    displaced: "Hunter-gatherer communities pushed to marginal lands by expanding farming populations",
    lostGained: "Lost: freedom of movement, dietary diversity, egalitarian social structures, 15-20 hour work weeks. Gained: scale, complexity, specialists, cities, writing, accumulated knowledge."
  },
  { id: "printing", name: "The Printing Press", date: "~1455", shortDate: "1455", color: "#4A2C2A", icon: "\u{1F4DC}", chapter: 3,
    summary: "Gutenberg was a goldsmith solving a production problem, not a social revolutionary. He died bankrupt in 1468, having never witnessed the revolution he set in motion. His machine would shatter the Catholic Church\u2019s information monopoly and create the modern individual.",
    tremor: "Gutenberg perfects movable metal type in Mainz. The first printed Bibles are designed to look identical to hand-copied manuscripts.",
    fever: "By 1500, twenty million volumes printed across Europe. Erasmus declares the press will end ignorance forever. Publishers flood the market \u2014 many go bankrupt.",
    collision: "Luther's 95 Theses go viral \u2014 printed and distributed across Germany in weeks. The Peasants' War kills 100,000. The Wars of Religion devastate Europe for over a century.",
    negotiation: "The Index of Prohibited Books (1559) \u2014 arrives a century late. The Statute of Anne (1710) creates copyright, vesting ownership in the author for the first time.",
    newNormal: "By the 18th century, print culture is the air intellectual life breathes. Nobody thinks of a book as technology.",
    displaced: "Monastic scribes whose centuries-old profession became economically irrelevant within decades",
    lostGained: "Lost: manuscript culture's fluidity, communal interpretation, the monastery library as living community. Gained: the scientific revolution, democratic governance, the novel, the essay."
  },
  { id: "industrial", name: "Industrial Revolution", date: "~1764", shortDate: "1764", color: "#5C4033", icon: "\u2699\uFE0F", chapter: 4,
    summary: "Sarah Gooder, age eight, testified before Parliament in 1842: 'I'm a trapper in the Gawber pit. I have to trap without a light, and I'm scared.' She was not unusual. She was typical. The Industrial Revolution's cost was paid in small bodies.",
    tremor: "Hargreaves builds the spinning jenny after watching his daughter knock over a spinning wheel. Within five years, his neighbors smash his machines.",
    fever: "Canal mania, then railway mania. Parliament authorizes 272 companies in 1846 alone. Manchester explodes from 25,000 to 300,000. Engels finds life expectancy of seventeen years for working-class men.",
    collision: "Handloom weavers' wages collapse 75%. The Luddites mount organized resistance \u2014 and are hanged. Children as young as five work in mills. 'Luddite' is transformed from organized resistance into a slur.",
    negotiation: "The Factory Acts (1833+) prohibit child labor. Trade unions legalize (1871). Public education (1870). Sarah Gooder's testimony helps produce the Mines Act. The welfare state emerges in embryo.",
    newNormal: "By 1900, industrial capitalism is simply the world. The Luddites have been rewritten as fools. The displacement tax is forgotten.",
    displaced: "Handloom weavers \u2014 the most skilled textile workers in England \u2014 whose wages collapsed by 75%+ as power looms scaled",
    lostGained: "Lost: cottage industry rhythms, integration of work and home, knowledge of specific landscapes. Gained: material abundance, rising life expectancy, literacy, the weekend, the minimum wage."
  },
  { id: "electricity", name: "Electrification", date: "~1882", shortDate: "1882", color: "#DAA520", icon: "\u26A1", chapter: 5,
    summary: "Edison's Pearl Street Station lit a few blocks of Manhattan. Within decades, electricity would colonize the night itself \u2014 trading a relationship to darkness that had shaped human consciousness for hundreds of thousands of years for the ability to read after sunset.",
    tremor: "Edison lights 400 lamps for 85 customers in a one-mile radius of lower Manhattan. His DC system can't scale. The technology is real but crude.",
    fever: "The War of Currents: Edison funds public animal electrocutions to discredit Tesla's superior AC system. Dozens of small electric companies form; most fail.",
    collision: "Gas lighting, whale oil, candle making \u2014 entire industries extinguished. Lamplighters vanish without eulogy. Linemen die at extraordinary rates.",
    negotiation: "Samuel Insull creates the regulated utility monopoly. Rural America waits 53 years for electricity until the REA (1935).",
    newNormal: "By mid-century, electricity is a utility \u2014 a word whose very blandness signals completion. Tesla is erased from memory for most of the 20th century.",
    displaced: "Lamplighters, gas workers, candle makers, whale oil processors \u2014 entire supply chains rendered obsolete",
    lostGained: "Lost: the darkness, circadian rhythms, the visible night sky. Gained: refrigeration, air conditioning, computing, internet, AI \u2014 all downstream of the grid."
  },
  { id: "automobile", name: "The Automobile", date: "~1893", shortDate: "1893", color: "#8B0000", icon: "\u{1F697}", chapter: 6,
    summary: "Henry Ford occupied every archetype simultaneously \u2014 Tinkerer, Prophet, Profiteer, and Moral Crusader of the darkest kind. His career is a warning against assigning moral clarity to the framework's roles.",
    tremor: "Charles Duryea drives a converted horse buggy through Springfield at walking speed. A Michigan banker advises against investing in Ford: 'The horse is here to stay.'",
    fever: "1,900+ auto manufacturers founded in the US between 1900-1908. Ford's Model T drops from $850 to $260. Sloan at GM invents planned obsolescence.",
    collision: "The horse economy devastated within two decades. Robert Moses bulldozes neighborhoods for highways, displacing 250,000 people. The Cross-Bronx Expressway destroys the South Bronx.",
    negotiation: "'Jaywalking' \u2014 invented by the auto industry to blame pedestrians. Nader's Unsafe at Any Speed breaks the framing. Seatbelts available 1959; mandatory 1984.",
    newNormal: "By the 1960s, American life is organized around the car. Somewhere beneath a strip mall parking lot in LA, there are streetcar tracks. Nobody remembers.",
    displaced: "Blacksmiths, stable hands, horse breeders, carriage builders \u2014 and the communities bulldozed for highways",
    lostGained: "Lost: walkable cities, streetcar systems, mixed-use neighborhoods. Gained: spatial freedom, access to employment and services, the road trip."
  },
  { id: "computer", name: "The Computer", date: "~1946", shortDate: "1946", color: "#2F4F4F", icon: "\u{1F4BB}", chapter: 7,
    summary: "The typing pool is gone. No one can hear the silence where it was. The computer revolution was the first where displacement was so gradual, so gendered, and so culturally invisible that society completed the transition without ever acknowledging it.",
    tremor: "ENIAC fills a room and calculates artillery tables. The press calls it an 'electronic brain' \u2014 seductive and almost entirely wrong.",
    fever: "Herbert Simon predicts machines will do any human work within 20 years. IBM locks in customers with proprietary systems, controlling 65% of the market.",
    collision: "Typing pools, switchboard operators, filing clerks, bookkeepers \u2014 overwhelmingly women \u2014 displaced so gradually no crisis triggers a response.",
    negotiation: "A new class structure: Drucker's 'knowledge worker.' Displacement repackaged as personal responsibility. Data protection laws arrive piecemeal.",
    newNormal: "By the 1990s, the PC is furniture. The millions of women who performed cognitive labor that computers automated left almost no trace in history.",
    displaced: "Typing pools, filing clerks, bookkeepers, telephone switchboard operators \u2014 overwhelmingly women",
    lostGained: "Lost: mental arithmetic skills, filing expertise, layered human organizational processing. Gained: simulation, modeling, analysis at previously unthinkable scales."
  },
  { id: "internet", name: "The Internet", date: "~1969", shortDate: "1969", color: "#1a5276", icon: "\u{1F310}", chapter: 8,
    summary: "The first message over ARPANET was supposed to be 'LOGIN.' The system crashed after 'LO.' Lo and behold. Something is coming that you are not prepared for.",
    tremor: "Charley Kline types 'LO' \u2014 the system crashes before 'LOGIN.' For two decades, the network serves academics. They believe openness is inherent to the network. They are wrong.",
    fever: "Netscape IPOs at $2.9 billion having never turned a profit. The NASDAQ peaks at 5,048 and loses 78% of its value. The infrastructure survives the crash.",
    collision: "Craigslist destroys $15 billion in newspaper classified revenue almost accidentally. Travel agents, record stores, bookshops \u2014 intermediaries eliminated across every sector.",
    negotiation: "Section 230 immunizes platforms from liability. GDPR establishes data ownership (2018). Antitrust begins decades after monopolies are entrenched.",
    newNormal: "For anyone born after 1995, the internet is not a technology \u2014 it is the medium in which reality occurs. Privacy, in the historical sense, is being lost.",
    displaced: "Newspaper journalists, record store employees, travel agents, taxi drivers, retail workers \u2014 never coalescing into a political movement",
    lostGained: "Lost: privacy, shared epistemological foundation, the ability to be unreachable. Gained: connection at unprecedented scale, access to knowledge, democratization of creative tools."
  }
];

const PHASES = [
  { id: "tremor", name: "The Tremor", number: 1, color: "#6B8E23", description: "A new capability emerges in crude form, visible only to a small community.", signature: "Collective indifference punctuated by obsessive experimentation." },
  { id: "fever", name: "The Fever", number: 2, color: "#DAA520", description: "Speculative energy floods in. Promises wildly outpace delivery.", signature: "Euphoria, over-investment, messianic rhetoric." },
  { id: "collision", name: "The Collision", number: 3, color: "#CD5C5C", description: "Jobs destroyed. Power structures threatened. The longest and most painful phase.", signature: "Fear, anger, resistance, moral panic." },
  { id: "negotiation", name: "The Negotiation", number: 4, color: "#4682B4", description: "New laws, institutions, norms emerge. Guardrails built decades late.", signature: "Pragmatism, coalition-building, institutional innovation." },
  { id: "newNormal", name: "The New Normal", number: 5, color: "#708090", description: "Technology becomes invisible infrastructure. Society forgets the disruption.", signature: "Normalization, nostalgia, amnesia." }
];

const LAWS = [
  { id: 1, name: "The Tinkerer\u2019s Blindness", short: "The inventor never understands what they have invented.", icon: "\u{1F527}" },
  { id: 2, name: "The Prophet\u2019s Paradox", short: "Utopian predictions are always right about magnitude and wrong about direction.", icon: "\u{1F4E2}" },
  { id: 3, name: "The Institutional Lag", short: "Regulation arrives one to three generations after the damage it was designed to prevent.", icon: "\u231B" },
  { id: 4, name: "The Displacement Tax", short: "The costs of progress are always borne by those least equipped to pay them.", icon: "\u{1F494}" },
  { id: 5, name: "The Denier\u2019s Inversion", short: "The more powerful the incumbent, the more destructive the denial.", icon: "\u{1F6AB}" },
  { id: 6, name: "The Moral Pendulum", short: "Public moral framing swings from salvation to damnation to furniture.", icon: "\u2696\uFE0F" },
  { id: 7, name: "The Amnesia Effect", short: "Within two generations, society forgets the cost and mistakes the outcome for inevitability.", icon: "\u{1F32B}\uFE0F" },
  { id: 8, name: "The Monopoly Ratchet", short: "Every revolution produces monopolies; every monopoly is tolerated until growth ends.", icon: "\u{1F512}" },
  { id: 9, name: "The Adapter\u2019s Verdict", short: "The technology\u2019s final form is determined by its most ordinary users.", icon: "\u{1F3E0}" },
  { id: 10, name: "The Value Inversion", short: "Every revolution overturns at least one hierarchy considered permanent.", icon: "\u{1F504}" },
  { id: 11, name: "The Productivity Paradox", short: "Full economic returns take decades because the technology arrives before the world it requires.", icon: "\u{1F4CA}" }
];

const ARCHETYPES = [
  { id: "tinkerer", name: "The Tinkerer", icon: "\u{1F527}", color: "#6B8E23",
    trait: "Technical obsession detached from social awareness",
    description: "Creates the core technology without understanding its social implications. The Tinkerer is solving the problem in front of them \u2014 not designing a civilization. The psychological state required for invention is structurally incompatible with foreseeing systemic effects.",
    examples: [
      { name: "Gutenberg", rev: "Printing Press", detail: "A goldsmith trying to reproduce manuscripts faster. Died bankrupt, never witnessing the Reformation his press enabled." },
      { name: "Hargreaves", rev: "Industrial Revolution", detail: "Built the spinning jenny to spin more thread for his own loom. His neighbors smashed it because they saw what he could not." },
      { name: "Tesla", rev: "Electrification", detail: "Obsessed with alternating current\u2019s elegance. Died impoverished while his system powered the world." },
      { name: "Berners-Lee", rev: "Internet", detail: "A physicist who wanted to help colleagues share papers. Gave the web away for free and watched it become infrastructure for platform monopolies." }
    ],
    aiEra: "The researchers who built large language models as next-token predictors will be consistently surprised by what their inventions do to labor markets, education, and the nature of expertise."
  },
  { id: "prophet", name: "The Prophet", icon: "\u{1F4E2}", color: "#DAA520",
    trait: "Visionary rhetoric that outpaces reality",
    description: "Attaches utopian significance to the technology \u2014 always right about magnitude, wrong about direction. Sees liberation where the outcome is dependence. Gives society permission to believe.",
    examples: [
      { name: "Erasmus", rev: "Printing Press", detail: "Declared the press would bring universal enlightenment. It brought the Wars of Religion." },
      { name: "Andrew Ure", rev: "Industrial Revolution", detail: "Described factory children as \u2018lively elves.\u2019 They were working thirteen-hour shifts at age five." },
      { name: "Herbert Simon", rev: "Computer", detail: "Predicted machines would do any human work within twenty years. Gave corporate America permission to believe." },
      { name: "John Perry Barlow", rev: "Internet", detail: "Told governments cyberspace would govern itself by the Golden Rule. It produced algorithmic radicalization." }
    ],
    aiEra: "Those predicting AI will usher in limitless creativity are probably correct about scale and probably wrong about consequences."
  },
  { id: "profiteer", name: "The Profiteer", icon: "\u{1F4B0}", color: "#8B0000",
    trait: "Commercial ruthlessness combined with organizational genius",
    description: "Captures value through monopoly and organizational innovation. Does not merely exploit the technology \u2014 builds the system that makes it productive. Their genius is organizational, not technical.",
    examples: [
      { name: "Arkwright", rev: "Industrial Revolution", detail: "A barber who built the modern factory: the timetable, the overseer, the bell, the fine for lateness. He built the modern workplace." },
      { name: "Insull", rev: "Electrification", detail: "Created the regulated utility monopoly. The model persists today." },
      { name: "Sloan (GM)", rev: "Automobile", detail: "Invented the model year, planned obsolescence, and the product ladder. Understood the car was about status, not transportation." },
      { name: "IBM", rev: "Computer", detail: "Leased mainframes, bundled hardware with service, created proprietary lock-in. Anticipated platform monopolies by four decades." }
    ],
    aiEra: "A handful of companies with the capital to build frontier models are establishing positions that will be extraordinarily difficult to contest."
  },
  { id: "displaced", name: "The Displaced Worker", icon: "\u{1F494}", color: "#CD5C5C",
    trait: "Rational resistance to personal economic destruction",
    description: "Bears the direct cost. Their resistance is not irrational \u2014 they correctly perceive that the technology will destroy their way of life. But they are retroactively cast as backward and doomed.",
    examples: [
      { name: "The Luddites", rev: "Industrial Revolution", detail: "Organized, disciplined, strategically targeted. Were hanged, then rewritten as fools." },
      { name: "Lamplighters", rev: "Electrification", detail: "Vanished without eulogy. No one recorded the transition." },
      { name: "Typing pools", rev: "Computer", detail: "Millions of women displaced so gradually that no crisis triggered a response. The culture moved on as though they never existed." },
      { name: "Newspaper journalists", rev: "Internet", detail: "Craigslist destroyed $15B in classified revenue almost accidentally. The displaced never coalesced into a movement." }
    ],
    aiEra: "Mid-career professionals in routine cognitive work are being told to \u2018upskill,\u2019 and the failure to do so is framed as personal shortcoming."
  },
  { id: "denier", name: "The Denier", icon: "\u{1F6AB}", color: "#708090",
    trait: "Institutional confidence that curdles into blindness",
    description: "Insists the technology is a fad. When the Denier holds institutional power, denial becomes a campaign that accelerates the very disruption it seeks to prevent.",
    examples: [
      { name: "Trithemius", rev: "Printing Press", detail: "Wrote In Praise of Scribes \u2014 then had it printed, because denial could not survive the technology\u2019s economics." },
      { name: "Edison", rev: "Electrification", detail: "Spent a fortune on disinformation against AC rather than adapting his own system." },
      { name: "Michigan banker", rev: "Automobile", detail: "\u2018The horse is here to stay but the automobile is only a novelty \u2014 a fad.\u2019" },
      { name: "Legacy media", rev: "Internet", detail: "Dismissed the web until Craigslist destroyed their classifieds. Spent resources on litigation rather than adaptation." }
    ],
    aiEra: "Universities banned AI tools, then reversed. Legacy media is filing copyright suits. The resources spent on denial are resources not spent on adaptation."
  },
  { id: "crusader", name: "The Moral Crusader", icon: "\u2696\uFE0F", color: "#4682B4",
    trait: "Translates disruption into the language of justice",
    description: "Frames the technology\u2019s effects in ethical terms. Succeeds when the political moment aligns \u2014 when the interests of power temporarily coincide with the demands of justice.",
    examples: [
      { name: "Shaftesbury", rev: "Industrial Revolution", detail: "Evangelical Tory who spent decades campaigning against child labor, framing exploitation as sin. Found allies among landowners who wanted to constrain factory owners." },
      { name: "Dickens", rev: "Industrial Revolution", detail: "Made industrial suffering vivid and personal through fiction in ways parliamentary reports could not." },
      { name: "Nader", rev: "Automobile", detail: "Translated car safety from engineering to morality. Succeeded because public sympathy swung decisively after GM spied on him." },
      { name: "Zuboff", rev: "Internet", detail: "Coined \u2018surveillance capitalism\u2019 and reframed data collection from convenience to moral violation." }
    ],
    aiEra: "AI safety advocates, labor organizers, and artists challenging training practices are all performing this function. Impact depends on coalition-building, not just moral correctness."
  },
  { id: "regulator", name: "The Regulator", icon: "\u{1F3DB}\uFE0F", color: "#2F4F4F",
    trait: "Reactive authority negotiating under deep uncertainty",
    description: "Arrives one to three generations late, builds imperfect institutions that serve multiple constituencies. The institutions are never fair \u2014 they reflect the balance of power at negotiation \u2014 but they are indispensable.",
    examples: [
      { name: "Hammurabi", rev: "Agricultural Revolution", detail: "Created one of the first legal codes \u2014 thousands of years after farming began." },
      { name: "Factory Acts", rev: "Industrial Revolution", detail: "The 1833 Act created four inspectors for the entire country. Modest, fiercely opposed, and the precedent for all labor law." },
      { name: "NHTSA", rev: "Automobile", detail: "Created in 1966. Seatbelts available since 1959; mandatory laws starting 1984 \u2014 a 25-year lag." },
      { name: "GDPR", rev: "Internet", detail: "Arrived in 2018, a decade after platform monopolies entrenched. Established data ownership \u2014 a principle still being tested." }
    ],
    aiEra: "The EU AI Act and scattered state rules are early fragments. Comprehensive AI governance will arrive ten to twenty years after the first major crises."
  },
  { id: "adapter", name: "The Adapter", icon: "\u{1F3E0}", color: "#5C4033",
    trait: "Practical flexibility \u2014 uses what works, ignores what doesn\u2019t",
    description: "The most common and most invisible archetype. Integrates technology into daily life in ways no one predicted. Invisible during the revolution. Omnipotent in retrospect.",
    examples: [
      { name: "Housewives", rev: "Electrification", detail: "Determined electricity\u2019s killer app was the iron, washing machine, and refrigerator \u2014 devices the industry hadn\u2019t prioritized." },
      { name: "Office workers", rev: "Computer", detail: "Determined the PC\u2019s function was spreadsheets and word processors, not artificial intelligence." },
      { name: "Teenagers", rev: "Internet", detail: "Determined the web\u2019s dominant use was social media, not decentralized knowledge sharing." },
      { name: "Suburban families", rev: "Automobile", detail: "Organized entire lives around cheap gasoline. Made the automobile permanent by making it ordinary." }
    ],
    aiEra: "The killer app of AI will be mundane, social, and surprising \u2014 identified not by technologists but by the Adapters. It has probably already been invented."
  }
];

const SYSTEM_PROMPT = `You are an expert on the book "The Same Humans: What Twelve Thousand Years of Technological Revolution Reveal About the Age of AI." You have deep knowledge of all its concepts: the five phases of disruption (Tremor, Fever, Collision, Negotiation, New Normal), the eight behavioral archetypes (Tinkerer, Prophet, Profiteer, Displaced Worker, Denier, Moral Crusader, Regulator, Adapter), and the eleven laws of technological revolution.

Your role is to be a creative intellectual partner. You can explain any concept with vivid historical examples, help users identify which phase their industry is in, map people or companies to archetypes, apply laws to specific situations, and draw parallels between historical revolutions and current events.

Voice: rigorous but not academic, confident but not arrogant, honest about uncertainty. Use specific historical examples. Be concise (2-4 paragraphs max). Key insight: "The pattern is old. The technology is new. The humans are the same."`;

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,400&family=JetBrains+Mono:wght@400;500&display=swap');
:root{--bg:#0a0a0f;--bg2:#12121a;--bg3:#1a1a25;--bg4:#222230;--t1:#e8e6e1;--t2:#9a9790;--t3:#5a5850;--gold:#c9a84c;--warm:#d4764e;--blue:#4a7c9b;--brd:#2a2a35;--df:'Playfair Display',Georgia,serif;--db:'Source Serif 4',Georgia,serif;--dm:'JetBrains Mono',monospace}
*{margin:0;padding:0;box-sizing:border-box}
.app{background:var(--bg);color:var(--t1);min-height:100vh;font-family:var(--db);overflow-x:hidden}
.nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(10,10,15,.88);backdrop-filter:blur(20px);border-bottom:1px solid var(--brd);padding:0 2rem;height:56px;display:flex;align-items:center;justify-content:space-between}
.nav-brand{font-family:var(--df);font-size:.95rem;font-weight:700;color:var(--gold);letter-spacing:.05em;cursor:pointer}
.nav-links{display:flex;gap:1.5rem}
.nav-link{font-family:var(--dm);font-size:.68rem;text-transform:uppercase;letter-spacing:.12em;color:var(--t2);cursor:pointer;transition:color .3s;background:none;border:none;padding:.3rem 0}
.nav-link:hover,.nav-link.active{color:var(--gold)}
.hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;padding:6rem 2rem 4rem;background:radial-gradient(ellipse at 30% 20%,rgba(201,168,76,.06) 0%,transparent 60%),radial-gradient(ellipse at 70% 80%,rgba(74,124,155,.04) 0%,transparent 60%),var(--bg)}
.hero-tagline{font-family:var(--dm);font-size:.68rem;text-transform:uppercase;letter-spacing:.2em;color:var(--gold);margin-bottom:2rem;opacity:0;animation:fu 1s .3s forwards}
.hero-title{font-family:var(--df);font-size:clamp(2.8rem,7vw,5.5rem);font-weight:900;text-align:center;line-height:1.1;margin-bottom:1.5rem;opacity:0;animation:fu 1s .5s forwards}
.hero-title .gold{color:var(--gold)}
.hero-sub{font-family:var(--db);font-size:clamp(1rem,2vw,1.3rem);color:var(--t2);text-align:center;max-width:680px;line-height:1.7;font-style:italic;opacity:0;animation:fu 1s .8s forwards}
.hero-cta{margin-top:3rem;display:flex;gap:1rem;opacity:0;animation:fu 1s 1.1s forwards;flex-wrap:wrap;justify-content:center}
.btn{font-family:var(--dm);font-size:.73rem;text-transform:uppercase;letter-spacing:.1em;padding:.9rem 2rem;border:1px solid var(--brd);background:transparent;color:var(--t1);cursor:pointer;transition:all .3s}
.btn:hover{border-color:var(--gold);color:var(--gold)}
.btn-p{background:var(--gold);color:var(--bg);border-color:var(--gold);font-weight:500}
.btn-p:hover{background:#d4b35a}
.sec{padding:6rem 2rem;position:relative}
.sec-bg{background:var(--bg2)}
.sh{text-align:center;margin-bottom:4rem}
.sl{font-family:var(--dm);font-size:.63rem;text-transform:uppercase;letter-spacing:.2em;color:var(--gold);margin-bottom:.75rem}
.st{font-family:var(--df);font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700}
.sd{font-size:1.05rem;color:var(--t2);max-width:600px;margin:1rem auto 0;line-height:1.7}
.tl-track{display:flex;gap:0;max-width:1100px;margin:0 auto;position:relative}
.tl-track::before{content:'';position:absolute;top:50%;left:0;right:0;height:1px;background:var(--brd)}
.tl-item{flex:1;display:flex;flex-direction:column;align-items:center;cursor:pointer;padding:1rem .25rem;position:relative;transition:transform .3s}
.tl-item:hover{transform:translateY(-4px)}
.tl-dot{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.1rem;border:2px solid var(--brd);background:var(--bg);position:relative;z-index:2;transition:all .3s}
.tl-item:hover .tl-dot,.tl-item.active .tl-dot{border-color:var(--gold);box-shadow:0 0 20px rgba(201,168,76,.3)}
.tl-date{font-family:var(--dm);font-size:.58rem;color:var(--t3);margin-top:.5rem;letter-spacing:.05em}
.tl-name{font-family:var(--df);font-size:.68rem;color:var(--t2);text-align:center;margin-top:.25rem;line-height:1.3}
.rd{max-width:900px;margin:3rem auto 0;background:var(--bg3);border:1px solid var(--brd);padding:2.5rem;animation:fi .4s}
.rd-h{display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem}
.rd-icon{font-size:2rem}
.rd-title{font-family:var(--df);font-size:1.6rem;font-weight:700}
.rd-sum{font-size:1.05rem;line-height:1.8;color:var(--t2);margin-bottom:2rem;font-style:italic;border-left:2px solid var(--gold);padding-left:1.25rem}
.rd-phases{display:grid;gap:1.25rem}
.rd-phase{padding:1rem 1.25rem;border-left:3px solid;background:rgba(255,255,255,.02)}
.rd-pn{font-family:var(--dm);font-size:.68rem;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.4rem;font-weight:500}
.rd-pt{font-size:.95rem;line-height:1.7;color:var(--t2)}
.rd-meta{margin-top:2rem;display:grid;grid-template-columns:1fr 1fr;gap:1.5rem}
.rd-mc{padding:1.25rem;background:rgba(255,255,255,.02);border:1px solid var(--brd)}
.rd-ml{font-family:var(--dm);font-size:.63rem;text-transform:uppercase;letter-spacing:.1em;color:var(--gold);margin-bottom:.5rem}
.rd-mt{font-size:.9rem;line-height:1.6;color:var(--t2)}
.lg{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:1rem}
.lc{padding:1.5rem;border:1px solid var(--brd);background:var(--bg3);cursor:pointer;transition:all .3s;position:relative;overflow:hidden}
.lc:hover{border-color:var(--gold);transform:translateY(-2px)}
.lc::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--gold);opacity:0;transition:opacity .3s}
.lc:hover::before{opacity:1}
.ln{font-family:var(--dm);font-size:.63rem;color:var(--t3);letter-spacing:.1em;margin-bottom:.5rem}
.lnm{font-family:var(--df);font-size:1.1rem;font-weight:700;margin-bottom:.5rem}
.lds{font-size:.9rem;color:var(--t2);line-height:1.6;font-style:italic}
.ld{max-width:700px;margin:2rem auto 0;background:var(--bg3);border:1px solid var(--gold);padding:2.5rem;animation:fi .4s}
.ld-i{font-size:2.5rem;margin-bottom:1rem}
.ld-t{font-family:var(--df);font-size:1.8rem;font-weight:700;margin-bottom:.75rem}
.ld-s{font-size:1.1rem;font-style:italic;color:var(--gold);line-height:1.6;margin-bottom:1.5rem}
.ld-c{font-family:var(--dm);font-size:.68rem;color:var(--t3);cursor:pointer;text-transform:uppercase;letter-spacing:.1em;margin-top:1.5rem}
.ld-c:hover{color:var(--gold)}
.chat-sec{padding:6rem 2rem}
.cc{max-width:800px;margin:0 auto}
.cw{background:var(--bg3);border:1px solid var(--brd);height:500px;display:flex;flex-direction:column}
.cm{flex:1;overflow-y:auto;padding:1.5rem;display:flex;flex-direction:column;gap:1rem}
.msg{max-width:85%;padding:1rem 1.25rem;font-size:.95rem;line-height:1.7;animation:fi .3s}
.msg.a{background:rgba(201,168,76,.08);border-left:2px solid var(--gold);align-self:flex-start;color:var(--t1)}
.msg.u{background:rgba(74,124,155,.12);border-right:2px solid var(--blue);align-self:flex-end}
.cia{display:flex;border-top:1px solid var(--brd)}
.ci{flex:1;background:transparent;border:none;padding:1rem 1.25rem;color:var(--t1);font-family:var(--db);font-size:.95rem;outline:none}
.ci::placeholder{color:var(--t3)}
.cs{background:var(--gold);color:var(--bg);border:none;padding:0 1.5rem;font-family:var(--dm);font-size:.68rem;text-transform:uppercase;letter-spacing:.1em;cursor:pointer;font-weight:500;transition:background .3s}
.cs:hover{background:#d4b35a}
.cs:disabled{opacity:.5;cursor:not-allowed}
.sug{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem}
.sg{font-family:var(--dm);font-size:.68rem;padding:.5rem 1rem;border:1px solid var(--brd);background:transparent;color:var(--t2);cursor:pointer;transition:all .3s}
.sg:hover{border-color:var(--gold);color:var(--gold)}
.pq{padding:8rem 2rem;text-align:center;background:radial-gradient(ellipse at 50% 50%,rgba(201,168,76,.05) 0%,transparent 70%)}
.pqt{font-family:var(--df);font-size:clamp(1.5rem,3.5vw,2.5rem);font-weight:400;font-style:italic;max-width:700px;margin:0 auto;line-height:1.5;color:var(--t1)}
.pqt .hl{color:var(--gold);font-weight:700;font-style:normal}
.ft{padding:3rem 2rem;border-top:1px solid var(--brd);text-align:center}
.ftx{font-family:var(--dm);font-size:.63rem;color:var(--t3);letter-spacing:.1em;text-transform:uppercase}
.ld-dots{display:inline;animation:pulse 1.5s infinite}
.ag{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem}
.ac{padding:1.25rem;border:1px solid var(--brd);background:var(--bg3);cursor:pointer;transition:all .3s;text-align:center;position:relative;overflow:hidden}
.ac:hover{border-color:var(--gold);transform:translateY(-2px)}
.ac-icon{font-size:1.8rem;margin-bottom:.5rem}
.ac-name{font-family:var(--df);font-size:1rem;font-weight:700;margin-bottom:.35rem}
.ac-trait{font-size:.8rem;color:var(--t2);line-height:1.5;font-style:italic}
.ad{max-width:800px;margin:2rem auto 0;background:var(--bg3);border:1px solid var(--gold);padding:2.5rem;animation:fi .4s}
.ad-top{display:flex;align-items:center;gap:1rem;margin-bottom:1rem}
.ad-icon{font-size:2.5rem}
.ad-name{font-family:var(--df);font-size:1.8rem;font-weight:700}
.ad-trait{font-family:var(--dm);font-size:.72rem;text-transform:uppercase;letter-spacing:.08em;color:var(--gold);margin-bottom:1rem}
.ad-desc{font-size:1.05rem;line-height:1.8;color:var(--t2);margin-bottom:1.75rem}
.ad-exl{font-family:var(--dm);font-size:.65rem;text-transform:uppercase;letter-spacing:.12em;color:var(--t3);margin-bottom:.75rem}
.ad-exs{display:grid;gap:.75rem;margin-bottom:1.75rem}
.ad-ex{padding:.9rem 1.1rem;border-left:3px solid var(--brd);background:rgba(255,255,255,.02)}
.ad-exn{font-family:var(--df);font-size:.95rem;font-weight:700;margin-bottom:.15rem}
.ad-exr{font-family:var(--dm);font-size:.6rem;color:var(--t3);letter-spacing:.05em;margin-bottom:.3rem}
.ad-exd{font-size:.88rem;color:var(--t2);line-height:1.6}
.ad-ai{padding:1.1rem 1.25rem;border-left:3px solid var(--gold);background:rgba(201,168,76,.05);margin-bottom:1.25rem}
.ad-ail{font-family:var(--dm);font-size:.63rem;text-transform:uppercase;letter-spacing:.12em;color:var(--gold);margin-bottom:.4rem}
.ad-ait{font-size:.95rem;line-height:1.7;color:var(--t2);font-style:italic}
.ad-close{font-family:var(--dm);font-size:.68rem;color:var(--t3);cursor:pointer;text-transform:uppercase;letter-spacing:.1em}
.ad-close:hover{color:var(--gold)}
@keyframes fu{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes fi{from{opacity:0}to{opacity:1}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--brd);border-radius:3px}
@media(max-width:768px){.nav-links{gap:.75rem}.nav-link{font-size:.58rem}.tl-track{flex-wrap:wrap;justify-content:center;gap:.5rem}.tl-track::before{display:none}.rd-meta{grid-template-columns:1fr}.lg{grid-template-columns:1fr}.rd,.ld{padding:1.5rem}}
`;

function Nav({ section, go }) {
  return (
    <nav className="nav">
      <div className="nav-brand" onClick={() => go("hero")}>THE SAME HUMANS</div>
      <div className="nav-links">
        {[["hero","Home"],["timeline","Revolutions"],["laws","Laws"],["archetypes","Archetypes"],["chat","Ask the Book"]].map(([id, label]) => (
          <button key={id} className={`nav-link ${section===id?"active":""}`} onClick={() => go(id)}>{label}</button>
        ))}
      </div>
    </nav>
  );
}

function Hero({ go }) {
  return (
    <section className="hero">
      <div className="hero-tagline">A framework for the age of AI</div>
      <h1 className="hero-title">The <span className="gold">Same</span> Humans</h1>
      <p className="hero-sub">What Twelve Thousand Years of Technological Revolution Reveal About the Age of AI</p>
      <div className="hero-cta">
        <button className="btn btn-p" onClick={() => go("timeline")}>Explore the Revolutions</button>
        <button className="btn" onClick={() => go("chat")}>Ask the Book</button>
      </div>
    </section>
  );
}

function PQ() {
  return (
    <section className="pq">
      <p className="pqt">The pattern is <span className="hl">old</span>. The technology is <span className="hl">new</span>. The humans are the <span className="hl">same</span>.</p>
    </section>
  );
}

function TimelineSec() {
  const [sel, setSel] = useState(null);
  const rev = sel !== null ? REVOLUTIONS[sel] : null;
  return (
    <section className="sec" id="timeline">
      <div className="sh">
        <div className="sl">Seven Revolutions</div>
        <h2 className="st">The Recurring Architecture</h2>
        <p className="sd">Every major technological revolution follows the same arc. Select a revolution to trace the pattern.</p>
      </div>
      <div className="tl-track">
        {REVOLUTIONS.map((r, i) => (
          <div key={r.id} className={`tl-item ${sel===i?"active":""}`} onClick={() => setSel(sel===i?null:i)}>
            <div className="tl-dot">{r.icon}</div>
            <div className="tl-date">{r.shortDate}</div>
            <div className="tl-name">{r.name}</div>
          </div>
        ))}
      </div>
      {rev && (
        <div className="rd">
          <div className="rd-h">
            <span className="rd-icon">{rev.icon}</span>
            <span className="rd-title">{rev.name}</span>
          </div>
          <div className="rd-sum">{rev.summary}</div>
          <div className="rd-phases">
            {PHASES.map(ph => (
              <div key={ph.id} className="rd-phase" style={{ borderColor: ph.color }}>
                <div className="rd-pn" style={{ color: ph.color }}>{ph.name}</div>
                <div className="rd-pt">{rev[ph.id]}</div>
              </div>
            ))}
          </div>
          <div className="rd-meta">
            <div className="rd-mc">
              <div className="rd-ml">The Displaced</div>
              <div className="rd-mt">{rev.displaced}</div>
            </div>
            <div className="rd-mc">
              <div className="rd-ml">What Was Lost & Gained</div>
              <div className="rd-mt">{rev.lostGained}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function LawsSec() {
  const [sel, setSel] = useState(null);
  const law = sel !== null ? LAWS[sel] : null;
  return (
    <section className="sec sec-bg" id="laws">
      <div className="sh">
        <div className="sl">Eleven Structural Regularities</div>
        <h2 className="st">The Laws of Technological Revolution</h2>
        <p className="sd">Not laws of physics \u2014 structural regularities of human behavior, consistent enough across millennia to warrant serious predictive weight.</p>
      </div>
      {law && (
        <div className="ld">
          <div className="ld-i">{law.icon}</div>
          <div className="ln">LAW {law.id}</div>
          <div className="ld-t">{law.name}</div>
          <div className="ld-s">{law.short}</div>
          <div className="ld-c" onClick={() => setSel(null)}>{"\u2190"} Back to all laws</div>
        </div>
      )}
      {!law && (
        <div className="lg">
          {LAWS.map((l, i) => (
            <div key={l.id} className="lc" onClick={() => setSel(i)}>
              <div className="ln">LAW {l.id} {l.icon}</div>
              <div className="lnm">{l.name}</div>
              <div className="lds">{l.short}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function ArchetypesSec() {
  const [sel, setSel] = useState(null);
  const arch = sel !== null ? ARCHETYPES[sel] : null;
  return (
    <section className="sec" id="archetypes">
      <div className="sh">
        <div className="sl">Eight Recurring Roles</div>
        <h2 className="st">The Archetypes</h2>
        <p className="sd">These are not personality types but social positions \u2014 the same individual may occupy different roles at different stages. Henry Ford was Tinkerer, Prophet, Profiteer, and Moral Crusader in a single career.</p>
      </div>
      {arch && (
        <div className="ad">
          <div className="ad-top">
            <span className="ad-icon">{arch.icon}</span>
            <span className="ad-name">{arch.name}</span>
          </div>
          <div className="ad-trait">{arch.trait}</div>
          <div className="ad-desc">{arch.description}</div>
          <div className="ad-exl">Across Revolutions</div>
          <div className="ad-exs">
            {arch.examples.map((ex, i) => (
              <div key={i} className="ad-ex" style={{ borderColor: arch.color }}>
                <div className="ad-exn">{ex.name}</div>
                <div className="ad-exr">{ex.rev}</div>
                <div className="ad-exd">{ex.detail}</div>
              </div>
            ))}
          </div>
          <div className="ad-ai">
            <div className="ad-ail">In the AI Era</div>
            <div className="ad-ait">{arch.aiEra}</div>
          </div>
          <div className="ad-close" onClick={() => setSel(null)}>{"\u2190"} Back to all archetypes</div>
        </div>
      )}
      {!arch && (
        <div className="ag">
          {ARCHETYPES.map((a, i) => (
            <div key={a.id} className="ac" onClick={() => setSel(i)}>
              <div className="ac-icon">{a.icon}</div>
              <div className="ac-name">{a.name}</div>
              <div className="ac-trait">{a.trait}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function Chatbot() {
  const [msgs, setMsgs] = useState([
    { role: "assistant", content: "I\u2019m an expert on The Same Humans \u2014 the framework of five phases, eight archetypes, and eleven laws distilled from twelve thousand years of technological revolution. Ask me anything about the book\u2019s ideas, or tell me about your own situation and I\u2019ll help you apply the pattern." }
  ]);
  const [inp, setInp] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs]);

  const send = useCallback(async (text) => {
    const msg = text || inp;
    if (!msg.trim() || loading) return;
    const next = [...msgs, { role: "user", content: msg }];
    setMsgs(next);
    setInp("");
    setLoading(true);
    try {
      const apiMsgs = next.map(m => ({ role: m.role, content: m.content }));
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: SYSTEM_PROMPT, messages: apiMsgs })
      });
      const data = await res.json();
      const reply = data.content?.map(b => b.text || "").join("") || "I\u2019m having trouble connecting. Try again in a moment.";
      setMsgs(prev => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMsgs(prev => [...prev, { role: "assistant", content: "Connection issue \u2014 please try again." }]);
    }
    setLoading(false);
  }, [inp, msgs, loading]);

  const sugs = [
    "What phase is AI in right now?",
    "Apply the Displacement Tax to my career",
    "What does the Monopoly Ratchet predict for AI?",
    "I\u2019m a teacher \u2014 how should I think about AI?",
    "Who are today\u2019s Luddites?"
  ];

  return (
    <section className="chat-sec" id="chat">
      <div className="sh">
        <div className="sl">AI-Powered</div>
        <h2 className="st">Ask the Book</h2>
        <p className="sd">An expert on the framework. Ask questions, apply the laws to your situation, or explore the pattern.</p>
      </div>
      <div className="cc">
        <div className="cw">
          <div className="cm">
            {msgs.map((m, i) => (
              <div key={i} className={`msg ${m.role === "assistant" ? "a" : "u"}`}>{m.content}</div>
            ))}
            {loading && <div className="msg a"><span className="ld-dots">Thinking across twelve thousand years...</span></div>}
            <div ref={endRef} />
          </div>
          <div className="cia">
            <input className="ci" value={inp} onChange={e => setInp(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder="Ask about the framework, a specific law, or your own situation..." />
            <button className="cs" onClick={() => send()} disabled={loading || !inp.trim()}>Send</button>
          </div>
        </div>
        <div className="sug">
          {sugs.map((s, i) => (
            <button key={i} className="sg" onClick={() => send(s)}>{s}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [section, setSection] = useState("hero");
  const go = useCallback((id) => { setSection(id); window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div className="app">
      <style>{css}</style>
      <Nav section={section} go={go} />
      {section === "hero" && (
        <>
          <Hero go={go} />
          <PQ />
          <TimelineSec />
          <LawsSec />
          <ArchetypesSec />
          <PQ />
          <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
            <button className="btn btn-p" onClick={() => go("chat")} style={{ fontSize: ".78rem", padding: "1.1rem 2.5rem" }}>Ask the Book {"\u2192"}</button>
          </div>
        </>
      )}
      {section === "timeline" && <><div style={{ height: 56 }} /><TimelineSec /></>}
      {section === "laws" && <><div style={{ height: 56 }} /><LawsSec /></>}
      {section === "archetypes" && <><div style={{ height: 56 }} /><ArchetypesSec /></>}
      {section === "chat" && <><div style={{ height: 56 }} /><Chatbot /></>}
      <footer className="ft">
        <p className="ftx">The Same Humans {"\u00B7"} The pattern is old. The technology is new. The humans are the same.</p>
      </footer>
    </div>
  );
}
