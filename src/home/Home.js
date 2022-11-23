import "./Home.css";
import { useState } from "react";
import Restaurant from "../restaurant/Restaurant";

const Home = () => {
    const [restaurants, setRestaurants] = useState([
        { name:'Restaurant 1', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: false, id: 1 },
        { name:'Restaurant 2', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: true, id: 2 },
        { name:'Restaurant 3', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: false, id: 3 },
        { name:'Restaurant 4', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: true, id: 4 },
        { name:'Restaurant 5', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget pretium est, sed eleifend lorem.', bestOfMonth: false, id: 5 }
    ]);

    return (  
        <div className="wrapperHome flex">
            <div className="home">
                <Restaurant restaurantList={restaurants} title="Find your Restaurant"/>
                <Restaurant restaurantList={restaurants.filter((restaurant) => restaurant.bestOfMonth === true)} title="Our monthly Recommentations"/>
            </div>
        </div>
    );
}
 
export default Home;