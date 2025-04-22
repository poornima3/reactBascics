import { useEffect } from "react"

const User = ({ name }) => {
  

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("set time out");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useEffect return")
    }
  }, [])

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Bangalore</h3>
      <h4>Contact: 31poornima</h4>
    </div>
  )
}

export default User