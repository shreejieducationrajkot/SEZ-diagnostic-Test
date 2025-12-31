import { Question, Subject, InteractionType } from '../types';

export const grade3Questions: Question[] = [
  // ================= MATHEMATICS =================
  {
    id: 3001,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Place Value",
    questionText: "What is the value of the digit 5 in the number 53?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "5" },
      { id: 'b', text: "50" },
      { id: 'c', text: "3" },
      { id: 'd', text: "53" }
    ],
    correctAnswer: "50",
    explanation: "In 53, the 5 is in the Tens place.",
    resourceId: 'MATH_PLACE_VALUE' // <--- Mapped
  },
  {
    id: 3002,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Pattern Recognition",
    questionText: "Which number comes next: 2, 4, 6, 8, ...?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "9" },
      { id: 'b', text: "10" },
      { id: 'c', text: "12" },
      { id: 'd', text: "11" }
    ],
    correctAnswer: "10",
    explanation: "Skip counting by 2.",
    resourceId: 'MATH_PATTERNS' // <--- Mapped
  },
  {
    id: 3003,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Subtraction",
    questionText: "Rahul has 12 apples. He gives 4 away. Tap 4 apples to remove them.",
    interactionType: InteractionType.OBJECT_COUNT,
    interactiveData: { visual: "🍎", total: 12, mode: "subtraction" },
    correctAnswer: 4,
    explanation: "12 - 4 = 8.",
    resourceId: 'MATH_SUBTRACTION_APP' // <--- Mapped
  },
  {
    id: 3004,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Geometry",
    questionText: "Which shape has 3 corners?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Square" },
      { id: 'b', text: "Circle" },
      { id: 'c', text: "Triangle" },
      { id: 'd', text: "Rectangle" }
    ],
    correctAnswer: "Triangle",
    explanation: "Triangles have 3 sides and 3 corners.",
    resourceId: 'MATH_GEOMETRY_SHAPES' // <--- Mapped
  },
  {
    id: 3005,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Money",
    questionText: "I have 3 coins of 5 Rupees. Use the wallet to show the total.",
    interactionType: InteractionType.MONEY_BUILDER,
    interactiveData: { denominations: [1, 2, 5, 10] },
    correctAnswer: 15,
    explanation: "5 + 5 + 5 = 15.",
    resourceId: 'MATH_MONEY' // <--- Mapped
  },
  {
    id: 3006,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Measurement",
    questionText: "Which object is the heaviest?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Feather" },
      { id: 'b', text: "Pencil" },
      { id: 'c', text: "Car" },
      { id: 'd', text: "Shoe" }
    ],
    correctAnswer: "Car",
    explanation: "A car has the most mass.",
    resourceId: 'MATH_MEASUREMENT' // <--- Mapped
  },
  {
    id: 3007,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Comparing Numbers",
    questionText: "Identify the smallest number.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "98" },
      { id: 'b', text: "23" },
      { id: 'c', text: "101" },
      { id: 'd', text: "45" }
    ],
    correctAnswer: "23",
    explanation: "23 is less than the others.",
    resourceId: 'MATH_COMPARE_NUMBERS' // <--- Mapped
  },
  {
    id: 3008,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Time Sequencing",
    questionText: "If today is Monday, what day is tomorrow?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Sunday" },
      { id: 'b', text: "Tuesday" },
      { id: 'c', text: "Wednesday" },
      { id: 'd', text: "Friday" }
    ],
    correctAnswer: "Tuesday",
    explanation: "Order of days.",
    resourceId: 'MATH_TIME_SEQ' // <--- Mapped
  },
  {
    id: 3009,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Measurement Tools",
    questionText: "Drag the slider to 15 cm.",
    interactionType: InteractionType.SLIDER_INPUT,
    interactiveData: { config: { min: 0, max: 30, step: 1, label: "cm" } },
    correctAnswer: 15,
    explanation: "Use the ruler markings.",
    resourceId: 'MATH_TOOLS' // <--- Mapped
  },
  {
    id: 3012,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Time Reading",
    questionText: "Which clock shows 3:00?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Small: 12, Big: 3" },
      { id: 'b', text: "Small: 3, Big: 12" },
      { id: 'c', text: "Both on 3" },
      { id: 'd', text: "Small: 3, Big: 6" }
    ],
    correctAnswer: "Small: 3, Big: 12",
    explanation: "Hour hand on 3, Minute hand on 12.",
    resourceId: 'MATH_CLOCKS' // <--- Mapped
  },
  {
    id: 3013,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Odd/Even",
    questionText: "Sort into Odd and Even.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: { categories: [{ id: 'odd', label: 'Odd' }, { id: 'even', label: 'Even' }] },
    options: [
      { id: 'a', text: "2", bucketId: 'even' },
      { id: 'b', text: "7", bucketId: 'odd' },
      { id: 'c', text: "10", bucketId: 'even' },
      { id: 'd', text: "9", bucketId: 'odd' }
    ],
    correctAnswer: { a: 'even', b: 'odd', c: 'even', d: 'odd' },
    explanation: "Odd ends in 1,3,5,7,9.",
    resourceId: 'MATH_ODD_EVEN' // <--- Mapped
  },
  {
    id: 3015,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Reverse Counting",
    questionText: "100 - 1 = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
        { id: 'a', text: "90" }, { id: 'b', text: "99" }, { id: 'c', text: "101" }, { id: 'd', text: "110" }
    ],
    correctAnswer: "99",
    explanation: "Number before 100.",
    resourceId: 'MATH_REVERSE_COUNT' // <--- Mapped
  },

  // ================= SCIENCE =================
  {
    id: 3016,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Living Things",
    questionText: "Sort into Living and Non-Living.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: { categories: [{ id: 'living', label: 'Living' }, { id: 'non', label: 'Non-Living' }] },
    options: [
      { id: 'tree', text: "Tree", bucketId: 'living' },
      { id: 'car', text: "Car", bucketId: 'non' },
      { id: 'bear', text: "Teddy Bear", bucketId: 'non' },
      { id: 'cat', text: "Cat", bucketId: 'living' }
    ],
    correctAnswer: { tree: 'living', car: 'non', bear: 'non', cat: 'living' },
    explanation: "Living things grow.",
    resourceId: 'SCI_LIVING_THINGS' // <--- Mapped
  },
  {
    id: 3017,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Senses",
    questionText: "What do we use our nose for?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Seeing" },
      { id: 'b', text: "Hearing" },
      { id: 'c', text: "Smelling" },
      { id: 'd', text: "Tasting" }
    ],
    correctAnswer: "Smelling",
    explanation: "Sense of smell.",
    resourceId: 'SCI_SENSES' // <--- Mapped
  },
  {
    id: 3018,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Diet",
    questionText: "Which animal eats only plants?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Lion" },
      { id: 'b', text: "Cow" },
      { id: 'c', text: "Dog" },
      { id: 'd', text: "Tiger" }
    ],
    correctAnswer: "Cow",
    explanation: "Herbivores eat plants.",
    resourceId: 'SCI_FOOD_CHAIN' // <--- Mapped
  },
  {
    id: 3019,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Habitats",
    questionText: "Match animal to home.",
    interactionType: InteractionType.TAP_SELECT, // Changed to TAP for simplicity, or use Matching View
    options: [
        { id: 'a', text: "Bird - Den" },
        { id: 'b', text: "Bird - Nest" },
        { id: 'c', text: "Lion - Coop" },
        { id: 'd', text: "Cow - Water" }
    ],
    correctAnswer: "Bird - Nest",
    explanation: "Birds build nests.",
    resourceId: 'SCI_HABITATS' // <--- Mapped
  },
  {
    id: 3020,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Plant Needs",
    questionText: "What does a plant need to grow?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Ice Cream" },
      { id: 'b', text: "Sunlight & Water" },
      { id: 'c', text: "Toys" },
      { id: 'd', text: "Darkness" }
    ],
    correctAnswer: "Sunlight & Water",
    explanation: "Photosynthesis needs sun and water.",
    resourceId: 'SCI_PLANT_NEEDS' // <--- Mapped
  },
  {
    id: 3021,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Water",
    questionText: "Which is a source of water?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Mountain" },
      { id: 'b', text: "River" },
      { id: 'c', text: "Road" },
      { id: 'd', text: "Desert" }
    ],
    correctAnswer: "River",
    explanation: "Rivers contain fresh water.",
    resourceId: 'SCI_WATER_SOURCES' // <--- Mapped
  },
  {
    id: 3022,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Seasons",
    questionText: "We wear woollen clothes in:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Summer" },
      { id: 'b', text: "Winter" },
      { id: 'c', text: "Rainy" },
      { id: 'd', text: "Spring" }
    ],
    correctAnswer: "Winter",
    explanation: "To keep warm.",
    resourceId: 'SCI_SEASONS' // <--- Mapped
  },
  {
    id: 3023,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Animals",
    questionText: "Which is a Wild Animal?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
        { id: 'a', text: "Dog" }, { id: 'b', text: "Tiger" }, { id: 'c', text: "Cow" }, { id: 'd', text: "Hen" }
    ],
    correctAnswer: "Tiger",
    explanation: "Tigers live in the jungle.",
    resourceId: 'SCI_ANIMAL_TYPES' // <--- Mapped
  },
  {
    id: 3024,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Plants",
    questionText: "Part of plant under the ground:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
        { id: 'a', text: "Leaf" }, { id: 'b', text: "Flower" }, { id: 'c', text: "Root" }, { id: 'd', text: "Stem" }
    ],
    correctAnswer: "Root",
    explanation: "Roots absorb water underground.",
    resourceId: 'SCI_PLANT_PARTS' // <--- Mapped
  },
  {
    id: 3025,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Safety",
    questionText: "Traffic light to STOP:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
        { id: 'a', text: "Green" }, { id: 'b', text: "Yellow" }, { id: 'c', text: "Red" }, { id: 'd', text: "Blue" }
    ],
    correctAnswer: "Red",
    explanation: "Red means stop.",
    resourceId: 'SCI_SAFETY' // <--- Mapped
  },
  {
    id: 3026,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Matter",
    questionText: "Ice is water in which form?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Gas" },
      { id: 'b', text: "Solid" },
      { id: 'c', text: "Liquid" },
      { id: 'd', text: "Vapor" }
    ],
    correctAnswer: "Solid",
    explanation: "Frozen water is solid.",
    resourceId: 'SCI_STATES_MATTER' // <--- Mapped
  },
  {
    id: 3028,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Health",
    questionText: "Which food is Healthy?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Fruits" },
      { id: 'b', text: "Chips" },
      { id: 'c', text: "Soda" },
      { id: 'd', text: "Candy" }
    ],
    correctAnswer: "Fruits",
    explanation: "Fruits have vitamins.",
    resourceId: 'SCI_HEALTHY_HABITS' // <--- Mapped
  },

  // ================= ENGLISH =================
  {
    id: 3031,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Plurals",
    questionText: "Plural: One Cat, Two...",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Cates" },
      { id: 'b', text: "Cats" },
      { id: 'c', text: "Cat" },
      { id: 'd', text: "Kittens" }
    ],
    correctAnswer: "Cats",
    explanation: "Add 's'.",
    resourceId: 'ENG_PLURALS' // <--- Mapped
  },
  {
    id: 3032,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Verbs",
    questionText: "Find the Verb (Action word).",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Boy" },
      { id: 'b', text: "Run" },
      { id: 'c', text: "Big" },
      { id: 'd', text: "Table" }
    ],
    correctAnswer: "Run",
    explanation: "Running is an action.",
    resourceId: 'ENG_VERBS' // <--- Mapped
  },
  {
    id: 3033,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Prepositions",
    questionText: "The book is ___ the table.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "In" },
      { id: 'b', text: "On" },
      { id: 'c', text: "At" },
      { id: 'd', text: "To" }
    ],
    correctAnswer: "On",
    explanation: "Surface contact.",
    resourceId: 'ENG_PREPOSITIONS' // <--- Mapped
  },
  {
    id: 3034,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Antonyms",
    questionText: "Opposite of Hot is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Cold" },
      { id: 'b', text: "Big" },
      { id: 'c', text: "Small" },
      { id: 'd', text: "Wet" }
    ],
    correctAnswer: "Cold",
    explanation: "Direct opposite.",
    resourceId: 'ENG_ANTONYMS' // <--- Mapped
  },
  {
    id: 3035,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Spelling",
    questionText: "Correct spelling:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Scool" },
      { id: 'b', text: "School" },
      { id: 'c', text: "Skool" },
      { id: 'd', text: "Shool" }
    ],
    correctAnswer: "School",
    explanation: "S-C-H-O-O-L.",
    resourceId: 'ENG_SPELLING' // <--- Mapped
  },
  {
    id: 3036,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Grammar",
    questionText: "She ___ playing.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "is" },
      { id: 'b', text: "are" },
      { id: 'c', text: "am" },
      { id: 'd', text: "were" }
    ],
    correctAnswer: "is",
    explanation: "Singular subject takes 'is'.",
    resourceId: 'ENG_GRAMMAR_FLOW' // <--- Mapped
  },
  {
    id: 3037,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Adjectives",
    questionText: "Which word describes color?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Circle" },
      { id: 'b', text: "Blue" },
      { id: 'c', text: "Loud" },
      { id: 'd', text: "Soft" }
    ],
    correctAnswer: "Blue",
    explanation: "Blue is an adjective.",
    resourceId: 'ENG_ADJECTIVES' // <--- Mapped
  },
  {
    id: 3039,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Articles",
    questionText: "I saw ___ elephant.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "A" },
      { id: 'b', text: "An" },
      { id: 'c', text: "The" },
      { id: 'd', text: "Two" }
    ],
    correctAnswer: "An",
    explanation: "Vowel sound uses 'An'.",
    resourceId: 'ENG_ARTICLES' // <--- Mapped
  },
  {
    id: 3040,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Syntax",
    questionText: "Arrange words: sky / The / blue / is",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["The", "sky", "is", "blue"] },
    correctAnswer: ["The", "sky", "is", "blue"],
    explanation: "Subject + Verb + Adjective.",
    resourceId: 'ENG_SYNTAX' // <--- Mapped
  }
];

export default grade3Questions;