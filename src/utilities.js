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
    recorvered : {
        hex : '#7dd71d',
        multiplier : 400,
    },
    deaths : {
        hex: '#fb4443',
        multiplier : 400,
    }
}

//Draw circles on the map with this interactive toooltop function
export const showDataOnMap = (data , casesType = 'cases') =>
    data.map((country) => (
        <Circle
        center = {[country.countryInfo.lat, country.countryInfo.long]}
        fillOpacity = {0.4}
        color = {casesTypeColors[casesType].hex}
        radius = {
            Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
        }>
        <Popup>
            <div>
                <div style={ {backgroundImage:`url(${country.countryInfo.flag})`}}></div>
                <div>{country.country}</div>
                <div>Cases: {numeral(country.cases).format("0,0")}</div>
                <div>Recovered: {numeral(country.cases.recorvered).format("0,0")}</div>
                <div>Deaths: {numeral(country.deaths).format("0,0")}</div>
            </div>
        </Popup>
        </Circle>

    ));