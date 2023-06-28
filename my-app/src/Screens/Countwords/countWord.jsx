import countWordLogic from "./countWordLogic";

const countWord = () => {
  return (
    <div className="container">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value="text"
        placeholder="Enter text ..."
        onChange={(e) => setWord(e.target.value)}
      >
          
      </textarea>

      <label htmlFor="">Word(s):{x}</label>
    </div>
  );
};

export default countWord;
