import React, { useState, useEffect } from 'react';
import ListPhoto from '../components/listphoto';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import "../sass/styles.css";
/* import GetImage from '../API/unsplash'; */

let client = 'faH5ou8PZPorTMWUYL-yCgAoFvBHS7MdHIUuNNmAxDM';
let url = 'https://api.unsplash.com/search/photos?';

function Home() {
  const [photo, setPhoto] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const perpage = 20;

  function handleChange(event) {
    setValue(event.target.value);
    /*     console.log(value); */
  }
  useEffect(() => {
    fetch(`${url}&per_page=${perpage}&page=${page}&query=${value}&client_id=${client}`)
      .then(response => {
        return response.json()
      }).then(jsonResponse => {
        setPhoto(jsonResponse.results);
      }, [])
  }, [])

  const fetchData = () => {
    setPage(page + perpage);
    fetch(`${url}&per_page=${perpage}&page=${page}&query=${value}&client_id=${client}`)
      .then(response => {
        return response.json()
      }).then(jsonResponse => {
        console.log(jsonResponse);
        setPhoto([...photo, ...jsonResponse.results]);

      }, [])
  }

  function Search() {
    let url = "https://api.unsplash.com/search/photos?page=1&per_page=40&client_id=" + client + "&query=" + value;
    fetch(url)
      .then((res) => {
        console.log(res)
        return res.json();
      })
      .then((data) => {
        console.log(data.results)
        setPhoto(data.results)
      })
  }
  const useCurrentScrollPosition = () => {
    const [currScrollPosition, setCurrScrollPosition] = useState(0);
    useEffect(() => {
      const handleScrollEvent = () => setCurrScrollPosition(window.scrollY);
      document.addEventListener('scroll', handleScrollEvent);
      return () =>
        document.removeEventListener('scroll', handleScrollEvent);
    }, []);
    return currScrollPosition;
  }

  /*   useEffect(() => {
      GetImage(page).then((res) => setPhoto(photo.concat(res)));
    }, [page, photo]); */

  /*   const fetchData = () => {
      let next = page + 1;
      setPage(next)
      console.log(page)
    } */

  /*   const ListImage = () => {
      return photo.map((element) => (
        <img className="img-fluid card-img" src={element.urls.thumb} key={element.id} alt="photos" />
      ))
    } */

  console.log(photo);
  return (
    <div>
      <header >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <input type="image" className="navbar-brand pintImg" src="https://1000marcas.net/wp-content/uploads/2019/12/Pinterest-Logo.png" alt="pinterest" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Siguiendo</a>
              </li>

              <li>
                <form className="form-inline">
                  <input onChange={handleChange} type="text" className="form-control" placeholder="Buscar Foto" name="photo" />
                  <input onClick={(event) => {
                    event.preventDefault();
                    Search();
                  }}
                    type="image"
                    src="https://img.icons8.com/ios-filled/50/000000/google-web-search.png"
                    alt="search" />
                </form>
              </li>
              <li className="nav-item">
                <input type="image" className="navbar-brand pintImg" src="https://img.icons8.com/material/48/000000/bell.png" alt="campana" />
              </li>
              <li className="nav-item">
                <input type="image" className="navbar-brand pintImg" src="https://img.icons8.com/ios-filled/50/000000/chat-message.png" alt="chat" />
                {/*  <a class="nav-link" href="#">Pricing</a> */}
              </li>
              <li className="nav-item">
                <input type="image" className="navbar-brand pintImg" src="https://img.icons8.com/material-rounded/48/000000/user-male-circle.png" alt="usuario" />
                {/*  <a class="nav-link" href="#">Pricing</a> */}
              </li>
              <li className="nav-item dropdown">
                {/*   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                                </a> */}
                <input type="image" className="navbar-brand pintImg" src="https://img.icons8.com/metro/52/000000/expand-arrow.png" alt="flecha" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/*    <input onChange={handleChange} type="text" className="form-control" placeholder="Buscar Foto" name="photo" />
      <input onClick={(event) => {
        event.preventDefault();
        Search();
      }}
        type="image"
        src="https://img.icons8.com/ios-filled/50/000000/google-web-search.png"
        alt="search" /> */}
      <main>
        <InfiniteScroll
          dataLength={photo.length}
          hasMore={true}
          next={fetchData}
          loader={<h4>Cargando...</h4>}
        >
          <Masonry
            breakpointCols={5}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
              photo.map((element) =>
                <ListPhoto key={element.id} img={element.urls.thumb} />
              )

            }
          </Masonry>
          {/*  <figure className="card">
            <ListImage />
          </figure> */}
          {useCurrentScrollPosition()}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export default Home;