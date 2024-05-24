import React, {useState} from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimeValidation() {
  // Calculate default date and time for tomorrow at 8 AM
  const defaultDateTime = dayjs().add(1, 'day').startOf('day').add(9, 'hour');

  const [value, setValue] = useState(defaultDateTime);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(params) => <TextField {...params} />}
        label="Choose Appointment Date & Time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        minDate={dayjs()}
        minTime={dayjs().startOf('day').add(9, 'hour')}
        maxTime={dayjs().startOf('day').add(17, 'hour')}
        minutesStep={60} // Disable minutes by setting step to 60 (1 hour)
        className="rounded-xl bg-white outline-none p-4"
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
