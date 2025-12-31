import { Question, Subject, InteractionType } from '../types';

export const grade5Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  {
    id: 5001,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Place Value",
    questionText: "Place value of 9 in 5,92,100 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "900" },
      { id: 'b', text: "90,000" }, // Correct
      { id: 'c', text: "9,000" },
      { id: 'd', text: "9 Lakh" }
    ],
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
    options: [
      { id: 'a', text: "4,500" },
      { id: 'b', text: "4,600" }, // Correct
      { id: 'c', text: "5,000" },
      { id: 'd', text: "4,570" }
    ],
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
    options: [
      { id: 'a', text: "99,998" },
      { id: 'b', text: "1,00,000" }, // Correct
      { id: 'c', text: "1,00,001" },
      { id: 'd', text: "10,000" }
    ],
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
    options: [
      { id: 'a', text: "15" },
      { id: 'b', text: "0" },
      { id: 'c', text: "1" },
      { id: 'd', text: "Not Defined" } // Correct
    ],
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
    options: [
      { id: 'a', text: "24" },
      { id: 'b', text: "12" }, // Correct
      { id: 'c', text: "2" },
      { id: 'd', text: "10" }
    ],
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
    interactiveData: { items: ["1/2", "1/9", "1/5"] },
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
    options: [
      { id: 'a', text: "2/2" },
      { id: 'b', text: "3/2" }, // Correct
      { id: 'c', text: "1/2" },
      { id: 'd', text: "4/2" }
    ],
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
    options: [
      { id: 'a', text: "25 cm" },
      { id: 'b', text: "20 cm" }, // Correct
      { id: 'c', text: "10 cm" },
      { id: 'd', text: "15 cm" }
    ],
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
    options: [
      { id: 'a', text: "20 hours" },
      { id: 'b', text: "4 hours" }, // Correct
      { id: 'c', text: "6 hours" },
      { id: 'd', text: "2 hours" }
    ],
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
    options: [
      { id: 'a', text: "5" },
      { id: 'b', text: "0" }, // Correct
      { id: 'c', text: "1" },
      { id: 'd', text: "10" }
    ],
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
    options: [
      { id: 'a', text: "Circle" },
      { id: 'b', text: "Square" }, // Correct
      { id: 'c', text: "Cylinder" },
      { id: 'd', text: "Sphere" }
    ],
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
    options: [
      { id: 'a', text: "50" },
      { id: 'b', text: "200" }, // Correct
      { id: 'c', text: "2" },
      { id: 'd', text: "100" }
    ],
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
    options: [
      { id: 'a', text: "IL" },
      { id: 'b', text: "XLIX" }, // Correct
      { id: 'c', text: "XXXXIX" },
      { id: 'd', text: "LIX" }
    ],
    correctAnswer: "XLIX",
    explanation: "40 (XL) + 9 (IX)."
  },

  // ================= SCIENCE (13 Questions) =================
  {
    id: 5014,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Plant Process",
    questionText: "Process by which plants make food:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Digestion" },
      { id: 'b', text: "Photosynthesis" }, // Correct
      { id: 'c', text: "Respiration" },
      { id: 'd', text: "Absorption" }
    ],
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
    options: [
      { id: 'a', text: "Filtration" },
      { id: 'b', text: "Evaporation" }, // Correct
      { id: 'c', text: "Decantation" },
      { id: 'd', text: "Sedimentation" }
    ],
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
    options: [
      { id: 'a', text: "Lunar" },
      { id: 'b', text: "Solar" }, // Correct
      { id: 'c', text: "Hydro" },
      { id: 'd', text: "Wind" }
    ],
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
    options: [
      { id: 'a', text: "Seasons" },
      { id: 'b', text: "Day and Night" }, // Correct
      { id: 'c', text: "Rain" },
      { id: 'd', text: "Eclipse" }
    ],
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
    options: [
      { id: 'a', text: "Wool" },
      { id: 'b', text: "Cotton/Light" }, // Correct
      { id: 'c', text: "Dark colors" },
      { id: 'd', text: "Silk" }
    ],
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
    options: [
      { id: 'a', text: "It grows faster" },
      { id: 'b', text: "It turns yellow/pale" }, // Correct
      { id: 'c', text: "Nothing" },
      { id: 'd', text: "It flowers" }
    ],
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
    options: [
      { id: 'a', text: "Ship has engine" },
      { id: 'b', text: "Shape/Displacement" }, // Correct
      { id: 'c', text: "Salt water" },
      { id: 'd', text: "Nail is heavy" }
    ],
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
    options: [
      { id: 'a', text: "Falls down" },
      { id: 'b', text: "Floats" }, // Correct
      { id: 'c', text: "Flies up" },
      { id: 'd', text: "Breaks" }
    ],
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
    options: [
      { id: 'a', text: "Decrease" },
      { id: 'b', text: "Increase" }, // Correct
      { id: 'c', text: "Stay same" },
      { id: 'd', text: "None" }
    ],
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
    options: [
      { id: 'a', text: "Leaking glass" },
      { id: 'b', text: "Air vapor" }, // Correct
      { id: 'c', text: "Ice melting" },
      { id: 'd', text: "Magic" }
    ],
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
    options: [
      { id: 'a', text: "Water" },
      { id: 'b', text: "Vacuum (Space)" }, // Correct
      { id: 'c', text: "Wood" },
      { id: 'd', text: "Air" }
    ],
    correctAnswer: "Vacuum (Space)",
    explanation: "Sound needs a medium (air, solid, liquid)."
  },

  // ================= ENGLISH (14 Questions) =================
  {
    id: 5027,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Adverbs",
    questionText: "Identify the Adverb: 'The tortoise moved slowly.'",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Tortoise" },
      { id: 'b', text: "Moved" },
      { id: 'c', text: "Slowly" }, // Correct
      { id: 'd', text: "The" }
    ],
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
    options: [
      { id: 'a', text: "Tooths" },
      { id: 'b', text: "Teeth" }, // Correct
      { id: 'c', text: "Teeths" },
      { id: 'd', text: "Teeth's" }
    ],
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
    options: [
      { id: 'a', text: "I play" },
      { id: 'b', text: "I played" },
      { id: 'c', text: "I will play" }, // Correct
      { id: 'd', text: "I am playing" }
    ],
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
    options: [
      { id: 'a', text: "Itself" }, // Correct
      { id: 'b', text: "Himself" },
      { id: 'c', text: "Themselves" },
      { id: 'd', text: "Myself" }
    ],
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
    options: [
      { id: 'a', text: "Common" },
      { id: 'b', text: "Proper" },
      { id: 'c', text: "Abstract" }, // Correct
      { id: 'd', text: "Collective" }
    ],
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
    options: [
      { id: 'a', text: "Threw" }, // Correct
      { id: 'b', text: "Through" },
      { id: 'c', text: "True" },
      { id: 'd', text: "Thorough" }
    ],
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
    options: [
      { id: 'a', text: "Best" }, // Correct
      { id: 'b', text: "Goodest" },
      { id: 'c', text: "Most Good" },
      { id: 'd', text: "Bestest" }
    ],
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
    options: [
      { id: 'a', text: "Calf" },
      { id: 'b', text: "Cow" }, // Correct
      { id: 'c', text: "Ox" },
      { id: 'd', text: "Buffalo" }
    ],
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
    interactiveData: { items: ["Apple", "Ant", "Axe", "Arrow"] },
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
    interactiveData: { items: ["went", "Yesterday", "I", "market", "to", "the"] },
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
    options: [
      { id: 'a', text: "He is helped by me." },
      { id: 'b', text: "He was helped by me." }, // Correct
      { id: 'c', text: "I was helping." },
      { id: 'd', text: "He helps me." }
    ],
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
    options: [
      { id: 'a', text: "No" },
      { id: 'b', text: "Any" }, // Correct
      { id: 'c', text: "Some" },
      { id: 'd', text: "Many" }
    ],
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
    options: [
      { id: 'a', text: "Cut" },
      { id: 'b', text: "Put" }, // Correct
      { id: 'c', text: "Hut" },
      { id: 'd', text: "Shut" }
    ],
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
    options: [
      { id: 'a', text: "Will" },
      { id: 'b', text: "Can" },
      { id: 'c', text: "Would" }, // Correct
      { id: 'd', text: "Shall" }
    ],
    correctAnswer: "Would",
    explanation: "Hypothetical situation."
  }
];

export default grade5Questions;