import { useState } from "react";
import "../App.css";

export default function GetDetails() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [res, setRes] = useState(0);

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const d1 = await fetch(`http://114.31.28.234:3001/post?id=${id}`);
    const d2 = await d1.json();
    setData(d2);
    setRes(1);
  };

  const getForm = () => {
    return (
      <>
        <h1>Enter ID to get Details</h1>
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
        <h1>Details Fetched Succesfully With ID Parameter</h1>
        <ul className="ul1">
          {data.map((i) => {
            return (
              <li key={i.id}>
                <p>ID: {i.id}</p>
                <p>User ID: {i.userId}</p>
                <p>Title: {i.title}</p>
                <p>Body: {i.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return <div>{res === 0 ? getForm() : getDetails()}</div>;
}
