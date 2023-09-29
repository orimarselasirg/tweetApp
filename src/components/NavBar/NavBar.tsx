import './navbar.css'
import { Profile } from '../Profile/Profile'

interface Props {
  user?: string;
  picture?: string
}

export const NavBar = ({picture, user}: Props) => {
  return (
    <div className='navbarContainer'>
      <Profile image={picture} name={user}/>
    </div>
  )
}
