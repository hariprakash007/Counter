import { Component } from "react";
import "./index.css";

class CounterApp extends Component {
  state = { count: 0 };

  onDecrement = () => {
    this.setState((prevstate) => ({ count: prevstate.count - 1 }));
  };

  onIncrement = () => {
    this.setState((prevState) => {
      const newCount = prevState.count + 1;

      // if (newCount % 4 === 0) {         //Reversal on Divisibility by 4: Whenever the counter value becomes completely divisible by 4, the value should be reversed
      //   return { count: -newCount };
      // }

      if (newCount % 7 === 0) {
        // Decrement by 10 on Divisibility by 7: If the counter becomes divisible by 7, the value should be reduced by 10 units
        return { count: newCount - 10 };
      }

      return { count: newCount };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="app-container">
        <h1 className="Top-heading">VDart Assignment</h1>
        <div className="content-container">
          <h1 className="heading">Counter</h1>
          <h1 className="counter">{count}</h1>
          <div>
            <button
              className="decrease-button"
              type="button"
              onClick={this.onDecrement}
            >
              Decrease
            </button>
            <button
              className="increase-button"
              type="button"
              onClick={this.onIncrement}
            >
              Increament
            </button>
          </div>
        </div>
        <div className="Question">
          React-based counter application with specific functionalities
        </div>
      </div>
    );
  }
}
export default CounterApp;
