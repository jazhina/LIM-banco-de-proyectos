 
const clientID = 'faH5ou8PZPorTMWUYL-yCgAoFvBHS7MdHIUuNNmAxDM';
const GetImage = (page, perpage) => fetch(`https://api.unsplash.com/photos/?page=${page}&per_page=${perpage}&client_id=${clientID}`)
.then((res) => {
    return res.json();
});

export default GetImage;