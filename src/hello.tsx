import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';

export default function Hello() {
  const [date, setDate] = useState<Date>();
  return <Space direction='vertical' >
    <DatePicker value={dayjs(date)} onChange={(d) => setDate(d?.toDate())} />
    <div>{date?.toISOString()}</div>
  </Space>
};
