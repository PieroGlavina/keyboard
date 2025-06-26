import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import CustomizerPage from "./components/Customizer/CustomizerPage.jsx";

const App = () => {
    return (
        <main>

            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="components/Customizer/CustomizerPage" element={<CustomizerPage />}/>
                </Routes>
            </Router>
        </main>
    )
}
export default App
