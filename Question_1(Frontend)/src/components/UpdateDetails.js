import { useState } from "react";
import "../App.css";

export default function UpdateDetails() {
  const [formData, setFormData] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });

  const [data, setData] = useState({});
  const [res, setRes] = useState(0);

  const onChangeId = (event) => {
    setFormData((i) => ({ ...i, id: event.target.value }));
  };

  const onChangeUserId = (event) => {
    setFormData((i) => ({ ...i, userId: event.target.value }));
  };

  const onChangeBody = (event) => {
    setFormData((i) => ({ ...i, body: event.target.value }));
  };

  const onChangeTitle = (event) => {
    setFormData((i) => ({ ...i, title: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { id, userId, title, body } = formData;

    const r1 = await fetch(`http://114.31.28.234:3001/post/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, title, body }),
    });
    const r2 = await r1.json();
    console.log(r1,r2);
    setData(r2);
    setRes(1);
  };

  const getForm = () => {
    return (
      <>
        <h1>Enter Details</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">Id:</label>
          <input
            type="number"
            id="id"
            name="Id"
            value={formData.id}
            onChange={onChangeId}
          />
          <br />

          <label htmlFor="userid">User ID:</label>
          <input
            type="integer"
            id="userid"
            name="User Id"
            value={formData.userId}
            onChange={onChangeUserId}
          />
          <br />

          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="Title"
            value={formData.title}
            onChange={onChangeTitle}
          />
          <br />
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            id="body"
            name="Body"
            value={formData.body}
            onChange={onChangeBody}
          />
          <br />

          <button type="submit">Update</button>
        </form>
      </>
    );
  };

  const getDetails = () => {
    return (
      <div>
        <h1>Updated Details Successfully</h1>
        <p>Id : {data.id}</p>
        <p>UserId : {data.userId}</p>
        <p>Title : {data.title}</p>
        <p>Body : {data.body}</p>
      </div>
    );
  };

  return <div>{res === 0 ? getForm() : getDetails()}</div>;
}
