import { Platform } from '../types';

// We define a simple type for resources locally or import from types
export interface LearningResource {
  id: string;
  topic: string;
  platform: Platform;
  url: string;
  label: string;
}

export const LEARNING_RESOURCES: Record<string, LearningResource> = {
  'MATH_PLACE_VALUE': {
    id: 'MATH_PLACE_VALUE',
    topic: 'Place Value',
    platform: Platform.KHAN_ACADEMY,
    url: 'https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-place-value',
    label: 'Practice Place Value'
  },
  'MATH_PATTERNS': {
    id: 'MATH_PATTERNS',
    topic: 'Pattern Recognition',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/math/grade-2/number-patterns',
    label: 'Solve Number Patterns'
  },
  'MATH_SUBTRACTION_APP': {
    id: 'MATH_SUBTRACTION_APP',
    topic: 'Real World Subtraction',
    platform: Platform.PRODIGY,
    url: 'https://www.prodigygame.com/main/math/',
    label: 'Math Adventure Game'
  },
  'MATH_GEOMETRY_SHAPES': {
    id: 'MATH_GEOMETRY_SHAPES',
    topic: 'Geometry Properties',
    platform: Platform.KHAN_ACADEMY,
    url: 'https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-geometry',
    label: 'Identify Shapes'
  },
  'MATH_MENTAL_MATH': {
    id: 'MATH_MENTAL_MATH',
    topic: 'Mental Math (Regrouping)',
    platform: Platform.QUIZIZZ,
    url: 'https://quizizz.com/admin/quiz/math/addition-regrouping',
    label: 'Speed Math Challenge'
  },
  'MATH_MEASUREMENT': {
    id: 'MATH_MEASUREMENT',
    topic: 'Measurement & Mass',
    platform: Platform.PHET,
    url: 'https://phet.colorado.edu/en/simulation/balancing-act',
    label: 'Balancing Act Simulation'
  },
  'MATH_COMPARE_NUMBERS': {
    id: 'MATH_COMPARE_NUMBERS',
    topic: 'Comparing Numbers',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/math/grade-2/compare-numbers',
    label: 'Compare Values'
  },
  'MATH_TIME_SEQ': {
    id: 'MATH_TIME_SEQ',
    topic: 'Time Sequencing',
    platform: Platform.QUIZLET,
    url: 'https://quizlet.com/subject/days-of-the-week/',
    label: 'Days of the Week Flashcards'
  },
  'MATH_TOOLS': {
    id: 'MATH_TOOLS',
    topic: 'Measurement Tools',
    platform: Platform.KHAN_ACADEMY,
    url: 'https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-measurement-data',
    label: 'Using a Ruler'
  },
  'MATH_NUM_REP': {
    id: 'MATH_NUM_REP',
    topic: 'Number Words',
    platform: Platform.DUOLINGO,
    url: 'https://www.duolingo.com/math',
    label: 'Number Words Practice'
  },
  'MATH_MONEY': {
    id: 'MATH_MONEY',
    topic: 'Money & Multiplication',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/math/grade-2/count-money',
    label: 'Counting Coins'
  },
  'MATH_CLOCKS': {
    id: 'MATH_CLOCKS',
    topic: 'Reading Clocks',
    platform: Platform.PHET,
    url: 'https://phet.colorado.edu/en/simulation/arithmetic',
    label: 'Clock Simulation'
  },
  'MATH_ODD_EVEN': {
    id: 'MATH_ODD_EVEN',
    topic: 'Odd and Even Numbers',
    platform: Platform.KAHOOT,
    url: 'https://kahoot.com/explore/collections/math-trivia/',
    label: 'Odd vs Even Quiz'
  },
  'MATH_REVERSE_COUNT': {
    id: 'MATH_REVERSE_COUNT',
    topic: 'Reverse Counting',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/math/grade-2/subtract-numbers',
    label: 'Counting Backwards'
  },

  // --- SCIENCE INTERACTIONS ---
  'SCI_LIVING_THINGS': {
    id: 'SCI_LIVING_THINGS',
    topic: 'Living vs Non-Living',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/science/grade-2/living-and-nonliving-things',
    label: 'Sort Living Things'
  },
  'SCI_SENSES': {
    id: 'SCI_SENSES',
    topic: 'The Five Senses',
    platform: Platform.KAHOOT,
    url: 'https://kahoot.com/quizzes/science/',
    label: 'Senses Quiz'
  },
  'SCI_FOOD_CHAIN': {
    id: 'SCI_FOOD_CHAIN',
    topic: 'Herbivores & Carnivores',
    platform: Platform.QUIZIZZ,
    url: 'https://quizizz.com/admin/science/animals',
    label: 'Animal Diet Challenge'
  },
  'SCI_HABITATS': {
    id: 'SCI_HABITATS',
    topic: 'Animal Habitats',
    platform: Platform.QUIZLET,
    url: 'https://quizlet.com/subject/animal-habitats/',
    label: 'Match Homes to Animals'
  },
  'SCI_PLANT_NEEDS': {
    id: 'SCI_PLANT_NEEDS',
    topic: 'Plant Needs',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/science/grade-2/plants',
    label: 'Grow a Plant'
  },
  'SCI_WATER_SOURCES': {
    id: 'SCI_WATER_SOURCES',
    topic: 'Water Sources',
    platform: Platform.KAHOOT,
    url: 'https://kahoot.com/',
    label: 'Water Quiz'
  },
  'SCI_SEASONS': {
    id: 'SCI_SEASONS',
    topic: 'Seasons & Clothing',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/science/grade-2/seasons',
    label: 'Dress for the Weather'
  },
  'SCI_ANIMAL_TYPES': {
    id: 'SCI_ANIMAL_TYPES',
    topic: 'Wild vs Domestic',
    platform: Platform.QUIZLET,
    url: 'https://quizlet.com/subject/animals/',
    label: 'Animal Sorting'
  },
  'SCI_PLANT_PARTS': {
    id: 'SCI_PLANT_PARTS',
    topic: 'Parts of a Plant',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/science/grade-2/plant-parts',
    label: 'Label the Plant'
  },
  'SCI_SAFETY': {
    id: 'SCI_SAFETY',
    topic: 'Safety Symbols',
    platform: Platform.KAHOOT,
    url: 'https://kahoot.com/',
    label: 'Traffic Safety Game'
  },
  'SCI_STATES_MATTER': {
    id: 'SCI_STATES_MATTER',
    topic: 'States of Matter',
    platform: Platform.PHET,
    url: 'https://phet.colorado.edu/en/simulation/states-of-matter-basics',
    label: 'Solids, Liquids, Gas'
  },
  'SCI_DIRECTIONS': {
    id: 'SCI_DIRECTIONS',
    topic: 'Directions',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/social-studies/grade-2',
    label: 'Map Skills'
  },
  'SCI_HEALTHY_HABITS': {
    id: 'SCI_HEALTHY_HABITS',
    topic: 'Healthy Eating',
    platform: Platform.PHET,
    url: 'https://phet.colorado.edu/en/simulation/eating-and-exercise',
    label: 'Healthy Choices Game'
  },
  'SCI_ANIMAL_TRAITS': {
    id: 'SCI_ANIMAL_TRAITS',
    topic: 'Insect vs Arachnid',
    platform: Platform.QUIZIZZ,
    url: 'https://quizizz.com/admin/science',
    label: 'Bug Discovery'
  },
  'SCI_FARM_PRODUCTS': {
    id: 'SCI_FARM_PRODUCTS',
    topic: 'Farm Products',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/science/grade-2/animals',
    label: 'Where Does Food Come From?'
  },

  // --- ENGLISH INTERACTIONS ---
  'ENG_PLURALS': {
    id: 'ENG_PLURALS',
    topic: 'Singular & Plural',
    platform: Platform.DUOLINGO,
    url: 'https://www.duolingo.com/',
    label: 'Plurals Practice'
  },
  'ENG_VERBS': {
    id: 'ENG_VERBS',
    topic: 'Action Words',
    platform: Platform.KHAN_ACADEMY,
    url: 'https://www.khanacademy.org/humanities/grammar/parts-of-speech/the-verb',
    label: 'Identify Verbs'
  },
  'ENG_PREPOSITIONS': {
    id: 'ENG_PREPOSITIONS',
    topic: 'Prepositions',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/ela/grade-2/prepositions',
    label: 'Position Words Game'
  },
  'ENG_ANTONYMS': {
    id: 'ENG_ANTONYMS',
    topic: 'Antonyms (Opposites)',
    platform: Platform.QUIZLET,
    url: 'https://quizlet.com/subject/antonyms/',
    label: 'Opposites Flashcards'
  },
  'ENG_SPELLING': {
    id: 'ENG_SPELLING',
    topic: 'Spelling Patterns',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/ela/grade-2/spell-sight-words',
    label: 'Spelling Bee'
  },
  'ENG_GRAMMAR_FLOW': {
    id: 'ENG_GRAMMAR_FLOW',
    topic: 'Subject-Verb Agreement',
    platform: Platform.KHAN_ACADEMY,
    url: 'https://www.khanacademy.org/humanities/grammar',
    label: 'Fix the Sentence'
  },
  'ENG_ADJECTIVES': {
    id: 'ENG_ADJECTIVES',
    topic: 'Adjectives',
    platform: Platform.DUOLINGO,
    url: 'https://www.duolingo.com/',
    label: 'Describing Words'
  },
  'ENG_READING': {
    id: 'ENG_READING',
    topic: 'Reading Comprehension',
    platform: Platform.IXL,
    url: 'https://www.ixl.com/ela/grade-2/reading-comprehension',
    label: 'Story Time Challenge'
  },
  'ENG_ARTICLES': {
    id: 'ENG_ARTICLES',
    topic: 'Articles (A/An/The)',
    platform: Platform.KHAN_ACADEMY,
    url: 'https://www.khanacademy.org/humanities/grammar',
    label: 'Choose the Article'
  },
  'ENG_SYNTAX': {
    id: 'ENG_SYNTAX',
    topic: 'Sentence Structure',
    platform: Platform.DUOLINGO,
    url: 'https://www.duolingo.com/',
    label: 'Build a Sentence'
  }
};
