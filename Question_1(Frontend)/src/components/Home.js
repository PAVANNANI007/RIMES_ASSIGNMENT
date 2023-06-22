import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <h1>CRUD OPERATIONS</h1>

      <div id="buttons-container">
        <Link to ="/post-add"><button type="button" class="button">Insert</button></Link><br></br>
        <Link to ="/post-update"><button type="button" class="button">Update</button></Link><br></br>
        <Link to ="/post-delete"><button type="button" class="button">Delete</button></Link><br></br>
        <Link to ="/posts"><button type="button" class="button">GET</button></Link><br></br>
        <Link to ="/post-detail"><button type="button" class="button">GET with param</button></Link>
      </div>
    </div>
  );
}

export default Home;