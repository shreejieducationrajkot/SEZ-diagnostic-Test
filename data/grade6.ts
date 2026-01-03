import { Question, Subject, InteractionType } from '../types';

export const grade6Questions: Question[] = [
  // ================= MATHEMATICS =================
  {
    id: 6001,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "System Conversion",
    questionText: "In the International System, 10 Lakhs is equal to:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["1 Million", "10 Million", "100 Thousand", "1 Billion"],
    correctAnswer: "1 Million",
    explanation: "10 Lakhs = 1,000,000 which is 1 Million."
  },
  {
    id: 6002,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Place Value",
    questionText: "Place value of 5 in 56,78,921 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Fifty Lakh", "Five Lakh", "Fifty Thousand", "Five Crores"],
    correctAnswer: "Five Lakh",
    explanation: "The 5 is in the Lakhs position (5,00,000)."
  },
  {
    id: 6003,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Rollover Logic",
    questionText: "What number must be added to 79,999 to make it 80,000?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["10", "1", "100", "0"],
    correctAnswer: "1",
    explanation: "Successor of 79,999 is 80,000."
  },
  {
    id: 6004,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Rounding",
    questionText: "Round off 7,54,321 to the nearest Thousand.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["7,54,000", "7,55,000", "7,50,000", "7,54,300"],
    correctAnswer: "7,54,000",
    explanation: "Hundreds digit is 3 (<5), so round down."
  },
  {
    id: 6005,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Roman Numerals",
    questionText: "Roman Numeral for 90 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["XC", "LXXXX", "CX", "LX"],
    correctAnswer: "XC",
    explanation: "100 (C) minus 10 (X) = 90."
  },
  {
    id: 6006,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Divisibility",
    questionText: "Which number is divisible by 3?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["124", "305", "123", "100"],
    correctAnswer: "123",
    explanation: "Sum of digits: 1+2+3=6, which is divisible by 3."
  },
  {
    id: 6007,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "HCF",
    questionText: "HCF of 12 and 18 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["3", "6", "2", "36"],
    correctAnswer: "6",
    explanation: "Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. Highest Common is 6."
  },
  {
    id: 6008,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Order of Operations",
    questionText: "Simplify: 10 + 5 x 2",
    interactionType: InteractionType.TAP_SELECT,
    options: ["30", "20", "25", "15"],
    correctAnswer: "20",
    explanation: "Multiply first: 5x2=10. Then Add: 10+10=20."
  },
  {
    id: 6009,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Decimals",
    questionText: "Which is greater: 0.1 or 0.09?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["0.1", "0.09", "Equal", "Cannot say"],
    correctAnswer: "0.1",
    explanation: "0.1 is 0.10, which is greater than 0.09."
  },
  {
    id: 6010,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Fractions",
    questionText: "2/5 + 1/5 = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["3/10", "3/5", "2/25", "1/5"],
    correctAnswer: "3/5",
    explanation: "Denominators are same, just add numerators: 2+1=3."
  },
  {
    id: 6011,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Measurement",
    questionText: "2.5 kg = ___ grams?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["250", "2500", "2050", "2005"],
    correctAnswer: "2500",
    explanation: "1 kg = 1000g. 2.5 x 1000 = 2500."
  },
  {
    id: 6012,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Percentages",
    questionText: "50% of 100 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["20", "50", "100", "5"],
    correctAnswer: "50",
    explanation: "50% means half."
  },
  {
    id: 6013,
    subject: Subject.MATH,
    gradeLevel: 6,
    skillTag: "Geometry",
    questionText: "Sum of angles in a triangle is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["90°", "180°", "360°", "100°"],
    correctAnswer: "180°",
    explanation: "Triangle Angle Sum Property."
  },

  // ================= SCIENCE =================
  {
    id: 6014,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Skeletal System",
    questionText: "The framework of bones that supports our body is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Muscular System", "Skeleton", "Nerves", "Skin"],
    correctAnswer: "Skeleton",
    explanation: "The skeleton provides structure and protection."
  },
  {
    id: 6015,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Joints",
    questionText: "Which joint allows movement in all directions (like shoulder)?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Hinge Joint", "Ball and Socket Joint", "Pivot Joint", "Fixed Joint"],
    correctAnswer: "Ball and Socket Joint",
    explanation: "It allows 360-degree rotation."
  },
  {
    id: 6016,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Nutritional Health",
    questionText: "Deficiency of Iron causes:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Anemia", "Scurvy", "Night Blindness", "Rickets"],
    correctAnswer: "Anemia",
    explanation: "Iron is needed for Hemoglobin."
  },
  {
    id: 6017,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Organ Function",
    questionText: "Which organ filters waste from blood?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Heart", "Kidney", "Lungs", "Stomach"],
    correctAnswer: "Kidney",
    explanation: "Kidneys filter blood to produce urine."
  },
  {
    id: 6018,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Plant Lifecycle",
    questionText: "The process of a seed turning into a seedling is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Digestion", "Germination", "Dispersal", "Pollination"],
    correctAnswer: "Germination",
    explanation: "Sprouting of a seed."
  },
  {
    id: 6019,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Separation Techniques",
    questionText: "Removing insoluble impurities using filter paper is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Evaporation", "Filtration", "Condensation", "Sedimentation"],
    correctAnswer: "Filtration",
    explanation: "Like straining tea leaves."
  },
  {
    id: 6020,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Atmosphere",
    questionText: "The percentage of Nitrogen in air is approx:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["21%", "78%", "1%", "50%"],
    correctAnswer: "78%",
    explanation: "Nitrogen is the most abundant gas."
  },
  {
    id: 6021,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Energy",
    questionText: "Which energy comes from flowing water?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Solar", "Hydro", "Wind", "Thermal"],
    correctAnswer: "Hydro",
    explanation: "Hydro means water."
  },
  {
    id: 6022,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Astronomy",
    questionText: "An eclipse of the Sun is called:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Lunar Eclipse", "Solar Eclipse", "Full Moon", "New Moon"],
    correctAnswer: "Solar Eclipse",
    explanation: "When the Moon blocks the Sun."
  },
  {
    id: 6023,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Simple Machines",
    questionText: "A 'Ramp' is an example of which simple machine?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Lever", "Inclined Plane", "Pulley", "Screw"],
    correctAnswer: "Inclined Plane",
    explanation: "A sloping surface helps lift loads."
  },
  {
    id: 6024,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Forces",
    questionText: "Friction prevents:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Stopping", "Slipping", "Moving", "Heating"],
    correctAnswer: "Slipping",
    explanation: "Friction provides grip."
  },
  {
    id: 6025,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "States of Matter",
    questionText: "Solids have:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Fixed shape, Fixed volume", "No shape", "No volume", "Flow"],
    correctAnswer: "Fixed shape, Fixed volume",
    explanation: "Particles are tightly packed."
  },
  {
    id: 6026,
    subject: Subject.SCIENCE,
    gradeLevel: 6,
    skillTag: "Water Types",
    questionText: "Distilled water is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Salty", "Purest form", "Dirty", "Sweet"],
    correctAnswer: "Purest form",
    explanation: "It has no minerals or impurities."
  },

  // ================= ENGLISH =================
  {
    id: 6027,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Adverbs",
    questionText: "Choose the Adverb: 'She spoke softly to the baby.'",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Spoke", "Softly", "Baby", "She"],
    correctAnswer: "Softly",
    explanation: "Describes how she spoke."
  },
  {
    id: 6028,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Plurals",
    questionText: "Plural of 'Knife':",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Knifes", "Knives", "Knive", "Knifves"],
    correctAnswer: "Knives",
    explanation: "Words ending in 'fe' change to 'ves'."
  },
  {
    id: 6029,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Past Tense",
    questionText: "I ___ to the market yesterday.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Go", "Went", "Gone", "Going"],
    correctAnswer: "Went",
    explanation: "Simple past tense of 'Go'."
  },
  {
    id: 6030,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Prepositions",
    questionText: "The cat is hiding ___ the table.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["In", "Under", "To", "Of"],
    correctAnswer: "Under",
    explanation: "Spatial position."
  },
  {
    id: 6031,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Subject-Verb Agreement",
    questionText: "Which sentence is correct?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["He run fast.", "He runs fast.", "He running fast.", "He runned fast."],
    correctAnswer: "He runs fast.",
    explanation: "Singular subject (He) takes 's'."
  },
  {
    id: 6032,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Vocabulary",
    questionText: "A person who flies a plane is a...",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Driver", "Pilot", "Captain", "Rider"],
    correctAnswer: "Pilot",
    explanation: "Definition of Pilot."
  },
  {
    id: 6033,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Conjunctions",
    questionText: "Identify the Conjunction: I wanted ice cream but I had no money.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Wanted", "But", "No", "Had"],
    correctAnswer: "But",
    explanation: "Joins two clauses."
  },
  {
    id: 6034,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Articles",
    questionText: "This is ___ umbrella.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["A", "An", "The", "Two"],
    correctAnswer: "An",
    explanation: "Umbrella starts with a vowel sound."
  },
  {
    id: 6035,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Tense Identification",
    questionText: "'She is writing.' What tense is this?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Simple Present", "Present Continuous", "Past", "Future"],
    correctAnswer: "Present Continuous",
    explanation: "Is + -ing verb form."
  },
  {
    id: 6036,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Syntax",
    questionText: "Rearrange: Milk / likes / cat / the.",
    interactionType: InteractionType.REORDER,
    options: ["Milk", "likes", "cat", "the"],
    correctAnswer: ["The", "cat", "likes", "Milk"],
    explanation: "Subject (The cat) + Verb (likes) + Object (Milk)."
  },
  {
    id: 6037,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Antonyms",
    questionText: "Opposite of 'Win':",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Victory", "Lose", "Loose", "Lost"],
    correctAnswer: "Lose",
    explanation: "To lose a game."
  },
  {
    id: 6038,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Collective Nouns",
    questionText: "A ___ of lions.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Pack", "Pride", "Herd", "Bunch"],
    correctAnswer: "Pride",
    explanation: "Specific group term for lions."
  },
  {
    id: 6039,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Homophones",
    questionText: "Principal vs Principle. Head of school is?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Principle", "Principal", "Princaple", "Prince"],
    correctAnswer: "Principal",
    explanation: "PAL = Your pal at school."
  },
  {
    id: 6040,
    subject: Subject.ENGLISH,
    gradeLevel: 6,
    skillTag: "Superlatives",
    questionText: "She is the ___ girl in class.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Tall", "Taller", "Tallest", "More tall"],
    correctAnswer: "Tallest",
    explanation: "Comparison among many requires superlative."
  }
];

export default grade6Questions;