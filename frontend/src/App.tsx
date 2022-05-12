import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'paginas/Listagem';
import Form from 'paginas/Formulario';
import Navbar from "componentes/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;