import { Question, Subject, InteractionType } from '../types';

export const grade11Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  {
    id: 11001,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Number Theory",
    questionText: "If HCF(a, b) = 1, then a and b are:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Twin Primes" },
      { id: 'b', text: "Co-prime" }, // Correct
      { id: 'c', text: "Composite" },
      { id: 'd', text: "Even" }
    ],
    correctAnswer: "Co-prime",
    explanation: "Definition of relatively prime numbers."
  },
  {
    id: 11002,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Rational Numbers",
    questionText: "Decimal expansion of 13/3125 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Terminating" }, // Correct
      { id: 'b', text: "Non-terminating Repeating" },
      { id: 'c', text: "Irrational" },
      { id: 'd', text: "None" }
    ],
    correctAnswer: "Terminating",
    explanation: "Denominator is 5^5 (Form 2^n * 5^m)."
  },
  {
    id: 11003,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Polynomials",
    questionText: "Sum of zeroes of x^2 - 5x + 6:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "5" }, // Correct
      { id: 'b', text: "-5" },
      { id: 'c', text: "6" },
      { id: 'd', text: "-6" }
    ],
    correctAnswer: "5",
    explanation: "-b/a = -(-5)/1 = 5."
  },
  {
    id: 11004,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Graph Theory",
    questionText: "Graph of y = p(x) cuts X-axis at 3 points. Zeroes?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "2" },
      { id: 'c', text: "3" }, // Correct
      { id: 'd', text: "0" }
    ],
    correctAnswer: "3",
    explanation: "Zeroes correspond to x-intercepts."
  },
  {
    id: 11005,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Trigonometry",
    questionText: "Value of sin(60) * cos(30) + sin(30) * cos(60):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1" }, // Correct
      { id: 'c', text: "2" },
      { id: 'd', text: "0.5" }
    ],
    correctAnswer: "1",
    explanation: "sin(A+B) formula or direct substitution."
  },
  {
    id: 11006,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "AP",
    questionText: "10th term of AP: 2, 7, 12... is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "45" },
      { id: 'b', text: "47" }, // Correct
      { id: 'c', text: "49" },
      { id: 'd', text: "50" }
    ],
    correctAnswer: "47",
    explanation: "a + 9d = 2 + 9(5) = 47."
  },
  {
    id: 11007,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Coordinates",
    questionText: "Midpoint of (4, 6) and (6, 8):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "(5, 7)" }, // Correct
      { id: 'b', text: "(10, 14)" },
      { id: 'c', text: "(2, 2)" },
      { id: 'd', text: "(5, 5)" }
    ],
    correctAnswer: "(5, 7)",
    explanation: "(x1+x2)/2, (y1+y2)/2."
  },
  {
    id: 11008,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Probability",
    questionText: "Probability of getting a prime on a die:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1/2" }, // Correct (2, 3, 5)
      { id: 'b', text: "1/3" },
      { id: 'c', text: "2/3" },
      { id: 'd', text: "1/6" }
    ],
    correctAnswer: "1/2",
    explanation: "Primes are 2, 3, 5. So 3/6."
  },
  {
    id: 11009,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Quadratic Equation",
    questionText: "Roots of x^2 - 9 = 0:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "3" },
      { id: 'b', text: "-3" },
      { id: 'c', text: "+3, -3" }, // Correct
      { id: 'd', text: "9" }
    ],
    correctAnswer: "+3, -3",
    explanation: "x = +/- 3."
  },
  {
    id: 11010,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Circles",
    questionText: "Angle in a semi-circle is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "45" },
      { id: 'b', text: "90" }, // Correct
      { id: 'c', text: "180" },
      { id: 'd', text: "60" }
    ],
    correctAnswer: "90",
    explanation: "Thales theorem."
  },
  {
    id: 11011,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Surface Area",
    questionText: "Volume of a cone:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "πr^2h" },
      { id: 'b', text: "1/3 πr^2h" }, // Correct
      { id: 'c', text: "2/3 πr^2h" },
      { id: 'd', text: "4/3 πr^3" }
    ],
    correctAnswer: "1/3 πr^2h",
    explanation: "Formula."
  },
  {
    id: 11012,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Statistics",
    questionText: "Relation between Mean, Median, Mode:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "3Median = Mode + 2Mean" }, // Correct
      { id: 'b', text: "Mode = 3Mean - 2Median" },
      { id: 'c', text: "Mean = Mode + Median" },
      { id: 'd', text: "None" }
    ],
    correctAnswer: "3Median = Mode + 2Mean",
    explanation: "Empirical formula."
  },
  {
    id: 11013,
    subject: Subject.MATH,
    gradeLevel: 11,
    skillTag: "Trig Identity",
    questionText: "1 + tan^2(A) = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "sin^2(A)" },
      { id: 'b', text: "sec^2(A)" }, // Correct
      { id: 'c', text: "cot^2(A)" },
      { id: 'd', text: "cosec^2(A)" }
    ],
    correctAnswer: "sec^2(A)",
    explanation: "Standard identity."
  },

  // ================= SCIENCE (13 Questions) =================
  {
    id: 11014,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Chemical Reactions",
    questionText: "Reaction where energy is absorbed:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Exothermic" },
      { id: 'b', text: "Endothermic" }, // Correct
      { id: 'c', text: "Displacement" },
      { id: 'd', text: "Redox" }
    ],
    correctAnswer: "Endothermic",
    explanation: "Absorbs heat."
  },
  {
    id: 11015,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Acids",
    questionText: "Acid present in Tomato:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Acetic" },
      { id: 'b', text: "Oxalic" }, // Correct
      { id: 'c', text: "Citric" },
      { id: 'd', text: "Tartaric" }
    ],
    correctAnswer: "Oxalic",
    explanation: "Fact."
  },
  {
    id: 11016,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Metals",
    questionText: "Metal extracted by electrolysis:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Iron" },
      { id: 'b', text: "Aluminum" }, // Correct
      { id: 'c', text: "Zinc" },
      { id: 'd', text: "Copper" }
    ],
    correctAnswer: "Aluminum",
    explanation: "From Bauxite."
  },
  {
    id: 11017,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Carbon Compounds",
    questionText: "Functional group of Alcohol:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "-CHO" },
      { id: 'b', text: "-OH" }, // Correct
      { id: 'c', text: "-COOH" },
      { id: 'd', text: "-CO-" }
    ],
    correctAnswer: "-OH",
    explanation: "Hydroxyl group."
  },
  {
    id: 11018,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Periodic Table",
    questionText: "Vertical columns are called:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Periods" },
      { id: 'b', text: "Groups" }, // Correct
      { id: 'c', text: "Rows" },
      { id: 'd', text: "Series" }
    ],
    correctAnswer: "Groups",
    explanation: "18 Groups."
  },
  {
    id: 11019,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Biology - Nutrition",
    questionText: "Mode of nutrition in Fungi:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Autotrophic" },
      { id: 'b', text: "Saprotrophic" }, // Correct
      { id: 'c', text: "Parasitic" },
      { id: 'd', text: "Holozoic" }
    ],
    correctAnswer: "Saprotrophic",
    explanation: "Dead/decaying matter."
  },
  {
    id: 11020,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Respiration",
    questionText: "Anaerobic respiration in muscle produces:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Alcohol" },
      { id: 'b', text: "Lactic Acid" }, // Correct
      { id: 'c', text: "CO2 + H2O" },
      { id: 'd', text: "Glucose" }
    ],
    correctAnswer: "Lactic Acid",
    explanation: "Causes cramps."
  },
  {
    id: 11021,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Control & Coordination",
    questionText: "Plant hormone for growth:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Abscisic Acid" },
      { id: 'b', text: "Auxin" }, // Correct
      { id: 'c', text: "Ethylene" },
      { id: 'd', text: "Insulin" }
    ],
    correctAnswer: "Auxin",
    explanation: "Promotes elongation."
  },
  {
    id: 11022,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Reproduction",
    questionText: "Example of unisexual flower:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Hibiscus" },
      { id: 'b', text: "Papaya" }, // Correct
      { id: 'c', text: "Mustard" },
      { id: 'd', text: "Rose" }
    ],
    correctAnswer: "Papaya",
    explanation: "Has only male or female."
  },
  {
    id: 11023,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Heredity",
    questionText: "Mendel's Ratio (Monohybrid F2):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1:1" },
      { id: 'b', text: "3:1" }, // Correct
      { id: 'c', text: "9:3:3:1" },
      { id: 'd', text: "1:2:1" }
    ],
    correctAnswer: "3:1",
    explanation: "Phenotypic ratio."
  },
  {
    id: 11024,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Light",
    questionText: "Mirror used by dentists:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Convex" },
      { id: 'b', text: "Concave" }, // Correct
      { id: 'c', text: "Plane" },
      { id: 'd', text: "Parabolic" }
    ],
    correctAnswer: "Concave",
    explanation: "Magnifies image."
  },
  {
    id: 11025,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Electricity",
    questionText: "Resistance depends on:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Length" },
      { id: 'b', text: "Area" },
      { id: 'c', text: "Material" },
      { id: 'd', text: "All of these" } // Correct
    ],
    correctAnswer: "All of these",
    explanation: "R = rho * L / A."
  },
  {
    id: 11026,
    subject: Subject.SCIENCE,
    gradeLevel: 11,
    skillTag: "Magnetism",
    questionText: "Unit of Magnetic Field:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Watt" },
      { id: 'b', text: "Tesla" }, // Correct
      { id: 'c', text: "Joule" },
      { id: 'd', text: "Newton" }
    ],
    correctAnswer: "Tesla",
    explanation: "Standard unit."
  },

  // ================= ENGLISH (14 Questions) =================
  {
    id: 11027,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Subject-Verb",
    questionText: "More than one workman ___ killed.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Was" }, // Correct
      { id: 'b', text: "Were" },
      { id: 'c', text: "Are" },
      { id: 'd', text: "Have" }
    ],
    correctAnswer: "Was",
    explanation: "'More than one' takes Singular."
  },
  {
    id: 11028,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Pronouns",
    questionText: "Let you and ___ try.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "I" },
      { id: 'b', text: "Me" }, // Correct
      { id: 'c', text: "We" },
      { id: 'd', text: "Myself" }
    ],
    correctAnswer: "Me",
    explanation: "Objective case after 'Let'."
  },
  {
    id: 11029,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Correlative",
    questionText: "Scarcely had he gone ___ the police arrived.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Than" },
      { id: 'b', text: "When" }, // Correct
      { id: 'c', text: "Then" },
      { id: 'd', text: "While" }
    ],
    correctAnswer: "When",
    explanation: "Scarcely... When."
  },
  {
    id: 11030,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Relative Clause",
    questionText: "He is one of the men who ___ responsible.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Is" },
      { id: 'b', text: "Are" }, // Correct
      { id: 'c', text: "Was" },
      { id: 'd', text: "Has" }
    ],
    correctAnswer: "Are",
    explanation: "'Who' refers to 'Men' (Plural)."
  },
  {
    id: 11031,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Articles",
    questionText: "The number of books ___ missing.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Is" }, // Correct
      { id: 'b', text: "Are" },
      { id: 'c', text: "Were" },
      { id: 'd', text: "Have" }
    ],
    correctAnswer: "Is",
    explanation: "'The number' is singular."
  },
  {
    id: 11032,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Subjunctive",
    questionText: "I'd rather you ___ home now.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Go" },
      { id: 'b', text: "Went" }, // Correct
      { id: 'c', text: "Gone" },
      { id: 'd', text: "Will go" }
    ],
    correctAnswer: "Went",
    explanation: "Preference implies past subjunctive."
  },
  {
    id: 11033,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Agreement",
    questionText: "My friend and benefactor ___ dead.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Are" },
      { id: 'b', text: "Is" }, // Correct
      { id: 'c', text: "Were" },
      { id: 'd', text: "Have" }
    ],
    correctAnswer: "Is",
    explanation: "Same person (One article)."
  },
  {
    id: 11034,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Syntax",
    questionText: "Reorder: seen / I / him / ages / for / haven't.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["I", "haven't", "seen", "him", "for", "ages"] },
    correctAnswer: ["I", "haven't", "seen", "him", "for", "ages"],
    explanation: "Present Perfect structure."
  },
  {
    id: 11035,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Prepositions",
    questionText: "He is afraid ___ dogs.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "From" },
      { id: 'b', text: "Of" }, // Correct
      { id: 'c', text: "With" },
      { id: 'd', text: "By" }
    ],
    correctAnswer: "Of",
    explanation: "Afraid of."
  },
  {
    id: 11036,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Voice",
    questionText: "Let the door be shut. (Active?)",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Shut the door." }, // Correct
      { id: 'b', text: "Let shut door." },
      { id: 'c', text: "Door shut." },
      { id: 'd', text: "You shut door." }
    ],
    correctAnswer: "Shut the door.",
    explanation: "Imperative active."
  },
  {
    id: 11037,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Modals",
    questionText: "___ you live long!",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Can" },
      { id: 'b', text: "May" }, // Correct
      { id: 'c', text: "Should" },
      { id: 'd', text: "Will" }
    ],
    correctAnswer: "May",
    explanation: "Wish/Prayer."
  },
  {
    id: 11038,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Tenses",
    questionText: "If he ___ hard, he would pass.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Works" },
      { id: 'b', text: "Worked" }, // Correct
      { id: 'c', text: "Work" },
      { id: 'd', text: "Had worked" }
    ],
    correctAnswer: "Worked",
    explanation: "Type 2 Conditional."
  },
  {
    id: 11039,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Vocabulary",
    questionText: "Synonym of 'Candid':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Sweet" },
      { id: 'b', text: "Frank" }, // Correct
      { id: 'c', text: "Rude" },
      { id: 'd', text: "Shy" }
    ],
    correctAnswer: "Frank",
    explanation: "Open and honest."
  },
  {
    id: 11040,
    subject: Subject.ENGLISH,
    gradeLevel: 11,
    skillTag: "Inversion",
    questionText: "Hardly ___ I entered when he left.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Have" },
      { id: 'b', text: "Had" }, // Correct
      { id: 'c', text: "Did" },
      { id: 'd', text: "Was" }
    ],
    correctAnswer: "Had",
    explanation: "Inversion with negative adverbs."
  }
];

export default grade11Questions;