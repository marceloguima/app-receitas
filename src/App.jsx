import React from "react";
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import RecipeDetail from './pages/RecipeDetail'
import AIRecipeGenerator from './pages/AIRecipeGenerator'
import Favorites from './pages/Favorites'
import Settings from './pages/Settings'
import About from './pages/About'

export default function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes" element={<Recipes />} />
                        <Route path="/recipes/:id" element={<RecipeDetail />} />
                        <Route path="/ai" element={<AIRecipeGenerator />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}
