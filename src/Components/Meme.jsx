import React from "react";
import memesData from "../memesData";

export default function Meme() {

    const [topText, setTopText] = React.useState("")
    const [bottomText, setBottomText] = React.useState("")
    const [randomImage, setRandomImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [allMemeImage, setAllMemeImage] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImage.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setRandomImage(prevImage => url)
    }

    return (
        <div>
            <div className="main">
                <input
                    type="text"
                    className="meme-input"
                    placeholder="Enter Upper Text"
                    onChange={(event)=>{
                        setTopText(event.target.value)
                    }}
                />
                <input
                    type="text"
                    className="meme-input"
                    placeholder="Enter Lower Text"
                    onChange={(event)=>{
                        setBottomText(event.target.value)
                    }}
                />

                <button onClick={getMemeImage}>Get a new Meme</button>
            </div>

            <div className="memeImage"
                style={{
                    backgroundImage: `url("${randomImage}")`
                }}>

                <h2 className="meme-text-top">{topText}</h2>
                <h2 className="meme-text-bottom">{bottomText}</h2>
            </div>

        </div>
    )
}