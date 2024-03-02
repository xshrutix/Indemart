import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; import Home from './pages/home';
import AllCategories from "./pages/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<AllCategories />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App