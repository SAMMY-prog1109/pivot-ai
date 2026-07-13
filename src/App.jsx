import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Reflection from "./pages/Reflection";

function App() {
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/story" element={<Story />} />
  <Route path="/reflection" element={<Reflection />} />
</Routes>
  );
}

export default App;