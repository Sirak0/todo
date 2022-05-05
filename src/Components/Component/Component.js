import React from "react";

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "Hakob" }
        this.change = this.change.bind(this)
    }
    change(){
        if(this.state.name === "Hakob"){
            this.setState({name: "Arman"})
        }
        else if(this.state.name === "Arman"){
            this.setState({name: "Hakob"})
        }
    }
    render() {
        return (
            <div>
                <h1>
                    hello {this.state.name}

                </h1>
                <button onClick={this.change}>
                    Change
                </button>
            </div>
        )
    }
    componentDidMount(){
        var title = document.querySelector("h1")
        title.style = "color: green"
    }
    componentDidUpdate(){
        console.log("update")
    }
}

export default Component;