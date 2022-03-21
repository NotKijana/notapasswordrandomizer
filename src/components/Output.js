import { useState, useEffect } from "react";

export default function Output(props) {
    // State used to init words for shuffle
    const [word1, setWord1] = useState(props.output);
    const [word2, setWord2] = useState(props.output);
    const [word3, setWord3] = useState(props.output);
    const [shuffle, setShuffle] = useState(true);
    const [copy, setCopy] = useState();


    useEffect(() => {
        function shuffle(inputWord) {
            // Checks for correct output and password
            if(inputWord && props.password === '') {
                var wordSplit = inputWord.replace(/\s+/g, '');
                wordSplit = wordSplit.split("");
                var worldLength = wordSplit.length;
            
                // Randomly assigns letter placement
                for(var i = worldLength - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = wordSplit[i];
                    wordSplit[i] = wordSplit[j];
                    wordSplit[j] = tmp;
                }
    
                return wordSplit.join("").trim();
            } else {
                return ''
            }
        }

        setWord1(shuffle(props.output));
        setWord2(shuffle(props.output));
        setWord3(shuffle(props.output));
    }, [props.output, props.password, shuffle])
    // Words are shuffled again when clicked
    const handleShuffle = () => {
        setShuffle(!shuffle);
    }

    const handleClick = (pwOutput) => {
        navigator.clipboard.writeText(pwOutput);
        setCopy(pwOutput);

        setTimeout(() => {
            setCopy('');
        }, 1000);
        
    }

    return (
        <div className='Output'>
            <h2 className='Output_header'> Randomized Options </h2>
            
            <h3 className='Output_password' 
            onClick={() => {handleClick(word1)}}> 
                {word1} 
                {copy === word1 && <span className="copy">Copied</span>}
            </h3>

            <h3 className='Output_password' 
            onClick={() => {handleClick(word2)}}> 
                {word2} 
                {copy === word2 && <span className="copy">Copied</span>}
            </h3>

            <h3 className='Output_password' 
            onClick={() => {handleClick(word3)}}> 
                {word3} 
                {copy === word3 && <span className="copy">Copied</span>}
            </h3>
            
            <button className='Form_btn shuffle'
            onClick={e => handleShuffle()}
            >
                Shuffle
            </button>   
        </div>
    )
}
