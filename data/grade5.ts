
import { Question, Subject, InteractionType } from '../types';

export const grade5Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  
  // 1. Place Value - Reordering Digits (Gamified)
  {
    id: 5001,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Place Value",
    questionText: "Arrange these digits to form the LARGEST possible number.",
    interactionType: InteractionType.REORDER,
    options: ["5", "9", "2", "1"],
    correctAnswer: ["9", "5", "2", "1"],
    explanation: "To make the largest number, put the biggest digits first: 9521."
  },

  // 2. Rounding - Slider (Gamified)
  {
    id: 5002,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Rounding",
    questionText: "Slide the value to round 48 to the nearest 10.",
    interactionType: InteractionType.SLIDER_INPUT,
    interactiveData: { 
        config: { min: 40, max: 60, step: 10, label: "Rounded Value" } 
    },
    correctAnswer: 50,
    explanation: "48 is closer to 50 than 40."
  },

  // 3. Money - Money Builder (Gamified)
  {
    id: 5003,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Money",
    questionText: "You buy a toy for ₹65. Use the coins to pay exactly ₹65.",
    interactionType: InteractionType.MONEY_BUILDER,
    interactiveData: { denominations: [5, 10, 20, 50] },
    correctAnswer: 65,
    explanation: "50 + 10 + 5 = 65."
  },

  // 4. Fractions - Pizza Builder (Gamified)
  {
    id: 5004,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Fractions",
    questionText: "Create a pizza that shows the fraction 3/4.",
    interactionType: InteractionType.PIZZA,
    interactiveData: { totalSlices: 4 },
    // Any 3 slices out of 4 is correct. The validator checks count.
    correctAnswer: [0, 1, 2], 
    explanation: "3 slices out of 4 represents 3/4."
  },

  // 5. Operations - Balance Scale (Gamified)
  {
    id: 5005,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Algebra Logic",
    questionText: "Balance the scale! If the left side has 15kg, how much do you need on the right?",
    interactionType: InteractionType.BALANCE,
    interactiveData: { leftWeight: 15 },
    correctAnswer: 15,
    explanation: "15kg = 15kg for balance."
  },

  // 6. Sorting - Multiples (Gamified)
  {
    id: 5006,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Multiples",
    questionText: "Sort numbers into 'Multiples of 5' and 'Not Multiples'.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [
        { id: 'yes', label: 'Multiple of 5' }, 
        { id: 'no', label: 'Not Multiple' }
      ]
    },
    options: [
      { id: 'a', text: "25", bucketId: 'yes' },
      { id: 'b', text: "12", bucketId: 'no' },
      { id: 'c', text: "40", bucketId: 'yes' },
      { id: 'd', text: "7", bucketId: 'no' }
    ],
    correctAnswer: { a: 'yes', b: 'no', c: 'yes', d: 'no' },
    explanation: "Numbers ending in 0 or 5 are multiples of 5."
  },

  // 7. Graphing - Coordinate Plotting (Gamified)
  {
    id: 5007,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Geometry",
    questionText: "Tap on the grid to plot the point (3, 2).",
    interactionType: InteractionType.GRAPH_INPUT,
    interactiveData: { gridRange: 5 },
    correctAnswer: { x: 3, y: 2 },
    explanation: "Go right 3, go up 2."
  },

  // 8. Geometry - Shapes (Gamified Sorter)
  {
    id: 5008,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Shapes",
    questionText: "Sort shapes into 2D (Flat) and 3D (Solid).",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: '2d', label: '2D Shapes' }, { id: '3d', label: '3D Shapes' }]
    },
    options: [
      { id: 'sq', text: "Square", bucketId: '2d' },
      { id: 'cube', text: "Cube", bucketId: '3d' },
      { id: 'tri', text: "Triangle", bucketId: '2d' },
      { id: 'sph', text: "Sphere", bucketId: '3d' }
    ],
    correctAnswer: { sq: '2d', cube: '3d', tri: '2d', sph: '3d' },
    explanation: "2D shapes are flat. 3D shapes have volume."
  },

  // 9. Time - Slider (Gamified)
  {
    id: 5009,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Time",
    questionText: "How many minutes are in 2 hours? Use the slider.",
    interactionType: InteractionType.SLIDER_INPUT,
    interactiveData: { 
        config: { min: 0, max: 200, step: 10, label: "Minutes" } 
    },
    correctAnswer: 120,
    explanation: "60 minutes x 2 = 120 minutes."
  },

  // 10. Area - Object Count (Gamified)
  {
    id: 5010,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Area",
    questionText: "If each square is 1 unit, select 6 squares to show Area = 6.",
    interactionType: InteractionType.OBJECT_COUNT,
    interactiveData: { total: 12, visual: '🟦' },
    // Any combination of 6 selected items is correct
    correctAnswer: 6, // The validator handles number matching for Object Count if passing number
    explanation: "Area is the number of unit squares covered."
  },

  // 11. Roman Numerals - Tap Select (Visual)
  {
    id: 5011,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Roman Numerals",
    questionText: "Which symbol represents 50?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
        { id: 'l', text: "L", visual: "L" },
        { id: 'v', text: "V", visual: "V" },
        { id: 'x', text: "X", visual: "X" },
        { id: 'c', text: "C", visual: "C" }
    ],
    correctAnswer: "l",
    explanation: "L = 50, C = 100, D = 500, M = 1000."
  },

  // 12. Patterns - Reorder
  {
    id: 5012,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Patterns",
    questionText: "Complete the pattern: 20, 25, 30, ...",
    interactionType: InteractionType.REORDER,
    options: ["30", "40", "25", "35"],
    correctAnswer: ["25", "30", "35", "40"],
    explanation: "Skip counting by 5."
  },

  // 13. Operations - Calculator (Gamified)
  {
    id: 5013,
    subject: Subject.MATH,
    gradeLevel: 5,
    skillTag: "Calculation",
    questionText: "Calculate: 25 x 5",
    interactionType: InteractionType.CALCULATOR,
    correctAnswer: "125",
    explanation: "25 times 5 is 125."
  },

  // ================= SCIENCE (13 Questions) =================

  // 14. Plant Parts - Anatomy (Gamified)
  {
    id: 5014,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Plant Biology",
    questionText: "Drag the labels to the correct parts of the plant.",
    interactionType: InteractionType.ANATOMY,
    interactiveData: {
        imageUrl: "https://cdn-icons-png.flaticon.com/512/628/628283.png", // Simple tree icon
        items: [
            { id: 'leaf', label: 'Leaf', x: 20, y: 40 },
            { id: 'root', label: 'Root', x: 50, y: 90 },
            { id: 'stem', label: 'Stem', x: 50, y: 70 }
        ]
    },
    correctAnswer: ['leaf', 'root', 'stem'],
    explanation: "Roots are at the bottom, leaves on branches."
  },

  // 15. States of Matter - Sorter (Gamified)
  {
    id: 5015,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Matter",
    questionText: "Sort these items into Solid, Liquid, or Gas.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [
          { id: 'solid', label: 'Solid' }, 
          { id: 'liquid', label: 'Liquid' },
          { id: 'gas', label: 'Gas' }
      ]
    },
    options: [
      { id: 'rock', text: "Rock", bucketId: 'solid' },
      { id: 'milk', text: "Milk", bucketId: 'liquid' },
      { id: 'steam', text: "Steam", bucketId: 'gas' },
      { id: 'ice', text: "Ice Cube", bucketId: 'solid' }
    ],
    correctAnswer: { rock: 'solid', milk: 'liquid', steam: 'gas', ice: 'solid' },
    explanation: "Solids keep shape, liquids flow, gases spread out."
  },

  // 16. Food Chain - Reorder (Gamified)
  {
    id: 5016,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Ecosystems",
    questionText: "Arrange the food chain in correct order.",
    interactionType: InteractionType.REORDER,
    options: ["Lion", "Grass", "Deer"],
    correctAnswer: ["Grass", "Deer", "Lion"],
    explanation: "Producer (Grass) -> Herbivore (Deer) -> Carnivore (Lion)."
  },

  // 17. Circuit - Switch (Gamified)
  {
    id: 5017,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Electricity",
    questionText: "Tap the switch to CLOSE the circuit and light the bulb.",
    interactionType: InteractionType.CIRCUIT,
    correctAnswer: { switch: 'closed' },
    explanation: "Current flows only in a closed circuit."
  },

  // 18. Living Things - Sorter
  {
    id: 5018,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Biology",
    questionText: "Sort into Living and Non-Living.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'live', label: 'Living' }, { id: 'dead', label: 'Non-Living' }]
    },
    options: [
      { id: 'tree', text: "Tree", bucketId: 'live' },
      { id: 'car', text: "Car", bucketId: 'dead' },
      { id: 'boy', text: "Boy", bucketId: 'live' },
      { id: 'rock', text: "Rock", bucketId: 'dead' }
    ],
    correctAnswer: { tree: 'live', car: 'dead', boy: 'live', rock: 'dead' },
    explanation: "Living things grow and breathe."
  },

  // 19. Water Cycle - Reorder
  {
    id: 5019,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Water Cycle",
    questionText: "Order the Water Cycle steps.",
    interactionType: InteractionType.REORDER,
    options: ["Rain", "Evaporation", "Clouds"],
    correctAnswer: ["Evaporation", "Clouds", "Rain"],
    explanation: "Sun heats water (Evaporation) -> Vapor forms clouds -> Rain falls."
  },

  // 20. Healthy Habits - Sorter
  {
    id: 5020,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Health",
    questionText: "Sort food into Healthy vs Junk.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
      categories: [{ id: 'good', label: 'Healthy' }, { id: 'bad', label: 'Junk' }]
    },
    options: [
      { id: 'apple', text: "Apple", bucketId: 'good' },
      { id: 'burger', text: "Burger", bucketId: 'bad' },
      { id: 'carrot', text: "Carrot", bucketId: 'good' },
      { id: 'soda', text: "Soda", bucketId: 'bad' }
    ],
    correctAnswer: { apple: 'good', burger: 'bad', carrot: 'good', soda: 'bad' },
    explanation: "Fruits and veg are healthy."
  },

  // 21. Magnets - Tap Select
  {
    id: 5021,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Magnetism",
    questionText: "Which object will a magnet attract?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Wood", "Iron Nail", "Plastic", "Rubber"],
    correctAnswer: "Iron Nail",
    explanation: "Magnets attract iron, nickel, and cobalt."
  },

  // 22. Solar System - Reorder
  {
    id: 5022,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Space",
    questionText: "Order planets from the Sun.",
    interactionType: InteractionType.REORDER,
    options: ["Earth", "Mercury", "Venus"],
    correctAnswer: ["Mercury", "Venus", "Earth"],
    explanation: "Mercury is closest, then Venus, then Earth."
  },

  // 23. Sink or Float - Sorter
  {
    id: 5023,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Density",
    questionText: "Will it Sink or Float in water?",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
        categories: [{ id: 'sink', label: 'Sinks' }, { id: 'float', label: 'Floats' }]
    },
    options: [
        { id: 'stone', text: "Stone", bucketId: 'sink' },
        { id: 'leaf', text: "Leaf", bucketId: 'float' },
        { id: 'coin', text: "Coin", bucketId: 'sink' },
        { id: 'boat', text: "Paper Boat", bucketId: 'float' }
    ],
    correctAnswer: { stone: 'sink', leaf: 'float', coin: 'sink', boat: 'float' },
    explanation: "Heavy items sink, light/hollow items float."
  },

  // 24. Human Body - Anatomy
  {
    id: 5024,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Human Body",
    questionText: "Label the main organs.",
    interactionType: InteractionType.ANATOMY,
    interactiveData: {
        imageUrl: "https://cdn-icons-png.flaticon.com/512/2821/2821816.png", // Body outline icon
        items: [
            { id: 'brain', label: 'Brain', x: 50, y: 15 },
            { id: 'heart', label: 'Heart', x: 55, y: 35 },
            { id: 'stomach', label: 'Stomach', x: 50, y: 55 }
        ]
    },
    correctAnswer: ['brain', 'heart', 'stomach'],
    explanation: "Brain in head, Heart in chest, Stomach in abdomen."
  },

  // 25. Forces - Tap Select
  {
    id: 5025,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Forces",
    questionText: "Friction helps us to:",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Fly", "Walk without slipping", "Swim", "Float"],
    correctAnswer: "Walk without slipping",
    explanation: "Friction provides grip."
  },

  // 26. Shadows - Tap Select
  {
    id: 5026,
    subject: Subject.SCIENCE,
    gradeLevel: 5,
    skillTag: "Light",
    questionText: "If the Sun is on the LEFT, where is the Shadow?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Left", "Right", "Above", "Nowhere"],
    correctAnswer: "Right",
    explanation: "Shadows form opposite to the light source."
  },

  // ================= ENGLISH (14 Questions) =================

  // 27. Sentence Structure - Reorder (Gamified)
  {
    id: 5027,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Syntax",
    questionText: "Unscramble the sentence.",
    interactionType: InteractionType.REORDER,
    options: ["is", "sky", "The", "blue"],
    correctAnswer: ["The", "sky", "is", "blue"],
    explanation: "Subject (The sky) + Verb (is) + Adjective (blue)."
  },

  // 28. Parts of Speech - Word Select (Gamified)
  {
    id: 5028,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Nouns",
    questionText: "Tap all the NOUNS (Naming words) in the sentence.",
    interactionType: InteractionType.WORD_SELECT,
    questionMeta: { wordSelectSentence: "The cat sat on the mat." },
    correctAnswer: ["cat", "mat"],
    explanation: "Cat and Mat are things."
  },

  // 29. Verbs - Word Select (Gamified)
  {
    id: 5029,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Verbs",
    questionText: "Tap the VERB (Action word).",
    interactionType: InteractionType.WORD_SELECT,
    questionMeta: { wordSelectSentence: "She runs very fast." },
    correctAnswer: ["runs"],
    explanation: "Runs is the action."
  },

  // 30. Sorting Words - Categorize (Gamified)
  {
    id: 5030,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Parts of Speech",
    questionText: "Sort words into Nouns and Verbs.",
    interactionType: InteractionType.CATEGORIZE,
    categories: [
        { id: 'noun', label: 'Noun' },
        { id: 'verb', label: 'Verb' }
    ],
    options: [
        { id: '1', text: "Dog" },
        { id: '2', text: "Jump" },
        { id: '3', text: "Apple" },
        { id: '4', text: "Sleep" }
    ],
    correctAnswer: { '1': 'noun', '2': 'verb', '3': 'noun', '4': 'verb' },
    explanation: "Dog/Apple are things. Jump/Sleep are actions."
  },

  // 31. Antonyms - Sorter
  {
    id: 5031,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Vocabulary",
    questionText: "Match words to 'Happy' or 'Sad' meanings.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
        categories: [{ id: 'pos', label: 'Happy Words' }, { id: 'neg', label: 'Sad Words' }]
    },
    options: [
        { id: 'joy', text: "Joyful", bucketId: 'pos' },
        { id: 'gloomy', text: "Gloomy", bucketId: 'neg' },
        { id: 'glad', text: "Glad", bucketId: 'pos' },
        { id: 'upset', text: "Upset", bucketId: 'neg' }
    ],
    correctAnswer: { joy: 'pos', gloomy: 'neg', glad: 'pos', upset: 'neg' },
    explanation: "Grouping synonyms."
  },

  // 32. Articles - Drag to Slot (Gamified)
  {
    id: 5032,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Articles",
    questionText: "He is ___ honest man.",
    interactionType: InteractionType.DRAG_TO_SLOTS,
    options: [
        { id: 'a', text: "a" },
        { id: 'an', text: "an" },
        { id: 'the', text: "the" }
    ],
    correctAnswer: { id: 'an', text: 'an' },
    explanation: "'Honest' starts with a vowel sound (O)."
  },

  // 33. Alphabetical Order - Reorder
  {
    id: 5033,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Alphabetical Order",
    questionText: "Arrange in dictionary order.",
    interactionType: InteractionType.REORDER,
    options: ["Banana", "Apple", "Cherry"],
    correctAnswer: ["Apple", "Banana", "Cherry"],
    explanation: "A, B, C."
  },

  // 34. Tenses - Sorter
  {
    id: 5034,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Tenses",
    questionText: "Sort into Past and Present.",
    interactionType: InteractionType.SORTER_BUCKET,
    interactiveData: {
        categories: [{ id: 'past', label: 'Past' }, { id: 'pres', label: 'Present' }]
    },
    options: [
        { id: 'went', text: "Went", bucketId: 'past' },
        { id: 'go', text: "Go", bucketId: 'pres' },
        { id: 'saw', text: "Saw", bucketId: 'past' },
        { id: 'see', text: "See", bucketId: 'pres' }
    ],
    correctAnswer: { went: 'past', go: 'pres', saw: 'past', see: 'pres' },
    explanation: "Verb forms check."
  },

  // 35. Prepositions - Tap Select
  {
    id: 5035,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Prepositions",
    questionText: "The book is ___ the table.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["In", "On", "At", "To"],
    correctAnswer: "On",
    explanation: "Surface contact."
  },

  // 36. Spelling - Tap Select
  {
    id: 5036,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Spelling",
    questionText: "Choose the correct spelling.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Vacation", "Vacasion", "Vocation", "Vacasian"],
    correctAnswer: "Vacation",
    explanation: "V-A-C-A-T-I-O-N."
  },

  // 37. Adjectives - Word Select
  {
    id: 5037,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Adjectives",
    questionText: "Tap the adjective describing the ball.",
    interactionType: InteractionType.WORD_SELECT,
    questionMeta: { wordSelectSentence: "It is a red ball." },
    correctAnswer: ["red"],
    explanation: "Red describes the noun Ball."
  },

  // 38. Plurals - Tap Select
  {
    id: 5038,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Plurals",
    questionText: "One Child, Two ___?",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Childs", "Children", "Childrens", "Childes"],
    correctAnswer: "Children",
    explanation: "Irregular plural."
  },

  // 39. Homophones - Tap Select
  {
    id: 5039,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Homophones",
    questionText: "I ___ with my eyes.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["Sea", "See", "Si", "Cee"],
    correctAnswer: "See",
    explanation: "Vision verb."
  },

  // 40. Conjunctions - Tap Select
  {
    id: 5040,
    subject: Subject.ENGLISH,
    gradeLevel: 5,
    skillTag: "Conjunctions",
    questionText: "I like tea ___ I don't like coffee.",
    interactionType: InteractionType.TAP_SELECT,
    options: ["And", "But", "So", "Or"],
    correctAnswer: "But",
    explanation: "Contrasting ideas."
  }
];

export default grade5Questions;
