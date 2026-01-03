import { Question, Subject, InteractionType } from '../types';

export const grade9Questions: Question[] = [
  // ================= MATHEMATICS =================
  {
    id: 9001,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Multiplicative Inverse",
    questionText: "The multiplicative inverse of -5/8 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["5/8", "-8/5", "8/5", "1"],
    correctAnswer: "-8/5",
    explanation: "Flip numerator and denominator. Sign stays same."
  },
  {
    id: 9002,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Linear Equations",
    questionText: "Solve: 2x - 3 = x + 2",
    interactionType: InteractionType.TAP_SELECT,
    options: ["1", "5", "-1", "2"],
    correctAnswer: "5",
    explanation: "2x - x = 2 + 3 => x = 5."
  },
  {
    id: 9003,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Rational Numbers",
    questionText: "A rational number between 3 and 4 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["3.5", "2.5", "4.5", "3/4"],
    correctAnswer: "3.5",
    explanation: "3.5 lies exactly in the middle."
  },
  {
    id: 9004,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Polygons",
    questionText: "Sum of exterior angles of any polygon is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["180°", "360°", "540°", "Depends on sides"],
    correctAnswer: "360°",
    explanation: "Always 360 regardless of sides."
  },
  {
    id: 9005,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Quadrilaterals",
    questionText: "Quadrilateral with only one pair of parallel sides:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Square", "Parallelogram", "Trapezium", "Kite"],
    correctAnswer: "Trapezium",
    explanation: "Definition of Trapezium."
  },
  {
    id: 9006,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Square Roots",
    questionText: "Square root of 144 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["14", "12", "11", "16"],
    correctAnswer: "12",
    explanation: "12 x 12 = 144."
  },
  {
    id: 9007,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Cube Roots",
    questionText: "Cube root of 64 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["2", "4", "8", "16"],
    correctAnswer: "4",
    explanation: "4 x 4 x 4 = 64."
  },
  {
    id: 9008,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Algebraic Identities",
    questionText: "(a + b)² = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["a² + b²", "a² - b²", "a² + 2ab + b²", "a² + ab + b²"],
    correctAnswer: "a² + 2ab + b²",
    explanation: "Standard expansion."
  },
  {
    id: 9009,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Factorisation",
    questionText: "Factorise: 4x² - 9y²",
    interactionType: InteractionType.TAP_SELECT,
    options: ["(2x-3y)²", "(2x-3y)(2x+3y)", "(4x-9y)(x+y)", "Cannot be done"],
    correctAnswer: "(2x-3y)(2x+3y)",
    explanation: "Difference of squares."
  },
  {
    id: 9010,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Mensuration",
    questionText: "Euler's Formula for polyhedrons:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["F+V=E+2", "F+E=V+2", "F+V+E=2", "F=V+E"],
    correctAnswer: "F+V=E+2",
    explanation: "Faces + Vertices = Edges + 2."
  },
  {
    id: 9011,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Volume",
    questionText: "Volume of Cylinder:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["2πrh", "πr²h", "2πr(r+h)", "1/3πr²h"],
    correctAnswer: "πr²h",
    explanation: "Area of base x Height."
  },
  {
    id: 9012,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Exponents",
    questionText: "2⁻³ is equal to:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["-6", "-8", "1/8", "1/6"],
    correctAnswer: "1/8",
    explanation: "1 / 2³ = 1/8."
  },
  {
    id: 9013,
    subject: Subject.MATH,
    gradeLevel: 9,
    skillTag: "Standard Form",
    questionText: "Standard form of 0.000035:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["3.5 x 10⁻⁵", "3.5 x 10⁵", "35 x 10⁻⁵", "3.5 x 10⁻⁴"],
    correctAnswer: "3.5 x 10⁻⁵",
    explanation: "Move decimal 5 places right."
  },

  // ================= SCIENCE =================
  {
    id: 9014,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Cell Biology",
    questionText: "The 'Powerhouse' of the cell is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
    correctAnswer: "Mitochondria",
    explanation: "Releases energy via respiration."
  },
  {
    id: 9015,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Microorganisms",
    questionText: "Yeast is used in the production of:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Sugar", "Alcohol", "Acid", "Oxygen"],
    correctAnswer: "Alcohol",
    explanation: "Fermentation process."
  },
  {
    id: 9016,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Reproduction",
    questionText: "Fertilization outside the female body is called:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Internal", "External", "Cloning", "IVF"],
    correctAnswer: "External",
    explanation: "Common in frogs and fish."
  },
  {
    id: 9017,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Agriculture",
    questionText: "Rhizobium bacteria help in:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Digestion", "Nitrogen Fixation", "Fermentation", "Making Curd"],
    correctAnswer: "Nitrogen Fixation",
    explanation: "Enriches soil."
  },
  {
    id: 9018,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Materials",
    questionText: "Which non-metal is a good conductor?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Sulphur", "Graphite", "Phosphorus", "Oxygen"],
    correctAnswer: "Graphite",
    explanation: "Carbon form that conducts electricity."
  },
  {
    id: 9019,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Chemical Reactions",
    questionText: "Metals react with acids to produce:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
    correctAnswer: "Hydrogen",
    explanation: "Produces a 'pop' sound."
  },
  {
    id: 9020,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Combustion",
    questionText: "Cleanest fuel for vehicles:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Petrol", "Diesel", "CNG", "Coal"],
    correctAnswer: "CNG",
    explanation: "Compressed Natural Gas."
  },
  {
    id: 9021,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Force",
    questionText: "Friction always acts:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["In direction of motion", "Opposite to motion", "Perpendicular", "Downwards"],
    correctAnswer: "Opposite to motion",
    explanation: "Resists movement."
  },
  {
    id: 9022,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Sound",
    questionText: "Sound cannot travel through:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Solids", "Liquids", "Vacuum", "Gases"],
    correctAnswer: "Vacuum",
    explanation: "Needs a medium."
  },
  {
    id: 9023,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Pressure",
    questionText: "Pressure = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Force x Area", "Force / Area", "Area / Force", "Force + Area"],
    correctAnswer: "Force / Area",
    explanation: "Force per unit area."
  },
  {
    id: 9024,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Light",
    questionText: "Angle of incidence is equal to angle of reflection.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Always", "Sometimes", "Never", "Rarely"],
    correctAnswer: "Always",
    explanation: "Law of Reflection."
  },
  {
    id: 9025,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Genetics",
    questionText: "Chromosomes are found in the:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Cytoplasm", "Nucleus", "Membrane", "Vacuole"],
    correctAnswer: "Nucleus",
    explanation: "DNA storage."
  },
  {
    id: 9026,
    subject: Subject.SCIENCE,
    gradeLevel: 9,
    skillTag: "Pollution",
    questionText: "Which gas causes Global Warming?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
    explanation: "Greenhouse gas."
  },

  // ================= ENGLISH =================
  {
    id: 9027,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Conjunctions",
    questionText: "Lest you should fail. 'Lest' is followed by:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Would", "Should", "Could", "Will"],
    correctAnswer: "Should",
    explanation: "Grammar rule: Lest... Should."
  },
  {
    id: 9028,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Subject-Verb Agreement",
    questionText: "He is one of the men who ___ honest.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Is", "Are", "Was", "Has"],
    correctAnswer: "Are",
    explanation: "'Who' refers to 'men' (plural)."
  },
  {
    id: 9029,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Causative Verbs",
    questionText: "I made him ___.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["To laugh", "Laugh", "Laughing", "Laughed"],
    correctAnswer: "Laugh",
    explanation: "Make + Object + Base Verb."
  },
  {
    id: 9030,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Correlatives",
    questionText: "No sooner did I see him ___ he ran away.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["When", "Than", "Then", "So"],
    correctAnswer: "Than",
    explanation: "No sooner... Than."
  },
  {
    id: 9031,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Collective Nouns",
    questionText: "The Jury ___ divided in their verdict.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Was", "Were", "Is", "Has"],
    correctAnswer: "Were",
    explanation: "Divided means individuals -> Plural."
  },
  {
    id: 9032,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Prepositions",
    questionText: "He prevented me ___ entering.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["To", "From", "By", "For"],
    correctAnswer: "From",
    explanation: "Prevent + From."
  },
  {
    id: 9033,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Conditionals",
    questionText: "Had I known, I ___ told you.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Would have", "Will have", "Had", "Did"],
    correctAnswer: "Would have",
    explanation: "Third conditional."
  },
  {
    id: 9034,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Infinitives",
    questionText: "I am used to ___ early.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Wake", "Waking", "Woke", "Waken"],
    correctAnswer: "Waking",
    explanation: "'Am used to' takes gerund (-ing)."
  },
  {
    id: 9035,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Subject Traps",
    questionText: "More than one workman ___ killed.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Was", "Were", "Are", "Have"],
    correctAnswer: "Was",
    explanation: "'More than one' takes singular."
  },
  {
    id: 9036,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Compound Subjects",
    questionText: "Bread and Butter ___ wholesome food.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Is", "Are", "Were", "Have"],
    correctAnswer: "Is",
    explanation: "Single idea = Singular."
  },
  {
    id: 9037,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Conjunctions",
    questionText: "I doubt ___ he will come.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["That", "If", "As", "But"],
    correctAnswer: "If",
    explanation: "Doubt in positive sentences uses If/Whether."
  },
  {
    id: 9038,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Relative Pronouns",
    questionText: "He is the man ___ I thought was your brother.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Whom", "Who", "Which", "That"],
    correctAnswer: "Who",
    explanation: "Subject of 'was your brother'."
  },
  {
    id: 9039,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Measurement Nouns",
    questionText: "Five miles ___ a long distance.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Is", "Are", "Were", "Have"],
    correctAnswer: "Is",
    explanation: "Distance is singular."
  },
  {
    id: 9040,
    subject: Subject.ENGLISH,
    gradeLevel: 9,
    skillTag: "Vocabulary",
    questionText: "Return home ___ the sun sets.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Ere", "While", "As", "Because"],
    correctAnswer: "Ere",
    explanation: "Ere means Before."
  }
];

export default grade9Questions;