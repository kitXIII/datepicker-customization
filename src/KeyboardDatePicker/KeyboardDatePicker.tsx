import { makeStyles, PopoverOrigin } from "@material-ui/core";
import {
  DatePickerView,
  KeyboardDatePicker as MUIKeyboardDatePicker,
} from "@material-ui/pickers";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";
import { ToolbarComponentProps } from "@material-ui/pickers/Picker/Picker";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { isUndefined, omitBy } from "lodash";
import React, { FC, ReactNode, useCallback, useMemo, useRef } from "react";

import { DatePickerToolbar } from "./DatePickerToolbar";
import { Color } from "./styles";

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
  autoOk?: boolean;
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
  inputValue?: string;
  popoverAnchorOrigin?: PopoverOrigin;
  popoverTransformOrigin?: PopoverOrigin;
};

export const KeyboardDatePicker: FC<KeyboardDatePickerProps> = ({
  format = "YYYY-MM-DD",
  message,
  popoverAnchorOrigin,
  popoverTransformOrigin,
  ...restProps
}) => {
  const ToolbarComponent = useCallback(
    (props: ToolbarComponentProps) => (
      <DatePickerToolbar message={message} {...props} />
    ),
    [message]
  );

  const popoverOriginProps = useMemo(
    () =>
      omitBy(
        {
          anchorOrigin: popoverAnchorOrigin,
          transformOrigin: popoverTransformOrigin,
        },
        isUndefined
      ),
    [popoverAnchorOrigin, popoverTransformOrigin]
  );

  const classes = useStyles();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={classes.container} ref={containerRef}>
      <MUIKeyboardDatePicker
        {...restProps}
        format={format}
        variant="inline"
        inputVariant="outlined"
        views={DatePickerViewOrder}
        InputProps={{
          fullWidth: true,
        }}
        KeyboardButtonProps={{
          className: classes.inputIcon || undefined,
          size: "small",
          disableRipple: true,
        }}
        ToolbarComponent={ToolbarComponent}
        leftArrowButtonProps={{
          disableRipple: true,
        }}
        rightArrowButtonProps={{
          disableRipple: true,
        }}
        PopoverProps={{
          className: classes.popover,
          anchorEl: () => containerRef.current as Element,
          PaperProps: {
            elevation: 0,
            square: true,
          },
          ...popoverOriginProps,
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
    borderRadius: 0,
  },
  popover: {
    "& .MuiPopover-paper": {
      backgroundColor: Color.white,
      boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.16)",
    },

    "& .MuiPickersCalendarHeader": {
      "&-transitionContainer ": {
        height: "32px",
        "& > *": {
          bottom: 0,
        },
      },

      "&-switchHeader": {
        height: "40px",
        padding: "0 12px",
        marginBottom: "16px",
        marginTop: 0,

        "& .MuiIconButton-root": {
          borderRadius: 0,
          width: "32px",
          height: "32px",
          color: Color.grayDark,

          "&:hover": {
            backgroundColor: Color.grayLight,
          },
        },

        "& .MuiIconButton-root.Mui-disabled": {
          color: Color.gray4,
        },

        "& .MuiTypography-root": {
          fontSize: "18px",
          fontWeight: 400,
          color: Color.textBody,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },

      "&-daysHeader": {
        height: "40px",
        maxHeight: "unset",

        "& .MuiPickersCalendarHeader-dayLabel": {
          fontSize: "14px",
          color: Color.grayDark,
        },
      },
    },

    "& .MuiPickersDay": {
      "&-day": {
        margin: 0,
        width: "40px",
        height: "40px",
        borderRadius: 0,
        fontSize: "18px",
        color: Color.textBody,

        "&:hover": {
          color: Color.textBody,
          backgroundColor: Color.grayLight2,
        },
      },

      "&-current": {
        color: Color.blue,
      },

      "&-daySelected": {
        color: Color.white,
        backgroundColor: Color.blue,
      },

      "&-dayDisabled": {
        color: Color.gray3,
      },

      "&-hidden": {
        opacity: 1,
        color: Color.gray4,
      },
    },

    "& .MuiPickersCalendar-transitionContainer": {
      marginTop: "8px",
      minHeight: "240px",
      paddingBottom: "12px",
    },

    "& .MuiPickersYearSelection-container": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      "& .MuiPickersYear": {
        "&-root": {
          margin: "4px 0",
          padding: "4px 8px",
          color: Color.textBody,
          fontSize: "18px",
          lineHeight: "24px",
          fontWeight: 400,
          borderRadius: 0,

          "&:hover": {
            color: Color.textBody,
            backgroundColor: Color.grayLight,
          },
        },

        "&-yearDisabled": {
          color: Color.gray3,
        },

        "&-yearSelected": {
          color: Color.blue,
          fontWeight: 400,
        },
      },
    },

    "& .MuiPickersMonthSelection-container": {
      width: "100%",
      padding: "0 0 24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridColumnGap: "0px",
      gridRowGap: "0px",
      justifyItems: "center",

      "& .MuiPickersMonth": {
        "&-root": {
          flex: "unset",
          width: "45px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 0,

          color: Color.textBody,
          fontSize: "18px",
          fontWeight: 400,

          "&:hover": {
            color: Color.textBody,
            backgroundColor: Color.grayLight,
          },
        },

        "&-monthDisabled": {
          color: Color.gray3,
        },

        "&-monthSelected": {
          color: Color.blue,
          fontWeight: 400,
        },
      },
    },

    "& .MuiPickersBasePicker-pickerView": {
      minHeight: "unset",
    },
  },
});
