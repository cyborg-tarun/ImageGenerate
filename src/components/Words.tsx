import axios from "axios";
import { useState } from "react";

interface WordsProps {
  selectedLetter: string;
  words: string[];
  updateNewWords: (newWords: string[]) => void;
}

const Words = ({ selectedLetter, words, updateNewWords }:WordsProps) => {
//const Words = ({ selectedLetter, words }:WordsProps) => {
    //const [newWords, setNewWords] = useState(words);
    const [active, setIsActive] = useState<string | null>(null);

    // const handleButtonClick = (word: string) => {
    //   selectWord(word);
    //   setIsActive(word);
    // };
    
    /*Consider using useEffect to sync the newWords state with changes in the words prop.
    This will ensure that if the selectedLetter changes, the displayed words are correctly updated.
    The useEffect hook is a fundamental aspect of React's functional component paradigm, 
    introduced with React Hooks in React 16.8. It serves to perform side effects in function components. 
    Side effects are operations that can affect other components, cannot be done during rendering, 
    and include a wide range of activities like data fetching, subscriptions, manually changing the
    DOM, timers, logging, and more.*/
    // useEffect to update newWords when the words prop changes
    //useEffect(() => {
    //  setNewWords(words);
  //}, [words]); // Dependency array includes words to track its changes

  console.log("MY Words",words)

    const fetchNewWord = async (word: string) => {
        try {
            const response = await axios.get(

                `https://787e-2401-4900-1f38-49f0-a179-9296-7eeb-1a7b.ngrok-free.app/generate-new-words?words=${word}`, 
                {
                    headers: {
                        // Set the ngrok-skip-browser-warning header to any value
                        'ngrok-skip-browser-warning': 'true',
                  }
                }
              );
            debugger;
            //setNewWords(["Apple-pie","Apple-cider","Apple-phone"]);
            updateNewWords(response.data.new_gen_words);
            setIsActive(word);
        } catch (error) {
            console.error("Failed to fetch new words:", error);
        }
    };

    const refreshWords = async () => {
        try {
            const response = await axios.get(

                `https://787e-2401-4900-1f38-49f0-a179-9296-7eeb-1a7b.ngrok-free.app/generate-new-words?words=${words[0]}`,
                {
                    headers: {
                        // Set the ngrok-skip-browser-warning header to any value
                        'ngrok-skip-browser-warning': 'true',
                  }
                }
              );
            debugger;
            //setNewWords(["Apple-pie","Apple-cider","Apple-phone"]);
            updateNewWords(response.data.new_gen_words);
        } catch (error) {
            console.error("Failed to fetch new words:", error);
        }
         };

    return (
        <div className=" w-full px-4 py-8 flex justify-center items-center flex-col ">
            <h1 className="s-3xl font-bold mb-4 bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
                {`Common words starting with ${selectedLetter}`}
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center">
            <ul className="display flex flex-row flex-wrap gap-2 md:gap-5">
                {words.map((word, index) => (
                    <li key={index}
                    onClick={() => fetchNewWord(word)}
                    className={`cursor-pointer bg-indigo-500 text-white px-2 py-1 md:px-4 md:py-2 border-2 border-indigo-500 hover:bg-indigo-400 rounded ${
                        active === word ? "bg-indigo-400 border-2 border-indigo-500" : ""
                      }`}
                    >
                        {word}
                    </li>
                ))}
            </ul>
             <button onClick={refreshWords} className="mt-4 px-4 py-4 text-white rounded flex items-center">
                <img src="src\8771401.png" alt="Refresh" className="mr-2 w-8 h-8" />
            </button>

            </div>
            
        </div>
    );
};

export default Words;
