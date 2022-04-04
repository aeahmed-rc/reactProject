import { useState, useEffect } from "react";
import { projectStorage ,projectFirestore,timestamp} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //references in the firebase storage so gonna have name of file stored
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images')

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //percentage of upload
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp
        collectionRef.add({url,createdAt})
        setUrl(url);
      }
    ); // asynchornous
  }, [file]); // everytime there is a file the useEffect function will fire)
  return { progress, url, error };
};

export default useStorage;
