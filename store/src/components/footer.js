import { Link } from "react-router-dom";
import '../style/footer.css'

export default function Footer (){
    return(
        <footer className="footer">
            <ul>
                <li>
                    <Link className='txtDcrtion' to='/'>Home</Link>
                    </li>
                <li>
                    <Link to='/greetings'>Greetings</Link>
                    </li>

                <li></li>
                <li></li>
            </ul>
        </footer>
    )
}