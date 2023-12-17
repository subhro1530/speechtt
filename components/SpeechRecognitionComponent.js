// components/SpeechRecognitionComponent.js
import { useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";

const SpeechRecognitionComponent = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState("");

  useEffect(() => {
    let recognizer;

    const loadModel = async () => {
      recognizer = await speechCommands.create("BROWSER_FFT");
      await recognizer.ensureModelLoaded();
    };

    loadModel();

    const startListening = async () => {
      setIsListening(true);
      recognizer.listen(
        (result) => {
          const { scores } = result;
          const word = scores.indexOf(Math.max(...scores));
          setTranscription(recognizer.wordLabels[word]);
        },
        { includeSpectrogram: true, probabilityThreshold: 0.7 }
      );
    };

    const stopListening = () => {
      setIsListening(false);
      recognizer.stopListening();
    };

    return () => {
      stopListening();
    };
  }, []);

  return (
    <div>
      <p>Speech Recognition</p>
      <button onClick={isListening ? stopListening : startListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <p>Transcription: {transcription}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
