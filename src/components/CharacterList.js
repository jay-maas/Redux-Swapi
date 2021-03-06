import React from "react";

import Character from "./Character";

const CharacterList = props => {
  return (
    <ul>
      {props.characters ? props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      }) : null}
    </ul>
  );
};

export default CharacterList;