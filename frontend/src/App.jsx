import { useState } from "react";
import UserList from "./components/UserList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="add" element={<AddUser />} />
            <Route path="edit/:id" element={<EditUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
