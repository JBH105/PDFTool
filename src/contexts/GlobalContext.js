import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import dotenv from "dotenv";
import S3 from "aws-sdk/clients/s3";
dotenv.config();

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [global, setGlobal] = useState({
    serverURL: "https://api.pdftool.in",
  });
  const [selectTab, setSelectTab] = useState();
  const [cropURL, setCropURL] = useState("");
  const [loader, setLoader] = useState(false);

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

  const CropFile = async (data) => {
    setLoader(true);
    invokeServer("post", "/api/crop-pdf/", data)
      .then((result) => {
        if (result?.data) {
          result.data.file_url = global.serverURL + result?.data?.file_path;
          setCropURL(result.data);
          setLoader(false);
        }
      })
      .catch((error) => {
        setLoader(false);
      });
  };

  const DeleteFile = async (data) => {
    try {
      setLoader(true);
      await invokeServer("get", `/api/download-cropped-pdf/${data}/`);
      setLoader(false);
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        invokeServer,
        selectTab,
        setSelectTab,
        CropFile,
        cropURL,
        setCropURL,
        loader,
        setLoader,
        DeleteFile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
