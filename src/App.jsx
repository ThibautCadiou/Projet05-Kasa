import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Propos from "./pages/Propos";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="propos" element={<Propos />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
