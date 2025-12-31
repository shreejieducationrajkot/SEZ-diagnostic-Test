import { Question, Subject, InteractionType } from '../types';

export const grade7Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  {
    id: 7001,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Equations",
    questionText: "Solve: x + 4 = 10",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "14" },
      { id: 'b', text: "6" }, // Correct
      { id: 'c', text: "4" },
      { id: 'd', text: "40" }
    ],
    correctAnswer: "6",
    explanation: "x = 10 - 4."
  },
  {
    id: 7002,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Integers",
    questionText: "(-5) + (+2) - (-3) = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "-6" },
      { id: 'b', text: "0" }, // Correct
      { id: 'c', text: "-4" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: "0",
    explanation: "-3 + 3 = 0."
  },
  {
    id: 7003,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Algebra",
    questionText: "'5 added to y' is written as:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "5y" },
      { id: 'b', text: "y + 5" }, // Correct
      { id: 'c', text: "y - 5" },
      { id: 'd', text: "5/y" }
    ],
    correctAnswer: "y + 5",
    explanation: "Addition expression."
  },
  {
    id: 7004,
    subject: Subject.MATH,
    gradeLevel: 7,
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
    explanation: "18/3 = 6. 6*2 = 12."
  },
  {
    id: 7005,
    subject: Subject.MATH,
    gradeLevel: 7,
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
    explanation: "Two decimal places."
  },
  {
    id: 7006,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Unitary Method",
    questionText: "3 pens cost 15. Cost of 5 pens?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "20" },
      { id: 'b', text: "25" }, // Correct
      { id: 'c', text: "30" },
      { id: 'd', text: "35" }
    ],
    correctAnswer: "25",
    explanation: "1 pen = 5. 5 pens = 25."
  },
  {
    id: 7007,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Inverse Proportion",
    questionText: "10 men take 2 days. 5 men take?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1 day" },
      { id: 'b', text: "4 days" }, // Correct
      { id: 'c', text: "5 days" },
      { id: 'd', text: "2 days" }
    ],
    correctAnswer: "4 days",
    explanation: "Half the workforce = Double the time."
  },
  {
    id: 7008,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Angles",
    questionText: "Complement of 35 degrees?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "145" },
      { id: 'b', text: "55" }, // Correct
      { id: 'c', text: "65" },
      { id: 'd', text: "35" }
    ],
    correctAnswer: "55",
    explanation: "90 - 35 = 55."
  },
  {
    id: 7009,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Geometry",
    questionText: "Sum of angles in a triangle:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "90" },
      { id: 'b', text: "180" }, // Correct
      { id: 'c', text: "360" },
      { id: 'd', text: "100" }
    ],
    correctAnswer: "180",
    explanation: "Triangle angle sum property."
  },
  {
    id: 7010,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Perimeter",
    questionText: "Perimeter of Regular Pentagon (side 3cm):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "9 cm" },
      { id: 'b', text: "15 cm" }, // Correct
      { id: 'c', text: "12 cm" },
      { id: 'd', text: "18 cm" }
    ],
    correctAnswer: "15 cm",
    explanation: "5 sides x 3 cm = 15 cm."
  },
  {
    id: 7011,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Patterns",
    questionText: "Matchsticks for 'n' squares. Formula?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "4n" },
      { id: 'b', text: "3n + 1" }, // Correct
      { id: 'c', text: "4n - 1" },
      { id: 'd', text: "2n + 2" }
    ],
    correctAnswer: "3n + 1",
    explanation: "3n for sides + 1 closing side."
  },
  {
    id: 7012,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "BODMAS",
    questionText: "3 + 3 / 3 + 3 * 3 - 3 = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "12" },
      { id: 'b', text: "10" }, // Correct
      { id: 'c', text: "11" },
      { id: 'd', text: "6" }
    ],
    correctAnswer: "10",
    explanation: "3 + 1 + 9 - 3 = 10."
  },
  {
    id: 7013,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Logic",
    questionText: "Yesterday was Tuesday. 100 days later?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Wednesday" },
      { id: 'b', text: "Thursday" }, // Correct
      { id: 'c', text: "Friday" },
      { id: 'd', text: "Tuesday" }
    ],
    correctAnswer: "Thursday",
    explanation: "100 / 7 = 14 rem 2. Tue + 2 = Thu."
  },

  // ================= SCIENCE (13 Questions) =================
  {
    id: 7014,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Anatomy",
    questionText: "Bone framework is called:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Muscular System" },
      { id: 'b', text: "Skeleton" }, // Correct
      { id: 'c', text: "Nerves" },
      { id: 'd', text: "Skin" }
    ],
    correctAnswer: "Skeleton",
    explanation: "Supports the body."
  },
  {
    id: 7015,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Joints",
    questionText: "Which joint allows movement in all directions?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Hinge" },
      { id: 'b', text: "Ball and Socket" }, // Correct
      { id: 'c', text: "Pivot" },
      { id: 'd', text: "Fixed" }
    ],
    correctAnswer: "Ball and Socket",
    explanation: "Shoulder and Hip joints."
  },
  {
    id: 7016,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Excretion",
    questionText: "Filters waste from blood:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Heart" },
      { id: 'b', text: "Kidney" }, // Correct
      { id: 'c', text: "Lungs" },
      { id: 'd', text: "Stomach" }
    ],
    correctAnswer: "Kidney",
    explanation: "Filters urea/waste."
  },
  {
    id: 7017,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Botany",
    questionText: "Seed turning into seedling is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Digestion" },
      { id: 'b', text: "Germination" }, // Correct
      { id: 'c', text: "Dispersal" },
      { id: 'd', text: "Pollination" }
    ],
    correctAnswer: "Germination",
    explanation: "Growth from seed."
  },
  {
    id: 7018,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Chemistry",
    questionText: "In Salt Water, Water is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Solute" },
      { id: 'b', text: "Solvent" }, // Correct
      { id: 'c', text: "Solution" },
      { id: 'd', text: "Gas" }
    ],
    correctAnswer: "Solvent",
    explanation: "The liquid that dissolves."
  },
  {
    id: 7019,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Separation",
    questionText: "Order steps to separate Salt, Sand, Iron.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["Magnet", "Water", "Filter", "Evaporate"] },
    correctAnswer: ["Magnet", "Water", "Filter", "Evaporate"],
    explanation: "Iron first, then Salt (dissolved), then Sand."
  },
  {
    id: 7020,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Atmosphere",
    questionText: "Percentage of Nitrogen in air:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "21%" },
      { id: 'b', text: "78%" }, // Correct
      { id: 'c', text: "1%" },
      { id: 'd', text: "50%" }
    ],
    correctAnswer: "78%",
    explanation: "Most abundant gas."
  },
  {
    id: 7021,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Machines",
    questionText: "A Ramp is which machine?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Lever" },
      { id: 'b', text: "Inclined Plane" }, // Correct
      { id: 'c', text: "Pulley" },
      { id: 'd', text: "Screw" }
    ],
    correctAnswer: "Inclined Plane",
    explanation: "Sloping surface."
  },
  {
    id: 7022,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Energy",
    questionText: "Energy from flowing water:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Solar" },
      { id: 'b', text: "Hydro" }, // Correct
      { id: 'c', text: "Wind" },
      { id: 'd', text: "Thermal" }
    ],
    correctAnswer: "Hydro",
    explanation: "Hydro = Water."
  },
  {
    id: 7023,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Physics",
    questionText: "Friction prevents:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Stopping" },
      { id: 'b', text: "Slipping" }, // Correct
      { id: 'c', text: "Moving" },
      { id: 'd', text: "Heating" }
    ],
    correctAnswer: "Slipping",
    explanation: "Provides grip."
  },
  {
    id: 7024,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Geology",
    questionText: "Rocks from lava are:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Sedimentary" },
      { id: 'b', text: "Igneous" }, // Correct
      { id: 'c', text: "Metamorphic" },
      { id: 'd', text: "Sandstone" }
    ],
    correctAnswer: "Igneous",
    explanation: "Fire rocks."
  },
  {
    id: 7025,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Astronomy",
    questionText: "Solar Eclipse is when:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Sun hides Moon" },
      { id: 'b', text: "Moon hides Sun" }, // Correct
      { id: 'c', text: "Earth hides Sun" },
      { id: 'd', text: "None" }
    ],
    correctAnswer: "Moon hides Sun",
    explanation: "Moon passes between Earth and Sun."
  },
  {
    id: 7026,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Heat",
    questionText: "Which cools faster?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Cup of tea" },
      { id: 'b', text: "Bowl of tea" }, // Correct
      { id: 'c', text: "Same" },
      { id: 'd', text: "Depends" }
    ],
    correctAnswer: "Bowl of tea",
    explanation: "Larger surface area = faster evaporation."
  },

  // ================= ENGLISH (14 Questions) =================
  {
    id: 7027,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Adverbs",
    questionText: "Adverb in: 'She spoke softly.'",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Spoke" },
      { id: 'b', text: "Softly" }, // Correct
      { id: 'c', text: "She" },
      { id: 'd', text: "None" }
    ],
    correctAnswer: "Softly",
    explanation: "Modifies the verb."
  },
  {
    id: 7028,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Plurals",
    questionText: "Plural of 'Knife':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Knifes" },
      { id: 'b', text: "Knives" }, // Correct
      { id: 'c', text: "Knive" },
      { id: 'd', text: "Knifves" }
    ],
    correctAnswer: "Knives",
    explanation: "F to V rule."
  },
  {
    id: 7029,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Tenses",
    questionText: "I ___ to market yesterday.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Go" },
      { id: 'b', text: "Went" }, // Correct
      { id: 'c', text: "Gone" },
      { id: 'd', text: "Going" }
    ],
    correctAnswer: "Went",
    explanation: "Simple Past."
  },
  {
    id: 7030,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Prepositions",
    questionText: "The cat is ___ the table (hiding).",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "In" },
      { id: 'b', text: "Under" }, // Correct
      { id: 'c', text: "To" },
      { id: 'd', text: "Of" }
    ],
    correctAnswer: "Under",
    explanation: "Position."
  },
  {
    id: 7031,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Conjunctions",
    questionText: "I wanted ice cream ___ I had no money.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "And" },
      { id: 'b', text: "But" }, // Correct
      { id: 'c', text: "So" },
      { id: 'd', text: "Or" }
    ],
    correctAnswer: "But",
    explanation: "Contrast."
  },
  {
    id: 7032,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Articles",
    questionText: "This is ___ umbrella.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "A" },
      { id: 'b', text: "An" }, // Correct
      { id: 'c', text: "The" },
      { id: 'd', text: "Two" }
    ],
    correctAnswer: "An",
    explanation: "Vowel sound."
  },
  {
    id: 7033,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Syntax",
    questionText: "Rearrange: Milk / likes / cat / the.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["likes", "cat", "Milk", "The"] },
    correctAnswer: ["The", "cat", "likes", "Milk"],
    explanation: "S-V-O."
  },
  {
    id: 7034,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Quantifiers",
    questionText: "I have ___ friends.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Much" },
      { id: 'b', text: "Many" }, // Correct
      { id: 'c', text: "Any" },
      { id: 'd', text: "Little" }
    ],
    correctAnswer: "Many",
    explanation: "Countable noun."
  },
  {
    id: 7035,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Passive Voice",
    questionText: "Passive: 'Who wrote this?'",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["was", "By", "written?", "whom", "this"] },
    correctAnswer: ["By", "whom", "was", "this", "written?"],
    explanation: "Interrogative passive."
  },
  {
    id: 7036,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Indirect Speech",
    questionText: "He said, 'I am busy.'",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "He said he is busy." },
      { id: 'b', text: "He said that he was busy." }, // Correct
      { id: 'c', text: "He says he was busy." },
      { id: 'd', text: "He said I was busy." }
    ],
    correctAnswer: "He said that he was busy.",
    explanation: "Tense backshift."
  },
  {
    id: 7037,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Conditionals",
    questionText: "If it rains, we ___ cancel.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Would" },
      { id: 'b', text: "Will" }, // Correct
      { id: 'c', text: "Could have" },
      { id: 'd', text: "Had" }
    ],
    correctAnswer: "Will",
    explanation: "First conditional (Real)."
  },
  {
    id: 7038,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Subject-Verb",
    questionText: "One of the boys ___ missing.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Are" },
      { id: 'b', text: "Is" }, // Correct
      { id: 'c', text: "Were" },
      { id: 'd', text: "Have" }
    ],
    correctAnswer: "Is",
    explanation: "Singular subject 'One'."
  },
  {
    id: 7039,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Relative Pronouns",
    questionText: "He is the man ___ car was stolen.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Who" },
      { id: 'b', text: "Whose" }, // Correct
      { id: 'c', text: "Which" },
      { id: 'd', text: "Whom" }
    ],
    correctAnswer: "Whose",
    explanation: "Possession."
  },
  {
    id: 7040,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Collocations",
    questionText: "I prefer coffee ___ tea.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Than" },
      { id: 'b', text: "To" }, // Correct
      { id: 'c', text: "Over" },
      { id: 'd', text: "From" }
    ],
    correctAnswer: "To",
    explanation: "Prefer... to."
  }
];

export default grade7Questions;