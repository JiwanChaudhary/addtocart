import "./App.css";
import data from "./components/back/data/Data";
import Header from "./components/front/Header/Header";
import { BrowserRouter } from "react-router-dom"

function App() {

  const { productItems } = data;

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
