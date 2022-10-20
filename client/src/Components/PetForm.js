import React from "react"
import Axios from "axios"


export default function PetForm(props) {
    // const [props.formData, setprops.formData] = React.useState(
    //     {
    //         name: "",
    //         type: "",
    //         breed: "",
    //         age: "",
    //         sex: "",
    //
    //     }
    // )



    // function props.handleChange(event) {
    //     const {name, value, type, checked} = event.target
    //     setprops.formData(prevprops.formData => {
    //         return {
    //             ...prevprops.formData,
    //             [name]: type === "checkbox" ? checked : value
    //         }
    //     })
    //
    // }

    // const addPet = (event) => {
    //     Axios.post("http://localhost:3001/create",props.formData)
    //     .then((response) => console.log("response"))
    //     .catch((err) => console.log("err"));
    //     navigate('/')
    // };



    return (
        <form onSubmit={props.onSubmit} className="pet-form animate" >
            <label htmlFor="name">name</label>
            <input
                type="text"
                placeholder="name"
                onChange={props.handleChange}
                name="name"
                value={props.formData.name}
            />
            <br />
            <label htmlFor="type">type</label>
            <input
                type="text"
                placeholder="type"
                onChange={props.handleChange}
                name="type"
                value={props.formData.type}
            />
            <br />
            <label htmlFor="breed">breed</label>
            <input
                type="text"
                placeholder="breed"
                onChange={props.handleChange}
                name="breed"
                value={props.formData.breed}
            />
            <br />
            <label htmlFor="age">age (in months)</label>
            <input
                type="number"
                placeholder="months"
                onChange={props.handleChange}
                name="age"
                value={props.formData.age}
            />
            <br />

            <fieldset>
                <legend>What is their sex?</legend>
                <input
                    type="radio"
                    id="male"
                    name="sex"
                    value="male"
                    checked={props.formData.sex === "male"}
                    onChange={props.handleChange}
                />
                <label htmlFor="male"> male</label>
                <br />
                <input
                    type="radio"
                    id="female"
                    name="sex"
                    value="female"
                    checked={props.formData.sex === "female"}
                    onChange={props.handleChange}
                />
                <label htmlFor="female"> female</label>
            </fieldset>

            <br />
            <button >Submit</button>
        </form>
    )
}
