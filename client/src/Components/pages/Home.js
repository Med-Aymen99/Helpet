import React from "react"
import Navbar from "../Navbar"
import Hero from "../Hero"
import SearchBar from "../SearchBar"

export default function Home(props) {

  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBar pets={props.pets} onSubmit={props.onSubmit} handleChange={props.handleChange} formData={props.formData} />
      <section className="cards-list" >
        {props.pets}
      </section>
    </div>
  )
}
