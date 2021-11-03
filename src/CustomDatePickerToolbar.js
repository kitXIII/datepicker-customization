import * as React from "react";
import { useUtils } from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  {
    toolbar: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    actions: {
      display: "flex",
      padding: "10px",
      justifyContent: "space-between",
    },
    message: { padding: "10px" },
  },
  { name: "MuiPickersDatePickerRoot" }
);

export const CustomDatePickerToolbar = ({
  date,
  setOpenView,
  Message,
}) => {
  const utils = useUtils();
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      {Message ? (
        <div className={classes.message}>
          <Message />
        </div>
      ) : null}
      <div className={classes.actions}>
        <Button onClick={() => setOpenView("year")}>
          {date ? utils.getYearText(date) : "Year"}
        </Button>
        <Button onClick={() => setOpenView("month")}>
          {date ? utils.getMonthText(date) : "Month"}
        </Button>
      </div>
    </div>
  );
};
