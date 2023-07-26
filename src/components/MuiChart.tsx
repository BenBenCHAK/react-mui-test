import { Line } from "react-chartjs-2";
import { useEffect, useState } from 'react'

import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import { Card, Box } from "@mui/material";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export function MuiChart(props: { isRunning: boolean }) {
    const [time, setTime] = useState(0)
    
    const [labels, setLabels] = useState<number[]>([])
    const [values, setValues] = useState<number[]>([])

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (props.isRunning) {
            interval = setInterval(() => {
                setTime(time + 1)
                setLabels([...labels, time])
                setValues([...values, Math.floor(Math.random() * 6)])
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [props.isRunning, time, labels, values])

    const data = {
        labels: labels, //['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: values, //[3, 2, 2, 1, 5, 6],
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'black',
            pointBorderColor: 'rgb(255, 99, 132)',
            fill: true,
            tension: 0.1,
        }]
    }

    const options = {
        plugin: {
            legend: true
        },
        scales: {
            y: {
                min: -1,
                max: 6,
            },
            x: {
                suggestedMin: 0,
                suggestedMax: 10
            }
        }
    }

    return (<Box width={'30rem'}>
        <Card variant="outlined">
            <Line data={data} options={options} />
        </Card>
    </Box>)
}