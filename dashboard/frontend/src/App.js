import React from 'react';
import OilPriceChart from './components/OilPriceChart';
import DateRangePicker from './components/DateRangePicker';
import EventFilter from './components/EventFilter';

const App = () => {
  return (
    <div className="App">
      <h1>Oil Price Analysis Dashboard</h1>
      <DateRangePicker />
      <EventFilter />
      <OilPriceChart />
    </div>
  );
};

export default App;
