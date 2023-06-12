import React, { useState, useEffect } from 'react';
import './App.css';
import { Icon } from '@iconify-icon/react';

function App() {
  const [currencies, setCurrencies] = useState([
    { title: "USD", img: 'openmoji:flag-united-states', rate: 37 },
    { title: "FRA", img: 'openmoji:flag-france', rate: 41 },
    { title: "GER", img: 'openmoji:flag-germany', rate: 45 },
    { title: "JPY", img: 'openmoji:flag-japan', rate: 29 },
    { title: "CNY", img: 'openmoji:flag-china', rate: 22 },
    { title: "UAH", img: 'openmoji:flag-ukraine', rate: 37 },
    { title: "LHR", img: 'openmoji:flag-turkey', rate: 18 },
    { title: "RUP", img: 'openmoji:flag-india', rate: 32 },
    { title: "GRC", img: 'openmoji:flag-mexico', rate: 42 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCurrencies = currencies.map((currency) => {
        const randomValue = Math.random();

        if (randomValue < 0.3) {
          const randomChange = ((Math.random() * 4) - 2).toFixed(2);
          return { ...currency, rate: currency.rate + parseFloat(randomChange) }
        }
        return currency;
      });

      setCurrencies(updatedCurrencies);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div className='container'>
        {currencies.map((currency, index) => (
          <div key={index} className='currencyItem'>
            <div className='desc'> Валюта {currency.title} </div>
            <Icon icon={currency.img} width="50" />
            :<div className='desc'> {currency.rate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
