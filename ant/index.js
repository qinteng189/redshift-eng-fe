import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // can not select days before today and today
  // let firstDate = new Date.now() - 1
  let lastDate = new Date('August 31,2017 23:59:59')

  // console.log(current)
  return current.valueOf() < Date.now() && current.valueOf() > lastDate.getTime();
  
}

ReactDOM.render(
  <div>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      showTime
    />
  </div>,
  document.getElementById('root')
);