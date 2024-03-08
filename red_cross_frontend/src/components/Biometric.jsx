

function Biometric({handleClick,handleChange}){
    return(
        <>
            <form action="submit">
                <input type="text" onChange={handleChange} />
                <button onClick={handleClick}>go ahead!</button>
            </form>
        </>
    )
}

export default Biometric;