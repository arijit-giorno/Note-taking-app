import React from "react";

const CreateNote = (props) => {
    const delItem=()=>{
        props.deleteItem(props.id)
    }

    return <>
        <div className="note">
            <div>
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
            </div>
            <div>
                <button type='button' onClick={delItem}>delete</button>
            </div>
        </div>

    </>
}
export default CreateNote