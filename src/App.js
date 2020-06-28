import React from "react";
import { connect } from "react-redux";
import "./styles.css";

const App = ({ counter, dispatch }) => {
  return (
    <div className="App">
      Counter: {counter}
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT_ASYNC" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT_ASYNC" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default connect(({ counter }) => ({ counter }))(App);
