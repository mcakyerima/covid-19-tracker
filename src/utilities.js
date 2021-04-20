import React from 'react';
import numeral from 'numeral';
import { Circle , Popup } from "react-leaflet";

export const sortData = (data) => {
    const sortedData = [...data];
    return sortedData.sort((a, b) => a.cases > b.cases ? -1 : 1)
}
//define an object tat will represent the size and color of our circle color and size on the map
const casesTypeColors = {
    cases : {
        hex : '#CC1034',
        multiplier: 400
    },
    recovered : {
        multiplier : 500,
        hex : '#0ee627',
    },
    deaths : {
        hex: '#fb4443',
        multiplier : 400,
    },
} ;
//writing a helper function to format cases result ti display like this +200.3k +20k or display +0 if no value exist
export const formater = (stat) =>
    stat ? `+${numeral(stat).format("0.0a")}` : "+0a"

//Draw circles on the map with this interactive toooltop function
export const showDataOnMap = (data , casesType) =>
    data.map((country) => (
        <Circle
        center = {[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity = {0.4}
        color={casesTypeColors[casesType].hex}
        fillColor={casesTypeColors[casesType].hex}
        radius = {
            Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }>
    
        <Popup>
            <div className="popup-container">
                <div className="popup-flag"
                style={ {backgroundImage:`url(${country.countryInfo.flag})`}}></div>
                <div className="info-name">{country.country}</div>
                <div className= "info-cases">Cases: {numeral(country.cases).format("0,0")}</div>
                <div className= "info-recorved">Recovered: {numeral(country.recovered).format("0,0")}</div>
                <div className= "info-deaths"> Deaths: {numeral(country.deaths).format("0,0")}</div>
            </div>
        </Popup>
        </Circle>

    ));