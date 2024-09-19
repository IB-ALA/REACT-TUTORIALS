import { Component } from "react";

class ClassBasedComponents extends Component {
  // state
  state = {
    showText: false,
    changeColor: false,
  };
  // constructor() {
  //   super();

  //   this.state = {
  //     showText: false,
  //   };
  // }
  handleClick = () => {
    console.log("button clicked");

    // not recommended
    // this.state.showText = !this.state.showText;

    const { showText, changeColor } = this.state;

    this.setState({ showText: !showText, changeColor: !changeColor });
  };

  render() {
    console.log(this.state);
    const { showText, changeColor } = this.state;

    return (
      <div>
        {showText ? (
          <h4 style={{ color: changeColor ? "tomato" : "black" }}>
            Class based component
          </h4>
        ) : null}
        <button onClick={this.handleClick}>Toggle Text</button>
      </div>
    );
  }
}

export default ClassBasedComponents;
