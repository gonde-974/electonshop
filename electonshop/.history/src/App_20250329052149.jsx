import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import CategoryComponents from "./components/CategoryComponents";
import Navbar from "./components/Navbar";

function App() {
    const [showHome, setShowHome] = useState(true);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <button 
                    onClick={() => setShowHome(false)} 
                    className="px-4 py-2 bg-red-500 text-white rounded-lg m-4 hover:bg-red-700"
                >
                    Сокриј Home
                </button>
                <Routes>
                    <Route path="/" element={showHome ? <HomeComponent /> : null} />
                    <Route path="/category" element={<CategoryComponents />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
