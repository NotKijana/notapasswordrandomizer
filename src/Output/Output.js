import React from 'react';
import "./Output.scss";

export default function Output(props) {
    function shuffle(word) {
        if(props.output && props.password === '') {
            var wordSplit = word.split("")
            var worldLength = wordSplit.length;
        
            for(var i = worldLength - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var tmp = wordSplit[i];
                wordSplit[i] = wordSplit[j];
                wordSplit[j] = tmp;
            }
            return wordSplit.join("");
        } else {
            return ''
        }
    }

    const word1 = shuffle(props.output);
    const word2 = shuffle(props.output);
    const word3 = shuffle(props.output);


    return (
        <div className='Output'>
            <h2 className='Output_header'> New Password Options </h2>
            
            <h3 className='Output_password' onClick={() => {navigator.clipboard.writeText(word1)}}> {word1} </h3>
            <h3 className='Output_password' onClick={() => {navigator.clipboard.writeText(word2)}}> {word2} </h3>
            <h3 className='Output_password' onClick={() => {navigator.clipboard.writeText(word3)}}> {word3} </h3>
        </div>
    )
}
