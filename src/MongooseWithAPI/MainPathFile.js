import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

const MainPathFile = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainPathFile;
