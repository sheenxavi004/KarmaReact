import React,{ useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Badge } from 'reactstrap'

function RenderCuisines({cuisines})
{   
    var arr = cuisines.split(", ");
    const bc = arr.map((element) => {return(
        <div className="col">
            <Badge color="success" >{element}</Badge>
        </div>
    )});    
    return(
        <div className="row" style={{position:"relative",left:"-15px"}}>
            {bc}
        </div>
    )
}
function RenderHighlights({highlights})
{   
    const bc = highlights.map((element) => {return(
        <div className="col">
            <Badge color="warning" >{element}</Badge>
        </div>
    )});    
    return(
        <div className="row" style={{position:"relative",left:"-15px"}}>
            {bc}
        </div>
    )
}

function MoreInfo({restaurant})
{
    const [open, setOpen] = useState(false);
    function toggle(){
        setOpen(prevState => !prevState);
    }

    return(
        <div>
            <Button onClick={toggle}>View More Info</Button>
            <Modal size="lg" isOpen={open} toggle={toggle}>
                <ModalHeader toggle={toggle} style={{backgroundColor:"#E23744", color:"white"}}>{restaurant.name}</ModalHeader>
                <ModalBody style={{fontSize:"11pt"}}>
                <div className="row">
                    <img className="col-sm-6"src={restaurant.featured_image} alt={restaurant.name} style={{maxWidth:"auto", maxHeight:"max-content"}}/>
                    <div className= "col-sm-6">
                        <h5 className="row">{restaurant.name}</h5>
                        <p className="row">{restaurant.location.address}</p>
                        <p className="row">Timings : {restaurant.timings}</p>
                        <p className="row">Rating : {restaurant.user_rating.aggregate_rating} / 5 ({restaurant.all_reviews_count} reviews)</p>
                        <RenderCuisines cuisines={restaurant.cuisines} />
                        <RenderHighlights highlights={restaurant.highlights} />
                    </div>
                </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default MoreInfo;