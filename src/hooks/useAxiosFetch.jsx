import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosFetch = (dataUrl) => {
  const [fetchData, setFetchData] = useState(
    JSON.parse(localStorage.getItem("postList")) || []
  );
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchDataFunction = async (url) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url, { cancelToken: source.token });
        if (isMounted) {
          setFetchData(response.data);
          localStorage.setItem("postList", JSON.stringify(response.data));
          setFetchError(null);
        }
      } catch (error) {
        if (isMounted) {
          setFetchError(error.message);
          setFetchData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchDataFunction(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { fetchData, fetchError, isLoading };
};

export default useAxiosFetch;
