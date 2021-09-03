import React from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = { member: [] };
  }

  render() {
    console.log(this.state.member);
    return (
      <div>
        <button onClick={this.getJson}>Get Json</button>
        {this.membersList(this.state.member)}
      </div>
    );
  }

  membersList = (list) => {
    const members = list.map((member) => {
      return (
        <li>
          {member.name} / {member.age}
        </li>
      );
    });

    return <ul>{members}</ul>;
  };

  getJson = () => {
    const url = "https://jsondata.okiba.me/v1/json/qyknq210903055347";
    axios.get(url).then((res) => {
      console.log(res.data);
      this.setState(res.data);
    });
  };
}

render(<App />, document.getElementById("root"));
