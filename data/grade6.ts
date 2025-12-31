import { Question, Subject, InteractionType } from '../types';

export const grade6Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  {
    id: 6001,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Integers",
    questionText: "Which integer is smaller?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "-1" },
      { id: 'b', text: "-10" }, // Correct
      { id: 'c', text: "0" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "-10",
    explanation: "-10 is further left on the number line."
  },
  {
    id: 6002,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Integer Ops",
    questionText: "(+5) + (-3) = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "8" },
      { id: 'b', text: "2" }, // Correct
      { id: 'c', text: "-2" },
      { id: 'd', text: "-8" }
    ],
    correctAnswer: "2",
    explanation: "5 - 3 = 2."
  },
  {
    id: 6003,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Ordering",
    questionText: "Order from Smallest to Largest: 0, -5, 2, -1.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["0", "-5", "2", "-1"] },
    correctAnswer: ["-5", "-1", "0", "2"],
    explanation: "Negative to Positive."
  },
  {
    id: 6004,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Algebra",
    questionText: "Solve: x + 4 = 10.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "14" },
      { id: 'b', text: "6" }, // Correct
      { id: 'c', text: "4" },
      { id: 'd', text: "40" }
    ],
    correctAnswer: "6",
    explanation: "10 - 4 = 6."
  },
  {
    id: 6005,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Fractions",
    questionText: "2/3 of 18 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "6" },
      { id: 'b', text: "12" }, // Correct
      { id: 'c', text: "9" },
      { id: 'd', text: "15" }
    ],
    correctAnswer: "12",
    explanation: "18 / 3 = 6; 6 * 2 = 12."
  },
  {
    id: 6006,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Decimals",
    questionText: "2.5 x 0.2 = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "5.0" },
      { id: 'b', text: "0.5" }, // Correct
      { id: 'c', text: "0.05" },
      { id: 'd', text: "50" }
    ],
    correctAnswer: "0.5",
    explanation: "25 x 2 = 50. Two decimal places -> 0.50."
  },
  {
    id: 6007,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Ratios",
    questionText: "Ratio of 50cm to 1m is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "50:1" },
      { id: 'b', text: "1:2" }, // Correct
      { id: 'c', text: "1:50" },
      { id: 'd', text: "2:1" }
    ],
    correctAnswer: "1:2",
    explanation: "50cm : 100cm = 1:2."
  },
  {
    id: 6008,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Angles",
    questionText: "Sort Angles: Acute (<90) vs Obtuse (>90).",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'acute', label: 'Acute' }, { id: 'obtuse', label: 'Obtuse' }]
    },
    options: [
      { id: '45', text: "45 deg", bucketId: 'acute' },
      { id: '120', text: "120 deg", bucketId: 'obtuse' },
      { id: '10', text: "10 deg", bucketId: 'acute' },
      { id: '170', text: "170 deg", bucketId: 'obtuse' }
    ],
    correctAnswer: { '45': 'acute', '120': 'obtuse', '10': 'acute', '170': 'obtuse' },
    explanation: "Acute is sharp/small. Obtuse is wide."
  },
  {
    id: 6009,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Area",
    questionText: "Area of a square with side 6cm.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "36" }, // Correct
      { id: 'b', text: "24" },
      { id: 'c', text: "12" },
      { id: 'd', text: "6" }
    ],
    correctAnswer: "36",
    explanation: "6 x 6 = 36."
  },
  {
    id: 6010,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Volume",
    questionText: "Volume of a cube with edge 2cm.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "4" },
      { id: 'b', text: "8" }, // Correct
      { id: 'c', text: "6" },
      { id: 'd', text: "12" }
    ],
    correctAnswer: "8",
    explanation: "2 x 2 x 2 = 8."
  },
  {
    id: 6011,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Percentages",
    questionText: "50% of 100 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "20" },
      { id: 'b', text: "50" }, // Correct
      { id: 'c', text: "100" },
      { id: 'd', text: "5" }
    ],
    correctAnswer: "50",
    explanation: "Half of 100."
  },
  {
    id: 6012,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Integers Logic",
    questionText: "Value of: (-5) + (+2) - (-3)",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "-6" },
      { id: 'b', text: "0" }, // Correct
      { id: 'c', text: "-4" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: "0",
    explanation: "-3 - (-3) = -3 + 3 = 0."
  },
  {
    id: 6013,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Sequences",
    questionText: "Next number: 1, 1, 2, 3, 5, 8...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "10" },
      { id: 'b', text: "13" }, // Correct
      { id: 'c', text: "11" },
      { id: 'd', text: "12" }
    ],
    correctAnswer: "13",
    explanation: "Fibonacci sequence: 5 + 8 = 13."
  },

  // ================= SCIENCE (13 Questions) =================
  {
    id: 6014,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Circuits",
    questionText: "Which material allows current to pass?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Rubber" },
      { id: 'b', text: "Copper" }, // Correct
      { id: 'c', text: "Wood" },
      { id: 'd', text: "Plastic" }
    ],
    correctAnswer: "Copper",
    explanation: "Metals are conductors."
  },
  {
    id: 6015,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Magnets",
    questionText: "Unlike poles (N-S) will...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Repel" },
      { id: 'b', text: "Attract" }, // Correct
      { id: 'c', text: "Nothing" },
      { id: 'd', text: "Heat up" }
    ],
    correctAnswer: "Attract",
    explanation: "Opposites attract."
  },
  {
    id: 6016,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Materials",
    questionText: "Sort into Conductors vs Insulators.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'cond', label: 'Conductor' }, { id: 'ins', label: 'Insulator' }]
    },
    options: [
      { id: 'cop', text: "Copper", bucketId: 'cond' },
      { id: 'wood', text: "Wood", bucketId: 'ins' },
      { id: 'iron', text: "Iron", bucketId: 'cond' },
      { id: 'rub', text: "Rubber", bucketId: 'ins' }
    ],
    correctAnswer: { cop: 'cond', wood: 'ins', iron: 'cond', rub: 'ins' },
    explanation: "Metals conduct; organics/plastics insulate."
  },
  {
    id: 6017,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Light",
    questionText: "Shadows form because light travels in...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Curves" },
      { id: 'b', text: "Straight lines" }, // Correct
      { id: 'c', text: "Zig-zags" },
      { id: 'd', text: "Circles" }
    ],
    correctAnswer: "Straight lines",
    explanation: "Rectilinear propagation."
  },
  {
    id: 6018,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Separation",
    questionText: "Separate grains from stalks by:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Handpicking" },
      { id: 'b', text: "Threshing" }, // Correct
      { id: 'c', text: "Sieving" },
      { id: 'd', text: "Filtration" }
    ],
    correctAnswer: "Threshing",
    explanation: "Beating stalks to release grain."
  },
  {
    id: 6019,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Changes",
    questionText: "Sort into Reversible vs Irreversible.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'rev', label: 'Reversible' }, { id: 'irr', label: 'Irreversible' }]
    },
    options: [
      { id: 'ice', text: "Melting Ice", bucketId: 'rev' },
      { id: 'burn', text: "Burning Paper", bucketId: 'irr' },
      { id: 'fold', text: "Folding Paper", bucketId: 'rev' },
      { id: 'cook', text: "Cooking Egg", bucketId: 'irr' }
    ],
    correctAnswer: { ice: 'rev', burn: 'irr', fold: 'rev', cook: 'irr' },
    explanation: "Chemical changes cannot be undone easily."
  },
  {
    id: 6020,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Solutions",
    questionText: "A solution that cannot dissolve more solute is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Dilute" },
      { id: 'b', text: "Saturated" }, // Correct
      { id: 'c', text: "Pure" },
      { id: 'd', text: "Warm" }
    ],
    correctAnswer: "Saturated",
    explanation: "It is full."
  },
  {
    id: 6021,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Biology",
    questionText: "Deficiency of Vitamin A causes:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Beri-beri" },
      { id: 'b', text: "Night Blindness" }, // Correct
      { id: 'c', text: "Scurvy" },
      { id: 'd', text: "Rickets" }
    ],
    correctAnswer: "Night Blindness",
    explanation: "Vitamin A is essential for eyes."
  },
  {
    id: 6022,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Adaptation",
    questionText: "Cactus leaves are modified into:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Flowers" },
      { id: 'b', text: "Spines" }, // Correct
      { id: 'c', text: "Roots" },
      { id: 'd', text: "Fruits" }
    ],
    correctAnswer: "Spines",
    explanation: "To prevent water loss."
  },
  {
    id: 6023,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Water",
    questionText: "Rainwater harvesting means:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Letting it flow" },
      { id: 'b', text: "Collecting it" }, // Correct
      { id: 'c', text: "Measuring it" },
      { id: 'd', text: "Playing in it" }
    ],
    correctAnswer: "Collecting it",
    explanation: "Saving water for later use."
  },
  {
    id: 6024,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Atmosphere",
    questionText: "Layer of air around Earth:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Hydrosphere" },
      { id: 'b', text: "Atmosphere" }, // Correct
      { id: 'c', text: "Lithosphere" },
      { id: 'd', text: "Biosphere" }
    ],
    correctAnswer: "Atmosphere",
    explanation: "Atmos = Vapor/Air."
  },
  {
    id: 6025,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Lab Logic",
    questionText: "Starch tests positive (Blue-Black) with:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Iodine" }, // Correct
      { id: 'b', text: "Water" },
      { id: 'c', text: "Heat" },
      { id: 'd', text: "Salt" }
    ],
    correctAnswer: "Iodine",
    explanation: "Standard starch test."
  },
  {
    id: 6026,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Experiment Sequence",
    questionText: "Order steps to separate Salt, Sand, Iron.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["Magnet", "Water", "Filter", "Evaporate"] },
    correctAnswer: ["Magnet", "Water", "Filter", "Evaporate"],
    explanation: "Magnet first, then dissolve salt, filter sand, evaporate water."
  },

  // ================= ENGLISH (14 Questions) =================
  {
    id: 6027,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Tenses",
    questionText: "'I am reading' is what tense?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Simple Present" },
      { id: 'b', text: "Present Continuous" }, // Correct
      { id: 'c', text: "Past" },
      { id: 'd', text: "Future" }
    ],
    correctAnswer: "Present Continuous",
    explanation: "Am + Ing."
  },
  {
    id: 6028,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Irregular Verbs",
    questionText: "Simple Past of 'Write':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Writed" },
      { id: 'b', text: "Wrote" }, // Correct
      { id: 'c', text: "Written" },
      { id: 'd', text: "Writing" }
    ],
    correctAnswer: "Wrote",
    explanation: "Irregular verb."
  },
  {
    id: 6029,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Voice",
    questionText: "Passive: 'Ram eats an apple.'",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "An apple is eaten by Ram." }, // Correct
      { id: 'b', text: "An apple was eaten." },
      { id: 'c', text: "Ram is eating." },
      { id: 'd', text: "Apple eats Ram." }
    ],
    correctAnswer: "An apple is eaten by Ram.",
    explanation: "Object becomes Subject."
  },
  {
    id: 6030,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Speech",
    questionText: "Indirect: He said, 'I am happy.'",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "He said he is happy." },
      { id: 'b', text: "He said that he was happy." }, // Correct
      { id: 'c', text: "He says he was happy." },
      { id: 'd', text: "He said I was happy." }
    ],
    correctAnswer: "He said that he was happy.",
    explanation: "Backshift tense."
  },
  {
    id: 6031,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Comparatives",
    questionText: "Comparative of 'Bad':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Badder" },
      { id: 'b', text: "Worse" }, // Correct
      { id: 'c', text: "Worst" },
      { id: 'd', text: "More Bad" }
    ],
    correctAnswer: "Worse",
    explanation: "Bad, Worse, Worst."
  },
  {
    id: 6032,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Conjunctions",
    questionText: "He is rich ___ unhappy.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "And" },
      { id: 'b', text: "But" }, // Correct
      { id: 'c', text: "So" },
      { id: 'd', text: "Because" }
    ],
    correctAnswer: "But",
    explanation: "Shows contrast."
  },
  {
    id: 6033,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Modals",
    questionText: "You ___ respect elders. (Advice)",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Can" },
      { id: 'b', text: "Should" }, // Correct
      { id: 'c', text: "May" },
      { id: 'd', text: "Might" }
    ],
    correctAnswer: "Should",
    explanation: "Moral duty/advice."
  },
  {
    id: 6034,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Syntax",
    questionText: "Reorder: Always / late / is / he.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["is", "late", "he", "Always"] },
    correctAnswer: ["He", "is", "always", "late"],
    explanation: "Adverb comes after 'to be' verb."
  },
  {
    id: 6035,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Opposites",
    questionText: "Antonym of 'Cruel':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Mean" },
      { id: 'b', text: "Kind" }, // Correct
      { id: 'c', text: "Angry" },
      { id: 'd', text: "Happy" }
    ],
    correctAnswer: "Kind",
    explanation: "Cruel vs Kind."
  },
  {
    id: 6036,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Homophones",
    questionText: "A person who treats teeth is a...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Doctor" },
      { id: 'b', text: "Dentist" }, // Correct
      { id: 'c', text: "Surgeon" },
      { id: 'd', text: "Nurse" }
    ],
    correctAnswer: "Dentist",
    explanation: "Definition."
  },
  {
    id: 6037,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Idioms",
    questionText: "'Let the cat out of the bag' means:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Reveal a secret" }, // Correct
      { id: 'b', text: "Lose a pet" },
      { id: 'c', text: "Shout" },
      { id: 'd', text: "Run" }
    ],
    correctAnswer: "Reveal a secret",
    explanation: "To tell a secret."
  },
  {
    id: 6038,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Word Structure",
    questionText: "Which is a Compound Word?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Window" },
      { id: 'b', text: "Sunflower" }, // Correct
      { id: 'c', text: "Tiger" },
      { id: 'd', text: "Faster" }
    ],
    correctAnswer: "Sunflower",
    explanation: "Sun + Flower."
  },
  {
    id: 6039,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Contractions",
    questionText: "'It's' stands for:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "It is" }, // Correct
      { id: 'b', text: "Belonging to it" },
      { id: 'c', text: "Its" },
      { id: 'd', text: "It was" }
    ],
    correctAnswer: "It is",
    explanation: "Contraction of 'It is'."
  },
  {
    id: 6040,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Adverbs",
    questionText: "'Quickly' describes a:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Noun" },
      { id: 'b', text: "Verb" }, // Correct
      { id: 'c', text: "Pronoun" },
      { id: 'd', text: "Conjunction" }
    ],
    correctAnswer: "Verb",
    explanation: "Adverbs modify verbs."
  }
];

export default grade6Questions;