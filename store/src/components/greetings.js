import ObjectasicModal from "./objectModal"
import PrimarySearchAppBar from "./appbar"

// this is an Arrow function ,,, the same as the one above
const greetingStyle = {
    color : "red",
    fontSize : "40px",
    border : "5px solid green",
}
const Greetings = (prop)=>{

    return(
        <>
        <PrimarySearchAppBar/>
        <p style={greetingStyle}>welcome {prop.name} {prop.age}</p>

        <ObjectasicModal/>
        </>
    )

}
export default Greetings