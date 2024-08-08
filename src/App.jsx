// Mengimpor komponen yang dibutuhkan dari folder components dan pages
import Container from './components/Container'; // Mengimpor komponen Container dari folder components
import Navbar from './components/Navbar'; // Mengimpor komponen Navbar dari folder components
import Footer from './components/Footer'; // Mengimpor komponen Footer dari folder components
import Home from './pages/home'; // Mengimpor komponen Home dari folder pages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Mengimpor Router, Route, dan Routes dari react-router-dom untuk routing
import About from './pages/about'; // Mengimpor komponen About dari folder pages


function App() { // Mendefinisikan fungsi komponen utama App
  return (
    <> {/* Fragment untuk membungkus elemen */}
      <Router> {/* Membungkus aplikasi dengan Router untuk mendukung routing */}
        <Navbar /> {/* Menampilkan komponen Navbar */}
        <Container> {/* Menampilkan komponen Container yang membungkus Routes */}
          <Routes> {/* Membungkus semua Route yang ada di aplikasi */}
            <Route path='/' element={<Home />} />  {/* Mendefinisikan route untuk path '/' yang menampilkan komponen Home */}
            <Route path='/about' element={<About />} />  {/* Mendefinisikan route untuk path '/about' yang menampilkan komponen About */}
          </Routes>       
        </Container>
        <Footer /> {/* Menampilkan komponen Footer */}
      </Router>
    </>
  )
}

export default App; // Mengekspor komponen App agar bisa digunakan di file lain
