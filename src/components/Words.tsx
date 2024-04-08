//import { useState } from "react";

interface WordsProps {
  selectedLetter: string;
  words: string[];
  //selectWord: (word: string) => void;
}

//const Words = ({ selectedLetter, words, selectWord }: WordsProps) => {
const Words = ({ selectedLetter, words}: WordsProps) => {
  //const [active, setIsActive] = useState<string | null>(null);

  // const handleButtonClick = (word: string) => {
  //   selectWord(word);
  //   setIsActive(word);
  // };
  return (
    <div className=" w-full px-4 py-8 flex justify-center items-center flex-col ">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">{`Common words starting with ${selectedLetter}`}</h1>
      <ul className="display flex flex-row flex-wrap gap-2 md:gap-5">
        {words.map((word) => (
          <li
            key={word}
            className={`bg-indigo-500 text-white px-2 py-1 md:px-4 md:py-2 border-2 border-indigo-500 rounded`}
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Words;