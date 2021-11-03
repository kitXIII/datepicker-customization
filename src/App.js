import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ListItem } from "@material-ui/core";

const KeyboardInputProps = {
  disableUnderline: true,
  fullWidth: true,
};
const KeyboardButtonProps = { size: "small" };

export const App = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ListItem divider>
        <KeyboardDatePicker
          fullWidth
          clearable
          autoOk
          value={selectedDate}
          onChange={handleDateChange}
          InputProps={KeyboardInputProps}
          KeyboardButtonProps={KeyboardButtonProps}
        />
      </ListItem>
    </MuiPickersUtilsProvider>
  );
};
