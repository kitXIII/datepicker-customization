import { withStyles } from "@material-ui/core";
import Button, { ButtonProps } from "@material-ui/core/Button";

export const DatePickerButton = withStyles((theme) => ({
  root: {
    minWidth: "unset",
    color: "#3A4CCC",
    padding: "12px 8px",
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: "#F0F2F3",
    },
  },
  label: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: 600,
    padding: 0,
    lineHeight: "24px",
    fontSize: "20px"
  },
}))((props: ButtonProps) => <Button variant="text" {...props} />);
