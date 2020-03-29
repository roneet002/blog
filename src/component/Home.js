import React, {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'


 function Home(){
    const [count,setCount] = useState(100)

    useEffect(() => {
        console.warn(count)
    }, [count])

    return (
        <div>
            <h1>Home Component {count}</h1>
            <Button onClick={()=>{setCount(count-1)}}>count increase</Button>
        </div>
    )
}


export default Home