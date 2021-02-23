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

 function toggleFavorite(id){
  const updatedArr = photos.map(photo => {
      if(photo.id === id){
          console.log(id)
          return {
              ...photo,
              isFavorite: !photo.isFavorite
          }
      }
      return photo
  })

  setPhotos(updatedArr)
 }
 console.log(photos)

    return (
        <Context.Provider value={{photos, toggleFavorite}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}