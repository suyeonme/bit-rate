import styled from 'styled-components';

const Wrapper = styled.div`
  width: 25%;
  height: auto;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1.5rem;
  border-radius: 9px;

  p {
    margin-bottom: 1rem;
  }
`;

const Badge = styled.span`
  display: inline-block;
  background-color: grey;
  margin-right: 0.3rem;
  font-size: 0.5rem;
  color: white;
  padding: 0.2rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
`;

const Rate = styled.p`
  display: flex;
  align-items: center;
`;

const Time = styled.p`
  font-size: 0.7rem;
  margin-top: 3rem;
  margin-bottom: 0 !important;
`;

const Prices = ({ bpi, currency }) => {
  const getCurrency = currency => {
    let curCurrency;
    if (currency === 'USD') {
      curCurrency = bpi?.bpi.USD.description;
    } else if (currency === 'GBP') {
      curCurrency = bpi?.bpi.GBP.description;
    } else if (currency === 'EUR') {
      curCurrency = bpi?.bpi.EUR.description;
    }
    return curCurrency;
  };

  const getRate = currency => {
    let rate;
    if (currency === 'USD') {
      rate = bpi?.bpi.USD.rate_float;
    } else if (currency === 'GBP') {
      rate = bpi?.bpi.GBP.rate_float;
    } else if (currency === 'EUR') {
      rate = bpi?.bpi.EUR.rate_float;
    }
    return rate;
  };

  return (
    <Wrapper>
      <p>
        Bitcoin rate for <strong>{getCurrency(currency)}:</strong>
      </p>
      <Rate>
        <Badge>{currency}</Badge>
        {getRate(currency)}
      </Rate>
      <Time>{bpi.time.updated}</Time>
    </Wrapper>
  );
};

export default Prices;
