import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlvidePassword from './paginas/OlvidePassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import NuevoPassword from './paginas/NuevoPassword';


const App = () => {




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='registrar' element={<Registrar />} />
          <Route path='olvidePassword' element={<OlvidePassword />} />
          <Route path='olvidePassword/:token' element={<NuevoPassword />} />
          <Route path='confirmar/:id' element={< ConfirmarCuenta />} />
        </Route >
      </Routes>
    </BrowserRouter >
  );
};

export default App;
