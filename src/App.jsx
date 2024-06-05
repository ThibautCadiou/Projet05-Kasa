import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Propos from "./pages/Propos";
import PageNotFound from "./pages/PageNotFound";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Banner />

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
