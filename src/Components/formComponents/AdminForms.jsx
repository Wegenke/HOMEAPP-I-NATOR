import { useState, useEffect } from 'react'
import ChoreForm from './ChoreForm'
import AnimalForm from './AnimalForm'
import HumanForm from './HumanForm'
import PlantForm from './PlantForm'


export default function AdminForms() {
  const [currForm, setCurrForm] = useState('CHOOSE A FORM')

 const humanForm=(
  <HumanForm />
 )

 const plantForm=(
  <PlantForm />
 )

 const animalForm=(
  <AnimalForm />
 )

 const choreForm=(
  <ChoreForm />
 )

  return (
    <div>
      <h3>Select a form</h3>
      <button onClick={() =>setCurrForm(humanForm)}>Human</button>
      <button onClick={() =>setCurrForm(choreForm)}>Chores</button>
      <button onClick={() =>setCurrForm(plantForm)}>Plants</button>
      <button onClick={() => setCurrForm(animalForm)}>Animals</button>
      <div>{currForm}</div>
    </div>
  )

}
