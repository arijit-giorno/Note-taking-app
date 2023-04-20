import React, { useState } from 'react'
import Header from "./componnnt/header"
import Footer from "./componnnt/footer"
import Notes from "./componnnt/notes"
import CreateNote from "./componnnt/createnote"

const App = () => {



  const [addItem, setAdditem] = useState([])
  const addNote = (note) => {
    setAdditem((prevData) => {
      return [...prevData, note]
    })
  }


  const onDelete = (id) => {
    setAdditem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id
      })
    )
  }
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="content">
        <Notes passNote={addNote} />
        {addItem.map((val, index) => {
          return <CreateNote
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        })}
      </div>
      <br />
      <div>
        <Footer />
      </div>

    </>
  )
}

export default App