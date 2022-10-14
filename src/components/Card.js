import React from "react"

export default function Card(props) {
    return (
        <div className="main-content">

            <section className="card">
                <img src={props.cardData.img} alt={props.cardData.title} className="card--image" />
                <div className="card--info">

                    <div className="card--location">
                        <i class="fa-solid fa-location-dot"><h4>{props.cardData.location}</h4></i>
                        <a href={props.cardData.googleMapsUrl} target="_blank" >View on Google Maps</a>
                    </div>

                    <h1>{props.cardData.title}</h1>

                    <div className="card--date">
                        <h4>{props.cardData.startDate}</h4>
                        <span>-</span>
                        <h4>{props.cardData.endDate}</h4>
                    </div>

                    <p>{props.cardData.description}</p>
                </div>
            </section>

        </div>

    )
}