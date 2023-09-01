import axios from 'axios';
const apiKey = 'VpeVD2_ZS6wsKAM9DM9YV5o2gr7-gXkOKiKcWgUW-XOxBYWoY9l1Qh45UTds4jBYwwiWg9tRTlSjGRaxoSTr2aZUUgltan980MCqUomL4eFoVLp_lTCJWN-m0EvjZHYx';

const cors = 'https://corsanywhere.herokuapp.com/';
const Btn = document.getElementById('Btn');



export default async function getBusiness(term, location, sortBy) {
    const requestParams = `?api_key=${apiKey}`;
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

    const api = {
        Authorization: { 
            Authorization: `Bearer ${apiKey}`,
            "X-Requested-With": "XMLHttpRequest"
        },
        params: {
            term: "restaurants",
            sort_by: "relevance",
            limit: 50
        }
    };

    try {
        axios.get(`${cors}${url}`, api).then((response => {
            console.log(response);
        }));

        if (axios.response.ok === true){
            const jsonResponse = await axios.response.json();
            console.log(jsonResponse);

            const business = await jsonResponse.business.map((business => {
                return {
                id: business.id,
                imageSrc: business.imageSrc,
                name: business.name,
                address: business.address,
                city: business.city,
                state: business.state,
                zipcode: business.zipcode,
                category: business.category,
                rating: business.rating,
                reviewcount: business.reviewcount,
                }
            }));
            return business;
        }
    } catch (error) {
        console.log(error);
    }
};


/*const showBusinessListings = async() => {
    const businessInfo = document.getElementById('businessInfo');
    const info = await getBusiness();
    displayBusiness(info);
}*/

//Btn.onclick = getBusiness();