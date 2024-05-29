import React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

export default function DateTimeValidation({name, value, onChange}) {
  const parsedValue = value ? dayjs(value) : null;

  const handleChange = (newValue) => {
    onChange(name, newValue ? newValue.toString() : null);
  };

  const shouldDisableDate = (date) => {
    // Disable June 15, 2024 for testing
    return date.isSame(dayjs('2024-06-15'), 'day');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <p className="text-xl text-center font-bold">
        NOTE: ALL APPOINTMENTS REQUIRE A $30 DEPOSIT TO BE BOOKED.
      </p>
      <p className="text-xl text-center font-bold py-4">
        E-Transfer deposit to info@healingpetsnutrition.com
      </p>
      <DateTimePicker
        renderInput={(params) => <TextField {...params} />}
        label="Choose Appointment Date & Time"
        value={parsedValue}
        onChange={handleChange}
        minDate={dayjs()}
        minTime={dayjs().startOf('day').add(9, 'hour')}
        maxTime={dayjs().startOf('day').add(17, 'hour')}
        minutesStep={60}
        shouldDisableDate={shouldDisableDate}
        className="bg-white"
      />
    </LocalizationProvider>
  );
}
