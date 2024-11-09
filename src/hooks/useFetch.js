import axios from "axios";
import { useState, useEffect } from "react";

//for hidding url, then make .env file, then add to gitignore
const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

//use endpoint so we don't have to write the url everytime
const useFetch = (endpoint, method = "GET", requestData = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServererror] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setServererror(null);

      try {
        //automatically get the url from the endpoint and also headers request from the api url, update the method and data
        const resp = await axios({
          url: `${API_URL}${endpoint}`,
          method: method,
          data: requestData,
          headers: {
            "Content-Type": "application/json",
            "api-key": API_KEY,
          },
        });

        //get the data from the api
        const data = await resp.data.data;
        console.log("API Response:", resp);
        console.log("API Data", resp.data); //array of objects {id, title, description}

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServererror(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
        console.log(
          `finally useFetch, method:${method}, endpoint: ${endpoint}`
        );
      }
    };

    fetchData(); //call fetchData
  }, [endpoint, method, requestData]); //if the endpoint, method, or requestData changes, the useEffect will be triggered

  return { isLoading, apiData, serverError };
};

export { useFetch };
