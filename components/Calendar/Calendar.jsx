"use client"
import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './styles.module.css';
const Calendar = ({ heading }) => {
  const [value, setValue] = useState(dayjs('2022-04-17'));

  const handleDateChange = (newValue) => {
    setValue(newValue);
    console.log('Year:', newValue.format('YYYY'));
    console.log('Month:', newValue.format('MM'));
    console.log('Date:', newValue.format('DD'));
  };
  const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffd207',
    },
    secondary: {
      main: '#ffd207',
    },
  },
});
  return (
    <div className='calendar-container'>
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker']}>
            <DatePicker
              label={heading}
              value={value}
              onChange={handleDateChange}
              style={{
                border: '4px solid #4acf28',
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
    </ThemeProvider>

      {/* to access each value in a date separately */}
      {/* <h1> {value.format('YYYY')} </h1> */}
    </div>
  );
}

export default Calendar;