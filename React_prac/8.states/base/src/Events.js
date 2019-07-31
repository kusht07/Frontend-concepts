import React from "react"

function handleClick() {
    alert("Button was clicked")
    // console.log("I was clicked")

}

// https://reactjs.org/docs/events.html#supported-events

function Events() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100" alt="random"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Events
