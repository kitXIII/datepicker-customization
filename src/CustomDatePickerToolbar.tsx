import { FC } from "react";
import { useUtils } from "@material-ui/pickers";
import { ToolbarComponentProps } from "@material-ui/pickers/Picker/Picker";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  {
    toolbar: {
      boxSizing: "border-box",
      width: "310px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    actions: {
      boxSizing: "border-box",
      maxWidth: "100%",
      display: "flex",
      flexWrap: "nowrap",
      overflow: "auto",
      padding: "10px",
    },
    action: {
      flexShrink: 0,
      marginRight: "10px",
    },
    message: { padding: "10px" },
  },
  { name: "MuiPickersDatePickerRoot" }
);

export const CustomDatePickerToolbar: FC<
  ToolbarComponentProps & { Message: FC }
> = ({ date, setOpenView, Message, openView }) => {
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
        <Button
          color="primary"
          variant="text"
          className={classes.action}
          onClick={() => setOpenView("year")}
        >
          <Typography variant="h4" component="span">
            {date ? utils.getYearText(date) : "Year"}
          </Typography>
        </Button>
        <Button
          color="primary"
          variant="text"
          className={classes.action}
          onClick={() => setOpenView("month")}
        >
          <Typography variant="h4" component="span">
            {date ? utils.getMonthText(date) : "Month"}
          </Typography>
        </Button>
      </div>
    </div>
  );
};
