import TerminalNav from './components/TerminalNav'
import { useEffect, useState } from 'react'
import styles from './styles/Dashbord.module.css'

function Dashbord({id}){

    const [infoCard,setInfoCard] = useState('Medical History')
    const [reports,setReports] = useState([])
    const [personal,setPersonal] = useState()
    const [after,setAfter] = useState('Medical History')
    

    useEffect(()=>{
        if(infoCard == 'Medical History'){
            fetchMedHist(id);

        }else{
            fetchInfo(id)
        }
    },[infoCard])

    useEffect(()=>{
        fetchMedHist(id);
    },[])

    
    const fetchInfo = async (id) =>{
        //console.log("The id is",id);
        try{
            console.log(id?id:"blk id nhi fetch kar paa raha hai lowdu") //Mc id fetch ho jane se khatwa ho jayega kya bc
            const response = await fetch(`http://localhost:3000/personal/${id}`);
            if(response.ok){
                const jsonData = await response.json();
                console.log(jsonData);
                //const {name, blood_group, age, contact, emergency_contact, allergic_medicines} = jsonData.patientInfo
                setPersonal(jsonData);
                setAfter('Personal Record');
            }
        }catch(err){
            console.error("The error is:",err);
        }
        
    }

    const fetchMedHist = async (id) =>{
        //console.log("The id is",id);
        try{
            const response = await fetch(`http://localhost:3000/medhist/${id}`);
            if(response.ok){
                const jsonData = await response.json();
                //console.log(jsonData.patientReport);
                console.log(jsonData.patientReport);
                setReports(jsonData.patientReport);
                setAfter('Medical History');
            }
        }catch(err){
            console.error("The error is:",err);
        }
        
    }

    const displayReports = (report) => {
        return(
            <div className={styles.containReport}>
                <div className={styles.med_head}><div className={styles.head_content}>Date</div><div className={styles.head_content}>Diagonosis</div><div className={styles.head_content}>Doctor</div></div>
                 { report.map((item,index)=>{
                return(<div key={index} className={styles.content_row}>
                    <div className={styles.content}>
                        {item.date}
                    </div>
                    <div className={styles.content}>
                        {item.document}
                    </div>
                    <div className={styles.content}>
                        {item.doctor}
                    </div>
                </div>)
                })}
            </div>
          
        )
    }

    const displayPersonal = (personal) =>{

        const {name, blood_group, age, contact, emergency_contact, allergic_medicines} = personal

        return(
            <div>
                <h3>Name: {name}</h3>
                <h3>Blood Group: {blood_group}</h3>
                <h3>Age: {age}</h3>
                <h3>Contact: {contact}</h3>
                <h3>Emergency Contact: {emergency_contact}</h3>
                <h3>Alergic Medicine: {allergic_medicines}</h3>
            </div>
        )
    }

    let role = "doctor"
    return(
        <div className={styles.super_contain}>

            <div className={styles.nav_bar}>
             <TerminalNav role={role} ></TerminalNav>
            </div>
            <div className={styles.btn}>
                <button className={styles.click} onClick={()=>{setInfoCard('Personal Record')}}>Personal Records</button>
                <button className={styles.click} onClick={()=>{setInfoCard('Medical History')}}>Medical History</button>
            </div>
            
            <div className={styles.contain}>
                { after == 'Medical History' ? displayReports(reports) : displayPersonal(personal)}
            </div>

        </div>
    )
}

export default Dashbord;