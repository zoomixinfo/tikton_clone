import { useEffect, useState } from 'react';
import db from './firebase'
import './App.css';
import Videos from './Videos';

function App() {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    db.collection('videos').onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data())) 
    )
  },[])
  return (
    <div className="app">
      <div className="app__videos">
      {videos.map(({url, channel, desription, song,like, shares, messages}) =>(
        <Videos 
        url={url} channel={channel} desription={desription} song={song} like={like} shares={shares} messages={messages}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
