import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';


function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  // console.log(cryptos);

  useEffect(() => {
    // Allows us to search particular cryptos from the crypto list.
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  }, [cryptosList, searchTerm])


  if (isFetching) return (
    <div className="load-container">
            <div className="load"></div>
    </div>
  );

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input placeholder='Search Cryptocurrency..' onChange={(e) => setSearchTerm(e.target.value)} />
          <p className='searchLogo'>⌕</p>
        </div>
      )}
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card hoverable title={`${currency.rank}.${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
              >
                <p>Price : ${millify(currency.price)}</p>
                <p>Market Cap : {millify(currency.marketCap)}</p>
                <p>Daily Change : {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies