import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free cocktail",
                info: "Quem amet maiestatis at vim id mei illum consul postea. Et mea enim verterem, labore qualisque ea duo. Alienum expetenda eu"
            },
            {
                icon: <FaHiking/>,
                title: "Free Hiking",
                info: "Quem amet maiestatis at vim id mei illum consul postea. Et mea enim verterem, labore qualisque ea duo. Alienum expetenda eu"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free ShuttleVan",
                info: "Quem amet maiestatis at vim id mei illum consul postea. Et mea enim verterem, labore qualisque ea duo. Alienum expetenda eu"
            },
            {
                icon: <FaBeer/>,
                title: "Free Beer",
                info: "Quem amet maiestatis at vim id mei illum consul postea. Et mea enim verterem, labore qualisque ea duo. Alienum expetenda eu"
            }
        ]
    }
    render() {
        return (
            <div>
               <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </div>
        )
    }
}
