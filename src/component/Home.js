import React, {useState, useEffect} from 'react'


 function Home(){
    const [count,setCount] = useState(100)

    useEffect(() => {
        console.warn(count)
    }, [count])

    return (
        <div>
            <h1>Home Component {count}</h1>
            <button onClick={()=>{setCount(count-1)}}>count increase</button>
        </div>
    )
}


export default Home