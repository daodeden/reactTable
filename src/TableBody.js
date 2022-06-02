import React from "react"

const TableBody = (props) => {
  const rows = props.characters.map((row, index) => {
    return (
      <tr>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button onClick={() => props.removeCharacters(index)}>Delete</button></td>
      </tr>
    )
  })
  
  

  return <tbody>{rows}</tbody>
}

export default TableBody
