import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import S3 from "aws-sdk/clients/s3";
dotenv.config();

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [global, setGlobal] = useState({
    serverURL: "http://localhost:8080",
  });
  const [selectTab, setSelectTab] = useState();

  const s3 = new S3({
    region: "ap-south-1",
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY,
    signatureVersion: "v4",
  });

  const invokeServer = useCallback(
    async (method, route, data) => {
      if (method === "post") {
        return axios.post(global.serverURL + route, data);
      } else if (method === "get") {
        return axios.get(global.serverURL + route);
      } else if (method === "put") {
        return axios.put(global.serverURL + route, data);
      } else if (method === "delete") {
        return axios.delete(global.serverURL + route);
      }
    },
    [global.serverURL]
  );

  return (
    <GlobalContext.Provider
      value={{
        invokeServer,
        selectTab,
        setSelectTab,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
