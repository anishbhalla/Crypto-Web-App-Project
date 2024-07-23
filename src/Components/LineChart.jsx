import React from 'react';
import { format } from 'date-fns';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
)

const { Title } = Typography;

function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice =[];
  const coinTimeStamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price);
    // coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    let date = new Date(coinHistory.data.history[i].timestamp*1000);
    let formattedDate = format(date, 'dd/MM/yyyy');
    coinTimeStamp.push(formattedDate);
  }

  coinTimeStamp.sort((a,b)=> new Date(b.date) - new Date(a.date)); // Sorting date array in ascending order.
  // console.log("coin price", coinPrice)
  // console.log("coin timestamp", coinTimeStamp)

  const data ={
    labels : coinTimeStamp,
    datasets : [
      {
        label : 'Price in USD',
        data : coinPrice,
        fill : false,
        backgroundColor : '#0071bd',
        borderColor : '#0071bd',
      }
    ]
  }

  const options = {
    responsive : true,
    scales : {
      yAxes : [
        {
          ticks : {
            beginAtZero : true,
          }
        }
      ],
    }
  }


  return (
    <>
      <Row className='chart-header'>
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>Change : {coinHistory?.data?.change}%</Title>
          <Title level={5} className='current-price'>Current {coinName} Price : ${currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options}/>
    </>
  )
}

export default LineChart