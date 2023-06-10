import React from "react";

const JsonTableCell = ({ item, buttonName }) => {
  return (
    <>
      {buttonName === "users" && (
        <>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{JSON.stringify(item.address)}</td>
          <td>{JSON.stringify(item.company)}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.username}</td>
          <td>{item.website}</td>
        </>
      )}
      {buttonName === "posts" && (
        <>
          <td>{item.userId}</td>
          <td>{item.title}</td>
          <td>{item.body}</td>
        </>
      )}
      {buttonName === "comments" && (
        <>
          <td>{item.postId}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.body}</td>
        </>
      )}
    </>
  );
};

export default JsonTableCell;
