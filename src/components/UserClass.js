import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      userInfo: {
        name: "Dummy",
        location: "abc",
        avatar_url: "https://dummy_url.com"
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/poornima3");
    const json = await data.json();

    this.setState({
      userInfo: json
    })

    console.log('---------', json)

    this.timer = setInterval(() => {
      console.log("in set time interval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update")
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log('component did unmount')
  }

  render() {

    // const { name, location } = this.props;
    const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            })
          }}
        >
          Count Increase
        </button>
        {/* <h1>Count2: { count2 }</h1> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location }</h3>
        <h4>Image: <img src={ avatar_url } /></h4>
      </div>
    )
  }
}

export default UserClass;