import {Link} from 'react-router-dom'
import './Nav.css'
const Nav = () =>
{
    return(
        <>
            
            
            <div >
                <Link className='hi' to='/home'>Home</Link>
                <Link className='hi' to='/about'>About</Link>
                <Link className='hi' to='/gallary'>Gallary</Link>
            </div>
        </>
    )
}

export default Nav;