import { useEffect,useState } from "react";
import '../App.css';

export default function GetDetail() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const d1= await fetch('http://114.31.28.234:3001/post');
      const d2= await d1.json();
      console.log(d2);
      setData(d2);
    };

  return (
    <>
    <h1>Details Fetched Succesfully</h1>
    <ul className="ul1">
        {data.map(i=>{
            return(
                <li key={i.id}>
                    <p>ID: {i.id}</p>
                    <p>User ID: {i.userId}</p>
                    <p>Title: {i.title}</p>
                    <p>Body: {i.body}</p>
                </li>
            )
        })}
    </ul>
    </>
  );
}
