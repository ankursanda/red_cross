

function Biometric({handleClick,handleChange}){
    return(
        <>
        
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>go ahead!</button>
        </>
    )
}

export default Biometric;