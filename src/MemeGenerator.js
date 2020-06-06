import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event){
        event.preventDefault()
        var random = this.state.allMemeImgs.map(meme => {
            return meme.url
        })[Math.floor(Math.random() * this.state.allMemeImgs.length)]

        this.setState({randomImage: random})
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    allMemeImgs: response.data.memes
                })
            })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.topText}
                        name="topText"
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        value={this.state.bottomText}
                        name="bottomText"
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />
                    <button type="submit">Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator