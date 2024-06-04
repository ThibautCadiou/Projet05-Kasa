import { BrowserRouter, Routes, Route } from "react-router-dom";
import Propos from "/pages/Propos.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="propos" element={<Propos />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
