import { useState } from "react";
import { useLocation } from 'wouter';
import useAuthStore from "../../store";
import './index.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [location, navigate] = useLocation();
  console.log('location', location);
 //const navigate = useNavigate();
  const signIn = useAuthStore((state) => state.signIn);

  const submitHandler = async (e) => {
    e.preventDefault();
    let endpoint = '';

    if (location.includes('admin')) {
      endpoint = 'http://localhost:3000/api/v1/auth/login';
    } else if (location.includes('user')) {
      endpoint = 'http://localhost:3000/api/v1/auth/user';
    }

    await signIn(email, password, endpoint);
    navigate(location.includes('admin') ? '/admin-dashboard' : '/user-dashboard');  };

  return (
    <>
      <div className="form-container">
        <div>
          <h2>Inicia Seccion en Soporte Aisoft Cloud</h2>
          <img src="" alt="logo Aisoft"></img>
        </div>
        <div className="card">
          <form onSubmit={submitHandler}>
            <span>Dirección de correo electrónico</span>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span>Contraseña</span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login-button" type="submit">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;