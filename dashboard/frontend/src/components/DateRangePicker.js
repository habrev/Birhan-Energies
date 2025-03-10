import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date('2023-01-01'));
  const [endDate, setEndDate] = useState(new Date('2023-12-31'));

  return (
    <div>
      <label>Start Date: </label>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <label>End Date: </label>
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
    </div>
  );
};

export default DateRangePicker;
