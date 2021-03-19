import React from 'react'
import { Card, CardContent , Typography} from '@material-ui/core';


function Infobox({title , cases , total}) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography color="textSecondary">
                        <h3>{title} title</h3>
                    </Typography>
                    <Typography color="textSecondary">
                        <h3> {cases} Cases</h3>
                    </Typography>
                    <Typography color="textSecondary">
                        <h3>{total} total</h3>
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    )
};

export default Infobox;
