import { FC } from "react";
import { useUtils } from "@material-ui/pickers";
import { ToolbarComponentProps } from "@material-ui/pickers/Picker/Picker";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { DatePickerButton } from "./DatePickerButton";

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
        <DatePickerButton
          className={classes.action}
          onClick={() => setOpenView("year")}
        >
          {date ? utils.getYearText(date) : "Year"}
        </DatePickerButton>
        <DatePickerButton
          className={classes.action}
          onClick={() => setOpenView("month")}
        >
          {date ? utils.getMonthText(date) : "Month"}
        </DatePickerButton>
      </div>
    </div>
  );
};

const useStyles = makeStyles(
  {
    toolbar: {
      boxSizing: "border-box",
      width: "312px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      marginBottom: "8px",
      padding: "8px 8px 0",
    },
    message: {
      padding: "8px",
      fontSize: "16px",
      color: "#616569",
    },
    actions: {
      boxSizing: "border-box",
      width: "100%",
      paddingTop: "8px",
      display: "flex",
      justifyContent: "space-between",
      overflow: "auto",
      color: "#3A4CCC",
    },
    action: {
      flexShrink: 0,

      "& + &": {
        marginLeft: "10px",
      },
    },
  },
);
