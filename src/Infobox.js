import React from 'react'
import { Card, CardContent , Typography} from '@material-ui/core';


function Infobox({title , cases , total}) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography className="infoBox__title" color="textSecondary">
                        <h3>{title} </h3>
                    </Typography>
                    <Typography color="textSecondary">
                        <h3> {cases}</h3>
                    </Typography>
                    <Typography color="textSecondary">
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
};

export default Infobox;
