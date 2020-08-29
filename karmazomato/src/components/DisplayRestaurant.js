import React from 'react';
import RestaurantMenu from './RestaurantMenu'

function RestaurantView({ complete ,count, restaurants, menu, menuActive}){
    if(!complete || count === 0)
    {
        return(
            <div>

            </div>
        );
    }
    return(
        <div className="container">
            <RestaurantMenu restaurants={restaurants}  menu={menu} menuActive={menuActive}/>
        </div>
    );
}
export default RestaurantView;