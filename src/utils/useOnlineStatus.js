import { useState, useEffect } from "react";

const useOnlineStatus = () => {

  const [onlineStatus, setOnlineStatus] = useState(true);
  // Check if the user is online

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, [])

  // Should be a boolean value
  return onlineStatus;
}

export default useOnlineStatus;