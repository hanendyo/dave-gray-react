import React, { useEffect, useState } from "react";
import JsonContentButton from "./JsonContentButton";
import JsonListItems from "./JsonListItems";
import JsonTable from "./JsonTable";

const JsonContent = () => {
  const API_URL = "https://jsonplaceholder.typicode.com";
  const [apiUrl, setApiUrl] = useState(API_URL);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [buttonName, setButtonName] = useState("");

  const fetchItems = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw Error(`Error: expected data not recieved`);
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading();
    }
  };

  useEffect(() => {
    setApiUrl(`${API_URL}/${buttonName}`);
    fetchItems();
  }, [buttonName, apiUrl]);

  return (
    <main>
      <div className="jsonButton">
        <JsonContentButton
          items={items}
          setButtonName={setButtonName}
          buttonName={"users"}
          fetchItems={fetchItems}
        />
        <JsonContentButton
          items={items}
          setButtonName={setButtonName}
          buttonName={"posts"}
          fetchItems={fetchItems}
        />
        <JsonContentButton
          items={items}
          setButtonName={setButtonName}
          buttonName={"comments"}
          fetchItems={fetchItems}
        />
      </div>
      {isLoading && <p style={{ margin: "auto" }}>Loading...</p>}
      {fetchError && (
        <p style={{ margin: "auto" }}>
          Data not loaded correctly, <br /> or try click some button.
        </p>
      )}
      {!isLoading && !fetchError && (
        <>
          <div className="jsonList">
            {/* <JsonListItems items={items} /> */}
            <JsonTable items={items} buttonName={buttonName} />
          </div>
        </>
      )}
    </main>
  );
};

export default JsonContent;
