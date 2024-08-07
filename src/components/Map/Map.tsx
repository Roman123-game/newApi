import "./Map.css";

function Map(props:any) {
    const {position} = props
    return (
         <h1 className="map">&#128506;
        <div data-title={position} className={`dot ${position}`}>&#x1F789;</div>
        </h1>
    );
}

export default Map;