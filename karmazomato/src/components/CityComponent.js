import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { cities } from '../shared/cityData';

function FetchCities({ changeCity })
{
    const details = cities.map((cities => 
        <DropdownItem key={cities.id} onClick={() => changeCity(cities.name)}>
            {cities.name}
        </DropdownItem>

    ));

    return(
        <div>
            {details}
        </div>
    )
}

function City({ selectedCity, change }){
    const [open, setOpen] = useState(() =>  false);
    const toggle = () => setOpen(prevState => !prevState);  
    return(
        <Dropdown isOpen={open} toggle={toggle} >
            <DropdownToggle color="danger bg-white text-danger" caret style={{width: "150px"}}>
                {selectedCity}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>City</DropdownItem>
                <FetchCities selectedCity={selectedCity} changeCity={change}/>
            </DropdownMenu>
        </Dropdown>
    );
}   

export default City;