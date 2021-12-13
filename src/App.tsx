import { useState } from "react";
import MomentUtils from "@date-io/moment";
import { DateType } from "@date-io/type";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "./KeyboardDatePicker";

export const App = () => {
  const [selectedDate1, handleDateChange1] = useState<DateType | null>(null);
  const [selectedDate2, handleDateChange2] = useState<DateType | null>(null);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "200px",
            marginLeft: "200px",
          }}
        >
          <KeyboardDatePicker
            message="Hello world!"
            value={selectedDate1}
            onChange={handleDateChange1}
          />
        </div>
        <div
          style={{
            width: "312px",
            marginLeft: "20px",
          }}
        >
          <KeyboardDatePicker
            value={selectedDate2}
            onChange={handleDateChange2}
          />
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
};
