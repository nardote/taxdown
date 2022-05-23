import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./Pages/SignIn/SignIn";
import Taxes from "./Pages/Taxes/Taxes";
import Tax from "./Pages/Tax/Tax";
import Form from "./Pages/Tax/Form";
import Submissions from "./Pages/Tax/Submissions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/taxes" element={<Taxes />} />
        <Route path="/tax/:id" element={<Tax />}>
          <Route index element={<Form />} />
          <Route path="submissions" element={<Submissions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
