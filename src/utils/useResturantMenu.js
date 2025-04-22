import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useResturantMenu = (id) => {

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    setResInfo(json.data);
  }

  return resInfo;
}

export default useResturantMenu;