import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import CategoryComponents from "./components/CategoryComponents";
import NavBarComponent from './components/NavBarComponent'
// import Footer from "./components/Footer"; // Доколку имаш футер

function App() {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <NavBarComponent /> {/* Навбар кој секогаш се прикажува */}

                <main className="flex-grow p-4">
                    <Routes>
                        <Route 
                            path="/" 
                            element={!showCategories ? <Homepage /> : null} 
                        />
                        <Route 
                            path="/categories" 
                            element={<CategoryComponents setShowCategories={setShowCategories} />} 
                        />
                    </Routes>
                </main>

                {/* <FooterComponent /> Футер кој секогаш се прикажува */}
            </div>
        </Router>
    );
}

export default App;
