import React from "react"
import petsCover from "../images/pets-cover.png"

export default function Hero() {
    return (
        <section className="hero">
            <img
                className="hero--photo"
                src={petsCover}
                alt=""
            />
            <h1 className="hero--header ">Adopt pets </h1>
            <p className="hero--text">These adorable pets need a home!</p>
        </section>
    )
}
