import  { useContext } from 'react'
import { Authcontext } from '../context/Context';
import { useNavigate } from 'react-router';

const Admin = () => {
  const {setAuthUsers, setAdminUser} = useContext(Authcontext);
  const navigate = useNavigate()
  const logout = () => {
    // localStorage.removeItem("auth")
    setAuthUsers(false)
    setAdminUser(false)

    navigate('/login');
  }
  return (
    <div>
      Admin
      <button onClick={logout} >Logout</button>
    </div>
  )

}

export default Admin
