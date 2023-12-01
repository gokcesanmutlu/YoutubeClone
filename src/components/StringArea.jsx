import { useState } from "react"

const StringArea = ({ text, max }) => {
  const [expand, setExpand] = useState(false)

  let shortText = text;
  // console.log(shortText)
  if (text.length > max && !expand) {
    shortText = text.slice(0, max) + "... More"
  }

  return (
    <p onClick={() => setExpand(!expand)}>  
    {/* {console.log(shortText)} console'da veri düzgün ama ekranda birleşik çıkar, aşağıdaki yöntemi uygula*/}
    {/* {console.log(shortText.split("\n"))} */}
      {/*The split function splits a text according to a specified delimiter and converts it into a new array. 
      "\n" : is the separator used to divide the text.(specified delimiter) */}
    {shortText.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ))}
    </p>
  )
}

export default StringArea