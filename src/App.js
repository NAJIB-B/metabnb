import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.component";
import Place_to_stay from "./routes/place_to_stay.component";
import Nav_and_footer from "./routes/nav_and_footer.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav_and_footer></Nav_and_footer>}>
        <Route index element={<Home></Home>}></Route>
        <Route
          path="placeToStay"
          element={<Place_to_stay></Place_to_stay>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
