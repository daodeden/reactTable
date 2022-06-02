import React from "react"
import TableBody from "./TableBody"
import TableHeader from "./TableHeader"


const Table = (props) => {
  return (
    <table>
      <TableHeader />
      <TableBody characters={props.characters} removeCharacters={props.removeCharacters} />
    </table>
  )
}

export default Table
