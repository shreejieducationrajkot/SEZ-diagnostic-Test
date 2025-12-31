import { Question, Subject, InteractionType } from '../types';

export const grade8Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  {
    id: 8001,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Integer Logic",
    questionText: "Product of (-10) x (-5) is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "-50" },
      { id: 'b', text: "50" }, // Correct
      { id: 'c', text: "-15" },
      { id: 'd', text: "15" }
    ],
    correctAnswer: "50",
    explanation: "Negative x Negative = Positive."
  },
  {
    id: 8002,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Rational Numbers",
    questionText: "Which is a Rational Number?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "2/3" },
      { id: 'b', text: "-5/7" },
      { id: 'c', text: "0" },
      { id: 'd', text: "All of these" } // Correct
    ],
    correctAnswer: "All of these",
    explanation: "Any number p/q where q is not 0."
  },
  {
    id: 8003,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Inverse Property",
    questionText: "Additive inverse of -3/4 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "-4/3" },
      { id: 'b', text: "3/4" }, // Correct
      { id: 'c', text: "0" },
      { id: 'd', text: "4/3" }
    ],
    correctAnswer: "3/4",
    explanation: "Sum must be zero. -3/4 + 3/4 = 0."
  },
  {
    id: 8004,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Reciprocals",
    questionText: "Multiplicative Inverse of -5/8 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "5/8" },
      { id: 'b', text: "-8/5" }, // Correct
      { id: 'c', text: "8/5" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "-8/5",
    explanation: "Product must be 1. (-5/8) * (-8/5) = 1."
  },
  {
    id: 8005,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Equation Solving",
    questionText: "Solve: 2x - 3 = x + 2",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "5" }, // Correct
      { id: 'c', text: "-1" },
      { id: 'd', text: "2" }
    ],
    correctAnswer: "5",
    explanation: "2x - x = 2 + 3 => x = 5."
  },
  {
    id: 8006,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Geometry",
    questionText: "Sum of exterior angles of any polygon is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "180" },
      { id: 'b', text: "360" }, // Correct
      { id: 'c', text: "90" },
      { id: 'd', text: "540" }
    ],
    correctAnswer: "360",
    explanation: "It is always 360 degrees, regardless of sides."
  },
  {
    id: 8007,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Quadrilaterals",
    questionText: "A parallelogram with all equal sides is a:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Rectangle" },
      { id: 'b', text: "Rhombus" }, // Correct
      { id: 'c', text: "Trapezium" },
      { id: 'd', text: "Kite" }
    ],
    correctAnswer: "Rhombus",
    explanation: "Equal sides + Parallel pairs = Rhombus."
  },
  {
    id: 8008,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Probability",
    questionText: "Probability of getting a Head in a coin toss:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "1/2" }, // Correct
      { id: 'c', text: "1/4" },
      { id: 'd', text: "0" }
    ],
    correctAnswer: "1/2",
    explanation: "1 favorable outcome out of 2 total."
  },
  {
    id: 8009,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Square Roots",
    questionText: "Square root of 1.44 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1.2" }, // Correct
      { id: 'b', text: "12" },
      { id: 'c', text: "0.12" },
      { id: 'd', text: "1.4" }
    ],
    correctAnswer: "1.2",
    explanation: "12x12=144, so 1.2x1.2=1.44."
  },
  {
    id: 8010,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Cube Roots",
    questionText: "Cube root of -8 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "-2" }, // Correct
      { id: 'c', text: "4" },
      { id: 'd', text: "-4" }
    ],
    correctAnswer: "-2",
    explanation: "(-2) x (-2) x (-2) = -8."
  },
  {
    id: 8011,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Percentages",
    questionText: "Convert 3:4 to percentage.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "30%" },
      { id: 'b', text: "75%" }, // Correct
      { id: 'c', text: "40%" },
      { id: 'd', text: "80%" }
    ],
    correctAnswer: "75%",
    explanation: "3/4 * 100 = 75%."
  },
  {
    id: 8012,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Algebraic Identity",
    questionText: "(a+b)(a-b) is equal to:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "a^2 + b^2" },
      { id: 'b', text: "a^2 - b^2" }, // Correct
      { id: 'c', text: "a^2 + 2ab + b^2" },
      { id: 'd', text: "a^2 - 2ab + b^2" }
    ],
    correctAnswer: "a^2 - b^2",
    explanation: "Standard algebraic identity."
  },
  {
    id: 8013,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Mensuration",
    questionText: "Total Surface Area of a Cube with side 'a':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "4a^2" },
      { id: 'b', text: "6a^2" }, // Correct
      { id: 'c', text: "a^3" },
      { id: 'd', text: "6a" }
    ],
    correctAnswer: "6a^2",
    explanation: "6 faces, each area a^2."
  },

  // ================= SCIENCE (13 Questions) =================
  {
    id: 8014,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Force",
    questionText: "A push or pull is called:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Pressure" },
      { id: 'b', text: "Force" }, // Correct
      { id: 'c', text: "Friction" },
      { id: 'd', text: "Energy" }
    ],
    correctAnswer: "Force",
    explanation: "Basic definition."
  },
  {
    id: 8015,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Friction Types",
    questionText: "Which friction is the least?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Static" },
      { id: 'b', text: "Rolling" }, // Correct
      { id: 'c', text: "Sliding" },
      { id: 'd', text: "Fluid" }
    ],
    correctAnswer: "Rolling",
    explanation: "Rolling reduces contact area and resistance."
  },
  {
    id: 8016,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Sound",
    questionText: "Sound cannot travel through:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Water" },
      { id: 'b', text: "Vacuum" }, // Correct
      { id: 'c', text: "Iron" },
      { id: 'd', text: "Air" }
    ],
    correctAnswer: "Vacuum",
    explanation: "Sound needs a medium."
  },
  {
    id: 8017,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Materials",
    questionText: "Which metal is liquid at room temperature?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Sodium" },
      { id: 'b', text: "Mercury" }, // Correct
      { id: 'c', text: "Iron" },
      { id: 'd', text: "Gold" }
    ],
    correctAnswer: "Mercury",
    explanation: "Unique property of Mercury."
  },
  {
    id: 8018,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Combustion",
    questionText: "Which zone of a flame is hottest?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Inner (Black)" },
      { id: 'b', text: "Outer (Blue)" }, // Correct
      { id: 'c', text: "Middle (Yellow)" },
      { id: 'd', text: "Bottom" }
    ],
    correctAnswer: "Outer (Blue)",
    explanation: "Complete combustion happens there."
  },
  {
    id: 8019,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Biology - Cells",
    questionText: "Powerhouse of the cell is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Nucleus" },
      { id: 'b', text: "Mitochondria" }, // Correct
      { id: 'c', text: "Ribosome" },
      { id: 'd', text: "Plastid" }
    ],
    correctAnswer: "Mitochondria",
    explanation: "It generates energy (ATP)."
  },
  {
    id: 8020,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Reproduction",
    questionText: "Asexual reproduction in Hydra is by:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Binary Fission" },
      { id: 'b', text: "Budding" }, // Correct
      { id: 'c', text: "Cloning" },
      { id: 'd', text: "Fragmentation" }
    ],
    correctAnswer: "Budding",
    explanation: "New individuals grow as buds."
  },
  {
    id: 8021,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Endocrine System",
    questionText: "Insulin is secreted by:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Liver" },
      { id: 'b', text: "Pancreas" }, // Correct
      { id: 'c', text: "Thyroid" },
      { id: 'd', text: "Pituitary" }
    ],
    correctAnswer: "Pancreas",
    explanation: "Regulates blood sugar."
  },
  {
    id: 8022,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Pressure",
    questionText: "Pressure = Force / ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Volume" },
      { id: 'b', text: "Area" }, // Correct
      { id: 'c', text: "Mass" },
      { id: 'd', text: "Speed" }
    ],
    correctAnswer: "Area",
    explanation: "P = F/A."
  },
  {
    id: 8023,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Chemical Effects",
    questionText: "Sort liquids by conductivity.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'good', label: 'Good Conductor' }, { id: 'bad', label: 'Poor Conductor' }]
    },
    options: [
      { id: 'lemon', text: "Lemon Juice", bucketId: 'good' },
      { id: 'distilled', text: "Distilled Water", bucketId: 'bad' },
      { id: 'tap', text: "Tap Water", bucketId: 'good' },
      { id: 'oil', text: "Vegetable Oil", bucketId: 'bad' }
    ],
    correctAnswer: { lemon: 'good', distilled: 'bad', tap: 'good', oil: 'bad' },
    explanation: "Ions in lemon juice/tap water conduct electricity."
  },
  {
    id: 8024,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Light",
    questionText: "Splitting of light into colors is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Reflection" },
      { id: 'b', text: "Dispersion" }, // Correct
      { id: 'c', text: "Refraction" },
      { id: 'd', text: "Diffraction" }
    ],
    correctAnswer: "Dispersion",
    explanation: "Prism effect."
  },
  {
    id: 8025,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Space",
    questionText: "Which is NOT a planet?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Mars" },
      { id: 'b', text: "Moon" }, // Correct
      { id: 'c', text: "Saturn" },
      { id: 'd', text: "Mercury" }
    ],
    correctAnswer: "Moon",
    explanation: "Moon is a satellite."
  },
  {
    id: 8026,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Pollution",
    questionText: "Greenhouse gas responsible for warming:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Oxygen" },
      { id: 'b', text: "CO2 (Carbon Dioxide)" }, // Correct
      { id: 'c', text: "Nitrogen" },
      { id: 'd', text: "Argon" }
    ],
    correctAnswer: "CO2 (Carbon Dioxide)",
    explanation: "Traps heat."
  },

  // ================= ENGLISH (14 Questions) =================
  {
    id: 8027,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Tenses",
    questionText: "She ___ (live) here since 2010.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Lived" },
      { id: 'b', text: "Has been living" }, // Correct
      { id: 'c', text: "Is living" },
      { id: 'd', text: "Lives" }
    ],
    correctAnswer: "Has been living",
    explanation: "Present Perfect Continuous for actions starting in past and continuing."
  },
  {
    id: 8028,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Voice",
    questionText: "Passive: 'Someone stole my pen.'",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "My pen is stolen." },
      { id: 'b', text: "My pen was stolen." }, // Correct
      { id: 'c', text: "My pen had been stolen." },
      { id: 'd', text: "My pen is steal." }
    ],
    correctAnswer: "My pen was stolen.",
    explanation: "Past simple passive."
  },
  {
    id: 8029,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Speech",
    questionText: "He said, 'I am busy.' -> Indirect?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "He said he is busy." },
      { id: 'b', text: "He said that he was busy." }, // Correct
      { id: 'c', text: "He says he was busy." },
      { id: 'd', text: "He said I am busy." }
    ],
    correctAnswer: "He said that he was busy.",
    explanation: "Backshift of tense."
  },
  {
    id: 8030,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Subject-Verb",
    questionText: "Bread and butter ___ my favorite breakfast.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Are" },
      { id: 'b', text: "Is" }, // Correct
      { id: 'c', text: "Were" },
      { id: 'd', text: "Have" }
    ],
    correctAnswer: "Is",
    explanation: "Considered as a single dish/idea."
  },
  {
    id: 8031,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Articles",
    questionText: "He is ___ M.L.A.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "A" },
      { id: 'b', text: "An" }, // Correct
      { id: 'c', text: "The" },
      { id: 'd', text: "No article" }
    ],
    correctAnswer: "An",
    explanation: "Phonetic vowel sound 'Em-L-A'."
  },
  {
    id: 8032,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Prepositions",
    questionText: "Distribute the sweets ___ the two boys.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Among" },
      { id: 'b', text: "Between" }, // Correct
      { id: 'c', text: "With" },
      { id: 'd', text: "To" }
    ],
    correctAnswer: "Between",
    explanation: "Between for two, Among for more than two."
  },
  {
    id: 8033,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Conjunctions",
    questionText: "Make hay ___ the sun shines.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "When" },
      { id: 'b', text: "While" }, // Correct
      { id: 'c', text: "Where" },
      { id: 'd', text: "But" }
    ],
    correctAnswer: "While",
    explanation: "Simultaneous action."
  },
  {
    id: 8034,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Sentence Ordering",
    questionText: "Rearrange: early / up / get / I / morning / in / the.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["I", "get", "up", "early", "in", "the", "morning"] },
    correctAnswer: ["I", "get", "up", "early", "in", "the", "morning"],
    explanation: "S-V-Adv-Prepositional Phrase."
  },
  {
    id: 8035,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Question Tags",
    questionText: "She is singing, ___?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Is she?" },
      { id: 'b', text: "Isn't she?" }, // Correct
      { id: 'c', text: "Does she?" },
      { id: 'd', text: "Wasn't she?" }
    ],
    correctAnswer: "Isn't she?",
    explanation: "Positive statement -> Negative tag."
  },
  {
    id: 8036,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Modals",
    questionText: "You ___ respect your elders.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Can" },
      { id: 'b', text: "Ought to" }, // Correct
      { id: 'c', text: "May" },
      { id: 'd', text: "Might" }
    ],
    correctAnswer: "Ought to",
    explanation: "Moral obligation."
  },
  {
    id: 8037,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Synonyms",
    questionText: "Synonym of 'Abundant':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Scarce" },
      { id: 'b', text: "Plentiful" }, // Correct
      { id: 'c', text: "Small" },
      { id: 'd', text: "Rare" }
    ],
    correctAnswer: "Plentiful",
    explanation: "Means available in large quantities."
  },
  {
    id: 8038,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "One Word",
    questionText: "One who knows everything:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Omnipotent" },
      { id: 'b', text: "Omniscient" }, // Correct
      { id: 'c', text: "Omnipresent" },
      { id: 'd', text: "Optimist" }
    ],
    correctAnswer: "Omniscient",
    explanation: "Omni (All) + Scient (Knowing)."
  },
  {
    id: 8039,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Phrasal Verbs",
    questionText: "Please turn ___ the lights.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Out" },
      { id: 'b', text: "Off" }, // Correct
      { id: 'c', text: "In" },
      { id: 'd', text: "Over" }
    ],
    correctAnswer: "Off",
    explanation: "Turn off = Extinguish/Stop."
  },
  {
    id: 8040,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Gerunds",
    questionText: "I enjoy ___ stories.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Read" },
      { id: 'b', text: "Reading" }, // Correct
      { id: 'c', text: "To read" },
      { id: 'd', text: "Reads" }
    ],
    correctAnswer: "Reading",
    explanation: "Enjoy takes the gerund (-ing) form."
  }
];

export default grade8Questions;