import { useCallback, FC, useRef } from "react";
import {
  DatePickerView,
  KeyboardDatePicker as MUIKeyboardDatePicker,
} from "@material-ui/pickers";
import { ToolbarComponentProps } from "@material-ui/pickers/Picker/Picker";
import { makeStyles, PopoverOrigin } from "@material-ui/core";
import { InputProps } from "@material-ui/core/Input/Input";
import { DatePickerToolbar } from "./DatePickerToolbar";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

const KeyboardInputProps: Partial<InputProps> = {
  disableUnderline: true,
  fullWidth: true,
};


const PopoverOriginSettings: PopoverOrigin = {
  vertical: -5,
  horizontal: "center",
};

const DatePickerViewOrder: DatePickerView[] = ["year", "month", "date"];

export type KeyboardDatePickerProps = {
  value: ParsableDate;
  onChange: (date: MaterialUiPickersDate | null, value?: string | null) => void;
  format?: string;
  message?: string;
};

export const KeyboardDatePicker: FC<KeyboardDatePickerProps> = ({
  value,
  onChange,
  format,
  message,
}) => {
  const ToolbarComponent = useCallback(
    (props: ToolbarComponentProps) => (
      <DatePickerToolbar message={message} {...props} />
    ),
    [message]
  );

  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={classes.container} ref={containerRef}>
      <MUIKeyboardDatePicker
        className={classes.picker}
        fullWidth
        variant="inline"
        format={format}
        views={DatePickerViewOrder}
        value={value}
        onChange={onChange}
        InputProps={KeyboardInputProps}
        KeyboardButtonProps={{
          className: classes.inputIcon || undefined,
          size: "small",
        }}
        leftArrowButtonProps={{
          size: "small",
        }}
        rightArrowButtonProps={{
          size: "small",
        }}
        ToolbarComponent={ToolbarComponent}
        PopoverProps={{
          className: classes.popover,
          anchorEl: containerRef.current,
          transformOrigin: PopoverOriginSettings,
          elevation: 4,
        }}
      />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    width: "100%",
  },
  picker: {},
  inputIcon: {
    borderRadius: "4px",
  },
  popover: {
    "& .MuiPickersCalendarHeader-switchHeader": {
      padding: '0 12px',
    },
    "& .MuiPickersCalendarHeader-switchHeader .MuiIconButton-root": {
      borderRadius: "4px",
      width: '32px',
      height: '32px',
    },
  },
});
