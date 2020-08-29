import React from 'react';
import { ListGroup, ListGroupItem} from 'reactstrap';
import MoreInfo from './MoreInfo'
import '../App.css'

function RestaurantInfo({restaurants})
{
    const menu = restaurants.map(rest => {
        return(
        <ListGroupItem key={rest.restaurant.id}>
        <div className="row">
                <h5 className="col">{rest.restaurant.name}</h5>
                <MoreInfo className="col"restaurant={rest.restaurant}/>
        </div>
        </ListGroupItem>
        )
    });

    return(
        <div>
            {menu}
        </div>
    )
}
function RestaurantMenu({restaurants})
{
    return(
        <ListGroup>
            <ListGroupItem header style={{fontSize: "18pt", backgroundColor:"#E23744", color:"white" }}>Restaurants in {restaurants[0].restaurant.location.city}</ListGroupItem>
            <RestaurantInfo restaurants={restaurants} />
        </ListGroup>
    )
}

export default RestaurantMenu;