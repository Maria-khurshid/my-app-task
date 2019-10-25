import React from "react";
// import PersonInfo from "./PersonInfo";
// import PersonEdit from "./PersonEdit";
import PropType from "prop-types";

export default function Person(props) {
  return (
    <div>
      <h1>{props.person.name}</h1>
    </div>
  );
}
Person.propTypes = {
  isEdited: PropType.bool
};
