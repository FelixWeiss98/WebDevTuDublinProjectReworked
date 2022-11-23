import "./Restaurant.css"

const Restaurant = (props) => {
    const restaurants = props.restaurantList;
    const title = props.title;
    
    return (  
        <div className="restaurant-list">
            <h2>{ title }</h2>
            {restaurants.map((restaurant) => (
                <div className="restaurant-item flex" key={restaurant.id}>
                    <h3>{ restaurant.name }</h3>
                    <p className="description">{ restaurant.description}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Restaurant;