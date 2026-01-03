import { Question, Subject, InteractionType } from '../types';

export const grade8Questions: Question[] = [
  // ================= MATHEMATICS =================
  {
    id: 8001,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Integer Multiplication",
    questionText: "Product of (-10) x (-5) is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["-50", "50", "-15", "15"],
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
    options: ["2/3", "-5/7", "0", "All of these"],
    correctAnswer: "All of these",
    explanation: "Any number p/q where q is not 0."
  },
  {
    id: 8003,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Additive Inverse",
    questionText: "Additive inverse of -3/4 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["-4/3", "3/4", "0", "4/3"],
    correctAnswer: "3/4",
    explanation: "Change sign: -3/4 + 3/4 = 0."
  },
  {
    id: 8004,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Integer Division",
    questionText: "20 ÷ (-5) = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["4", "-4", "5", "-25"],
    correctAnswer: "-4",
    explanation: "Positive divided by Negative is Negative."
  },
  {
    id: 8005,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Decimals",
    questionText: "2.5 x 0.3 = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["0.75", "7.5", "0.075", "75"],
    correctAnswer: "0.75",
    explanation: "25 x 3 = 75. Two decimal places total."
  },
  {
    id: 8006,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Fraction Division",
    questionText: "1/2 ÷ 1/4 = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["1/8", "2", "1/2", "4"],
    correctAnswer: "2",
    explanation: "1/2 x 4/1 = 2."
  },
  {
    id: 8007,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Statistics",
    questionText: "Mean of first 5 natural numbers (1,2,3,4,5):",
    interactionType: InteractionType.TAP_SELECT,
    options: ["2", "3", "4", "2.5"],
    correctAnswer: "3",
    explanation: "Sum(15) / Count(5) = 3."
  },
  {
    id: 8008,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Linear Equations",
    questionText: "Solve: 3x - 5 = 10",
    interactionType: InteractionType.TAP_SELECT,
    options: ["5", "15", "3", "2"],
    correctAnswer: "5",
    explanation: "3x = 15, so x = 5."
  },
  {
    id: 8009,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Algebra Substitution",
    questionText: "If x = -2, value of 3x² is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["-12", "12", "-6", "6"],
    correctAnswer: "12",
    explanation: "(-2)² = 4. 3(4) = 12."
  },
  {
    id: 8010,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Angle Pairs",
    questionText: "Complementary angle of 40° is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["50°", "140°", "40°", "60°"],
    correctAnswer: "50°",
    explanation: "90 - 40 = 50."
  },
  {
    id: 8011,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Triangles",
    questionText: "Find x if angles are 60°, 50°, x.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["60°", "70°", "80°", "50°"],
    correctAnswer: "70°",
    explanation: "180 - (60+50) = 70."
  },
  {
    id: 8012,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Percentages",
    questionText: "20% of 500 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["10", "100", "50", "200"],
    correctAnswer: "100",
    explanation: "(20/100) x 500 = 100."
  },
  {
    id: 8013,
    subject: Subject.MATH,
    gradeLevel: 8,
    skillTag: "Exponents",
    questionText: "2³ = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["6", "8", "9", "5"],
    correctAnswer: "8",
    explanation: "2 x 2 x 2 = 8."
  },

  // ================= SCIENCE =================
  {
    id: 8014,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Thermodynamics",
    questionText: "Heat flows from:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Cold to Hot", "Hot to Cold", "Both directions", "Does not flow"],
    correctAnswer: "Hot to Cold",
    explanation: "Natural direction of heat transfer."
  },
  {
    id: 8015,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Electrical Current",
    questionText: "A wire gets hot when current flows. This is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Magnetic Effect", "Heating Effect", "Chemical Effect", "Cooling Effect"],
    correctAnswer: "Heating Effect",
    explanation: "Resistance causes heating."
  },
  {
    id: 8016,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Optics",
    questionText: "Image formed by a Plane Mirror is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Real and Inverted", "Virtual and Erect", "Real and Erect", "Virtual and Inverted"],
    correctAnswer: "Virtual and Erect",
    explanation: "Like looking in a bathroom mirror."
  },
  {
    id: 8017,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Acids and Bases",
    questionText: "Acids turn Blue Litmus to:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Red", "Green", "Yellow", "White"],
    correctAnswer: "Red",
    explanation: "Acid turns Blue to Red."
  },
  {
    id: 8018,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Chemical Changes",
    questionText: "Rusting of Iron is a:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Physical Change", "Chemical Change", "Reversible Change", "Fast Change"],
    correctAnswer: "Chemical Change",
    explanation: "A new substance (Rust) is formed."
  },
  {
    id: 8019,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Neutralization",
    questionText: "Reaction between Acid and Base is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Oxidation", "Neutralization", "Crystallization", "Reduction"],
    correctAnswer: "Neutralization",
    explanation: "Forms Salt and Water."
  },
  {
    id: 8020,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Biology - Digestion",
    questionText: "Bile juice is secreted by:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Stomach", "Pancreas", "Liver", "Small Intestine"],
    correctAnswer: "Liver",
    explanation: "Liver produces Bile."
  },
  {
    id: 8021,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Respiration",
    questionText: "Breakdown of food to release energy is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Digestion", "Respiration", "Excretion", "Circulation"],
    correctAnswer: "Respiration",
    explanation: "Cellular respiration releases energy."
  },
  {
    id: 8022,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Transport in Plants",
    questionText: "Water is transported in plants by:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Xylem", "Phloem", "Stomata", "Root hair"],
    correctAnswer: "Xylem",
    explanation: "Xylem for water, Phloem for food."
  },
  {
    id: 8023,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Reproduction",
    questionText: "Yeasts reproduce by:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Fragmentation", "Budding", "Spore formation", "Pollination"],
    correctAnswer: "Budding",
    explanation: "A small bud grows on the parent."
  },
  {
    id: 8024,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Ecology",
    questionText: "World Water Day is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["22 March", "22 April", "5 June", "14 Nov"],
    correctAnswer: "22 March",
    explanation: "International observance."
  },
  {
    id: 8025,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Circulatory System",
    questionText: "Blood vessel that carries oxygenated blood:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Veins", "Arteries", "Capillaries", "All"],
    correctAnswer: "Arteries",
    explanation: "Arteries carry blood away from the heart (Oxygenated)."
  },
  {
    id: 8026,
    subject: Subject.SCIENCE,
    gradeLevel: 8,
    skillTag: "Breathing",
    questionText: "During exhalation, ribs move:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Outwards", "Down and Inwards", "Upwards", "Don't move"],
    correctAnswer: "Down and Inwards",
    explanation: "To push air out."
  },

  // ================= ENGLISH =================
  {
    id: 8027,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Tenses",
    questionText: "By the time you arrive, I ___ finished cooking. (Future Perfect)",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Will have", "Will", "Have", "Had"],
    correctAnswer: "Will have",
    explanation: "Completed action in future."
  },
  {
    id: 8028,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Reported Speech",
    questionText: "She said she ___ busy.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Is", "Was", "Were", "Has"],
    correctAnswer: "Was",
    explanation: "Backshift tense in reported speech."
  },
  {
    id: 8029,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Prepositions",
    questionText: "I have been waiting ___ 2 hours.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Since", "For", "From", "By"],
    correctAnswer: "For",
    explanation: "Duration uses 'For'."
  },
  {
    id: 8030,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Voice",
    questionText: "Passive: 'Who taught you?'",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Who was taught", "By whom were you taught?", "Who teaches you", "By whom you taught"],
    correctAnswer: "By whom were you taught?",
    explanation: "Interrogative passive structure."
  },
  {
    id: 8031,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Modals",
    questionText: "You ___ respect the law.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Could", "Might", "Must", "Can"],
    correctAnswer: "Must",
    explanation: "Obligation."
  },
  {
    id: 8032,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Subject-Verb Agreement",
    questionText: "The news ___ good.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Are", "Is", "Were", "Have"],
    correctAnswer: "Is",
    explanation: "News is singular."
  },
  {
    id: 8033,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Preposition Rules",
    questionText: "He is senior ___ me.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Than", "To", "From", "With"],
    correctAnswer: "To",
    explanation: "Senior takes 'To'."
  },
  {
    id: 8034,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Conjunctions",
    questionText: "Besides being rich, he is kind. 'Besides' means:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Next to", "In addition to", "Except", "Below"],
    correctAnswer: "In addition to",
    explanation: "Not to be confused with Beside."
  },
  {
    id: 8035,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Synonyms",
    questionText: "Synonym of 'Chaos':",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Order", "Confusion", "Quiet", "Music"],
    correctAnswer: "Confusion",
    explanation: "Disorder."
  },
  {
    id: 8036,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Antonyms",
    questionText: "Antonym of 'Transparent':",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Clear", "Opaque", "Glass", "See-through"],
    correctAnswer: "Opaque",
    explanation: "Cannot see through."
  },
  {
    id: 8037,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "One Word Substitution",
    questionText: "One who knows everything:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Omnipresent", "Omniscient", "Omnipotent", "Optimist"],
    correctAnswer: "Omniscient",
    explanation: "Omni (All) + Scient (Knowledge)."
  },
  {
    id: 8038,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Idioms",
    questionText: "'To call it a day' means:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Name the day", "Stop working", "Start working", "Party"],
    correctAnswer: "Stop working",
    explanation: "End the work day."
  },
  {
    id: 8039,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Confusing Words",
    questionText: "To influence is to:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Effect", "Affect", "Infect", "Defect"],
    correctAnswer: "Affect",
    explanation: "Affect is the verb, Effect is the result."
  },
  {
    id: 8040,
    subject: Subject.ENGLISH,
    gradeLevel: 8,
    skillTag: "Question Tags",
    questionText: "She sings well, ___?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Does she?", "Doesn't she?", "Is she?", "Isn't she?"],
    correctAnswer: "Doesn't she?",
    explanation: "Positive statement -> Negative tag."
  }
];

export default grade8Questions;