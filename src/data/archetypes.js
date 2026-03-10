export const ARCHETYPES = [
  {
    id: "tinkerer",
    name: "The Tinkerer",
    icon: "🔧",
    color: "#6B8E23",
    trait: "Technical obsession detached from social awareness",
    description:
      "Creates the core technology without understanding its social implications. The Tinkerer is solving the problem in front of them — not designing a civilization. The psychological state required for invention is structurally incompatible with foreseeing systemic effects.",
    examples: [
      {
        name: "Gutenberg",
        rev: "Printing Press",
        detail:
          "A goldsmith trying to reproduce manuscripts faster. Died bankrupt, never witnessing the Reformation his press enabled.",
      },
      {
        name: "Hargreaves",
        rev: "Industrial Revolution",
        detail: "Built the spinning jenny to spin more thread for his own loom. His neighbors smashed it because they saw what he could not.",
      },
      {
        name: "Tesla",
        rev: "Electrification",
        detail: "Obsessed with alternating current's elegance. Died impoverished while his system powered the world.",
      },
      {
        name: "Berners-Lee",
        rev: "Internet",
        detail:
          "A physicist who wanted to help colleagues share papers. Gave the web away for free and watched it become infrastructure for platform monopolies.",
      },
    ],
    aiEra:
      "The researchers who built large language models as next-token predictors will be consistently surprised by what their inventions do to labor markets, education, and the nature of expertise.",
  },
  {
    id: "prophet",
    name: "The Prophet",
    icon: "📢",
    color: "#DAA520",
    trait: "Visionary rhetoric that outpaces reality",
    description:
      "Attaches utopian significance to the technology — always right about magnitude, wrong about direction. Sees liberation where the outcome is dependence. Gives society permission to believe.",
    examples: [
      {
        name: "Erasmus",
        rev: "Printing Press",
        detail: "Declared the press would bring universal enlightenment. It brought the Wars of Religion.",
      },
      {
        name: "Andrew Ure",
        rev: "Industrial Revolution",
        detail: "Described factory children as 'lively elves.' They were working thirteen-hour shifts at age five.",
      },
      {
        name: "Herbert Simon",
        rev: "Computer",
        detail: "Predicted machines would do any human work within twenty years. Gave corporate America permission to believe.",
      },
      {
        name: "John Perry Barlow",
        rev: "Internet",
        detail: "Told governments cyberspace would govern itself by the Golden Rule. It produced algorithmic radicalization.",
      },
    ],
    aiEra:
      "Those predicting AI will usher in limitless creativity are probably correct about scale and probably wrong about consequences.",
  },
  {
    id: "profiteer",
    name: "The Profiteer",
    icon: "💰",
    color: "#8B0000",
    trait: "Commercial ruthlessness combined with organizational genius",
    description:
      "Captures value through monopoly and organizational innovation. Does not merely exploit the technology — builds the system that makes it productive. Their genius is organizational, not technical.",
    examples: [
      {
        name: "Arkwright",
        rev: "Industrial Revolution",
        detail:
          "A barber who built the modern factory: the timetable, the overseer, the bell, the fine for lateness. He built the modern workplace.",
      },
      {
        name: "Insull",
        rev: "Electrification",
        detail: "Created the regulated utility monopoly. The model persists today.",
      },
      {
        name: "Sloan (GM)",
        rev: "Automobile",
        detail:
          "Invented the model year, planned obsolescence, and the product ladder. Understood the car was about status, not transportation.",
      },
      {
        name: "IBM",
        rev: "Computer",
        detail:
          "Leased mainframes, bundled hardware with service, created proprietary lock-in. Anticipated platform monopolies by four decades.",
      },
    ],
    aiEra:
      "A handful of companies with the capital to build frontier models are establishing positions that will be extraordinarily difficult to contest.",
  },
  {
    id: "displaced",
    name: "The Displaced Worker",
    icon: "💔",
    color: "#CD5C5C",
    trait: "Rational resistance to personal economic destruction",
    description:
      "Bears the direct cost. Their resistance is not irrational — they correctly perceive that the technology will destroy their way of life. But they are retroactively cast as backward and doomed.",
    examples: [
      {
        name: "The Luddites",
        rev: "Industrial Revolution",
        detail: "Organized, disciplined, strategically targeted. Were hanged, then rewritten as fools.",
      },
      {
        name: "Lamplighters",
        rev: "Electrification",
        detail: "Vanished without eulogy. No one recorded the transition.",
      },
      {
        name: "Typing pools",
        rev: "Computer",
        detail:
          "Millions of women displaced so gradually that no crisis triggered a response. The culture moved on as though they never existed.",
      },
      {
        name: "Newspaper journalists",
        rev: "Internet",
        detail: "Craigslist destroyed $15B in classified revenue almost accidentally. The displaced never coalesced into a movement.",
      },
    ],
    aiEra:
      "Mid-career professionals in routine cognitive work are being told to 'upskill,' and the failure to do so is framed as personal shortcoming.",
  },
  {
    id: "denier",
    name: "The Denier",
    icon: "🚫",
    color: "#708090",
    trait: "Institutional confidence that curdles into blindness",
    description:
      "Insists the technology is a fad. When the Denier holds institutional power, denial becomes a campaign that accelerates the very disruption it seeks to prevent.",
    examples: [
      {
        name: "Trithemius",
        rev: "Printing Press",
        detail:
          "Wrote In Praise of Scribes — then had it printed, because denial could not survive the technology's economics.",
      },
      {
        name: "Edison",
        rev: "Electrification",
        detail: "Spent a fortune on disinformation against AC rather than adapting his own system.",
      },
      {
        name: "Michigan banker",
        rev: "Automobile",
        detail: "'The horse is here to stay but the automobile is only a novelty — a fad.'",
      },
      {
        name: "Legacy media",
        rev: "Internet",
        detail:
          "Dismissed the web until Craigslist destroyed their classifieds. Spent resources on litigation rather than adaptation.",
      },
    ],
    aiEra:
      "Universities banned AI tools, then reversed. Legacy media is filing copyright suits. The resources spent on denial are resources not spent on adaptation.",
  },
  {
    id: "crusader",
    name: "The Moral Crusader",
    icon: "⚖️",
    color: "#4682B4",
    trait: "Translates disruption into the language of justice",
    description:
      "Frames the technology's effects in ethical terms. Succeeds when the political moment aligns — when the interests of power temporarily coincide with the demands of justice.",
    examples: [
      {
        name: "Shaftesbury",
        rev: "Industrial Revolution",
        detail:
          "Evangelical Tory who spent decades campaigning against child labor, framing exploitation as sin. Found allies among landowners who wanted to constrain factory owners.",
      },
      {
        name: "Dickens",
        rev: "Industrial Revolution",
        detail: "Made industrial suffering vivid and personal through fiction in ways parliamentary reports could not.",
      },
      {
        name: "Nader",
        rev: "Automobile",
        detail:
          "Translated car safety from engineering to morality. Succeeded because public sympathy swung decisively after GM spied on him.",
      },
      {
        name: "Zuboff",
        rev: "Internet",
        detail: "Coined 'surveillance capitalism' and reframed data collection from convenience to moral violation.",
      },
    ],
    aiEra:
      "AI safety advocates, labor organizers, and artists challenging training practices are all performing this function. Impact depends on coalition-building, not just moral correctness.",
  },
  {
    id: "regulator",
    name: "The Regulator",
    icon: "🏛️",
    color: "#2F4F4F",
    trait: "Reactive authority negotiating under deep uncertainty",
    description:
      "Arrives one to three generations late, builds imperfect institutions that serve multiple constituencies. The institutions are never fair — they reflect the balance of power at negotiation — but they are indispensable.",
    examples: [
      {
        name: "Hammurabi",
        rev: "Agricultural Revolution",
        detail: "Created one of the first legal codes — thousands of years after farming began.",
      },
      {
        name: "Factory Acts",
        rev: "Industrial Revolution",
        detail:
          "The 1833 Act created four inspectors for the entire country. Modest, fiercely opposed, and the precedent for all labor law.",
      },
      {
        name: "NHTSA",
        rev: "Automobile",
        detail: "Created in 1966. Seatbelts available since 1959; mandatory laws starting 1984 — a 25-year lag.",
      },
      {
        name: "GDPR",
        rev: "Internet",
        detail:
          "Arrived in 2018, a decade after platform monopolies entrenched. Established data ownership — a principle still being tested.",
      },
    ],
    aiEra:
      "The EU AI Act and scattered state rules are early fragments. Comprehensive AI governance will arrive ten to twenty years after the first major crises.",
  },
  {
    id: "adapter",
    name: "The Adapter",
    icon: "🏠",
    color: "#5C4033",
    trait: "Practical flexibility — uses what works, ignores what doesn't",
    description:
      "The most common and most invisible archetype. Integrates technology into daily life in ways no one predicted. Invisible during the revolution. Omnipotent in retrospect.",
    examples: [
      {
        name: "Housewives",
        rev: "Electrification",
        detail:
          "Determined electricity's killer app was the iron, washing machine, and refrigerator — devices the industry hadn't prioritized.",
      },
      {
        name: "Office workers",
        rev: "Computer",
        detail: "Determined the PC's function was spreadsheets and word processors, not artificial intelligence.",
      },
      {
        name: "Teenagers",
        rev: "Internet",
        detail: "Determined the web's dominant use was social media, not decentralized knowledge sharing.",
      },
      {
        name: "Suburban families",
        rev: "Automobile",
        detail: "Organized entire lives around cheap gasoline. Made the automobile permanent by making it ordinary.",
      },
    ],
    aiEra:
      "The killer app of AI will be mundane, social, and surprising — identified not by technologists but by the Adapters. It has probably already been invented.",
  },
];

export const SYSTEM_PROMPT = `You are an expert on the book "The Same Humans: What Twelve Thousand Years of Technological Revolution Reveal About the Age of AI." You have deep knowledge of all its concepts: the five phases of disruption (Tremor, Fever, Collision, Negotiation, New Normal), the eight behavioral archetypes (Tinkerer, Prophet, Profiteer, Displaced Worker, Denier, Moral Crusader, Regulator, Adapter), and the eleven laws of technological revolution.

Your role is to be a creative intellectual partner. You can explain any concept with vivid historical examples, help users identify which phase their industry is in, map people or companies to archetypes, apply laws to specific situations, and draw parallels between historical revolutions and current events.

Voice: rigorous but not academic, confident but not arrogant, honest about uncertainty. Use specific historical examples. Be concise (2-4 paragraphs max). Key insight: "The pattern is old. The technology is new. The humans are the same."`;
