import { Link } from "react-router-dom";
import '../style/footer.css'
import ColorButtons from "./colorButton";
export default function Footer (){
    return(
        <footer className="footer">
            <ul id="footerul">
                <li className="footerli">
                    <Link className='txtDcrtion' to='/'>Home</Link>
                    </li>
                <li className="footerli">
                    <Link to='/greetings'>Greetings</Link>
                    </li>

                <li className="footerli">
                    <Link className='txtDcrtion' to = '/newComponent'>NewComponent</Link>
                </li>
                <li className="footerli">
                    <Link to='/objectMaptest'>objectMapTest</Link>
                </li>
                <li className="footerli">
                    <Link to= '/table'>table</Link>
                </li>
            <li className="footerli">
                <Link to='/facts'>Facts</Link>
            </li>
            <li className="footerli">
                <Link to='/todocomponent'>ToDoComponent</Link>
            </li>
            <li className="footerli">
                <Link to='/todo'>ToDooooo</Link>
            </li>
            </ul>
        </footer>
    )
}