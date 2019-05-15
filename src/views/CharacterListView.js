import React from "react";
import { connect } from "react-redux";
import { getCharacters } from '../actions'
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters()
  }

  render() {
    return (
      <div>
        {this.props.isLoading && <div>Loading...</div>}
        {this.props.error && <div>{this.props.error}</div>}
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading,
    error: state.charsReducer.error
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
