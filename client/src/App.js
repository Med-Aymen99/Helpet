import React from "react"
import Card from "./Components/Card"
import data from "./data.js"
import PetForm from "./Components/PetForm"
import About from "./Components/pages/About"
import Shop from "./Components/pages/Shop"
import {Route, Routes, useNavigate} from 'react-router-dom'
import Axios from "axios"
import Home from "./Components/pages/Home"

// Switch ==> Routes
export default function App() {
    const [petList, setPetList] = React.useState(
      [
        {
          id:"",
          name: "",
          type: "",
          breed: "",
          age: "",
          sex: ""
        }
     ]
    );
    const [formData, setFormData] = React.useState(
    {
            name: "",
            type: "dog",
            breed: "",
            age: "",
            sex: "female",
    })
    const [selectedPetId,setSelectedPetId] = React.useState(-1);
    const [filteredPetList, setFilteredPedList] = React.useState(petList);

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
        console.log("useEffect executed")
        setPetList(response.data)
      });
    },[])


    const deletePet = (petId) => {
      Axios.delete(`http://localhost:3001/delete/${petId}`)
        .then((response) => console.log(`pet of id ${petId} has been deleted`))
        .catch((err) => console.log(err));
      setPetList(oldPetList => oldPetList.filter(pet => pet.id != petId))
      navigate('/')
    }

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

    const filterPet = (event) => {
      event.preventDefault();
      Axios.get("http://localhost:3001/filter", {params: formData}).then((response) => {
        setPetList(response.data)
      });

    }

    const updatePet = (event) => {
      const item = {
          id : selectedPetId,
          ...formData
      }

      Axios.put("http://localhost:3001/update", item)
           .then((response) => console.log(response))
           .catch((err) => console.log(err));
      navigate('/')
      const selectedPetIndex = petList.findIndex(pet => pet.id == selectedPetId)
      setPetList(oldPetList => {
        oldPetList.splice(selectedPetIndex,1,item);
        return oldPetList;
      })
      event.preventDefault()
    }


    const updateForm = (item) =>  {
      setSelectedPetId(item.id)
      const {id, ...data} = item
      setFormData(data)
    };



    const pets = petList.map(item => {
        return <Card
            key = {item.id}
            {...item}
            onClickDelete={() => deletePet(item.id)}
            onClickUpdate={() => updateForm(item)}
        />
      }
    )

    return (
        <div>
          <Routes>
              <Route path="/form" element={<PetForm onSubmit={addPet} update={false} handleChange={handleChange} formData={formData}/>} />
              <Route path="/updateForm" element={<PetForm onSubmit={updatePet} upadate={true} handleChange={handleChange} formData={formData}/>} />
              <Route path="/about" element={<About/>} />
          </Routes>
          <Home pets={pets} onSubmit={filterPet} handleChange={handleChange} formData={formData}/>
        </div>
    )
}
