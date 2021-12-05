import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ja from 'date-fns/locale/ja'
registerLocale('ja', ja)

export const DatePickerInput = (props: ReactDatePickerProps) => {
  return (
    <DatePicker
      {...props}
      locale="ja"
      dateFormat='yyyy/MM/dd'
    />
  ) 
};
