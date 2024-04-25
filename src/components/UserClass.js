import React from "react";
import UserContext from "../utils/userContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h1>I am a class based component</h1>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <button
          onClick={() =>
            this.setState({
              count: count + 1,
            })
          }
        >
          count increase
        </button>
        <h4>Count: {count}</h4>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default UserClass;
