import { useCallback, FC, useRef, ReactNode } from "react";
import {
  DatePickerView,
  KeyboardDatePicker as MUIKeyboardDatePicker,
} from "@material-ui/pickers";
import { ToolbarComponentProps } from "@material-ui/pickers/Picker/Picker";
import { makeStyles, Theme } from "@material-ui/core";
import { InputProps } from "@material-ui/core/Input/Input";
import { DatePickerToolbar } from "./DatePickerToolbar";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

const defaultFormat = "YYYY/MM/DD";

const KeyboardInputProps: Partial<InputProps> = {
  fullWidth: true,
};

const DatePickerViewOrder: DatePickerView[] = ["year", "month", "date"];

type DateIOType = MaterialUiPickersDate | null;

export type KeyboardDatePickerProps = {
  value: ParsableDate;
  onChange: (date: DateIOType, value?: string | null) => void;
  message?: string;
  format?: string;
  onAccept?: (date: DateIOType) => void;
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  disabled?: boolean;
  disableFuture?: boolean;
  disablePast?: boolean;
  shouldDisableDate?: (day: DateIOType) => boolean;
  invalidDateMessage?: ReactNode;
  invalidLabel?: string;
  maxDate?: ParsableDate;
  maxDateMessage?: ReactNode;
  minDate?: ParsableDate;
  minDateMessage?: ReactNode;
  strictCompareDates?: boolean;
  readOnly?: boolean;
};

export const KeyboardDatePicker: FC<KeyboardDatePickerProps> = ({
  format = defaultFormat,
  message,
  ...restProps
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
        {...restProps}
        format={format}
        variant="inline"
        views={DatePickerViewOrder}
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
        fullWidth
      />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
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

    "& .MuiPickersYearSelection-container": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      "& .MuiPickersYear-root": {
        margin: "8px 0",
        padding: "8px 12px",
        color: theme.palette.text.primary,
        fontSize: "16px",
        lineHeight: "16px",
        fontWeight: 400,
        borderRadius: "4px",

        "&:hover": {
          backgroundColor: "#F0F2F3",
        },
      },

      "& .MuiPickersYear-yearSelected": {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: 600,
        color: theme.palette.primary.main,
        margin: "8px 0",
        padding: "4px 8px",
      },
    },
  },
}));
