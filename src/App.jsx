import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; import Home from './pages/home';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App