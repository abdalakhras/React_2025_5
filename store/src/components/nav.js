import '../style/nav.css'
import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <nav>
            <ul>
                <li className='txtDcrtion'>
                    <Link className='txtDcrtion' to='/'>Home</Link>
                    </li>
                <li>
                    <Link to='/greetings'>Greetings</Link>
                    </li>

                <li></li>
                <li></li>
            </ul>
        </nav>
    )
} 