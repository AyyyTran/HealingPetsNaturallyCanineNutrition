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
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === 'rusty') {
      setIsAuthenticated(true);
      setPassword(''); // Clear the password field
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddDate = async () => {
    if (selectedDate) {
      const formattedDate = selectedDate.utc().format('YYYY-MM-DD');
      if (!unavailableDates.includes(formattedDate)) {
        const newUnavailableDates = [...unavailableDates, formattedDate];
        try {
          const response = await fetch(
            'https://healing-pets-backend-4102006eeea7.herokuapp.com/api/unavailable-dates',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({date: formattedDate}), // Send date in the correct format expected by the backend
            }
          );

          if (response.ok) {
            setUnavailableDates(newUnavailableDates);
            setSelectedDate(null);
          } else {
            console.error(
              'Failed to add unavailable date:',
              response.statusText
            );
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      } else {
        console.warn('Date already exists in unavailable dates.');
      }
    } else {
      console.warn('No date selected to add.');
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
      {!isAuthenticated && (
        <div className="mt-16 opacity-50">
          <TextField
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handlePasswordSubmit}
            sx={{
              width: 50,
              height: 55,
              color: 'black',
              background: '#e7e7e7',
            }}
          >
            Enter
          </Button>
        </div>
      )}
      {isAuthenticated && (
        <div>
          <div className="mt-8 mb-4">
            <label
              htmlFor="datetimepicker"
              className="px-2 py-8 text-3xl font-bold "
            >
              Manage Unavailable Dates! For Karissa Only!
            </label>
          </div>
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
      )}
    </LocalizationProvider>
  );
};

export default ManageUnavailableDates;
