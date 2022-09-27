import React,{useState} from 'react'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({}
        // {email:'shahin@gmail.com'}
        // name: 'Shahin',
        // email: 'sm.feroj@gmail.com',
    );


  return (
    <> 
    {user.email? <Outlet/>: navigate('/signup')} 
    
    </>
  )
}

export default PrivateRoute