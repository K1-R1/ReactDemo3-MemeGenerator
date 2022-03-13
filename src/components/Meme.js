import memesData from "../memesData"

export default function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randonNumber = Math.floor(Math.random() * memesArray.length)
        const { url } = memesArray[randonNumber]
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
        </main>
    )
}