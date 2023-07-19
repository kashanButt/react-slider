import Container from "./Components/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./Components/ProductPage/index";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/product-page" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
