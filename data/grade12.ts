import { Question, Subject, InteractionType } from '../types';

export const grade12Questions: Question[] = [
  // ================= MATHEMATICS (13 Questions) =================
  {
    id: 12001,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Set Theory",
    questionText: "If A={1,2}, B={3,4}, number of subsets of A x B is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "4" },
      { id: 'b', text: "8" },
      { id: 'c', text: "16" }, // Correct
      { id: 'd', text: "2" }
    ],
    correctAnswer: "16",
    explanation: "n(A x B) = 4. Subsets = 2^4 = 16."
  },
  {
    id: 12002,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Relations",
    questionText: "Equivalence relation is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Reflexive only" },
      { id: 'b', text: "Symmetric only" },
      { id: 'c', text: "Reflexive, Symmetric, Transitive" }, // Correct
      { id: 'd', text: "Transitive only" }
    ],
    correctAnswer: "Reflexive, Symmetric, Transitive",
    explanation: "Definition."
  },
  {
    id: 12003,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Functions",
    questionText: "Range of f(x) = x^2 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "R" },
      { id: 'b', text: "[0, infinity)" }, // Correct
      { id: 'c', text: "(0, infinity)" },
      { id: 'd', text: "R - {0}" }
    ],
    correctAnswer: "[0, infinity)",
    explanation: "Square is always non-negative."
  },
  {
    id: 12004,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Complex Numbers",
    questionText: "Value of i^4 is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1" }, // Correct
      { id: 'b', text: "-1" },
      { id: 'c', text: "i" },
      { id: 'd', text: "-i" }
    ],
    correctAnswer: "1",
    explanation: "(i^2)^2 = (-1)^2 = 1."
  },
  {
    id: 12005,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Permutations",
    questionText: "Value of 0! (Zero Factorial):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1" }, // Correct
      { id: 'c', text: "Undefined" },
      { id: 'd', text: "Infinite" }
    ],
    correctAnswer: "1",
    explanation: "Definition."
  },
  {
    id: 12006,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Sequence & Series",
    questionText: "nth term of GP is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "ar^(n-1)" }, // Correct
      { id: 'b', text: "ar^n" },
      { id: 'c', text: "a + (n-1)d" },
      { id: 'd', text: "a/r^n" }
    ],
    correctAnswer: "ar^(n-1)",
    explanation: "Geometric Progression formula."
  },
  {
    id: 12007,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Straight Lines",
    questionText: "Slope of X-axis is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "0" }, // Correct
      { id: 'c', text: "Undefined" },
      { id: 'd', text: "-1" }
    ],
    correctAnswer: "0",
    explanation: "tan(0) = 0."
  },
  {
    id: 12008,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Conic Sections",
    questionText: "Eccentricity of a Parabola is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "e = 0" },
      { id: 'b', text: "e = 1" }, // Correct
      { id: 'c', text: "e < 1" },
      { id: 'd', text: "e > 1" }
    ],
    correctAnswer: "e = 1",
    explanation: "Definition."
  },
  {
    id: 12009,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "3D Geometry",
    questionText: "Octants in 3D space:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "4" },
      { id: 'b', text: "6" },
      { id: 'c', text: "8" }, // Correct
      { id: 'd', text: "10" }
    ],
    correctAnswer: "8",
    explanation: "Three planes divide space into 8 parts."
  },
  {
    id: 12010,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Limits",
    questionText: "Limit (x->0) of (sin x)/x:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "0" },
      { id: 'b', text: "1" }, // Correct
      { id: 'c', text: "Undefined" },
      { id: 'd', text: "Infinite" }
    ],
    correctAnswer: "1",
    explanation: "Standard limit."
  },
  {
    id: 12011,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Differentiation",
    questionText: "Derivative of sin(x):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "cos(x)" }, // Correct
      { id: 'b', text: "-cos(x)" },
      { id: 'c', text: "tan(x)" },
      { id: 'd', text: "sec(x)" }
    ],
    correctAnswer: "cos(x)",
    explanation: "Standard derivative."
  },
  {
    id: 12012,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Probability",
    questionText: "P(A|B) is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "P(A n B) / P(A)" },
      { id: 'b', text: "P(A n B) / P(B)" }, // Correct
      { id: 'c', text: "P(A) / P(B)" },
      { id: 'd', text: "P(B) / P(A)" }
    ],
    correctAnswer: "P(A n B) / P(B)",
    explanation: "Conditional Probability."
  },
  {
    id: 12013,
    subject: Subject.MATH,
    gradeLevel: 12,
    skillTag: "Matrices",
    questionText: "Matrix A is singular if |A| is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "0" }, // Correct
      { id: 'c', text: "-1" },
      { id: 'd', text: "Non-zero" }
    ],
    correctAnswer: "0",
    explanation: "Determinant is zero."
  },

  // ================= SCIENCE (13 Questions) =================
  {
    id: 12014,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Units",
    questionText: "Dimensional formula of Force:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "MLT^-2" }, // Correct
      { id: 'b', text: "ML^2T^-2" },
      { id: 'c', text: "MLT^-1" },
      { id: 'd', text: "M^0LT^-2" }
    ],
    correctAnswer: "MLT^-2",
    explanation: "Mass x Acceleration."
  },
  {
    id: 12015,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Kinematics",
    questionText: "Area under v-t graph represents:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Acceleration" },
      { id: 'b', text: "Displacement" }, // Correct
      { id: 'c', text: "Velocity" },
      { id: 'd', text: "Force" }
    ],
    correctAnswer: "Displacement",
    explanation: "Integral of velocity."
  },
  {
    id: 12016,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Laws of Motion",
    questionText: "Recoil of gun is based on:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Conservation of Energy" },
      { id: 'b', text: "Conservation of Momentum" }, // Correct
      { id: 'c', text: "Newton's 1st Law" },
      { id: 'd', text: "Torque" }
    ],
    correctAnswer: "Conservation of Momentum",
    explanation: "Initial p = Final p."
  },
  {
    id: 12017,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Work Energy",
    questionText: "Unit of Power:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Joule" },
      { id: 'b', text: "Watt" }, // Correct
      { id: 'c', text: "Newton" },
      { id: 'd', text: "Pascal" }
    ],
    correctAnswer: "Watt",
    explanation: "Joule/sec."
  },
  {
    id: 12018,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Gravitation",
    questionText: "Escape velocity from Earth:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "9.8 km/s" },
      { id: 'b', text: "11.2 km/s" }, // Correct
      { id: 'c', text: "8 km/s" },
      { id: 'd', text: "330 m/s" }
    ],
    correctAnswer: "11.2 km/s",
    explanation: "sqrt(2gR)."
  },
  {
    id: 12019,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Fluids",
    questionText: "Hydraulic lift works on:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Pascal's Law" }, // Correct
      { id: 'b', text: "Bernoulli's Principle" },
      { id: 'c', text: "Archimedes' Principle" },
      { id: 'd', text: "Boyle's Law" }
    ],
    correctAnswer: "Pascal's Law",
    explanation: "Pressure transmission."
  },
  {
    id: 12020,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Thermodynamics",
    questionText: "First Law of Thermodynamics is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Conservation of Mass" },
      { id: 'b', text: "Conservation of Energy" }, // Correct
      { id: 'c', text: "Law of Entropy" },
      { id: 'd', text: "Law of Cooling" }
    ],
    correctAnswer: "Conservation of Energy",
    explanation: "dQ = dU + dW."
  },
  {
    id: 12021,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Chemistry Basics",
    questionText: "Number of moles in 18g Water:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "1" }, // Correct
      { id: 'b', text: "18" },
      { id: 'c', text: "6.022 x 10^23" },
      { id: 'd', text: "0.1" }
    ],
    correctAnswer: "1",
    explanation: "Molar mass H2O = 18g."
  },
  {
    id: 12022,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Atomic Structure",
    questionText: "Orbital shape of 'p':",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Spherical" },
      { id: 'b', text: "Dumbbell" }, // Correct
      { id: 'c', text: "Double Dumbbell" },
      { id: 'd', text: "Complex" }
    ],
    correctAnswer: "Dumbbell",
    explanation: "s is spherical, p is dumbbell."
  },
  {
    id: 12023,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Bonding",
    questionText: "Bond angle in Methane (CH4):",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "90" },
      { id: 'b', text: "109.5" }, // Correct
      { id: 'c', text: "120" },
      { id: 'd', text: "180" }
    ],
    correctAnswer: "109.5",
    explanation: "Tetrahedral geometry."
  },
  {
    id: 12024,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "States of Matter",
    questionText: "PV = nRT is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Boyle's Law" },
      { id: 'b', text: "Ideal Gas Equation" }, // Correct
      { id: 'c', text: "Charles' Law" },
      { id: 'd', text: "Dalton's Law" }
    ],
    correctAnswer: "Ideal Gas Equation",
    explanation: "Combines laws."
  },
  {
    id: 12025,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Equilibrium",
    questionText: "pH + pOH =",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "7" },
      { id: 'b', text: "14" }, // Correct
      { id: 'c', text: "1" },
      { id: 'd', text: "10" }
    ],
    correctAnswer: "14",
    explanation: "At 25 degrees C."
  },
  {
    id: 12026,
    subject: Subject.SCIENCE,
    gradeLevel: 12,
    skillTag: "Redox",
    questionText: "Oxidation is:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Gain of Electrons" },
      { id: 'b', text: "Loss of Electrons" }, // Correct
      { id: 'c', text: "Gain of Hydrogen" },
      { id: 'd', text: "Loss of Oxygen" }
    ],
    correctAnswer: "Loss of Electrons",
    explanation: "OIL RIG (Oxidation Is Loss)."
  },

  // ================= ENGLISH (14 Questions) =================
  {
    id: 12027,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Conjunctions",
    questionText: "I don't doubt ___ he will come.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "If" },
      { id: 'b', text: "That" }, // Correct
      { id: 'c', text: "Whether" },
      { id: 'd', text: "But" }
    ],
    correctAnswer: "That",
    explanation: "Negative doubt (I don't doubt) takes 'That'."
  },
  {
    id: 12028,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Agreement",
    questionText: "The jury ___ divided in opinion.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Was" },
      { id: 'b', text: "Were" }, // Correct
      { id: 'c', text: "Is" },
      { id: 'd', text: "Has" }
    ],
    correctAnswer: "Were",
    explanation: "Divided collective noun takes plural."
  },
  {
    id: 12029,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Relative Clause",
    questionText: "He is one of the men who ___ trusted.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Is" },
      { id: 'b', text: "Are" }, // Correct
      { id: 'c', text: "Was" },
      { id: 'd', text: "Has" }
    ],
    correctAnswer: "Are",
    explanation: "Antecedent is 'Men' (Plural)."
  },
  {
    id: 12030,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Correlative",
    questionText: "Hardly had I arrived ___ it snowed.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Than" },
      { id: 'b', text: "When" }, // Correct
      { id: 'c', text: "Then" },
      { id: 'd', text: "Before" }
    ],
    correctAnswer: "When",
    explanation: "Hardly... When."
  },
  {
    id: 12031,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Causative",
    questionText: "I made him ___ the truth.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "To admit" },
      { id: 'b', text: "Admit" }, // Correct
      { id: 'c', text: "Admitting" },
      { id: 'd', text: "Admitted" }
    ],
    correctAnswer: "Admit",
    explanation: "Make + Person + Base Verb."
  },
  {
    id: 12032,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Pronouns",
    questionText: "Let you and ___ finish this.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "I" },
      { id: 'b', text: "Me" }, // Correct
      { id: 'c', text: "We" },
      { id: 'd', text: "Myself" }
    ],
    correctAnswer: "Me",
    explanation: "Objective case."
  },
  {
    id: 12033,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Prepositions",
    questionText: "He died ___ cancer.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "From" },
      { id: 'b', text: "Of" }, // Correct
      { id: 'c', text: "By" },
      { id: 'd', text: "With" }
    ],
    correctAnswer: "Of",
    explanation: "Died of a disease."
  },
  {
    id: 12034,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Question Tags",
    questionText: "Let's go, ___?",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Will we" },
      { id: 'b', text: "Shall we" }, // Correct
      { id: 'c', text: "Do we" },
      { id: 'd', text: "Can we" }
    ],
    correctAnswer: "Shall we",
    explanation: "Let's -> Shall we."
  },
  {
    id: 12035,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Sentence Order",
    questionText: "Rearrange: no / sooner / did / than / he / arrive / left / she.",
    interactionType: InteractionType.REORDER,
    interactiveData: { items: ["No", "sooner", "did", "he", "arrive", "than", "she", "left"] },
    correctAnswer: ["No", "sooner", "did", "he", "arrive", "than", "she", "left"],
    explanation: "No sooner... than structure."
  },
  {
    id: 12036,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Idioms",
    questionText: "'Once in a blue moon' means:",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Every month" },
      { id: 'b', text: "Very rarely" }, // Correct
      { id: 'c', text: "At night" },
      { id: 'd', text: "Always" }
    ],
    correctAnswer: "Very rarely",
    explanation: "Idiom."
  },
  {
    id: 12037,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Conditionals",
    questionText: "If I had known, I ___ have come.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Will" },
      { id: 'b', text: "Would" }, // Correct
      { id: 'c', text: "Should" },
      { id: 'd', text: "Can" }
    ],
    correctAnswer: "Would",
    explanation: "Type 3 Conditional."
  },
  {
    id: 12038,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Collocations",
    questionText: "I prefer coffee ___ tea.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Than" },
      { id: 'b', text: "To" }, // Correct
      { id: 'c', text: "Over" },
      { id: 'd', text: "From" }
    ],
    correctAnswer: "To",
    explanation: "Prefer to."
  },
  {
    id: 12039,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Inversion",
    questionText: "Never ___ such a sight.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "I have seen" },
      { id: 'b', text: "Have I seen" }, // Correct
      { id: 'c', text: "Did I see" },
      { id: 'd', text: "Saw I" }
    ],
    correctAnswer: "Have I seen",
    explanation: "Inversion after 'Never'."
  },
  {
    id: 12040,
    subject: Subject.ENGLISH,
    gradeLevel: 12,
    skillTag: "Comparatives",
    questionText: "He is senior ___ me.",
    interactionType: InteractionType.TAP_SELECT,
    options: [
      { id: 'a', text: "Than" },
      { id: 'b', text: "To" }, // Correct
      { id: 'c', text: "From" },
      { id: 'd', text: "Of" }
    ],
    correctAnswer: "To",
    explanation: "Latin comparatives take 'to'."
  }
];

export default grade12Questions;