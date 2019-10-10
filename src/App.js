import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <table
        style={{
          backgroundColor: "#000",
          display: "block",
          color: "#fff",
          paddingLeft: 16
        }}
      >
        <tbody>
          <tr>
            <td>
              <img width="50" src="green_app_icon.svg" />
            </td>
            <td>
              <h1>MoviesDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
