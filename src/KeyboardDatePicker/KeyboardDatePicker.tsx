import { useCallback, FC } from "react";
import {
  DatePickerView,
  KeyboardDatePicker as MUIKeyboardDatePicker,
} from "@material-ui/pickers";
import { ToolbarComponentProps } from "@material-ui/pickers/Picker/Picker";
import { PopoverOrigin } from "@material-ui/core";
import { IconButtonProps } from "@material-ui/core/IconButton";
import { InputProps } from "@material-ui/core/Input/Input";
import { DatePickerToolbar } from "./DatePickerToolbar";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

const KeyboardInputProps: Partial<InputProps> = {
  disableUnderline: true,
  fullWidth: true,
};

const KeyboardButtonProps: Partial<IconButtonProps> = { size: "small" };

const PopoverOriginSettings: PopoverOrigin = {
  vertical: -5,
  horizontal: 'center',
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
  format,
  message,
}) => {
  const ToolbarComponent = useCallback(
    (props: ToolbarComponentProps) => (
      <DatePickerToolbar message={message} {...props} />
    ),
    [message]
  );

  return (
    <MUIKeyboardDatePicker
      fullWidth
      variant="inline"
      format={format}
      views={DatePickerViewOrder}
      value={value}
      onChange={onChange}
      InputProps={KeyboardInputProps}
      KeyboardButtonProps={KeyboardButtonProps}
      ToolbarComponent={ToolbarComponent}
      PopoverProps={{
        transformOrigin: PopoverOriginSettings,
        elevation: 4,
      }}
    />
  );
};
