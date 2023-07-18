import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormInput from "./Components/FormInput/FormInput,";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormInput/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
