import { createContext } from "react";

const HumanContext = createContext({humans:{}})

const PlantContext = createContext({plants:{}, setPlants: () => {}})

const AnimalContext = createContext({animals:{}, setAnimals: () => {}})

const ChoreContext = createContext({chores:{}, setChores: () => {}})

const ListContext = createContext({lists:{}, setLists: () => {}})

export {HumanContext, PlantContext, AnimalContext, ChoreContext, ListContext}