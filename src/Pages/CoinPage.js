import React from 'react'
import { SingleCoin } from '../config/api';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { CryptoState } from '../Context';
import axios from 'axios';
import { useEffect } from 'react';
const CoinPage = () => {

  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };
  console.log(coin);

  
  useEffect(()=> {
  fetchCoin();
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  return (
    <div>CoinPage</div>
  )
}

export default CoinPage
