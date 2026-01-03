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
    options: ["5", "50", "3", "53"],
    correctAnswer: "50",
    explanation: "In 53, the 5 is in the Tens place."
  },
  {
    id: 3002,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Pattern Recognition",
    questionText: "Which number comes next: 2, 4, 6, 8, ...?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["9", "10", "12", "11"],
    correctAnswer: "10",
    explanation: "Skip counting by 2."
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
    explanation: "12 - 4 = 8."
  },
  {
    id: 3004,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Geometry",
    questionText: "Which shape has 3 corners?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Square", "Circle", "Triangle", "Rectangle"],
    correctAnswer: "Triangle",
    explanation: "Triangles have 3 sides and 3 corners."
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
    explanation: "5 + 5 + 5 = 15."
  },
  {
    id: 3006,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Measurement",
    questionText: "Which object is the heaviest?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Feather", "Pencil", "Car", "Shoe"],
    correctAnswer: "Car",
    explanation: "A car has the most mass."
  },
  {
    id: 3007,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Comparing Numbers",
    questionText: "Identify the smallest number.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["98", "23", "101", "45"],
    correctAnswer: "23",
    explanation: "23 is less than the others."
  },
  {
    id: 3008,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Time Sequencing",
    questionText: "If today is Monday, what day is tomorrow?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Sunday", "Tuesday", "Wednesday", "Friday"],
    correctAnswer: "Tuesday",
    explanation: "Order of days."
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
    explanation: "Use the ruler markings."
  },
  {
    id: 3010,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Simple Division",
    questionText: "Share 8 candies between 2 friends equally.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["2", "4", "6", "8"],
    correctAnswer: "4",
    explanation: "8 divided by 2 is 4."
  },
  {
    id: 3011,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Number Names",
    questionText: "Which is the number 'Fifteen'?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["5", "50", "15", "51"],
    correctAnswer: "15",
    explanation: "15 is Fifteen."
  },
  {
    id: 3012,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Time Reading",
    questionText: "Which clock shows 3:00?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Small: 12, Big: 3", "Small: 3, Big: 12", "Both on 3", "Small: 3, Big: 6"],
    correctAnswer: "Small: 3, Big: 12",
    explanation: "Hour hand on 3, Minute hand on 12."
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
    explanation: "Odd ends in 1,3,5,7,9."
  },
  {
    id: 3014,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Shapes",
    questionText: "A ball is which shape?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Circle", "Square", "Sphere", "Cube"],
    correctAnswer: "Sphere",
    explanation: "3D round shape is a Sphere."
  },
  {
    id: 3015,
    subject: Subject.MATH,
    gradeLevel: 3,
    skillTag: "Reverse Counting",
    questionText: "100 - 1 = ?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["90", "99", "101", "110"],
    correctAnswer: "99",
    explanation: "Number before 100."
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
    explanation: "Living things grow."
  },
  {
    id: 3017,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Senses",
    questionText: "What do we use our nose for?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Seeing", "Hearing", "Smelling", "Tasting"],
    correctAnswer: "Smelling",
    explanation: "Sense of smell."
  },
  {
    id: 3018,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Diet",
    questionText: "Which animal eats only plants?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Lion", "Cow", "Dog", "Tiger"],
    correctAnswer: "Cow",
    explanation: "Herbivores eat plants."
  },
  {
    id: 3019,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Habitats",
    questionText: "Which animal lives in a Nest?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Bird", "Lion", "Cow", "Fish"],
    correctAnswer: "Bird",
    explanation: "Birds build nests."
  },
  {
    id: 3020,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Plant Needs",
    questionText: "What does a plant need to grow?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Ice Cream", "Sunlight & Water", "Toys", "Darkness"],
    correctAnswer: "Sunlight & Water",
    explanation: "Photosynthesis needs sun and water."
  },
  {
    id: 3021,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Water",
    questionText: "Which is a source of water?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Mountain", "River", "Road", "Desert"],
    correctAnswer: "River",
    explanation: "Rivers contain fresh water."
  },
  {
    id: 3022,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Seasons",
    questionText: "We wear woollen clothes in:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Summer", "Winter", "Rainy", "Spring"],
    correctAnswer: "Winter",
    explanation: "To keep warm."
  },
  {
    id: 3023,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Animals",
    questionText: "Which is a Wild Animal?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Dog", "Tiger", "Cow", "Hen"],
    correctAnswer: "Tiger",
    explanation: "Tigers live in the jungle."
  },
  {
    id: 3024,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Plants",
    questionText: "Part of plant under the ground:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Leaf", "Flower", "Root", "Stem"],
    correctAnswer: "Root",
    explanation: "Roots absorb water underground."
  },
  {
    id: 3025,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Safety",
    questionText: "Traffic light to STOP:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Green", "Yellow", "Red", "Blue"],
    correctAnswer: "Red",
    explanation: "Red means stop."
  },
  {
    id: 3026,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Matter",
    questionText: "Ice is water in which form?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Gas", "Solid", "Liquid", "Vapor"],
    correctAnswer: "Solid",
    explanation: "Frozen water is solid."
  },
  {
    id: 3027,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Weather",
    questionText: "Rain comes from:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Sun", "Clouds", "Moon", "Stars"],
    correctAnswer: "Clouds",
    explanation: "Water vapor condenses in clouds."
  },
  {
    id: 3028,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Health",
    questionText: "Which food is Healthy?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Fruits", "Chips", "Soda", "Candy"],
    correctAnswer: "Fruits",
    explanation: "Fruits have vitamins."
  },
  {
    id: 3029,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Human Body",
    questionText: "We chew food with our:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Nose", "Teeth", "Ears", "Eyes"],
    correctAnswer: "Teeth",
    explanation: "Teeth grind food."
  },
  {
    id: 3030,
    subject: Subject.SCIENCE,
    gradeLevel: 3,
    skillTag: "Colors",
    questionText: "What is the color of a leaf?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Blue", "Red", "Green", "Black"],
    correctAnswer: "Green",
    explanation: "Chlorophyll makes leaves green."
  },

  // ================= ENGLISH =================
  {
    id: 3031,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Plurals",
    questionText: "Plural: One Cat, Two...",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Cates", "Cats", "Cat", "Kittens"],
    correctAnswer: "Cats",
    explanation: "Add 's'."
  },
  {
    id: 3032,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Verbs",
    questionText: "Find the Verb (Action word).",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Boy", "Run", "Big", "Table"],
    correctAnswer: "Run",
    explanation: "Running is an action."
  },
  {
    id: 3033,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Prepositions",
    questionText: "The book is ___ the table.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["In", "On", "At", "To"],
    correctAnswer: "On",
    explanation: "Surface contact."
  },
  {
    id: 3034,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Antonyms",
    questionText: "Opposite of Hot is:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Cold", "Big", "Small", "Wet"],
    correctAnswer: "Cold",
    explanation: "Direct opposite."
  },
  {
    id: 3035,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Spelling",
    questionText: "Correct spelling:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Scool", "School", "Skool", "Shool"],
    correctAnswer: "School",
    explanation: "S-C-H-O-O-L."
  },
  {
    id: 3036,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Grammar",
    questionText: "She ___ playing.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["is", "are", "am", "were"],
    correctAnswer: "is",
    explanation: "Singular subject takes 'is'."
  },
  {
    id: 3037,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Adjectives",
    questionText: "Which word describes color?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Circle", "Blue", "Loud", "Soft"],
    correctAnswer: "Blue",
    explanation: "Blue is an adjective."
  },
  {
    id: 3038,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Pronouns",
    questionText: "___ am a good boy.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["He", "I", "You", "They"],
    correctAnswer: "I",
    explanation: "'I' goes with 'am'."
  },
  {
    id: 3039,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Articles",
    questionText: "I saw ___ elephant.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["A", "An", "The", "Two"],
    correctAnswer: "An",
    explanation: "Vowel sound uses 'An'."
  },
  {
    id: 3040,
    subject: Subject.ENGLISH,
    gradeLevel: 3,
    skillTag: "Syntax",
    questionText: "Arrange words: sky / The / blue / is",
    interactionType: InteractionType.REORDER,
    // --- FIX: ADDED options ARRAY ---
    options: ["The", "sky", "is", "blue"],
    correctAnswer: ["The", "sky", "is", "blue"],
    explanation: "Subject + Verb + Adjective."
  }
];

export default grade3Questions;