import React, { useState } from "react"
import Greeter from './Greeter'


const App = () => {
    const [username, setUsername] = useState('')

    return (
        <>
            <Greeter
                phrase1="Hello there" name1="Cameron"
                phrase2="Goodevening" name2="Kj"
                phrase3="How are you doing" name3="Camille"
            />
            <input value = {username} onChange={e => setUsername(e.target.value)} />
            <p>You are logging in as {username}</p>
        </>
    )
}

export default App;