import { Link } from "react-router-dom";
import '../style/footer.css'
import ColorButtons from "./colorButton";
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

                <li>
                    <Link className='txtDcrtion' to = '/newComponent'>NewComponent</Link>
                </li>
                <li>
                    <Link to= '/table'>table</Link>
                </li>
            <ColorButtons/>
            </ul>
        </footer>
    )
}