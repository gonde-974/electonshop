import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import CategoryComponents from "./components/CategoryComponents";
import Navbar from "./components/Navbar"; // Доколку имаш навбар
import Footer from "./components/Footer"; // Доколку имаш футер

function App() {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar /> {/* Навбар кој секогаш се прикажува */}

                <main className="flex-grow p-4">
                    <Routes>
                        <Route 
                            path="/" 
                            element={!showCategories ? <HomeComponent /> : null} 
                        />
                        <Route 
                            path="/categories" 
                            element={<CategoryComponents setShowCategories={setShowCategories} />} 
                        />
                    </Routes>
                </main>

                <Footer /> {/* Футер кој секогаш се прикажува */}
            </div>
        </Router>
    );
}

export default App;
