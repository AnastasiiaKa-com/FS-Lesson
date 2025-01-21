import './myButton.css'

function MyButton ({text, functionForButton}){

    return <button onClick = {functionForButton} className="myButton"> (text)</button>;
    
}
export default MyButton 