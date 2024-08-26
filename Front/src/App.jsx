
import { Route, Switch } from 'wouter';
import './App.css';
import Login from './components/login';
import AdminDashboard from './components/adminDasboard';

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route path='/login-admin'>
            <Login />
          </Route>
          <Route path='/login-user'>
            <Login />
          </Route>
          <Route path='/admin-dashboard'>
            <AdminDashboard />
          </Route>
          <Route path='/user-dashboard'>
            {/* Componente para el dashboard del usuario */}
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
