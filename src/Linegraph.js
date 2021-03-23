import React , {useEffect , useState} from 'react';
import { Line } from 'react-chartjs-2';

function Linegraph() {
    const [data , setData] = useState({});
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then((response) => response.json())
        .then((data) => {
            //clever stn
        })
    }, []);

    const buildChartData = async data => {
        const chartData = [];
        let lastDataPoint;
        data.cases.forEach(date => {
            if (lastDataPoint) {
                
                const newDataPoint  = {
                    x: datek
                    y:data['cases'][dare] - lastDataPoint
                }
            }
        })
    }
    buildChartData();

    return (
        <div>
            <Line/>
            
        </div>
    )
}

export default Linegraph;
