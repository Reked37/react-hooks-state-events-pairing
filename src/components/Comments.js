import React, {useState} from "react"
import CommentComponent from "./Comment"

function Comment ({comments}){
    const [hideComments, setHideComments]=useState(true)
    function handleHideComments(){
        return setHideComments(!hideComments)
    }
    console.log(hideComments)

    const displayComments= comments.map(commentObj=>{
        return <CommentComponent 
        user={commentObj.user} 
        comment={commentObj.comment}/>})

    return(
        <div>
            <button onClick={handleHideComments}> {hideComments ? "Hide Comments" : "Show Comments"}</button>
            {hideComments ? 
            <>
            <h2>{comments.length} Comments</h2> 
            {displayComments} </>
            : ""}
           
        </div>
    )
}

export default Comment