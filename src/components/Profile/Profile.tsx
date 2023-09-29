import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import logo  from  '../../assets/logoPostApp.png'
import './profile.css'

interface Props {
  name: string | undefined
  image: string | undefined
}

export const Profile = ({name, image}: Props) => {
  const { logout } = useAuth0();

  const [menu,setMenu] = useState(false)
  return (
    <div className='profileContainer'>
      {/* <div>
      </div> */}
        <img src={logo} alt={logo} width={70} height={75}/>
      <div className='infoUserContainer'>
        <h3>Bienvenid@, {name}</h3>
        <img 
          src={image ? image :'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' } 
          alt={name} 
          className='profileImage'
          onClick={()=> setMenu(!menu)}
        />
      </div>
        <div className={`menuElement ${menu ? 'visible' : ''}`}>
          <div className='logoutButton' onClick={()=> logout()}>
            <span style={{fontSize: 14, fontWeight: 600, color: 'black'}}>Logout</span>
          </div>
        </div>
    </div>
  )
}
