import { useEffect, useState } from "react";
import axios from "axios";

type ApiReponse = {
  word?: string;
  phonetic?: string;
  meanings: [
    {
      partOfSpeech?: string;
      definitions: [{ definition: string }];
    }
  ];
};

const useWordsApi = (allWordsFromLetter: string[]) => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch data from a remote API for each selected word

  const fetchData = async () => {
    setLoading(true);
    const fetchedData: string[] = [];

    for (const word of allWordsFromLetter) {
      try {
        const response = await axios.get(

          `https://787e-2401-4900-1f38-49f0-a179-9296-7eeb-1a7b.ngrok-free.app/generate?prompt=${word}`, 

            //change the URL of API


          {responseType: 'blob',
            headers: {
              // Set the ngrok-skip-browser-warning header to any value
              'ngrok-skip-browser-warning': 'true',
            }
          }
        );
        if (response) {
          debugger;
          // Create a URL for the received blob object
          const imageUrl = URL.createObjectURL(response.data);
          fetchedData.push(imageUrl);
        }
      } catch (error) {
        setError(new Error("Failed to fetch data"));
      }
    }

    setData(fetchedData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [allWordsFromLetter]);

  return { data, loading, error };
};

export default useWordsApi;