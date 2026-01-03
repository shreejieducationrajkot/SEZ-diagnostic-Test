import { Question, Subject, InteractionType } from '../types';

export const grade9Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  {
    id: 9001,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Irrational Numbers",
    questionText: "Which is Irrational?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "√4" },
      { id: 'b', text: "√3" }, // Correct
      { id: 'c', text: "0" },
      { id: 'd', text: "2.5" }
    ],
    correctAnswer: "√3",
    explanation: "Non-terminating, non-recurring decimal."
  },
  {
    id: 9002,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Polynomials",
    questionText: "Degree of the zero polynomial is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1" },
      { id: 'c', text: "Not defined" }, // Correct
      { id: 'd', text: "Infinite" }
    ],
    correctAnswer: "Not defined",
    explanation: "By definition."
  },
  {
    id: 9003,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Coordinate Geometry",
    questionText: "Point (-3, 5) lies in which quadrant?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "I" },
      { id: 'b', text: "II" }, // Correct
      { id: 'c', text: "III" },
      { id: 'd', text: "IV" }
    ],
    correctAnswer: "II",
    explanation: "x is negative, y is positive."
  },
  {
    id: 9004,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Linear Equations",
    questionText: "x = 5 is a line parallel to:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "X-axis" },
      { id: 'b', text: "Y-axis" }, // Correct
      { id: 'c', text: "Both" },
      { id: 'd', text: "Origin" }
    ],
    correctAnswer: "Y-axis",
    explanation: "Vertical line at x=5."
  },
  {
    id: 9005,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Euclid Geometry",
    questionText: "Number of dimensions of a surface:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "2" }, // Correct
      { id: 'c', text: "3" },
      { id: 'd', text: "0" }
    ],
    correctAnswer: "2",
    explanation: "Length and Breadth."
  },
  {
    id: 9006,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Lines and Angles",
    questionText: "Complement of 70 degrees is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "20" }, // Correct
      { id: 'b', text: "110" },
      { id: 'c', text: "70" },
      { id: 'd', text: "90" }
    ],
    correctAnswer: "20",
    explanation: "Sum must be 90."
  },
  {
    id: 9007,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Triangles",
    questionText: "In a right triangle, the longest side is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Perpendicular" },
      { id: 'b', text: "Hypotenuse" }, // Correct
      { id: 'c', text: "Base" },
      { id: 'd', text: "Median" }
    ],
    correctAnswer: "Hypotenuse",
    explanation: "Opposite to the right angle."
  },
  {
    id: 9008,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Quadrilaterals",
    questionText: "Diagonals of a rhombus bisect each other at:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "30 deg" },
      { id: 'b', text: "90 deg" }, // Correct
      { id: 'c', text: "60 deg" },
      { id: 'd', text: "45 deg" }
    ],
    correctAnswer: "90 deg",
    explanation: "Property of Rhombus."
  },
  {
    id: 9009,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Area",
    questionText: "Heron's Formula uses:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Height" },
      { id: 'b', text: "Semi-perimeter" }, // Correct
      { id: 'c', text: "Diameter" },
      { id: 'd', text: "Angle" }
    ],
    correctAnswer: "Semi-perimeter",
    explanation: "s = (a+b+c)/2."
  },
  {
    id: 9010,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Circles",
    questionText: "Longest chord of a circle is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Radius" },
      { id: 'b', text: "Diameter" }, // Correct
      { id: 'c', text: "Secant" },
      { id: 'd', text: "Tangent" }
    ],
    correctAnswer: "Diameter",
    explanation: "Passes through the center."
  },
  {
    id: 9011,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Surface Area",
    questionText: "Volume of a sphere:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "4/3 πr^3" }, // Correct
      { id: 'b', text: "2/3 πr^3" },
      { id: 'c', text: "3/4 πr^3" },
      { id: 'd', text: "πr^2h" }
    ],
    correctAnswer: "4/3 πr^3",
    explanation: "Formula."
  },
  {
    id: 9012,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Statistics",
    questionText: "Class mark of interval 10-20 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "10" },
      { id: 'b', text: "15" }, // Correct
      { id: 'c', text: "20" },
      { id: 'd', text: "30" }
    ],
    correctAnswer: "15",
    explanation: "(10+20)/2."
  },
  {
    id: 9013,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Logic",
    questionText: "Probability of an impossible event is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "0" }, // Correct
      { id: 'c', text: "0.5" },
      { id: 'd', text: "-1" }
    ],
    correctAnswer: "0",
    explanation: "Cannot happen."
  },

  // ================= SCIENCE (13 Questions) =================
  {
    id: 9014,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Matter",
    questionText: "Sort states of matter by density (usually).",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'high', label: 'High Density' }, { id: 'low', label: 'Low Density' }]
    },
    options: [
      { id: 'solid', text: "Solid", bucketId: 'high' },
      { id: 'gas', text: "Gas", bucketId: 'low' },
      { id: 'iron', text: "Iron", bucketId: 'high' },
      { id: 'steam', text: "Steam", bucketId: 'low' }
    ],
    correctAnswer: { solid: 'high', gas: 'low', iron: 'high', steam: 'low' },
    explanation: "Solids are packed tight; gases are loose."
  },
  {
    id: 9015,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Evaporation",
    questionText: "Evaporation causes:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Heating" },
      { id: 'b', text: "Cooling" }, // Correct
      { id: 'c', text: "Boiling" },
      { id: 'd', text: "Melting" }
    ],
    correctAnswer: "Cooling",
    explanation: "High energy particles leave, lowering average energy."
  },
  {
    id: 9016,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Pure Substances",
    questionText: "Which is a compound?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Air" },
      { id: 'b', text: "Water" }, // Correct
      { id: 'c', text: "Oxygen" },
      { id: 'd', text: "Gold" }
    ],
    correctAnswer: "Water",
    explanation: "H2O is chemically bonded. Air is a mixture."
  },
  {
    id: 9017,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Cell Theory",
    questionText: "Fundamental unit of life:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Tissue" },
      { id: 'b', text: "Cell" }, // Correct
      { id: 'c', text: "Organ" },
      { id: 'd', text: "Nucleus" }
    ],
    correctAnswer: "Cell",
    explanation: "Basic structural unit."
  },
  {
    id: 9018,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Tissues",
    questionText: "Xylem transports:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Food" },
      { id: 'b', text: "Water" }, // Correct
      { id: 'c', text: "Air" },
      { id: 'd', text: "Hormones" }
    ],
    correctAnswer: "Water",
    explanation: "Xylem for Water, Phloem for Food."
  },
  {
    id: 9019,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Motion",
    questionText: "Slope of Velocity-Time graph gives:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Distance" },
      { id: 'b', text: "Acceleration" }, // Correct
      { id: 'c', text: "Speed" },
      { id: 'd', text: "Force" }
    ],
    correctAnswer: "Acceleration",
    explanation: "Change in velocity per unit time."
  },
  {
    id: 9020,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Newton's Laws",
    questionText: "Inertia depends on:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Velocity" },
      { id: 'b', text: "Mass" }, // Correct
      { id: 'c', text: "Shape" },
      { id: 'd', text: "Size" }
    ],
    correctAnswer: "Mass",
    explanation: "More mass = More inertia."
  },
  {
    id: 9021,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Gravitation",
    questionText: "Value of 'g' at center of Earth:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "9.8" },
      { id: 'b', text: "0" }, // Correct
      { id: 'c', text: "Infinite" },
      { id: 'd', text: "100" }
    ],
    correctAnswer: "0",
    explanation: "Forces cancel out."
  },
  {
    id: 9022,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Work and Energy",
    questionText: "Work done when holding a heavy load stationary:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Positive" },
      { id: 'b', text: "Zero" }, // Correct
      { id: 'c', text: "Negative" },
      { id: 'd', text: "Infinite" }
    ],
    correctAnswer: "Zero",
    explanation: "No displacement = No work."
  },
  {
    id: 9023,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Sound",
    questionText: "Unit of Frequency:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Second" },
      { id: 'b', text: "Hertz" }, // Correct
      { id: 'c', text: "Meter" },
      { id: 'd', text: "Decibel" }
    ],
    correctAnswer: "Hertz",
    explanation: "Cycles per second."
  },
  {
    id: 9024,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Electricity",
    questionText: "The circuit is currently broken. Make the bulb glow.",
    interactionType: InteractionType.CIRCUIT,
    correctAnswer: { switch: 'closed' },
    explanation: "Closing the switch completes the circuit."
  },
  {
    id: 9025,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Natural Resources",
    questionText: "Ozone layer protects from:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Infrared" },
      { id: 'b', text: "Ultraviolet (UV)" }, // Correct
      { id: 'c', text: "X-rays" },
      { id: 'd', text: "Gamma rays" }
    ],
    correctAnswer: "Ultraviolet (UV)",
    explanation: "UV rays cause skin cancer."
  },
  {
    id: 9026,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Atoms",
    questionText: "Discoverer of Electron:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Rutherford" },
      { id: 'b', text: "J.J. Thomson" }, // Correct
      { id: 'c', text: "Dalton" },
      { id: 'd', text: "Bohr" }
    ],
    correctAnswer: "J.J. Thomson",
    explanation: "Cathode ray experiment."
  },

  // ================= ENGLISH (14 Questions) =================
  {
    id: 9027,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Tense Rules",
    questionText: "Water ___ at 100 degrees Celsius.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Boil" },
      { id: 'b', text: "Boils" }, // Correct
      { id: 'c', text: "Boiling" },
      { id: 'd', text: "Boiled" }
    ],
    correctAnswer: "Boils",
    explanation: "Scientific fact = Simple Present."
  },
  {
    id: 9028,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Determiners",
    questionText: "There isn't ___ milk left.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Many" },
      { id: 'b', text: "Any" }, // Correct
      { id: 'c', text: "Some" },
      { id: 'd', text: "Few" }
    ],
    correctAnswer: "Any",
    explanation: "Negative sentence with uncountable noun."
  },
  {
    id: 9029,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Modals",
    questionText: "It ___ rain today. (Possibility)",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Must" },
      { id: 'b', text: "May" }, // Correct
      { id: 'c', text: "Should" },
      { id: 'd', text: "Will" }
    ],
    correctAnswer: "May",
    explanation: "May indicates possibility."
  },
  {
    id: 9030,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Passive Voice",
    questionText: "The teacher teaches English. -> Passive?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "English is teaching the teacher." },
      { id: 'b', text: "English is taught by the teacher." }, // Correct
      { id: 'c', text: "English was taught." },
      { id: 'd', text: "English taught teacher." }
    ],
    correctAnswer: "English is taught by the teacher.",
    explanation: "Present simple passive."
  },
  {
    id: 9031,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Subject-Verb Concord",
    questionText: "Neither of the boys ___ come.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Have" },
      { id: 'b', text: "Has" }, // Correct
      { id: 'c', text: "Are" },
      { id: 'd', text: "Were" }
    ],
    correctAnswer: "Has",
    explanation: "Neither is singular."
  },
  {
    id: 9032,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Reported Speech",
    questionText: "He said, 'I am reading.' -> Indirect",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "He said he is reading." },
      { id: 'b', text: "He said that he was reading." }, // Correct
      { id: 'c', text: "He said that he reading." },
      { id: 'd', text: "He said I was reading." }
    ],
    correctAnswer: "He said that he was reading.",
    explanation: "Present Continuous -> Past Continuous."
  },
  {
    id: 9033,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Prepositions",
    questionText: "He is good ___ Math.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "In" },
      { id: 'b', text: "At" }, // Correct
      { id: 'c', text: "On" },
      { id: 'd', text: "With" }
    ],
    correctAnswer: "At",
    explanation: "Good at something."
  },
  {
    id: 9034,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Sentence Ordering",
    questionText: "Rearrange: health / is / wealth / greatest / the.",
    interactionType: InteractionType.REORDER,
    // FIX: Explicitly provided options so they appear in the UI
    options: ["Health", "is", "wealth", "greatest", "the"],
    interactiveData: { items: ["Health", "is", "the", "greatest", "wealth"] },
    correctAnswer: ["Health", "is", "the", "greatest", "wealth"],
    explanation: "Proverb logic."
  },
  {
    id: 9035,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Clause",
    questionText: "If you work hard, you ___ succeed.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Would" },
      { id: 'b', text: "Will" }, // Correct
      { id: 'c', text: "Had" },
      { id: 'd', text: "Did" }
    ],
    correctAnswer: "Will",
    explanation: "First conditional."
  },
  {
    id: 9036,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Connectors",
    questionText: "Though he is poor, ___ he is honest.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "But" },
      { id: 'b', text: "Yet" }, // Correct
      { id: 'c', text: "So" },
      { id: 'd', text: "And" }
    ],
    correctAnswer: "Yet",
    explanation: "Though... Yet (or comma)."
  },
  {
    id: 9037,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Vocabulary",
    questionText: "Antonym of 'Optimist':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Realist" },
      { id: 'b', text: "Pessimist" }, // Correct
      { id: 'c', text: "Idealist" },
      { id: 'd', text: "Artist" }
    ],
    correctAnswer: "Pessimist",
    explanation: "Hopeful vs Gloomy."
  },
  {
    id: 9038,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Phrasal Verbs",
    questionText: "The plane took ___.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Out" },
      { id: 'b', text: "Off" }, // Correct
      { id: 'c', text: "In" },
      { id: 'd', text: "Away" }
    ],
    correctAnswer: "Off",
    explanation: "Take off = Depart."
  },
  {
    id: 9039,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Adjectives",
    questionText: "He is the ___ boy in class.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Tall" },
      { id: 'b', text: "Tallest" }, // Correct
      { id: 'c', text: "Taller" },
      { id: 'd', text: "More tall" }
    ],
    correctAnswer: "Tallest",
    explanation: "Superlative for group."
  },
  {
    id: 9040,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Correction",
    questionText: "One of the boy is missing. (Correct it)",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "One of the boys is missing" }, // Correct
      { id: 'b', text: "One of the boy are missing" },
      { id: 'c', text: "One of boys missing" },
      { id: 'd', text: "None" }
    ],
    correctAnswer: "One of the boys is missing",
    explanation: "One of + Plural Noun + Singular Verb."
  }
];

export default grade9Questions;