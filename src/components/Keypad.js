// Code Keypad Component Here

function Keypad (e){
    function passwordFunction(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={passwordFunction} type="password" />
        </div>
    )
}

export default Keypad;