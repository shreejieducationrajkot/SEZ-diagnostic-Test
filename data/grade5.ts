import { Question, Subject, InteractionType } from '../types';

export const grade5Questions: Question[] = [
  // ================= MATHEMATICS =================
  {
    id: 5001,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Place Value",
    questionText: "Place value of 9 in 5,92,100 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["900", "90,000", "9,000", "9 Lakh"],
    correctAnswer: "90,000",
    explanation: "It is in the Ten Thousands place."
  },
  {
    id: 5002,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Rounding",
    questionText: "Round 4,567 to the nearest 100.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["4,500", "4,600", "5,000", "4,570"],
    correctAnswer: "4,600",
    explanation: "67 is greater than 50, so round up."
  },
  {
    id: 5003,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Successor Logic",
    questionText: "Successor of 99,999 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["99,998", "1,00,000", "1,00,001", "10,000"],
    correctAnswer: "1,00,000",
    explanation: "Add 1 to the number."
  },
  {
    id: 5004,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Division by Zero",
    questionText: "15 divided by 0 is?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["15", "0", "1", "Not Defined"],
    correctAnswer: "Not Defined",
    explanation: "You cannot divide by zero."
  },
  {
    id: 5005,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "LCM",
    questionText: "LCM of 4 and 6 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["24", "12", "2", "10"],
    correctAnswer: "12",
    explanation: "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12... Common is 12."
  },
  {
    id: 5006,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Fraction Ordering",
    questionText: "Arrange fractions from Smallest to Largest. (Hint: Bigger denominator = Smaller piece!)",
    interactionType: InteractionType.REORDER,
    // --- FIX: ADDED options ---
    options: ["1/2", "1/9", "1/5"],
    correctAnswer: ["1/9", "1/5", "1/2"],
    explanation: "1/9 is smallest, 1/2 is largest."
  },
  {
    id: 5007,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Mixed Fractions",
    questionText: "Convert 1 1/2 to Improper Fraction.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["2/2", "3/2", "1/2", "4/2"],
    correctAnswer: "3/2",
    explanation: "2*1 + 1 = 3."
  },
  {
    id: 5008,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Geometry",
    questionText: "Perimeter of square with side 5cm.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["25 cm", "20 cm", "10 cm", "15 cm"],
    correctAnswer: "20 cm",
    explanation: "4 x Side = 4 x 5 = 20."
  },
  {
    id: 5009,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Time Logic",
    questionText: "22:00 to 02:00 next day is how many hours?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["20 hours", "4 hours", "6 hours", "2 hours"],
    correctAnswer: "4 hours",
    explanation: "22 to 24 (2 hrs) + 0 to 2 (2 hrs) = 4."
  },
  {
    id: 5010,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Zero Logic",
    questionText: "Product of two numbers is 0. One is 5. Other is?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["5", "0", "1", "10"],
    correctAnswer: "0",
    explanation: "Anything x 0 = 0."
  },
  {
    id: 5011,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Shapes",
    questionText: "Two triangles can form a...",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Circle", "Square", "Cylinder", "Sphere"],
    correctAnswer: "Square",
    explanation: "Two right triangles make a square/rectangle."
  },
  {
    id: 5012,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Division Logic",
    questionText: "Divide 100 by half (1/2).",
    interactionType: InteractionType.TAP_SELECT,
    options: ["50", "200", "2", "100"],
    correctAnswer: "200",
    explanation: "100 / (1/2) = 100 * 2 = 200."
  },
  {
    id: 5013,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Roman Numerals",
    questionText: "Roman Numeral for 49 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["IL", "XLIX", "XXXXIX", "LIX"],
    correctAnswer: "XLIX",
    explanation: "40 (XL) + 9 (IX)."
  },

  // ================= SCIENCE =================
  {
    id: 5014,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Plant Process",
    questionText: "Process by which plants make food:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Digestion", "Photosynthesis", "Respiration", "Absorption"],
    correctAnswer: "Photosynthesis",
    explanation: "Photo (Light) + Synthesis (Make)."
  },
  {
    id: 5015,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Separation",
    questionText: "Separate salt from water by:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Filtration", "Evaporation", "Decantation", "Sedimentation"],
    correctAnswer: "Evaporation",
    explanation: "Water evaporates, leaving salt."
  },
  {
    id: 5016,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "States of Matter",
    questionText: "Sort by molecule density.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'tight', label: 'Tight (Solid)' }, { id: 'loose', label: 'Loose (Gas)' }]
    },
    options: [
      { id: 'wood', text: "Wood", bucketId: 'tight' },
      { id: 'steam', text: "Steam", bucketId: 'loose' },
      { id: 'iron', text: "Iron", bucketId: 'tight' },
      { id: 'air', text: "Air", bucketId: 'loose' }
    ],
    correctAnswer: { wood: 'tight', steam: 'loose', iron: 'tight', air: 'loose' },
    explanation: "Solids are packed tight; gases are loose."
  },
  {
    id: 5017,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Energy",
    questionText: "Energy from the Sun is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Lunar", "Solar", "Hydro", "Wind"],
    correctAnswer: "Solar",
    explanation: "Solar means sun."
  },
  {
    id: 5018,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Rotation",
    questionText: "Rotation of Earth causes:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Seasons", "Day and Night", "Rain", "Eclipse"],
    correctAnswer: "Day and Night",
    explanation: "Spinning makes the sun appear to rise and set."
  },
  {
    id: 5019,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Waste Management",
    questionText: "Sort into Renewable vs Non-Renewable.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'renew', label: 'Renewable' }, { id: 'non', label: 'Non-Renewable' }]
    },
    options: [
      { id: 'sun', text: "Sunlight", bucketId: 'renew' },
      { id: 'coal', text: "Coal", bucketId: 'non' },
      { id: 'wind', text: "Wind", bucketId: 'renew' },
      { id: 'oil', text: "Oil", bucketId: 'non' }
    ],
    correctAnswer: { sun: 'renew', coal: 'non', wind: 'renew', oil: 'non' },
    explanation: "Renewable sources don't run out."
  },
  {
    id: 5020,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Thermal Physics",
    questionText: "Which clothes keep us cool?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Wool", "Cotton/Light", "Dark colors", "Silk"],
    correctAnswer: "Cotton/Light",
    explanation: "Light colors reflect heat."
  },
  {
    id: 5021,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Experiment Logic",
    questionText: "If you cover a plant with a blanket for 1 week...",
    interactionType: InteractionType.TAP_SELECT,
    options: ["It grows faster", "It turns yellow/pale", "Nothing", "It flowers"],
    correctAnswer: "It turns yellow/pale",
    explanation: "No sunlight = No photosynthesis."
  },
  {
    id: 5022,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Density Logic",
    questionText: "Why does a steel ship float but a nail sinks?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Ship has engine", "Shape/Displacement", "Salt water", "Nail is heavy"],
    correctAnswer: "Shape/Displacement",
    explanation: "Archimedes principle: The ship displaces enough water to float."
  },
  {
    id: 5023,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Space Physics",
    questionText: "Drop a pen in a spaceship. What happens?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Falls down", "Floats", "Flies up", "Breaks"],
    correctAnswer: "Floats",
    explanation: "Microgravity environment."
  },
  {
    id: 5024,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Ecosystem",
    questionText: "If all snakes die, rat population will...",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Decrease", "Increase", "Stay same", "None"],
    correctAnswer: "Increase",
    explanation: "Predator removed = Prey increases."
  },
  {
    id: 5025,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Condensation",
    questionText: "Water drops on the outside of a cold glass come from...",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Leaking glass", "Air vapor", "Ice melting", "Magic"],
    correctAnswer: "Air vapor",
    explanation: "Water vapor in the air condenses on the cold surface."
  },
  {
    id: 5026,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Physics",
    questionText: "Sound cannot travel through:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Water", "Vacuum (Space)", "Wood", "Air"],
    correctAnswer: "Vacuum (Space)",
    explanation: "Sound needs a medium (air, solid, liquid)."
  },

  // ================= ENGLISH =================
  {
    id: 5027,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Adverbs",
    questionText: "Identify the Adverb: 'The tortoise moved slowly.'",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Tortoise", "Moved", "Slowly", "The"],
    correctAnswer: "Slowly",
    explanation: "Describes how it moved."
  },
  {
    id: 5028,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Plurals",
    questionText: "Plural of 'Tooth':",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Tooths", "Teeth", "Teeths", "Teeth's"],
    correctAnswer: "Teeth",
    explanation: "Irregular plural."
  },
  {
    id: 5029,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Tenses",
    questionText: "Which is Future Tense?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["I play", "I played", "I will play", "I am playing"],
    correctAnswer: "I will play",
    explanation: "'Will' indicates future."
  },
  {
    id: 5030,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Pronouns",
    questionText: "The dog hurt ___ (Reflexive).",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Itself", "Himself", "Themselves", "Myself"],
    correctAnswer: "Itself",
    explanation: "Animals are usually 'it'."
  },
  {
    id: 5031,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Abstract Nouns",
    questionText: "'Honesty' is what kind of noun?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Common", "Proper", "Abstract", "Collective"],
    correctAnswer: "Abstract",
    explanation: "You cannot touch honesty."
  },
  {
    id: 5032,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Homophones",
    questionText: "I ___ the ball.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Threw", "Through", "True", "Thorough"],
    correctAnswer: "Threw",
    explanation: "Past tense of throw."
  },
  {
    id: 5033,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Comparatives",
    questionText: "Good, Better, ___",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Best", "Goodest", "Most Good", "Bestest"],
    correctAnswer: "Best",
    explanation: "Superlative of Good."
  },
  {
    id: 5034,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Analogy",
    questionText: "Horse : Mare :: Bull : ___",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Calf", "Cow", "Ox", "Buffalo"],
    correctAnswer: "Cow",
    explanation: "Male to Female."
  },
  {
    id: 5035,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Alphabetical Order",
    questionText: "Order: Apple, Ant, Axe, Arrow.",
    interactionType: InteractionType.REORDER,
    // --- FIX: ADDED options ---
    options: ["Apple", "Ant", "Axe", "Arrow"],
    correctAnswer: ["Ant", "Apple", "Arrow", "Axe"],
    explanation: "An, Ap, Ar, Ax."
  },
  {
    id: 5036,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Sentence Structure",
    questionText: "Reorder to make a sentence.",
    interactionType: InteractionType.REORDER,
    // --- FIX: ADDED options ---
    options: ["went", "Yesterday", "I", "market", "to", "the"],
    correctAnswer: ["Yesterday", "I", "went", "to", "the", "market"],
    explanation: "Time first or last. Subject-Verb-Object."
  },
  {
    id: 5037,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Passive Voice",
    questionText: "Passive of: 'I helped him.'",
    interactionType: InteractionType.TAP_SELECT,
    options: ["He is helped by me.", "He was helped by me.", "I was helping.", "He helps me."],
    correctAnswer: "He was helped by me.",
    explanation: "Past tense requires 'was'."
  },
  {
    id: 5038,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Double Negatives",
    questionText: "I haven't got ___ money.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["No", "Any", "Some", "Many"],
    correctAnswer: "Any",
    explanation: "'Haven't got no' is incorrect."
  },
  {
    id: 5039,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Phonetics",
    questionText: "Odd sound out: Cut, Put, Hut, Shut.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Cut", "Put", "Hut", "Shut"],
    correctAnswer: "Put",
    explanation: "Put has 'oo' sound. Others have 'uh'."
  },
  {
    id: 5040,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Conditionals",
    questionText: "If I were a bird, I ___ fly.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Will", "Can", "Would", "Shall"],
    correctAnswer: "Would",
    explanation: "Hypothetical situation."
  }
];

export default grade5Questions;