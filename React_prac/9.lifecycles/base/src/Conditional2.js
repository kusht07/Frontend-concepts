import React, {Component} from "react"

class Conditional2 extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
        }
    }
    // &&
    // false && false
    render() {
        return (
            <div>
            {
                this.state.unreadMessages.length > 0 && 
                <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
            }
        </div>
        )
    }
}

export default Conditional2
