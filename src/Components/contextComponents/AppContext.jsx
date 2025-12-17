
import { createContext, useState, useEffect } from 'react';

const context = createContext(null);

export default function AppProvider({ children }) {
    
    const [enums, setEnums] = useState(null);
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}types/`)        // Ask the server for user data.
        .then(response => response.json()) // Get the response as JSON
        .then(data => {          
            console.log("Enums loaded", data);          // When data arrives...
            setEnums(data);
        });    
    }, []); 
    
    return (
        <context.Provider value={enums}>
        {children}
        </context.Provider>
    );
}

AppProvider.context = context;