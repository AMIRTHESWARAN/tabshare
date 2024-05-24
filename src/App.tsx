import { useState, useEffect } from 'react'
import './App.css'
import { writeUrlToFirestore } from './firebase/firestore'
import { removeUrlPrefix } from './helpers/helper'


function App() {
  const [tabUrls, setTabUrls] = useState<string[]>([])
  const [hashValue, setHashValue] = useState<string>('');


  const handleButtonClick = async (url: string) => {
        const hash = await writeUrlToFirestore(url);
        setHashValue(hash); // Store the returned hash value in the state
  };

  useEffect(() => {
    chrome.tabs.query({}, function(tabs) {
      const urls = tabs.map(tab => tab.url).filter((url): url is string => typeof url === 'string')
      const trimmed_urls = urls.map(url => removeUrlPrefix(url));
      setTabUrls(trimmed_urls)
    });
  }, [])

  return (
    <>
       <button onClick={async() => await handleButtonClick(String(tabUrls))}>Store URL</button>
      {hashValue && <p>Stored Hash: {hashValue}</p>}
    </>
  )
}

export default App
