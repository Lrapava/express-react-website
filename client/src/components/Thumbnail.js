import React from "react";
import '../css/thumbnail.css'

export default function Thumbnail({id, name, img, tags, authors}) {
    return (
        <div className="thumbnail">
            <a className="thumbnail--link" href={`/project/${id}`}>
                <div className="thumbnail--image" style={{backgroundImage: `url("/projects/${id}/${img}")`}}></div>
                <div className="thumbnail--textbox">
                    <h3>{name}</h3>
                    <p className="thumbnail--tags"> { tags.map(tag => "#"+tag+" ") } </p>
                    <p className="thumbnail--authors"> { authors.map(author => author+" ")} </p>
                </div>
            </a>
        </div>
    )
}
