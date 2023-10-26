import React from "react";

function Comment(props) {

    function formatDate(date) {
        return date.toLocaleDateString();
    }

    return (
        <div>
            <hr />
            <Avatar user={props.author}/> <br />
            <span>{props.author.name}</span> <br />

            <span>{props.text}</span><br />
            <span>{formatDate(props.date)}</span>
            <hr />
        </div>
    );
}
function Avatar(props) {
    return (
        <img src={props.user.avatarUrl} alt={props.user.name} />
    );
}
export default Comment;