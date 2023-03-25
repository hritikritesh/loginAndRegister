import React,{ useEffect, useState } from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {

    const [photoData, setPhotoData] = useState(null)
    useEffect(() => {
        fetchPhoto()

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=dh1phaGCOFYz9S0Bjriu5skach5XbQRWZOUc7pCZ`
            )
            const data = await res.json()
            console.log(data)
            setPhotoData(data)
        }
    }, [])

    if(!photoData) return <div></div>

    return(
        <div className="homepage">
            <img src={photoData.hdurl} alt={photoData.title}></img>
            <div>
                <h1>{photoData.title}</h1>
                <p>{photoData.date}</p>
                <p>{photoData.explanation}</p>
            </div>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
}

export default Homepage