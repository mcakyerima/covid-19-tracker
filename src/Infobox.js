import React from 'react';
import './infoBox.css';
import { Card, CardContent , Typography} from '@material-ui/core';


function Infobox({title , cases , total , ...props}) {
    return (
        <div className="infobox">
            <Card onClick={props.onClick}>
                <CardContent >
                    <Typography className="infoBox__title" color="textSecondary">
                        <h3>{title} </h3>
                    </Typography>
                    <div className="infobox__case">
                        <Typography color="textSecondary">
                            <h3 className="cases"> {cases}</h3>
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
