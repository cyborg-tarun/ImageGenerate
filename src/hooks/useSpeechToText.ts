import { useEffect, useState } from 'react';

let recognition:any =null
if("webkitSpeechRecognition" in window){
  recognition= new webkitSpeechRecognition();
  recognition.continuous=true;
  recognition.lang= "en-US";

}

const useSpeechToText = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if(!recognition) return;

    recognition.onresult = (event: SpeechRecognitionEvent) =>{
      console.log("onresult event", event);
      recognition.stop();
      setTranscript(event.results[0][0].transcript);
      setListening(false);
      
    };

    }, []);

  const startListening = () => {
      setListening(true);
      setTranscript("");
      recognition.start();
    
  };

  const stopListening = () => {
    setListening(false);
    recognition.stop();
  };

  return { listening, transcript, startListening, stopListening,
  hasRecognitionSupport:!!recognition };
};

export default useSpeechToText;