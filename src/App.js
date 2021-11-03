import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ListItem, Typography } from "@material-ui/core";
import { CustomDatePickerToolbar } from "./CustomDatePickerToolbar";

const KeyboardInputProps = {
  disableUnderline: true,
  fullWidth: true,
};
const KeyboardButtonProps = { size: "small" };

const Message = () => <Typography>Hello world!</Typography>;

const CustomDatePickerToolbarWithMessage = (props) => (
  <CustomDatePickerToolbar Message={Message} {...props} />
);

export const App = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div
        style={{
          width: 600,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <ListItem divider>
          <Typography>Standard calendar</Typography>
        </ListItem>
        <ListItem divider>
          <Typography>
            Use custom component instead datepicker heading
          </Typography>
        </ListItem>
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
          />
        </ListItem>
        <ListItem divider>
          <KeyboardDatePicker
            fullWidth
            clearable
            format="DD/MM/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            InputProps={KeyboardInputProps}
            KeyboardButtonProps={KeyboardButtonProps}
            ToolbarComponent={CustomDatePickerToolbarWithMessage}
          />
        </ListItem>
      </div>
    </MuiPickersUtilsProvider>
  );
};
