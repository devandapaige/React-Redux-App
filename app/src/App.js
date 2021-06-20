//now that the stateReducer, stateActions, and store are set up we need to CONNECT App.js.//
import "./App.css";
//redux imports:
import { connect } from "react-redux";
import { getCharacters } from "./actions/stateActions";
//useEffect:
import { useEffect } from "react";
//components:
import CharacterCard from "./components/CharacterCard";

function App(props) {
  console.log(props);
  useEffect(() => {
    props.getCharacters();
  },);
  return (
    <div className="App">
      <header>
        <h1>Rick & Morty</h1>
        <nav>
          <h3>Search by...</h3>
          <button>Characters</button>
          <button>Locations</button>
          <button>Episodes</button>
        </nav>
      </header>
      <div className="pageButtons">
        <button>↩</button>
        <button>↪</button>
      </div>
      <div className="cards">
        {props.state.data.results &&
          props.state.data.results.map((character) => {
            return <CharacterCard character={character} />;
          })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { getCharacters })(App);
