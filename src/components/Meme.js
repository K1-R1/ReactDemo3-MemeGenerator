import memesData from "../memesData"
import { useState } from "react"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randonNumber = Math.floor(Math.random() * memesArray.length)
        const { url } = memesArray[randonNumber]
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                />
                <input
                    type="text"
                    className="form--input"
                    placeholder="Top text"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" alt="" />
        </main>
    )
}