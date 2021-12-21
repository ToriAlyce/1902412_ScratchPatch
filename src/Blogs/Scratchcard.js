import React, {Component} from "react";

class Scratchcard extends Component {
    static defaultProps = {
        to: "Annonmous",
        excite: 1
    }

    render(){
        let excite = "!".repeat(this.props.excite);
        return (
            <div>
                <h1>Hello {this.props.to} {excite}</h1>
                <img src={this.props.image}/>
            </div>
        )
    }
}

export default Scratchcard;