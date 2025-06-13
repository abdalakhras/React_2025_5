import '../style/nav.css'
import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <nav>
            <ul id='navUl'>
                <li className='txtDcrtion navLi'>
                    <Link className='txtDcrtion' to='/'>Home</Link>
                    </li>
                <li  className='txtDcrtion navLi'>
                    <Link to='/greetings'>Greetings</Link>
                    </li>

                
            </ul>
        </nav>
    )
} 