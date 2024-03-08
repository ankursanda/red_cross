import TerminalNav from './components/TerminalNav'

function Dashbord(){

    const [infoCard,setInfoCard] = useState('Medical History')

    useEffect(()=>{

    },[infoCard])

    let role = "doctor"
    return(
        <>
            <TerminalNav role={role} ></TerminalNav>

        </>
    )
}

export default Dashbord;