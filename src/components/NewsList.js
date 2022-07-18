import React, { Component } from 'react'

export class NewsList extends Component {
    render() {
        let {title, description, imageNews, newsURL} = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageNews?"https://i.ytimg.com/vi/WO_EyBdY7Is/hqdefault.jpg":imageNews} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsURL} target="__blank" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsList
