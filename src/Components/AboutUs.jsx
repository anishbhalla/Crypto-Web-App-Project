import React from 'react';
import { Col, Row, Typography } from 'antd';

const { Title, Text } = Typography;

function AboutUs() {
    return (
        <Col className='coin-detail-container'>
            <Col className='coin-heading-container'>
                <Title level={2}>About Us</Title>
                <p>
                    Welcome to Cryptoverse, your go-to destination for all things in cryptocurrency. We are dedicated to providing accurate, timely, and comprehensive information to help you navigate the exciting world of digital currencies.

                    Our mission is to demystify the complexities of cryptocurrency and blockchain technology. Whether you’re a seasoned investor or a curious newcomer, our goal is to equip you with the knowledge and tools you need to make informed decisions.
                    <br/>
                    <br/>
                    <h2>What We Offer:</h2>
                    <ul>
                        <li><h3>Up-to-Date News:</h3> Stay informed with the latest developments in the cryptocurrency market. Our team of experts curates and reports on news that impacts your investments and the broader digital economy.</li>

                        <li><h3>In-Depth Analysis:</h3> Gain insights through our detailed articles and market analysis. We break down trends, price movements, and emerging technologies to give you a clearer understanding of market dynamics.</li>

                        <li><h3>Educational Resources:</h3> From beginner guides to advanced strategies, our educational materials are designed to help you build a solid foundation in cryptocurrency. Learn about different types of digital assets, trading strategies, and security best practices.</li>

                        <li><h3>Interactive Tools:</h3> Explore our suite of interactive tools and price calculators, price history to assist with your cryptocurrency investments. Track portfolio performance, calculate potential returns, and more.</li>
                    </ul>

                    Our team consists of passionate cryptocurrency enthusiasts and industry professionals with years of experience. We are committed to delivering trustworthy information and fostering a community where knowledge and innovation thrive.

                    Thank you for visiting Cryptoverse. We look forward to being a part of your cryptocurrency journey!
                </p>
            </Col>
        </Col>
    )
}

export default AboutUs