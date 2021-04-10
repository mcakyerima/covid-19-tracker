import React , {useEffect , useState} from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral/numeral'

const options = {
    layout : {
        padding: {
            right: 10,
            top: 10,
            bottom: 0
        }
        
    },
legend: {
        display: false,
    },
    elements: {
        point: {
            radius:0,
        },
    },
    maintainAspectRatio: false,
    tooltips : {
        mode: 'index',
        intersect: false,
        callbacks: {
            label: function(tooltipItem , data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes : [
            {
                type: 'time',
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks : {
                    //add dolar sign to
                    callback: function(value, index, values) {
                        return numeral(value).format('0a');
                    }
                }
            }
        ]    }
};

const buildChartData = (data , caseType) => {
    const chartData = [];
    let lastDataPoint;
    for (let date in data.cases){
        if (lastDataPoint) {
            const newDataPoint  = {
                x: date,
                y:data[caseType][date] - lastDataPoint
            }
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[caseType][date];
    }
    return chartData;
};

function Linegraph( {caseType = "cases"}) {
    const [data , setData] = useState({});
    console.log(data)   
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then((response) => {
                    return response.json()})
                .then((data) => {
                    let chartData = buildChartData(data , 'cases');
                    console.log('this is also it ', data)
                    setData(chartData);
                    // buildChartData(chartData);
                    //clever stn
                });
        };

        fetchData();
    }, [caseType]);

    return (
        <div>
            {data?.length > 0 && (
                <Line
                options = {options}
                data = {{
                    datasets : [
                        {
                            backgroundColor: "rgba(204,16, 52, 0.5)",
                            borderColor: '#CC1034',
                            data: data,
                         }
                ]}}
                />

            )}
            
            
        </div>
    );
};

export default Linegraph;
