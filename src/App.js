import React from "react";
import Squirrel from "./Components/Squirrel";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squirrels: []
    };
  }

  // add a componentDidMount lifecycle method to fetch data from the API
  componentDidMount() {
    fetch(
      "https://data.cityofnewyork.us/resource/vfnx-vebw.json?$$app_token=7JFnCP0dSrA4XEFaxkffxCHCd&running=true"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ squirrels: data });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div className="App">
        <h1>2018 NYC Squirrel Survey Data</h1>
        {this.state.squirrels.map((squirrel) => (
          <Squirrel sdata={squirrel} />
        ))}
      </div>
    );
  }
}

export default App;
