import React, {useState} from "react"
import video from "../data/video.js";
import Like from "./Like.js"
import Comment from "./Comments.js"


function App() {
  const [videoData, setVideoData]= useState(video)
  const [upVote, setUpVote]=useState(videoData.upvotes)
  const [downVote, setDownVote]=useState(videoData.downvotes)
  

  function handleUpVote(){
    const newLike=upVote+1
    return setUpVote(newLike)
  }

  function handleDownVote(){
    const newDislike= downVote+1
    return setDownVote(newDislike)
  }



  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Like title={videoData.title} 
       viewCount={videoData.views} 
       upvote={upVote}
       downvote={downVote}
       uploadDate={videoData.createdAt}
       onUpVote={handleUpVote}
       onDownVote={handleDownVote}
       
       />
      <Comment comments={videoData.comments}/>
    </div>
  )
}

export default App;
