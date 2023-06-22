import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import GetDetail from "./components/GetDetail";
import GetDetails from "./components/GetDetails";
import DeleteDetails from "./components/DeleteDetails";
import UpdateDetails from "./components/UpdateDetails";
import InsertDetails from "./components/InsertDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<GetDetail />} />
        <Route exact path="/post-delete" element={<DeleteDetails />} />
        <Route exact path="/post-add" element={<InsertDetails />} />
        <Route exact path="/post-detail" element={<GetDetails />} />
        <Route exact path="/post-update" element={<UpdateDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
