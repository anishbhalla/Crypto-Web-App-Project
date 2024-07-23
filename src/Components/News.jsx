import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'; //material UI
import { formatDistanceToNow } from 'date-fns';
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi';








const { Text, Title } = Typography;



function News({ simplified }) {
  const { data: cryptoNews } = useGetCryptosNewsQuery({ page : simplified ? 1: 2, limit: simplified ? 10 : 100, time : simplified ? '1h' : '24h' });
  console.log(cryptoNews);    

  if (!cryptoNews) return (   //𝙻𝚘𝚊𝚍𝚒𝚗𝚐. . .
    <div className="load-container">
            <div className="load"></div>
    </div>
  );



  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoNews.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.link} target='_blank' rel='noreferrer'>
                <div className="news-image-container">
                  <Title className='news-title' level={4}>{news.title}</Title>
                </div>
                <p>
                  {news.summary && news.summary.length> 100? `${news.summary.slice(0,150)}...` : news.summary }
                </p>
                <div className="provider-container">
                  <Text>{formatDistanceToNow(news.published, {addSuffix: true})}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News

// {formatDistanceToNow(news.published, {addSuffix : true})}