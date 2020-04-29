import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GetImage from '../API/unsplash'
import '../sass/styles.css';

function Home() {
  const [photo, setPhoto] = useState([]);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);

  function handleChange(event) {
    setValue(event.target.value);
    /*     console.log(value); */
  }

  function Search() {
    let client = 'faH5ou8PZPorTMWUYL-yCgAoFvBHS7MdHIUuNNmAxDM'
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

  useEffect(() => {
    GetImage(page).then((res) => (setPhoto(res)));
  }, [page]);

  const fetchData = () => {
    let next = page + 1;
    setPage(next)
    console.log(page)
  }

  const ListImage = () => {
    return photo.map((element) => (
      <img className="img-fluid card-img" src={element.urls.thumb} key={element.id} alt="photos" />
    ))
  }

  console.log(photo);
  return (
    <div>
      <input onChange={handleChange} type="text" className="form-control" placeholder="Buscar Foto" name="photo" />
      <input onClick={(event) => {
        event.preventDefault();
        Search();
      }}
        type="image"
        src="https://img.icons8.com/ios-filled/50/000000/google-web-search.png"
        alt="search" />
      <main>
        <InfiniteScroll
          dataLength={photo.length}
          hasMore={true}
          next={fetchData}>
          <figure className="card">
            <ListImage />
          </figure>
        </InfiniteScroll>
      </main>
    </div>
  );
};

export default Home;