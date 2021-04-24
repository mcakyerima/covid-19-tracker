import React from 'react';
import './infoBox.css';
import { Card, CardContent , Typography} from '@material-ui/core';


function Infobox({title , cases ,active,itIsRed, total , ...props}) {
    return (
        <div className="infobox">
            {/* collect collect onClick function destructured as props above and get 
            the onClick prop passed through it from the infobox component rendered in app.js then check
            to see if it has a itIsRed prop as True then pass a css className and change the font 
            to red and if the isRed prop is false, then change the font color to true */
}
            <Card onClick={props.onClick}  className={`infobox ${active && 'infoBox--selected'} ${ itIsRed && 'infoBox--Red'}`}>
                <CardContent >
                    <Typography className="infoBox__title" color="textSecondary">
                        <h3>{title} </h3>
                    </Typography>
                    <div className="infobox__case">
                        <Typography color="textSecondary">
                            <h3 className={ ` cases ${!itIsRed && 'title--green'}`} > {cases}</h3>
                        </Typography>
                    </div>
                    
                    <Typography color="textSecondary">
                        <h3 className="total">{total} Total</h3>
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
};

export default Infobox;
