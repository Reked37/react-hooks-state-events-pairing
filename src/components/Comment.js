import React from "react"

function CommentComponent({user, comment}){
    return(
        <div>
            <strong>{user}</strong>
            <p>{comment}</p>
        </div>
    )
}

export default CommentComponent