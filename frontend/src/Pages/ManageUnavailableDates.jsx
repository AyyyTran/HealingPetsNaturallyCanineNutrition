import React, {useState} from 'react';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const ManageUnavailableDates = ({unavailableDates, setUnavailableDates}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAddDate = async () => {
    if (
      selectedDate &&
      !unavailableDates.includes(selectedDate.utc().format('YYYY-MM-DD'))
    ) {
      const newUnavailableDate = selectedDate.utc().format('YYYY-MM-DD');
      const newUnavailableDates = [...unavailableDates, newUnavailableDate];

      try {
        const requestBody = JSON.stringify({dates: newUnavailableDates});
        const response = await fetch(
          'https://healing-pets-backend-4102006eeea7.herokuapp.com/api/unavailable-dates',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: requestBody,
          }
        );

        console.log('Request URL:', response.url);
        console.log('Request Body:', requestBody);
        console.log('Response Status:', response.status);
        console.log('Response Status Text:', response.statusText);

        if (response.ok) {
          setUnavailableDates(newUnavailableDates);
          setSelectedDate(null);
          alert('Date added successfully!');
        } else {
          const responseText = await response.text();
          console.error('Error updating unavailable dates:', responseText);
          alert('Failed to add date. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error.message);
        alert('An error occurred. Please try again.');
      }
    }
  };

  const handleRemoveDate = async (dateToRemove) => {
    try {
      const response = await fetch(
        `https://healing-pets-backend-4102006eeea7.herokuapp.com/api/unavailable-dates/${dateToRemove}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const newUnavailableDates = unavailableDates.filter(
          (date) => date !== dateToRemove
        );
        setUnavailableDates(newUnavailableDates);
        alert('Date removed successfully!');
      } else {
        console.error('Error deleting unavailable date:', response.statusText);
        alert('Failed to remove date. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      alert('An error occurred. Please try again.');
    }
  };

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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DatePicker
          label="Add Unavailable Date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
          minDate={dayjs().utc()}
          shouldDisableDate={shouldDisableDate}
        />
        <Button variant="contained" color="primary" onClick={handleAddDate}>
          Add Date
        </Button>
        <List>
          {unavailableDates.map((date) => (
            <ListItem key={date} className="bg-white">
              <ListItemText
                className="text-primary"
                primary={dayjs(date).utc().format('MMMM D, YYYY')}
              />
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleRemoveDate(date)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </div>
    </LocalizationProvider>
  );
};

export default ManageUnavailableDates;
