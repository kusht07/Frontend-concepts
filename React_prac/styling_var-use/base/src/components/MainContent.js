import React from "react"

function MainContent() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
    const styles = {
        color: "#FF8C00", 
        backgroundColor: "#FF2D00",
        fontSize: "200%"
      }
    return (
        <h1 style={styles}>Good {timeOfDay}!</h1> // styles have to be in {{key:value}} and - are replaced with camelcase letter C
        )
  }

export default MainContent