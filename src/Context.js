import React, {useState, useEffect} from "react";

const Context = React.createContext();

function ContextProvider(props){

    const [photos, setPhotos] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
 useEffect(() => {
     // Get data from API
        fetch(url).then(res => res.json()).then(data => setPhotos(data))
     // save the data to state
     

 }, [])
 console.log(photos)
 
    return (
        <Context.Provider value={{photos}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}