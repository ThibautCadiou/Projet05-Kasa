import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageLogement from "./pages/PageLogement";

import Propos from "./pages/Propos";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logementsData from "./datas/logements.json";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="propos" element={<Propos />} />
                <Route path="*" element={<PageNotFound />} />
                {logementsData.map((logement) => (
                    <Route path={"/" + logement.id} key={logement.id} element={<PageLogement logementObj={logement} />} />
                ))}
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
