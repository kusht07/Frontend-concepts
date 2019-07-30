// import React from "react"

// function Joke(props) {
//     let a = "Punch-line : "
//     if (props.question != null)
//         a = "Answer : "
//     return (
//         <div>
//             {/* <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3> */}
//             <h3 style={{display: !props.question && "none"}}>Question: {props}</h3>
//             <h3 style={{color: !props.question && "#888888"}}>{a} {props.punchLine}</h3>
//             <p>
//             </p>
//             <hr/>
//         </div>
//     )
// }

// export default Joke

import React from "react"

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke