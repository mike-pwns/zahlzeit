
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenuPage from './pages/MainMenuPage.tsx';
import ZiffernPage from "./pages/ZiffernPage.tsx";
import UhrzeitPage from "./pages/UhrzeitPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainMenuPage/>}/>
                <Route path="/ziffern" element={<ZiffernPage/>}/>
                <Route path="/uhrzeit" element={<UhrzeitPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;