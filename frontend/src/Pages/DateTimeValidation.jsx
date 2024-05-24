import React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

export default function DateTimeValidation({name, value, onChange}) {
  // Parse the value to a valid date object using dayjs
  const parsedValue = value ? dayjs(value) : null;

  const handleChange = (newValue) => {
    // Format the new value to a string before passing it to the parent component's onChange handler
    onChange(name, newValue ? newValue.format() : null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(params) => <TextField {...params} />}
        label="Choose Appointment Date & Time"
        value={parsedValue}
        onChange={handleChange}
        minDate={dayjs()}
        minTime={dayjs().startOf('day').add(9, 'hour')}
        maxTime={dayjs().startOf('day').add(17, 'hour')}
        minutesStep={60}
        renderTime={(props) => (
          <TextField {...props} select SelectProps={{native: true}}>
            {[...Array(9).keys()].map((hour) => (
              <option key={hour} value={hour}>
                {hour}:00
              </option>
            ))}
          </TextField>
        )}
      />
    </LocalizationProvider>
  );
}
