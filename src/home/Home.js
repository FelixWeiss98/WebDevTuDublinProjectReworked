import "./Home.css";
import { useEffect, useState } from "react";
import Restaurant from "../restaurant/Restaurant";
import axios from "axios";
import Header from "../header/Header";

const Home = () => {

    useEffect(() => {
        const getData = async () => {
            const results = await axios.get('http://localhost:3003/home');
            console.log(results);
            setRestaurants(results.data);
            setFiltered(results.data);
        }
        getData();
    }, []);

    const [filtered, setFiltered] = useState([])
    const [restaurants, setRestaurants] = useState([
        { name:'Restaurant 1', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: false, id: 1 },
        { name:'Restaurant 2', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: true, id: 2 },
        { name:'Restaurant 3', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: false, id: 3 },
        { name:'Restaurant 4', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: true, id: 4 },
        { name:'Restaurant 5', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: false, id: 5 }
    ]);

    useEffect(() => {
        setFiltered(filtered)
      }, [filtered])

    const filteredData = (search) => {
        if(search !== '') {
            setFiltered(() => restaurants.filter(res =>
            res.name.toLowerCase().includes(search.toLowerCase())))
        } else {
            setFiltered(restaurants);
        }
    }

    return (  
        <div className="wrapperHome flex">
            <div className="home">
                <Header filter={filteredData}/>
                <Restaurant restaurantList={filtered} title="Find your Restaurant"/>
                <Restaurant restaurantList={restaurants.filter((restaurant) => restaurant.bestOfMonth === true)} title="Our monthly Recommentations"/>
            </div>
        </div>
    );
}
 
export default Home;