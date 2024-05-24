import { app } from './index'

//getDoc
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { hash, urlSafeHashEncode } from '../helpers/hash';

const firestore = getFirestore(app);

export async function writeUrlToFirestore(url: string) {
  // Generate a hash value for the URL
  const hashValue = urlSafeHashEncode(hash(url, 0));
  console.log(hashValue)

  // Create a document reference with the hash value as the document ID
  const docRef = doc(firestore, 'url', (hashValue));

  // Set the document with the URL
  await setDoc(docRef, {
    url: url
  });

  return hashValue;
}

