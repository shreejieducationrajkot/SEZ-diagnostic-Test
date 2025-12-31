import { Question, Subject, InteractionType } from '../types';

export const grade10Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  {
    id: 10001,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Real Numbers",
    questionText: "HCF of 96 and 404 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "4" }, // Correct
      { id: 'b', text: "2" },
      { id: 'c', text: "96" },
      { id: 'd', text: "101" }
    ],
    correctAnswer: "4",
    explanation: "Prime factorization method."
  },
  {
    id: 10002,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Polynomials",
    questionText: "Quadratic polynomial sum of zeros = -3, product = 2:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "x^2 + 3x + 2" }, // Correct
      { id: 'b', text: "x^2 - 3x + 2" },
      { id: 'c', text: "x^2 + 3x - 2" },
      { id: 'd', text: "x^2 - 3x - 2" }
    ],
    correctAnswer: "x^2 + 3x + 2",
    explanation: "Formula: x^2 - (Sum)x + Product."
  },
  {
    id: 10003,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Linear Equations",
    questionText: "Condition for parallel lines (No solution):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "a1/a2 != b1/b2" },
      { id: 'b', text: "a1/a2 = b1/b2 != c1/c2" }, // Correct
      { id: 'c', text: "a1/a2 = b1/b2 = c1/c2" },
      { id: 'd', text: "None" }
    ],
    correctAnswer: "a1/a2 = b1/b2 != c1/c2",
    explanation: "Same slope, different intercept."
  },
  {
    id: 10004,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Quadratic Eq",
    questionText: "Discriminant of ax^2 + bx + c = 0:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "b^2 - 4ac" }, // Correct
      { id: 'b', text: "b^2 + 4ac" },
      { id: 'c', text: "4ac - b^2" },
      { id: 'd', text: "b - 4ac" }
    ],
    correctAnswer: "b^2 - 4ac",
    explanation: "Determines nature of roots."
  },
  {
    id: 10005,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "AP",
    questionText: "30th term of AP: 10, 7, 4... is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "-77" }, // Correct
      { id: 'b', text: "77" },
      { id: 'c', text: "-87" },
      { id: 'd', text: "87" }
    ],
    correctAnswer: "-77",
    explanation: "an = a + (n-1)d. 10 + 29(-3) = 10 - 87."
  },
  {
    id: 10006,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Triangles",
    questionText: "Sides 6, 8, 10 make a ___ triangle.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Acute" },
      { id: 'b', text: "Right" }, // Correct
      { id: 'c', text: "Obtuse" },
      { id: 'd', text: "Equilateral" }
    ],
    correctAnswer: "Right",
    explanation: "Pythagoras theorem holds."
  },
  {
    id: 10007,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Coordinate Geometry",
    questionText: "Distance between (0,0) and (3,4):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "3" },
      { id: 'b', text: "5" }, // Correct
      { id: 'c', text: "4" },
      { id: 'd', text: "7" }
    ],
    correctAnswer: "5",
    explanation: "Sqrt(3^2 + 4^2) = 5."
  },
  {
    id: 10008,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Trigonometry",
    questionText: "Value of sin(60):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1/2" },
      { id: 'b', text: "√3/2" }, // Correct
      { id: 'c', text: "1/√2" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "√3/2",
    explanation: "Standard table value."
  },
  {
    id: 10009,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Trig Identity",
    questionText: "sin^2(A) + cos^2(A) = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1" }, // Correct
      { id: 'c', text: "2" },
      { id: 'd', text: "-1" }
    ],
    correctAnswer: "1",
    explanation: "Fundamental identity."
  },
  {
    id: 10010,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Circles",
    questionText: "Tangents from external point are:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Parallel" },
      { id: 'b', text: "Equal" }, // Correct
      { id: 'c', text: "Perpendicular" },
      { id: 'd', text: "Unequal" }
    ],
    correctAnswer: "Equal",
    explanation: "Theorem."
  },
  {
    id: 10011,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Areas",
    questionText: "Area of sector angle P in circle radius R:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "P/180 * 2πR" },
      { id: 'b', text: "P/360 * πR^2" }, // Correct
      { id: 'c', text: "P/180 * πR^2" },
      { id: 'd', text: "P/360 * 2πR" }
    ],
    correctAnswer: "P/360 * πR^2",
    explanation: "Formula."
  },
  {
    id: 10012,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Statistics",
    questionText: "Mode is the observation with:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Middle value" },
      { id: 'b', text: "Highest frequency" }, // Correct
      { id: 'c', text: "Average value" },
      { id: 'd', text: "Lowest value" }
    ],
    correctAnswer: "Highest frequency",
    explanation: "Definition."
  },
  {
    id: 10013,
    subject: Subject.MATH,
    gradeLevel: 10,
    skillTag: "Probability",
    questionText: "P(E) + P(not E) = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1" }, // Correct
      { id: 'c', text: "-1" },
      { id: 'd', text: "0.5" }
    ],
    correctAnswer: "1",
    explanation: "Total probability is 1."
  },

  // ================= SCIENCE (13 Questions) =================
  {
    id: 10014,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Reactions",
    questionText: "Burning of Magnesium ribbon is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Physical" },
      { id: 'b', text: "Chemical" }, // Correct
      { id: 'c', text: "Reversible" },
      { id: 'd', text: "None" }
    ],
    correctAnswer: "Chemical",
    explanation: "Forms MgO (new substance)."
  },
  {
    id: 10015,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Acids Bases",
    questionText: "pH of pure water is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "7" }, // Correct
      { id: 'c', text: "14" },
      { id: 'd', text: "1" }
    ],
    correctAnswer: "7",
    explanation: "Neutral."
  },
  {
    id: 10016,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Metals",
    questionText: "Which metal is cut with a knife?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Iron" },
      { id: 'b', text: "Sodium" }, // Correct
      { id: 'c', text: "Copper" },
      { id: 'd', text: "Gold" }
    ],
    correctAnswer: "Sodium",
    explanation: "Very soft alkali metal."
  },
  {
    id: 10017,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Carbon",
    questionText: "Hardest natural substance:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Graphite" },
      { id: 'b', text: "Diamond" }, // Correct
      { id: 'c', text: "Iron" },
      { id: 'd', text: "Fullerene" }
    ],
    correctAnswer: "Diamond",
    explanation: "Allotrope of Carbon."
  },
  {
    id: 10018,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Periodic Table",
    questionText: "Modern Periodic Law is based on:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Atomic Mass" },
      { id: 'b', text: "Atomic Number" }, // Correct
      { id: 'c', text: "Density" },
      { id: 'd', text: "Neutrons" }
    ],
    correctAnswer: "Atomic Number",
    explanation: "Moseley's law."
  },
  {
    id: 10019,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Life Processes",
    questionText: "Site of photosynthesis:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Mitochondria" },
      { id: 'b', text: "Chloroplast" }, // Correct
      { id: 'c', text: "Nucleus" },
      { id: 'd', text: "Ribosome" }
    ],
    correctAnswer: "Chloroplast",
    explanation: "Contains chlorophyll."
  },
  {
    id: 10020,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Respiration",
    questionText: "Aerobic respiration requires:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Nitrogen" },
      { id: 'b', text: "Oxygen" }, // Correct
      { id: 'c', text: "CO2" },
      { id: 'd', text: "Hydrogen" }
    ],
    correctAnswer: "Oxygen",
    explanation: "Breakdown of glucose with O2."
  },
  {
    id: 10021,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Transport",
    questionText: "Heart chamber pumping blood to body:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Right Atrium" },
      { id: 'b', text: "Left Ventricle" }, // Correct
      { id: 'c', text: "Left Atrium" },
      { id: 'd', text: "Right Ventricle" }
    ],
    correctAnswer: "Left Ventricle",
    explanation: "Thickest wall, pumps to Aorta."
  },
  {
    id: 10022,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Control",
    questionText: "Gap between two neurons:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Axon" },
      { id: 'b', text: "Synapse" }, // Correct
      { id: 'c', text: "Dendrite" },
      { id: 'd', text: "Impulse" }
    ],
    correctAnswer: "Synapse",
    explanation: "Chemical signal transmission."
  },
  {
    id: 10023,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Reproduction",
    questionText: "Flower's female reproductive part:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Stamen" },
      { id: 'b', text: "Pistil/Carpel" }, // Correct
      { id: 'c', text: "Petal" },
      { id: 'd', text: "Sepal" }
    ],
    correctAnswer: "Pistil/Carpel",
    explanation: "Ovary, Style, Stigma."
  },
  {
    id: 10024,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Heredity",
    questionText: "Father of Genetics:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Darwin" },
      { id: 'b', text: "Mendel" }, // Correct
      { id: 'c', text: "Lamarck" },
      { id: 'd', text: "Watson" }
    ],
    correctAnswer: "Mendel",
    explanation: "Pea plant experiments."
  },
  {
    id: 10025,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Light",
    questionText: "Lens used for Myopia (Near-sightedness):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Convex" },
      { id: 'b', text: "Concave" }, // Correct
      { id: 'c', text: "Cylindrical" },
      { id: 'd', text: "Plane" }
    ],
    correctAnswer: "Concave",
    explanation: "Diverges light to focus on retina."
  },
  {
    id: 10026,
    subject: Subject.SCIENCE,
    gradeLevel: 10,
    skillTag: "Electricity",
    questionText: "SI Unit of Current:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Volt" },
      { id: 'b', text: "Ampere" }, // Correct
      { id: 'c', text: "Ohm" },
      { id: 'd', text: "Joule" }
    ],
    correctAnswer: "Ampere",
    explanation: "Coulombs per second."
  },

  // ================= ENGLISH (14 Questions) =================
  {
    id: 10027,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Tenses",
    questionText: "By next year, I ___ (finish) my studies.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Will finish" },
      { id: 'b', text: "Will have finished" }, // Correct
      { id: 'c', text: "Have finished" },
      { id: 'd', text: "Finish" }
    ],
    correctAnswer: "Will have finished",
    explanation: "Future Perfect Tense."
  },
  {
    id: 10028,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Modals",
    questionText: "We ___ to serve our nation.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Should" },
      { id: 'b', text: "Ought" }, // Correct (Ought to)
      { id: 'c', text: "Must" },
      { id: 'd', text: "Can" }
    ],
    correctAnswer: "Ought",
    explanation: "'Ought' is followed by 'to'."
  },
  {
    id: 10029,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Subject-Verb",
    questionText: "The news ___ true.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Are" },
      { id: 'b', text: "Is" }, // Correct
      { id: 'c', text: "Were" },
      { id: 'd', text: "Have" }
    ],
    correctAnswer: "Is",
    explanation: "News is singular."
  },
  {
    id: 10030,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Reported Speech",
    questionText: "He said to me, 'Go away.' -> Indirect",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "He said to go away." },
      { id: 'b', text: "He ordered me to go away." }, // Correct
      { id: 'c', text: "He told me go away." },
      { id: 'd', text: "He asked me go." }
    ],
    correctAnswer: "He ordered me to go away.",
    explanation: "Imperative sentence."
  },
  {
    id: 10031,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Voice",
    questionText: "Who broke the glass?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "By whom was the glass broken?" }, // Correct
      { id: 'b', text: "Who had broken glass?" },
      { id: 'c', text: "Glass was broken by who?" },
      { id: 'd', text: "Glass is broken." }
    ],
    correctAnswer: "By whom was the glass broken?",
    explanation: "Passive of interrogative."
  },
  {
    id: 10032,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Connectors",
    questionText: "He is rich ___ he is unhappy.",
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
    id: 10033,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Ordering",
    questionText: "Reorder: beautiful / what / a / scene / is / it!",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["What", "a", "beautiful", "scene", "it", "is"] },
    correctAnswer: ["What", "a", "beautiful", "scene", "it", "is"],
    explanation: "Exclamatory sentence structure."
  },
  {
    id: 10034,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Clauses",
    questionText: "I know the man ___ stole your bag.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Which" },
      { id: 'b', text: "Who" }, // Correct
      { id: 'c', text: "Whom" },
      { id: 'd', text: "Whose" }
    ],
    correctAnswer: "Who",
    explanation: "Relative pronoun for subject."
  },
  {
    id: 10035,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Prepositions",
    questionText: "He died ___ cancer.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "From" },
      { id: 'b', text: "Of" }, // Correct
      { id: 'c', text: "By" },
      { id: 'd', text: "With" }
    ],
    correctAnswer: "Of",
    explanation: "Died 'of' a disease."
  },
  {
    id: 10036,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Phrasal Verbs",
    questionText: "The meeting was called ___.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Off" }, // Correct
      { id: 'b', text: "Out" },
      { id: 'c', text: "In" },
      { id: 'd', text: "Up" }
    ],
    correctAnswer: "Off",
    explanation: "Call off = Cancel."
  },
  {
    id: 10037,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Determiners",
    questionText: "___ knowledge is a dangerous thing.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Little" },
      { id: 'b', text: "A little" }, // Correct
      { id: 'c', text: "The little" },
      { id: 'd', text: "Few" }
    ],
    correctAnswer: "A little",
    explanation: "Proverb."
  },
  {
    id: 10038,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Transformation",
    questionText: "Remove 'too': He is too weak to walk.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "He is so weak that he cannot walk." }, // Correct
      { id: 'b', text: "He is very weak to walk." },
      { id: 'c', text: "He is weak enough not to walk." },
      { id: 'd', text: "He cannot walk." }
    ],
    correctAnswer: "He is so weak that he cannot walk.",
    explanation: "Standard transformation."
  },
  {
    id: 10039,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Vocabulary",
    questionText: "One who looks at the bright side:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Pessimist" },
      { id: 'b', text: "Optimist" }, // Correct
      { id: 'c', text: "Atheist" },
      { id: 'd', text: "Theist" }
    ],
    correctAnswer: "Optimist",
    explanation: "Definition."
  },
  {
    id: 10040,
    subject: Subject.ENGLISH,
    gradeLevel: 10,
    skillTag: "Homophones",
    questionText: "The ___ (principal/principle) is strict.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Principle" },
      { id: 'b', text: "Principal" }, // Correct
      { id: 'c', text: "Principul" },
      { id: 'd', text: "None" }
    ],
    correctAnswer: "Principal",
    explanation: "School head = Principal."
  }
];

export default grade10Questions;