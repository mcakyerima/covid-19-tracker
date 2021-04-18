import React from 'react';
import './Map.css'
import { showDataOnMap } from './utilities'
import { MapContainer ,TileLayer } from "react-leaflet";


function Map({ countries ,casesType,  center , zoom}) {
    console.log('this is countries ' , countries)
    return (
        <div className="map">
            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright"> OpenStreetMap</a> contributors'/>
                {showDataOnMap(countries , casesType)}
            </MapContainer>
             
        </div>
    )
}

export default Map;
