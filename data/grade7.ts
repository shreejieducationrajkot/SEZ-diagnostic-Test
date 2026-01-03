import { Question, Subject, InteractionType } from '../types';

export const grade7Questions: Question[] = [
  // ================= MATHEMATICS =================
  {
    id: 7001,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Integer Magnitude",
    questionText: "Which integer is smaller?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["-1", "-10", "0", "1"],
    correctAnswer: "-10",
    explanation: "-10 is further left on the number line than -1."
  },
  {
    id: 7002,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Integer Addition",
    questionText: "(+5) + (-3) = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["8", "2", "-2", "-8"],
    correctAnswer: "2",
    explanation: "Adding a negative is like subtraction. 5 - 3 = 2."
  },
  {
    id: 7003,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Ordering Integers",
    questionText: "Arrange in Ascending Order.",
    interactionType: InteractionType.REORDER,
    options: ["0", "-5", "2", "-1"],
    correctAnswer: ["-5", "-1", "0", "2"],
    explanation: "From most negative to positive."
  },
  {
    id: 7004,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Algebra Substitution",
    questionText: "If x = 3, what is 2x + 1?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["6", "7", "5", "4"],
    correctAnswer: "7",
    explanation: "2(3) + 1 = 6 + 1 = 7."
  },
  {
    id: 7005,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Simple Equations",
    questionText: "Solve for x: x + 4 = 10",
    interactionType: InteractionType.TAP_SELECT,
    options: ["14", "6", "4", "40"],
    correctAnswer: "6",
    explanation: "x = 10 - 4 = 6."
  },
  {
    id: 7006,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Fractions",
    questionText: "2/3 of 18 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["6", "9", "12", "15"],
    correctAnswer: "12",
    explanation: "(18 ÷ 3) x 2 = 6 x 2 = 12."
  },
  {
    id: 7007,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Decimals",
    questionText: "2.5 x 0.2 = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["5.0", "0.5", "0.05", "50"],
    correctAnswer: "0.5",
    explanation: "25 x 2 = 50. Total 2 decimal places -> 0.50."
  },
  {
    id: 7008,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Ratios",
    questionText: "Ratio of 50cm to 1m is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["50:1", "1:2", "1:50", "2:1"],
    correctAnswer: "1:2",
    explanation: "1m = 100cm. 50:100 simplifies to 1:2."
  },
  {
    id: 7009,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Triangle Properties",
    questionText: "A triangle with no equal sides is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Equilateral", "Isosceles", "Scalene", "Right Angled"],
    correctAnswer: "Scalene",
    explanation: "Scalene means all sides different."
  },
  {
    id: 7010,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Angle Types",
    questionText: "An angle measuring 180 degrees is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Right", "Reflex", "Straight", "Complete"],
    correctAnswer: "Straight",
    explanation: "A straight line forms 180 degrees."
  },
  {
    id: 7011,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Area",
    questionText: "Area of a rectangle with Length 4m and Breadth 3m:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["12 sq m", "7 sq m", "14 sq m", "12 m"],
    correctAnswer: "12 sq m",
    explanation: "Area = L x B = 4 x 3 = 12."
  },
  {
    id: 7012,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Additive Inverse",
    questionText: "Additive Inverse of -7 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["-7", "0", "7", "1/7"],
    correctAnswer: "7",
    explanation: "Number + Inverse = 0. -7 + 7 = 0."
  },
  {
    id: 7013,
    subject: Subject.MATH,
    gradeLevel: 7,
    skillTag: "Algebraic Logic",
    questionText: "Length is double breadth. Perimeter 30. Find Length.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["5", "10", "15", "20"],
    correctAnswer: "10",
    explanation: "L=2x, B=x. P=2(3x)=6x. 6x=30, x=5. L=10."
  },

  // ================= SCIENCE =================
  {
    id: 7014,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Conductors",
    questionText: "Which material allows current to pass?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Rubber", "Copper", "Wood", "Plastic"],
    correctAnswer: "Copper",
    explanation: "Metals like Copper are good conductors."
  },
  {
    id: 7015,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Light Properties",
    questionText: "Shadows are formed because light travels in:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Curves", "Straight lines", "Zig-zag", "Circles"],
    correctAnswer: "Straight lines",
    explanation: "Rectilinear propagation of light."
  },
  {
    id: 7016,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Magnetism",
    questionText: "Unlike poles of a magnet (N-S):",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Repel", "Attract", "Do nothing", "Heat up"],
    correctAnswer: "Attract",
    explanation: "Opposites attract."
  },
  {
    id: 7017,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Separation",
    questionText: "Method to separate grains from stalks:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Handpicking", "Threshing", "Sieving", "Filtration"],
    correctAnswer: "Threshing",
    explanation: "Beating stalks to release grain."
  },
  {
    id: 7018,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Reversible Changes",
    questionText: "Melting of Ice is a ___ change.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Chemical", "Reversible", "Irreversible", "Biological"],
    correctAnswer: "Reversible",
    explanation: "Water can freeze back into ice."
  },
  {
    id: 7019,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Nutrients",
    questionText: "Deficiency of Vitamin A causes:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Beri-beri", "Night Blindness", "Scurvy", "Rickets"],
    correctAnswer: "Night Blindness",
    explanation: "Vitamin A is essential for vision."
  },
  {
    id: 7020,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Respiration",
    questionText: "Earthworms breathe through:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Lungs", "Gills", "Skin", "Nose"],
    correctAnswer: "Skin",
    explanation: "They exchange gases through moist skin."
  },
  {
    id: 7021,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Plant Adaptations",
    questionText: "Cactus leaves are modified into:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Flowers", "Spines", "Roots", "Fruits"],
    correctAnswer: "Spines",
    explanation: "To reduce water loss in deserts."
  },
  {
    id: 7022,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Combustion",
    questionText: "Which gas supports burning?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
    correctAnswer: "Oxygen",
    explanation: "Oxygen is essential for fire."
  },
  {
    id: 7023,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Atmosphere",
    questionText: "The layer of air around Earth is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Hydrosphere", "Atmosphere", "Lithosphere", "Biosphere"],
    correctAnswer: "Atmosphere",
    explanation: "Atmos means Vapor/Air."
  },
  {
    id: 7024,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Lab Testing",
    questionText: "Starch tests positive with Iodine by turning:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Blue-Black", "Red", "Yellow", "Clear"],
    correctAnswer: "Blue-Black",
    explanation: "Classic starch test reaction."
  },
  {
    id: 7025,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Experimental Logic",
    questionText: "Why does a sharp knife cut better?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["High Pressure (Small Area)", "Big Area", "It is heavy", "Friction"],
    correctAnswer: "High Pressure (Small Area)",
    explanation: "Pressure = Force / Area. Small area increases pressure."
  },
  {
    id: 7026,
    subject: Subject.SCIENCE,
    gradeLevel: 7,
    skillTag: "Expansion",
    questionText: "When water freezes to ice, its volume:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Decreases", "Increases", "Stays same", "Becomes zero"],
    correctAnswer: "Increases",
    explanation: "Anomalous expansion of water."
  },

  // ================= ENGLISH =================
  {
    id: 7027,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Tenses",
    questionText: "I ___ reading this book. (Present Continuous)",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Am", "Was", "Have", "Were"],
    correctAnswer: "Am",
    explanation: "I am + ing."
  },
  {
    id: 7028,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Irregular Verbs",
    questionText: "Simple Past of 'Write':",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Writed", "Wrote", "Written", "Writing"],
    correctAnswer: "Wrote",
    explanation: "Irregular verb form."
  },
  {
    id: 7029,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Passive Voice",
    questionText: "Passive: 'Ram eats an apple.'",
    interactionType: InteractionType.TAP_SELECT,
    options: ["An apple is eaten by Ram", "An apple was eaten", "Ram is eating", "Apple eats Ram"],
    correctAnswer: "An apple is eaten by Ram",
    explanation: "Object (Apple) becomes Subject."
  },
  {
    id: 7030,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Reported Speech",
    questionText: "He said, 'I am happy'. (Indirect)",
    interactionType: InteractionType.TAP_SELECT,
    options: ["He said he is happy", "He said that he was happy", "He says he was happy", "He said I was happy"],
    correctAnswer: "He said that he was happy",
    explanation: "Present tense 'am' changes to past 'was'."
  },
  {
    id: 7031,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Adjectives",
    questionText: "Comparative of 'Bad':",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Badder", "Worse", "Worst", "More Bad"],
    correctAnswer: "Worse",
    explanation: "Bad -> Worse -> Worst."
  },
  {
    id: 7032,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Conjunctions",
    questionText: "He is rich ___ unhappy.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["And", "But", "So", "Because"],
    correctAnswer: "But",
    explanation: "Contrast between rich and unhappy."
  },
  {
    id: 7033,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Collective Nouns",
    questionText: "A ___ of keys.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Bunch", "Herd", "Flock", "Pack"],
    correctAnswer: "Bunch",
    explanation: "Standard collective noun."
  },
  {
    id: 7034,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Abstract Nouns",
    questionText: "Which is an Abstract Noun?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Table", "Kindness", "School", "Gold"],
    correctAnswer: "Kindness",
    explanation: "It is a quality, not a physical object."
  },
  {
    id: 7035,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Modals",
    questionText: "You ___ respect elders. (Advice)",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Can", "Should", "May", "Might"],
    correctAnswer: "Should",
    explanation: "Should implies moral duty."
  },
  {
    id: 7036,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Sentence Structure",
    questionText: "Order: Always / late / is / he.",
    interactionType: InteractionType.REORDER,
    options: ["Always", "late", "is", "he"],
    correctAnswer: ["He", "is", "Always", "late"],
    explanation: "Adverb of frequency comes after the verb 'to be'."
  },
  {
    id: 7037,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Antonyms",
    questionText: "Antonym of 'Cruel':",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Mean", "Kind", "Angry", "Happy"],
    correctAnswer: "Kind",
    explanation: "Opposite of cruel."
  },
  {
    id: 7038,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Homophones",
    questionText: "Homophone for 'Week':",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Weak", "Wake", "Wick", "Woke"],
    correctAnswer: "Weak",
    explanation: "Sounds same, different spelling."
  },
  {
    id: 7039,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Articles",
    questionText: "Gold is ___ precious metal.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["A", "An", "The", "None"],
    correctAnswer: "A",
    explanation: "General statement."
  },
  {
    id: 7040,
    subject: Subject.ENGLISH,
    gradeLevel: 7,
    skillTag: "Prepositions",
    questionText: "I cut the apple ___ a knife.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["By", "With", "From", "On"],
    correctAnswer: "With",
    explanation: "Tools use 'With'."
  }
];

export default grade7Questions;