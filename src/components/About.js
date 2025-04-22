import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <h1>About Us</h1>
        <div>
          Logged In User
          <UserContext.Consumer>{({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser }</h1> }</UserContext.Consumer>
        </div>
      <h3>This is About us page built using Class based components</h3>
      <User name={"Poornima (functional)"} />
      <UserClass name={"Poornima (class based)"} location={"Bangalore (class)"} />
    </div>
  )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h3>This is About us page</h3>
//       <User name={"Poornima (functional)"} />
//       <UserClass name={"Poornima (class based)"} location={"Bangalore (class)"} />
//     </div>
//   )
// }

export default About;