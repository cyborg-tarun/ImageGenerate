import { useState } from 'react';
import useSpeechToText from '../hooks/useSpeechToText';
import WordDetails from './WordDetails';

const Dictation = () => {
  const { transcript, startListening, stopListening, hasRecognitionSupport } = useSpeechToText();
  const [selectedWord, setSelectedWord] = useState<string>('');

  // Function to handle fetching data for the selected word
  const handleFetchData = () => {
    setSelectedWord(transcript.trim()); // Set the selected word as the transcript
  };

  return (
    <div className="items-center justify-center">
      {hasRecognitionSupport ? (
        <>
          <div>
            <textarea
              id="message"
              rows={1}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={transcript}
            ></textarea>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={startListening}
            >
              Start Listening
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleFetchData} // Call handleFetchData to fetch data for the selected word
            >
              Fetch Data
            </button>
          </div>
        </>
      ) : (
        <h1>Browser issue</h1>
      )}
      {/* Pass the selected word to the WordDetails component */}
      {selectedWord && (<WordDetails selectedWord={selectedWord} />)}
      
    </div>
  );
};

export default Dictation;
