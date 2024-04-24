interface WordDetails {
  image: string;
  description: string;
}

interface CommonWords {
  [word: string]: string[];
}

interface WordsData {
  commonWords: CommonWords;
}

const wordsData: WordsData = {
  commonWords: {
    A: ["Apple", "Ant", "Airplane"],
    B: ["Banana", "Bear", "Ball"],
    C: ["Cat", "Car", "Cloud"],
    D: ["Dog", "Dolphin", "Diamond"],
    E: ["Elephant", "Eagle", "Earth"],
    F: ["Fish", "Fox", "Flower"],
    G: ["Giraffe", "Gorilla", "Grass"],
    H: ["Horse", "House", "Heart"],
    I: ["Ice cream", "Island", "Igloo"],
    J: ["Jellyfish", "Jaguar", "Jet"],
    K: ["Kangaroo", "Kite", "King"],
    L: ["Lion", "Lemon", "Lake"],
    M: ["Monkey", "Moon", "Mountain"],
    N: ["Nest", "Net", "Ninja"],
    O: ["Orange", "Owl", "Ocean"],
    P: ["Penguin", "Panda", "Piano"],
    Q: ["Queen", "Quail", "Quilt"],
    R: ["Rabbit", "Rose", "Rainbow"],
    S: ["Snake", "Sun", "Star"],
    T: ["Tiger", "Tree", "Train"],
    U: ["Umbrella", "Unicorn", "Uranus"],
    V: ["Violin", "Volcano", "Violet"],
    W: ["Whale", "Watermelon", "Worm"],
    X: ["Xylophone", "X-ray", "Xebec"],
    Y: ["Yak", "Yacht", "Yo-yo"],
    Z: ["Zebra", "Zoo", "Zephyr"]
  
  },
};

export default wordsData;
