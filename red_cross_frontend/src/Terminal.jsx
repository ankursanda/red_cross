import TerminalNav from "./components/TerminalNav";
import Biometric from "./components/Biometric"

function Terminal(){
    
    const [biometricId,setBiometricId] = useState('');

    const handleClick = (e) =>{
        console.log("clicked")
        console.log(biometricId);
    }
    //needs to change and move up the tree.

    const handleChange = (e) => {
        e.preventDefault();
        setBiometricId(e.target.value);
    }
    let role = "doctor"
    
    return(
        <>
            <TerminalNav role={role} />
            <Biometric handleClick = {handleClick} handleChange={handleChange} />
        </>
    )
}

export default Terminal;