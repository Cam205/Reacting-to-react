import React, { useState } from "react"
import Greeter from './Greeter'


const App = () => {
    const [username, setUsername] = useState('')
    const [hasLoaded, setLoaded] = useState(false)

    if (hasLoaded) {
        return (
            <>
                <Greeter
                    phrase1="Hello there" name1="Cameron"
                    phrase2="Goodevening" name2="Kj"
                    phrase3="How are you doing" name3="Camille"
                />
                <div class = "container">
                <input value={username} onChange={e => setUsername(e.target.value)} />
                <p>You are logging in as {username}</p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1>Website loading...</h1>
 
                <button className = "btn btn-primary" onClick={() => setLoaded(true)}>Load Website</button>
            </>
        )
    }
}

export default App;