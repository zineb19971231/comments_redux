import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Messages from "./components/Messages";
import AddMessage from "./components/AddMessage";
import ModifyMessage from "./components/ModifyMessage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Messages} ></Route>
          <Route path="/add" element={<AddMessage/>} ></Route>
          <Route path="/modify/:id" element={<ModifyMessage/>} ></Route>
        </Routes>
      </BrowserRouter>
    </> 
  );
}

export default App;
