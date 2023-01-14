// 294. Introducing Axios
console.log("Axios example");

// axios
//     .get("https://swapi.dev/api/pedople/1/")
//     .then((res) => {
//         console.log("Response: ", res);
//     })
//     .catch((e) => {
//         console.log("Error: ", e);
//     });

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("Error: ", e);
    }
};

getStarWarsPerson(5);
getStarWarsPerson(10);