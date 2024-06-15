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
      const newUnavailableDates = [
        ...unavailableDates,
        selectedDate.utc().format('YYYY-MM-DD'),
      ];
      try {
        const response = await fetch(
          'https://healing-pets-backend-4102006eeea7.herokuapp.com/api/unavailable-dates',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({dates: newUnavailableDates}),
          }
        );

        if (response.ok) {
          setUnavailableDates(newUnavailableDates);
          setSelectedDate(null);
        } else {
          console.error(
            'Error updating unavailable dates:',
            response.statusText
          );
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };

  const handleRemoveDate = async (dateToRemove) => {
    const newUnavailableDates = unavailableDates.filter(
      (date) => date !== dateToRemove
    );
    try {
      const response = await fetch(
        'https://healing-pets-backend-4102006eeea7.herokuapp.com/api/unavailable-dates',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({dates: newUnavailableDates}),
        }
      );

      if (response.ok) {
        setUnavailableDates(newUnavailableDates);
      } else {
        console.error('Error updating unavailable dates:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
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
