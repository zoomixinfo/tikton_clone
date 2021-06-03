import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import './Videos.css'
import VideoSidebar from './VideoSidebar'
function Videos({url,channel,description,song, like, messages, shares}) {
    const [play,setPlay] = useState(false)
    const videoRef = useRef(null)
    const onVideoPress = () => {
        if(play) {
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }
        
    }
    return (
        <div className="videos">
            <video ref={videoRef} onClick={onVideoPress} className="videos__player" loop src={url}></video>
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar likes={like} messages={messages} shares={shares}/>
        </div>
    )
}

export default Videos
