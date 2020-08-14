import React, { Component } from "react";
import { AtomSpinner } from "react-epic-spinners";

class Loading extends Component {
  render() {
    return (
      <section style={{ width: "100vw", height: "100vh" }}>
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            display: "flex",
            alignItems: "center",
            width: 300,
            height: 80,
          }}
        >
          <h1 style={{ marginRight: 20 }}>Now Loading...</h1>
          <AtomSpinner color="#ff1d5e" animationDuration={600} />
        </div>
      </section>
    );
  }
}
export default Loading;
