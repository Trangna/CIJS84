import {useState, useEffect} from 'react'

const countWordLogic = () => {

    const fakeApi = () => console.log('Api is called')
    const [word,setWord] = useState("")
    const x = length.word

    useEffect(() => {
        const timer = setTimeout(() => {
          fakeApi()
        }, 500)

        return () => clearTimeout((timer), [x])
    };
    return (
        <div className = "container">
            <textarea name="" id="" cols="30" rows="10"
            value = "text"
            placeholder="Enter text ..."
            onChange= {e => setWord(e.target.value)}
            >
            </textarea>

            <label htmlFor="">Word(s):{x}</label>
        </div>

    )
}
export default countWordLogic;