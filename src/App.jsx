import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import CustomPage from "./components/Customizer/CustomPage.jsx";

const App = () => {
    return (
        <main>

            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="components/Customizer/CustomPage" element={<CustomPage />}/>
                </Routes>
            </Router>
        </main>
    )
}
export default App
