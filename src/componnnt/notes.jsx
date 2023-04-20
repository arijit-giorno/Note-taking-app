import React, { useState } from "react";

const Notes = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  })


  const InputEvent = (event) => {

    const { name, value } = event.target;

    setNote((prevDate) => {
      return {
        ...prevDate,
        [name]: value,
      };
    });
  }
  const addEvent = () => {
    props.passNote(note)
  }

  return (

    <div className="note">
      <div classname="contentInput">
        <form>
          <textarea
            name="title"
            value={note.title}
            onChange={InputEvent}
            placeholder="Title"
            className="inputs1"
            maxLength="30">
          </textarea>
          <textarea
            name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="Text here..."
            className="inputs2"
            maxLength="250">
          </textarea>
        </form>
      </div>
      <div className="button1">
        <button type='button' onClick={addEvent} >
          {/* <FontAwesomeIcon icon="fa-solid fa-floppy-disk" /> */}
          save
        </button>
      </div>
    </div>


  )
}
export default Notes