
const MapCard = ({ city }) => {

    return (
        <>
        <div className="map-card" style={{ left: city.cardx, top: city.cardy }}>
            <div className="map-card-image" style={{ backgroundImage: `url(${city.image})` }} alt={city.tag}></div>

            <h4 className="map-card-heading">
                <span style={{fontSize : "15px",
                padding:"1px",
                marginTop:"0px",
                marginBottom:"5px",
                paddingBottom:"0px"}}>{city.name}</span><br/>
                <span style={{fontSize : "10px",
                padding:"1px",
                marginTop:"0px",
            
                }}>Click on the pin to go to the city's events page &rarr;</span>
            
            </h4>
            
            {/* <div className="map-card-text">
                Click on the pin to go to the city's events page &rarr;
            </div> */}
        </div>

        </>
    );
}

export default MapCard;

