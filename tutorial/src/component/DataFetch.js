import React, {useState, useEffect}  from "react"
import axios from 'axios'

function DataFetch(){

    const [posts, setPosts] = useState([])

    useEffect(() =>{
       
       //normal fetch data
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
            

       // axios fetch data
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res =>{
        //         console.log(res)
        //         setPosts(res.data)
        //     })
        //     .catch(err =>{
        //         console.log(err)
        //     })
    },[])
     
    return(
        <div>
            <ul>
                {
                    posts.map(posts => <li key={posts.id}>{posts.title}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetch