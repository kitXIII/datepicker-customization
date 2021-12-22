import { FC } from "react";
import { useUtils } from "@material-ui/pickers";
import { ToolbarComponentProps } from "@material-ui/pickers/Picker/Picker";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Color } from "./styles";

type DatePickerToolbarProps = ToolbarComponentProps & { message?: string };

export const DatePickerToolbar: FC<DatePickerToolbarProps> = ({
  date,
  setOpenView,
  message,
  openView,
}) => {
  const utils = useUtils();
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      {message ? (
        <div className={classes.message}>
          <Typography variant="body2">{message}</Typography>
        </div>
      ) : null}
      <div className={classes.actions}>
        <button
          className={classes.action}
          onClick={() => setOpenView("year")}
        >
          {date ? utils.getYearText(date) : "Year"}
        </button>
        <button
          className={classes.action}
          onClick={() => setOpenView("month")}
        >
          {date ? utils.getMonthText(date) : "Month"}
        </button>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  toolbar: {
    boxSizing: "border-box",
    width: "312px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "16px",
    padding: "8px 8px 0",
  },
  message: {
    padding: "8px",
    fontSize: "16px",
    color: Color.grayDarker,
  },
  actions: {
    boxSizing: "border-box",
    width: "100%",
    paddingTop: "8px",
    display: "flex",
    justifyContent: "space-between",
  },
  action: {
    flexShrink: 0,
    padding: "8px 8px",

    outline: "none",
    border: "none",
    borderRadius: 0,

    cursor: "pointer",

    color: Color.blue,
    backgroundColor: Color.transparent,
    "&:hover": {
      backgroundColor: Color.grayLight,
    },
    "&:active &:focus": {
      color: Color.black,
    },

    fontWeight: 400,
    lineHeight: "24px",
    fontSize: "18px",
    textTransform: "capitalize",

    "& + &": {
      fontWeight: 600,
      marginLeft: "10px",
    },
  },
});
