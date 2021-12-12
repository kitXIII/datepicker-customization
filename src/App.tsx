import { useState } from "react";
import MomentUtils from "@date-io/moment";
import { DateType } from "@date-io/type";
import moment from "moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "./KeyboardDatePicker";

export const App = () => {
  const [selectedDate, handleDateChange] = useState<DateType | null>(moment());

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "200px",
            marginLeft: "200px",
            outline: "1px solid #000",
          }}
        >
          <KeyboardDatePicker
            message="Hello world!"
            value={selectedDate}
            onChange={handleDateChange}
            format="YYYY/MM/DD"
          />
        </div>
        <div
          style={{
            width: "312px",
            outline: "1px solid #000",
            marginLeft: "20px",
          }}
        >
          <KeyboardDatePicker
            value={selectedDate}
            onChange={handleDateChange}
            format="YYYY/MM/DD"
          />
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};
