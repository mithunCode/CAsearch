/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import axios from "axios";
const UserContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://mithuncode.github.io/caApii/CA.json")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};

export default UserContextProvider;
