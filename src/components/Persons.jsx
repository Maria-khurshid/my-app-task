import React from "react";
import Person from "./Person";
export default function Persons() {
  const personsData = [
    {
      name: "Hina",
      age: 19,
      description: "Teacher at school",
      isEdited: true
    },
    {
      name: "Sepna",
      age: 10,
      description: "Teacher at school",
      isEdited: true
    },
    {
      name: "Sadia",
      age: 16,
      description: "Teacher at school",
      isEdited: true
    }
  ];
  return (
    <div className="Persons">
      <h1>Persons</h1>
      {personsData.map(person => {
        return <Person person={person} />;
      })}
    </div>
  );
}
