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

const ManageUnavailableDates = ({unavailableDates, setUnavailableDates}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleAddDate = () => {
    if (
      selectedDate &&
      !unavailableDates.includes(selectedDate.format('YYYY-MM-DD'))
    ) {
      setUnavailableDates([
        ...unavailableDates,
        selectedDate.format('YYYY-MM-DD'),
      ]);
      setSelectedDate(null);
    }
  };

  const handleRemoveDate = (dateToRemove) => {
    setUnavailableDates(
      unavailableDates.filter((date) => date !== dateToRemove)
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div>
        <DatePicker
          label="Add Unavailable Date"
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
          minDate={dayjs()}
        />
        <Button variant="contained" color="primary" onClick={handleAddDate}>
          Add Date
        </Button>
        <List>
          {unavailableDates.map((date) => (
            <ListItem key={date} className="bg-white">
              <ListItemText
                className="text-primary"
                primary={dayjs(date).format('MMMM D, YYYY')}
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
