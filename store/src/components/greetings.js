
// export default function Greetings(props){
//     return (
//         <>
//         <p>welcome {props.name}</p>
//         </>
//     )

// } 


// this is an Arrow function ,,, the same as the one above
const greetingStyle = {
    color : "red",
    fontSize : "40px",
    border : "5px solid green",
}
const Greetings = (prop)=>{

    return(
        <>
        <p style={greetingStyle}>welcome {prop.name} {prop.age}</p>
        </>
    )

}
export default Greetings