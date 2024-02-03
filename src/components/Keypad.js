// Code Keypad Component Here

function Keypad (){
    const handleChange = () => {
        console.log('Entering password...');
      };
      
    return (
        <div>
            <label>Password</label>
            <input type="password" onChange={handleChange}></input>
        </div>
    )
}

export default Keypad;