import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Reflection from "./pages/Reflection";
import Loading from "./pages/Loading";
import Results from "./pages/Results";

function App() {
  return (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/story" element={<Story />} />
  <Route path="/reflection" element={<Reflection />} />
  <Route path="/loading" element={<Loading />} />
  <Route path="/results" element={<Results />} />
</Routes>
  );
}

export default App;