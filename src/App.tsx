import { useState, useRef } from "react";
import MomentUtils from "@date-io/moment";
import { DateType } from "@date-io/type";
import moment from "moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { ToolbarComponentProps } from "@material-ui/pickers/Picker/Picker";
import { ListItem, Typography } from "@material-ui/core";
import { IconButtonProps } from "@material-ui/core/IconButton";
import { InputProps } from "@material-ui/core/Input/Input";
import { CustomDatePickerToolbar } from "./CustomDatePickerToolbar";

const KeyboardInputProps: Partial<InputProps> = {
  disableUnderline: true,
  fullWidth: true,
};
const KeyboardButtonProps: Partial<IconButtonProps> = { size: "small" };

const Message = () => <Typography>Hello world!</Typography>;

const CustomDatePickerToolbarWithMessage = (props: ToolbarComponentProps) => (
  <CustomDatePickerToolbar Message={Message} {...props} />
);

export const App = () => {
  const [selectedDate, handleDateChange] = useState<DateType | null>(moment());
  const anchorRef = useRef<HTMLLIElement>(null);

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
            autoOk
            format="DD/MM/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            InputProps={KeyboardInputProps}
            KeyboardButtonProps={KeyboardButtonProps}
          />
        </ListItem>
        <ListItem divider ref={anchorRef}>
          <KeyboardDatePicker
            fullWidth
            variant="inline"
            format="DD/MM/YYYY"
            views={["year", "month", "date"]}
            value={selectedDate}
            onChange={handleDateChange}
            InputProps={KeyboardInputProps}
            KeyboardButtonProps={KeyboardButtonProps}
            ToolbarComponent={CustomDatePickerToolbarWithMessage}
            PopoverProps={{
              anchorEl: () => anchorRef.current as Element,
              anchorOrigin: {
                vertical: 70,
                horizontal: 'center'
              }
            }}
          />
        </ListItem>
      </div>
    </MuiPickersUtilsProvider>
  );
};
