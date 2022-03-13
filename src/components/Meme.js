import memesData from "../memesData"
import { useState } from "react"

export default function Meme() {

    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randonNumber = Math.floor(Math.random() * memesArray.length)
        const { url } = memesArray[randonNumber]
        setMemeImage(url)
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
            <img src={memeImage} className="meme--image" alt="" />
        </main>
    )
}