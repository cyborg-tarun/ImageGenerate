import React, { useState, useEffect  } from "react";
import axios from "axios";

interface WordsProps {
  selectedLetter: string;
  words: string[];
  //updateNewWords: (newWords: string[]) => void;
}

//const Words = ({ selectedLetter, words, updateNewWords }:WordsProps) => {
const Words = ({ selectedLetter, words }:WordsProps) => {
    const [newWords, setNewWords] = useState(words);
    //const [active, setIsActive] = useState<string | null>(null);

    // const handleButtonClick = (word: string) => {
    //   selectWord(word);
    //   setIsActive(word);
    // };
    

    // useEffect to update newWords when the words prop changes
    useEffect(() => {
      setNewWords(words);
  }, [words]); // Dependency array includes words to track its changes

  console.log("MYNewWords",newWords)

    const fetchNewWord = async (word: string) => {
        //try {
         //   const response = await axios.post('https://c2c6-2401-4900-1c5c-8c3e-3d4b-4e3f-43a6-943.ngrok-free.app/get-new-words', {
         //      words: word,
         //   });
            setNewWords(["Apple-pie","Apple-cider","Apple-phone"]);
            //updateNewWords(["Apple-pie","Apple-cider","Apple-phone"]);
       // } catch (error) {
       //     console.error("Failed to fetch new words:", error);
       // }
    };

    return (
        <div className=" w-full px-4 py-8 flex justify-center items-center flex-col ">
            <h1 className="s-3xl font-bold mb-4 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
                {`Common words starting with ${selectedLetter}`}
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center">
            <ul className="display flex flex-row flex-wrap gap-2 md:gap-5">
                {newWords.map((word, index) => (
                    <li key={index} 
                    className="cursor-pointer bg-indigo-500 text-white px-2 py-1 md:px-4 md:py-2 border-2 border-indigo-500 hover:bg-indigo-400 rounded"
                    onClick={() => fetchNewWord(word)}
                    >
                        {word}
                    </li>
                ))}
            </ul>
            {/* <button onClick={refreshWords} className="mt-4 px-4 py-4 text-white rounded flex items-center">
                <img src="src\8771401.png" alt="Refresh" className="mr-2 w-8 h-8" />
            </button> */}

            </div>
            
        </div>
    );
};

export default Words;
