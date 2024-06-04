import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Propos from "./pages/Propos";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <div>
            <h1>Mega Title de la mort qui tue</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="propos" element={<Propos />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
            <footer>
                <p>Logo KASA</p>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
}

export default App;
