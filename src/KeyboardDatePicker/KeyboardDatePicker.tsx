import { useCallback, FC, useRef } from "react";
import {
  DatePickerView,
  KeyboardDatePicker as MUIKeyboardDatePicker,
} from "@material-ui/pickers";
import { ToolbarComponentProps } from "@material-ui/pickers/Picker/Picker";
import { makeStyles } from "@material-ui/core";
import { InputProps } from "@material-ui/core/Input/Input";
import { DatePickerToolbar } from "./DatePickerToolbar";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

const defaultFormat = "YYYY/MM/DD";

const KeyboardInputProps: Partial<InputProps> = {
  disableUnderline: true,
  fullWidth: true,
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
  format = defaultFormat,
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
        ToolbarComponent={ToolbarComponent}
        PopoverProps={{
          className: classes.popover,
          anchorEl: () => containerRef.current as Element,
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
  inputIcon: {
    borderRadius: "4px",
  },
  popover: {
    "& .MuiPickersCalendarHeader-switchHeader": {
      padding: "0 12px",
      marginBottom: "35px",

      "& .MuiIconButton-root": {
        borderRadius: "4px",
        width: "32px",
        height: "32px",
      },
      "& .MuiTypography-root": {
        fontWeight: 600,
      },
    },

    "& .MuiPickersDay-day": {
      margin: 0,
      width: "40px",
      height: "40px",
      borderRadius: "4px",

      "&:hover": {
        backgroundColor: "#E1E4E8",
      },
    },

    "& .MuiPickersDay-hidden": {
      opacity: 1,
      color: "#BDBDBD",
    },

    "& .MuiPickersCalendar-transitionContainer": {
      minHeight: "240px",
      paddingBottom: "12px",
    },
  },
});
