import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MuiDemo } from "./components/MuiDemo";
import { Container } from "@mui/material";
import { CustomDrawer } from "./components/CustomDrawer";

function App() {
  return (
    <>
      <CustomDrawer></CustomDrawer>
      <Container className="App">
        <Routes>
          <Route path="/" element={<MuiDemo />} />
          <Route path="*" element={<h1>4040404040404</h1>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
