import React from "react";
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Current Job</th>
                <th>Previous Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}
  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.currentjob}</td>
          <td>{row.prevjob}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>
              Remove 
            </button>
          </td>
        </tr>
      );
    });

    return <tbody> {rows} </tbody>;
  };
  const Table = (props) => {
    const { characterData, removeCharacter } = props;
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  };


export default Table;
