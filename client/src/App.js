import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import data from "./data.js"
import PetForm from "./Components/PetForm"
import About from "./Components/pages/About"
import Shop from "./Components/pages/Shop"
import {Route, Routes, useNavigate} from 'react-router-dom'
import Axios from "axios"


// Switch ==> Routes
export default function App() {
    const [petList, setPetList] = React.useState(
      [{
        id:"",
        name: "",
        type: "",
        breed: "",
        age: "",
        sex: "",
      }
      ]
    );
    const [formData, setFormData] = React.useState(
    {
            name: "",
            type: "",
            breed: "",
            age: "",
            sex: "",

    })

    const navigate = useNavigate();

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }

    React.useEffect(() => {
      Axios.get("http://localhost:3001/petList").then((response) => {
        setPetList(response.data);
        console.log(response.data)
        //
      });
    },[petList])

    const addPet = (event) => {
        Axios.post("http://localhost:3001/create",formData)
        .then((response) => console.log("response"))
        .catch((err) => console.log("err"));

        navigate('/')

        setPetList ([
          ...petList,
          formData
        ])

    };

    const getPets = () => {
      Axios.get("http://localhost:3001/petList").then((response) => {
        setPetList(response.data);
      });
    }


    const pets = petList.map(item =>
        <Card
            key = {item.id}
            {...item}
        />
    );

    return (
        <div>
        <Routes>
            <Route path="/form" element={<PetForm onSubmit={addPet} handleChange={handleChange} formData={formData}/>} />
            <Route path="/about" element={<About/>} />
            // <Route path="/shop" element={<Shop/>} />
        </Routes>
            <Navbar />
            <Hero />
            <section className="cards-list">
              {pets}
            </section>

        </div>
    )
}
