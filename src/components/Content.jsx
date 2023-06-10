import ItemList from "./ItemList";

const Content = ({ items, setItems, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ margin: "auto" }}>Your list is empty.</p>
      )}
    </>
  );
};

export default Content;
