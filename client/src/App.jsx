import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./Users";
import CreateUsers from "./CreateUsers";
import UpdateUsers from "./UpdateUsers";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUsers />} />
          <Route path="/update/:id" element={<UpdateUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
