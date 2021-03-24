import React , {useEffect , useState} from 'react';
import { Line } from 'react-chartjs-2';

function Linegraph() {
    const [data , setData] = useState({});

    const buildChartData = async (data , caseType= "cases") => {
        const chartData = [];
        let lastDataPoint;
        data.cases.forEach(date => {
            if (lastDataPoint) {
                
                const newDataPoint  = {
                    x: date,
                    y:data[caseType][date] - lastDataPoint
                }
                chartData.pugh(newDataPoint);
            }
            lastDataPoint = data[caseType][date];
        })
        console.log('this is chart data' , chartData)
        return chartData;
    };
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then((response) => response.json())
        .then((data) => {
            const chartData = buildChartData(data);
            setData(chartData);
            //clever stn
        })
    }, []);

   
    buildChartData();

    return (
        <div>
            <Line/>
            
        </div>
    )
}

export default Linegraph;
