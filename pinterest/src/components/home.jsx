import React, { useState, useEffect } from 'react';
import Collection from '../conexion/apiunsplash'

function Home() {
  const [photo, setPhoto] = useState([]);
  const [value, setValue] = useState([]);

  function handleChange(event) {
    setValue(event.target.value);
/*     console.log(value); */
  }

  function Search () {
    let client = 'faH5ou8PZPorTMWUYL-yCgAoFvBHS7MdHIUuNNmAxDM'
    let url = "https://api.unsplash.com/search/photos?client_id="+client+"&query="+value;
    fetch(url)
    .then((res)=> {
      console.log(res)
      return res.json();
    })
    .then((data)=> {
      console.log(data.results)
      setPhoto(data.results)
    })
  }
  
  useEffect(() => {
    Collection().then((res) => (setPhoto(res)));
  }, []);

  const print = () => { 
    return photo.map((element) => (
      <img className="img-fluid img-thumbnail"src={element.urls.small} key={element.id} alt="photos" />
    ))
  }

  console.log(photo);
  return (
    <div>
      <h1 className="bg-danger">PINTEREST</h1>
      <input onChange={handleChange} type="text" className="form-control" placeholder="Buscar Foto" name="photo" />
      <input onClick={(event) => {
            event.preventDefault();
            Search();
          }}
          type="image" 
          src="https://img.icons8.com/ios-filled/50/000000/google-web-search.png" 
          alt="search"/>
      <main>
        {print()}
      </main>
    </div>
  );
};

export default Home;