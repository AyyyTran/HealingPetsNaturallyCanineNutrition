import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(timezone);

const DateTimeValidation = ({unavailableDates, name, value, onChange}) => {
  // Set the default timezone to America/Los_Angeles (PDT)
  dayjs.tz.setDefault('America/Los_Angeles');

  // Parse the value using PDT timezone
  const parsedValue = value ? dayjs(value).tz('America/Los_Angeles') : null;

  const handleChange = (newValue) => {
    // Ensure newValue is valid
    if (newValue) {
      // Convert to local time (PDT)
      const pdtTime = newValue.local().format('YYYY-MM-DDTHH:mm:ss');
      onChange(name, pdtTime);
    } else {
      // Handle case when no value is selected
      onChange(name, null);
    }
  };

  // Function to disable unavailable dates
  const shouldDisableDate = (date) => {
    const formattedDate = date.utc().format('YYYY-MM-DD');
    const isDisabled = unavailableDates.some((unavailableDate) => {
      return (
        formattedDate === dayjs(unavailableDate).utc().format('YYYY-MM-DD')
      );
    });
    console.log(`Date ${formattedDate} is disabled:`, isDisabled);
    return isDisabled;
  };

  // Log mount and state changes
  useEffect(() => {
    console.log('DateTimeValidation component mounted');
    console.log('unavailableDates:', unavailableDates);
    console.log('parsedValue:', parsedValue);
  }, [unavailableDates, parsedValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
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
          minDate={dayjs().startOf('day').add(1, 'day')} // Minimum date is tomorrow
          minTime={dayjs().startOf('day').add(9, 'hour')} // Minimum time is 9 AM PDT
          maxTime={dayjs().startOf('day').add(17, 'hour')} // Maximum time is 5 PM PDT
          minutesStep={60}
          shouldDisableDate={shouldDisableDate}
          className="bg-white"
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateTimeValidation;
