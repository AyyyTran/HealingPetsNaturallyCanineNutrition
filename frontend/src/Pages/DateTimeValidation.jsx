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
    onChange(name, newValue ? newValue.toString() : null);
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
        className="bg-white"
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