import React from "react"

function Like({title, viewCount, upvote, downvote, uploadDate, onUpVote, onDownVote}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{viewCount} Views | {uploadDate}</p>
            <button onClick={onUpVote}>{upvote}👍</button>
            <button onClick={onDownVote}>{downvote}👎</button><br></br>
        </div>
    )
}

export default Like