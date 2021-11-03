import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ListItem, Typography } from "@material-ui/core";

const KeyboardInputProps = {
  disableUnderline: true,
  fullWidth: true,
};
const KeyboardButtonProps = { size: "small" };

const Message = () => <div style={{ padding: '10px 20px 0'}}><Typography>Hello world!</Typography></div>;

export const App = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div style={{ width: 600, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <ListItem divider>
          <KeyboardDatePicker
            fullWidth
            clearable
            autoOk
            format="DD/MM/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            InputProps={KeyboardInputProps}
            KeyboardButtonProps={KeyboardButtonProps}
            ToolbarComponent={Message}
          />
        </ListItem>
        <ListItem divider>
        </ListItem>
      </div>
    </MuiPickersUtilsProvider>
  );
};
