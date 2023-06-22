import { useState } from "react";
import "../App.css";

export default function DeleteDetails() {
  const [id, setId] = useState("");
  const [res, setRes] = useState(0);

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const r1 = await fetch(`http://114.31.28.234:3001/post/${id}`, {
      method: "DELETE"
    });
    const r2 = await r1.json();
    console.log(r1,r2);
    setRes(1);
  };

  const getForm = () => {
    return (
      <>
        <h1>Enter ID to delete</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">Id:</label>
          <input
            type="number"
            id="id"
            name="Id"
            value={id}
            onChange={onChangeId}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  };

  const getDetails = () => {
    return (
      <div>
        <h1>Deleted Details Successfully</h1>
        <p>check here <a href="http://114.31.28.234:3001/post">http://114.31.28.234:3001/post</a></p>
      </div>
    );
  };

  return <div>{res === 0 ? getForm() : getDetails()}</div>;
}
