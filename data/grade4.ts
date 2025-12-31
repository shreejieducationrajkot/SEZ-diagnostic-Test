import { Question, Subject, InteractionType } from '../types';

export const grade4Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  {
    id: 4001,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Place Value",
    questionText: "Write the number for: Four thousand, three hundred and six.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "4360" },
      { id: 'b', text: "4306" }, // Correct
      { id: 'c', text: "4036" },
      { id: 'd', text: "436" }
    ],
    correctAnswer: "4306",
    explanation: "4000 + 300 + 6 = 4306. Note the zero in the tens place."
  },
  {
    id: 4002,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Number Ordering",
    questionText: "Arrange these numbers from Smallest to Largest.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["345", "360", "340", "350"] },
    correctAnswer: ["340", "345", "350", "360"],
    explanation: "Checking the tens digit helps order them."
  },
  {
    id: 4003,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Logical Constraint",
    questionText: "Form the smallest 4-digit number using digits: 5, 0, 9, 2.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "0259" },
      { id: 'b', text: "2059" }, // Correct
      { id: 'c', text: "2509" },
      { id: 'd', text: "2590" }
    ],
    correctAnswer: "2059",
    explanation: "A number cannot start with 0. So 2 comes first, then 0."
  },
  {
    id: 4004,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Mental Math",
    questionText: "4500 + 200 = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "6500" },
      { id: 'b', text: "4700" }, // Correct
      { id: 'c', text: "4520" },
      { id: 'd', text: "4600" }
    ],
    correctAnswer: "4700",
    explanation: "500 + 200 = 700. So 4700."
  },
  {
    id: 4005,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Multiplication Logic",
    questionText: "9 + 9 + 9 + 9 is the same as:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "9 x 4" }, // Correct
      { id: 'b', text: "9 + 4" },
      { id: 'c', text: "4 x 4" },
      { id: 'd', text: "9 x 9" }
    ],
    correctAnswer: "9 x 4",
    explanation: "Multiplication is repeated addition."
  },
  {
    id: 4006,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Division",
    questionText: "Divide 24 sweets among 4 children equally.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "8" },
      { id: 'b', text: "6" }, // Correct
      { id: 'c', text: "4" },
      { id: 'd', text: "10" }
    ],
    correctAnswer: "6",
    explanation: "24 divided by 4 is 6."
  },
  {
    id: 4007,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Fraction Size",
    questionText: "Which fraction is the biggest?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1/2" }, // Correct
      { id: 'b', text: "1/3" },
      { id: 'c', text: "1/4" },
      { id: 'd', text: "1/8" }
    ],
    correctAnswer: "1/2",
    explanation: "The smaller the denominator, the larger the slice."
  },
  {
    id: 4008,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Money",
    questionText: "Tom has 50 rupees. He buys a pen for 20. How much is left? (Use the wallet)",
    interactionType: InteractionType.MONEY_BUILDER,
    interactiveData: { denominations: [5, 10, 20, 50] },
    correctAnswer: 30, // 50-20=30
    explanation: "50 - 20 = 30."
  },
  {
    id: 4009,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Time Logic",
    questionText: "If the long hand is on 6 and short hand is between 2 and 3, what time is it?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "2:30" }, // Correct
      { id: 'b', text: "6:15" },
      { id: 'c', text: "3:30" },
      { id: 'd', text: "2:06" }
    ],
    correctAnswer: "2:30",
    explanation: "Long hand on 6 means 30 minutes. Short hand past 2 means 2:30."
  },
  {
    id: 4010,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Shape Logic",
    questionText: "A cube has ___ faces.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "4" },
      { id: 'b', text: "6" }, // Correct
      { id: 'c', text: "8" },
      { id: 'd', text: "12" }
    ],
    correctAnswer: "6",
    explanation: "Like a dice, a cube has 6 faces."
  },
  {
    id: 4011,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Patterns",
    questionText: "Complete: 10, 20, 30, 50... What is missing?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "35" },
      { id: 'b', text: "40" }, // Correct
      { id: 'c', text: "45" },
      { id: 'd', text: "25" }
    ],
    correctAnswer: "40",
    explanation: "Skip counting by 10s."
  },
  {
    id: 4012,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Logic Puzzle",
    questionText: "I am a number. Add 10 to me, I become 20. Who am I?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "30" },
      { id: 'b', text: "10" }, // Correct
      { id: 'c', text: "20" },
      { id: 'd', text: "5" }
    ],
    correctAnswer: "10",
    explanation: "20 - 10 = 10."
  },
  {
    id: 4013,
    subject: Subject.MATH,
    gradeLevel: 4,
    skillTag: "Ordering",
    questionText: "Arrange these numbers: 10, 5, 20, 2.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["10", "5", "20", "2"] },
    correctAnswer: ["2", "5", "10", "20"],
    explanation: "Smallest to largest."
  },

  // ================= SCIENCE (13 Questions) =================
  {
    id: 4014,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Plant Function",
    questionText: "Which part of the plant makes food?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Root" },
      { id: 'b', text: "Leaf" }, // Correct
      { id: 'c', text: "Stem" },
      { id: 'd', text: "Flower" }
    ],
    correctAnswer: "Leaf",
    explanation: "Leaves contain chlorophyll for photosynthesis."
  },
  {
    id: 4015,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Amphibians",
    questionText: "Which animal lives on both land and water?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Fish" },
      { id: 'b', text: "Frog" }, // Correct
      { id: 'c', text: "Monkey" },
      { id: 'd', text: "Eagle" }
    ],
    correctAnswer: "Frog",
    explanation: "Frogs are amphibians."
  },
  {
    id: 4016,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Dietary Class",
    questionText: "Which of these is a Herbivore (Plant Eater)?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Lion" },
      { id: 'b', text: "Cow" }, // Correct
      { id: 'c', text: "Dog" },
      { id: 'd', text: "Cat" }
    ],
    correctAnswer: "Cow",
    explanation: "Cows eat grass and plants."
  },
  {
    id: 4017,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "States of Matter",
    questionText: "Which of these can FLOW?",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'flow', label: 'Flows' }, { id: 'rigid', label: 'Does not Flow' }]
    },
    options: [
      { id: 'water', text: "Water", bucketId: 'flow' },
      { id: 'book', text: "Book", bucketId: 'rigid' },
      { id: 'milk', text: "Milk", bucketId: 'flow' },
      { id: 'stone', text: "Stone", bucketId: 'rigid' }
    ],
    correctAnswer: { water: 'flow', book: 'rigid', milk: 'flow', stone: 'rigid' },
    explanation: "Liquids flow, solids maintain shape."
  },
  {
    id: 4018,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Materials",
    questionText: "Which material is Waterproof?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Cotton" },
      { id: 'b', text: "Plastic" }, // Correct
      { id: 'c', text: "Paper" },
      { id: 'd', text: "Tissue" }
    ],
    correctAnswer: "Plastic",
    explanation: "Plastic does not absorb water."
  },
  {
    id: 4019,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Density",
    questionText: "Sort: Float vs Sink in water.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'float', label: 'Float' }, { id: 'sink', label: 'Sink' }]
    },
    options: [
      { id: 'stone', text: "Stone", bucketId: 'sink' },
      { id: 'ball', text: "Plastic Ball", bucketId: 'float' },
      { id: 'coin', text: "Coin", bucketId: 'sink' },
      { id: 'leaf', text: "Dry Leaf", bucketId: 'float' }
    ],
    correctAnswer: { stone: 'sink', ball: 'float', coin: 'sink', leaf: 'float' },
    explanation: "Dense items sink, light/hollow items float."
  },
  {
    id: 4020,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Astronomy",
    questionText: "The Sun is a...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Planet" },
      { id: 'b', text: "Star" }, // Correct
      { id: 'c', text: "Satellite" },
      { id: 'd', text: "Rock" }
    ],
    correctAnswer: "Star",
    explanation: "The Sun is a star at the center of our system."
  },
  {
    id: 4021,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Forces",
    questionText: "Friction helps us to...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Fly" },
      { id: 'b', text: "Walk without falling" }, // Correct
      { id: 'c', text: "Slip" },
      { id: 'd', text: "Float" }
    ],
    correctAnswer: "Walk without falling",
    explanation: "Friction provides grip."
  },
  {
    id: 4022,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Human Body",
    questionText: "Which organ pumps blood?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Brain" },
      { id: 'b', text: "Heart" }, // Correct
      { id: 'c', text: "Lungs" },
      { id: 'd', text: "Stomach" }
    ],
    correctAnswer: "Heart",
    explanation: "The heart circulates blood."
  },
  {
    id: 4023,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Waste Management",
    questionText: "Sort waste: Biodegradable (Rots) vs Non-Biodegradable.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'bio', label: 'Rots' }, { id: 'non', label: 'No Rot' }]
    },
    options: [
      { id: 'peel', text: "Banana Peel", bucketId: 'bio' },
      { id: 'bot', text: "Plastic Bottle", bucketId: 'non' },
      { id: 'pap', text: "Paper", bucketId: 'bio' },
      { id: 'glass', text: "Glass", bucketId: 'non' }
    ],
    correctAnswer: { peel: 'bio', bot: 'non', pap: 'bio', glass: 'non' },
    explanation: "Organic matter rots. Synthetics do not."
  },
  {
    id: 4024,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Water Cycle",
    questionText: "Water vapor turning back into water is called...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Evaporation" },
      { id: 'b', text: "Condensation" }, // Correct
      { id: 'c', text: "Melting" },
      { id: 'd', text: "Freezing" }
    ],
    correctAnswer: "Condensation",
    explanation: "Gas to Liquid is condensation."
  },
  {
    id: 4025,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Light Logic",
    questionText: "Look at the shadow. If the Sun moves Right, where does the shadow go?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Right" },
      { id: 'b', text: "Left" }, // Correct
      { id: 'c', text: "Disappear" },
      { id: 'd', text: "Stay" }
    ],
    correctAnswer: "Left",
    explanation: "Shadows are always opposite to the light source."
  },
  {
    id: 4026,
    subject: Subject.SCIENCE,
    gradeLevel: 4,
    skillTag: "Classification",
    questionText: "Which is NOT an insect?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Ant" },
      { id: 'b', text: "Spider" }, // Correct
      { id: 'c', text: "Mosquito" },
      { id: 'd', text: "Butterfly" }
    ],
    correctAnswer: "Spider",
    explanation: "Spiders have 8 legs (Arachnids), insects have 6."
  },

  // ================= ENGLISH (14 Questions) =================
  {
    id: 4027,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Parts of Speech",
    questionText: "Choose the Noun: 'The happy boy ran fast.'",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Happy" },
      { id: 'b', text: "Boy" }, // Correct
      { id: 'c', text: "Ran" },
      { id: 'd', text: "Fast" }
    ],
    correctAnswer: "Boy",
    explanation: "Boy is a person/naming word."
  },
  {
    id: 4028,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Plurals",
    questionText: "Plural of 'Child' is...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Childs" },
      { id: 'b', text: "Children" }, // Correct
      { id: 'c', text: "Childrens" },
      { id: 'd', text: "Childes" }
    ],
    correctAnswer: "Children",
    explanation: "Irregular plural."
  },
  {
    id: 4029,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Verb Tense",
    questionText: "Past tense of 'Go':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Goed" },
      { id: 'b', text: "Went" }, // Correct
      { id: 'c', text: "Gone" },
      { id: 'd', text: "Going" }
    ],
    correctAnswer: "Went",
    explanation: "Irregular verb 'Go' -> 'Went'."
  },
  {
    id: 4030,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Antonyms",
    questionText: "Opposite of 'Heavy':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Hard" },
      { id: 'b', text: "Light" }, // Correct
      { id: 'c', text: "Small" },
      { id: 'd', text: "Soft" }
    ],
    correctAnswer: "Light",
    explanation: "Heavy vs Light."
  },
  {
    id: 4031,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Prepositions",
    questionText: "The cat jumped ___ the table.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "In" },
      { id: 'b', text: "On" }, // Correct
      { id: 'c', text: "At" },
      { id: 'd', text: "Of" }
    ],
    correctAnswer: "On",
    explanation: "Movement to a surface is 'On'."
  },
  {
    id: 4032,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Homophones",
    questionText: "'See' and 'Sea' are...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Antonyms" },
      { id: 'b', text: "Homophones" }, // Correct
      { id: 'c', text: "Synonyms" },
      { id: 'd', text: "Verbs" }
    ],
    correctAnswer: "Homophones",
    explanation: "Same sound, different meaning."
  },
  {
    id: 4033,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Syntax",
    questionText: "Rearrange: is / name / My / Tom.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["name", "is", "Tom", "My"] },
    correctAnswer: ["My", "name", "is", "Tom"],
    explanation: "Subject-Verb-Object."
  },
  {
    id: 4034,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Adjectives",
    questionText: "Order the description correctly.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["red", "A", "ball", "big"] },
    correctAnswer: ["A", "big", "red", "ball"],
    explanation: "Size before Color."
  },
  {
    id: 4035,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Subject Identification",
    questionText: "Identify the Subject: 'It is raining.'",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Raining" },
      { id: 'b', text: "It" }, // Correct
      { id: 'c', text: "Is" },
      { id: 'd', text: "None" }
    ],
    correctAnswer: "It",
    explanation: "'It' is the dummy subject."
  },
  {
    id: 4036,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Punctuation",
    questionText: "Which is the correct possessive form for 'Dog'?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Dogs" },
      { id: 'b', text: "Dog's" }, // Correct
      { id: 'c', text: "Dogs'" },
      { id: 'd', text: "Dog" }
    ],
    correctAnswer: "Dog's",
    explanation: "Apostrophe S for singular possession."
  },
  {
    id: 4037,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Idioms",
    questionText: "'Piece of cake' means:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Tasty" },
      { id: 'b', text: "Easy task" }, // Correct
      { id: 'c', text: "Birthday" },
      { id: 'd', text: "Hard" }
    ],
    correctAnswer: "Easy task",
    explanation: "Idiom for something very easy."
  },
  {
    id: 4038,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Logic",
    questionText: "Find the Odd One Out.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Run" },
      { id: 'b', text: "Jump" },
      { id: 'c', text: "Fast" }, // Correct (Adjective)
      { id: 'd', text: "Swim" }
    ],
    correctAnswer: "Fast",
    explanation: "Fast is an adjective; the others are verbs."
  },
  {
    id: 4039,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Analogy",
    questionText: "Finger is to Hand as Leaf is to...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Tree" },
      { id: 'b', text: "Branch" }, // Correct
      { id: 'c', text: "Flower" },
      { id: 'd', text: "Root" }
    ],
    correctAnswer: "Branch",
    explanation: "Part-to-whole relationship."
  },
  {
    id: 4040,
    subject: Subject.ENGLISH,
    gradeLevel: 4,
    skillTag: "Alphabetical Order",
    questionText: "Sort alphabetically: Apple, Axe, Ant, Arrow.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["Apple", "Axe", "Ant", "Arrow"] },
    correctAnswer: ["Ant", "Apple", "Arrow", "Axe"],
    explanation: "Check the 2nd and 3rd letters."
  }
];

export default grade4Questions;