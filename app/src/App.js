//now that the stateReducer, stateActions, and store are set up we need to CONNECT App.js.//
import logo from "./logo.svg";
import "./App.css";

//redux imports:
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Rick & Morty</h1>
        <nav>
          {/* Maybe add additional buttons for Sort by: 'Characters', 'Locations', & 'Episodes' */}
          <button>↩</button>
          <button>↪</button>
        </nav>
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, [])(App);
