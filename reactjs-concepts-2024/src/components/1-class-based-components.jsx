import { Component } from "react";

class ClassBasedComponents extends Component {
  // state
  state = {
    showText: false,
    changeColor: false,
    count: 0,
    changeCountStyle: false,
  };
  // constructor() {
  //   super();
  //   this.state = {
  //     showText: false,
  //   };
  // }

  // componentDidMount
  // componentDidUpdate
  // componentWillUnmount
  componentDidMount() {
    console.log("this is called first time on page load");
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });

    // we can call apis here
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState);
    console.log(prevState, this.state);

    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  componentWillUnmount() {
    console.log("component is getting unmounted");
  }

  handleClick = () => {
    // console.log("button clicked");

    // not recommended
    // this.state.showText = !this.state.showText;

    const { showText, changeColor } = this.state;

    this.setState({ showText: !showText, changeColor: !changeColor });
  };

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  render() {
    // console.log(this.state);
    const { showText, changeColor, count, changeCountStyle } = this.state;
    // console.log(changeCountStyle);

    return (
      <div>
        {showText ? (
          <h4 style={{ color: changeColor ? "tomato" : "black" }}>
            Class based component
          </h4>
        ) : null}
        <button onClick={this.handleClick}>Toggle Text</button>
        <button style={{ marginLeft: "10px" }} onClick={this.handleCount}>
          Increase Count Value
        </button>
        <h3
          style={{
            color: changeCountStyle ? "blue" : "black",
            fontSize: changeCountStyle ? "30px" : "12px",
          }}
        >
          Count is {count}
        </h3>
      </div>
    );
  }
}

export default ClassBasedComponents;
