import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';

function disabledDate(current) {
  // can not select days before today and today
  let lastDate = new Date('August 31,2017 23:59:59') // lastDate set
  return current && current.valueOf() < Date.now() - 86400 || current && current.valueOf() > lastDate.getTime();
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