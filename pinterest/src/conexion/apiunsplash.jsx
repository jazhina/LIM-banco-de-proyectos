 
const clientID = 'faH5ou8PZPorTMWUYL-yCgAoFvBHS7MdHIUuNNmAxDM';
const Collection = () => fetch(`https://api.unsplash.com/photos/?client_id=${clientID}`)
.then((res) => {
    return res.json();
});

export default Collection;