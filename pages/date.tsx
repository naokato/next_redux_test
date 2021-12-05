import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form'
import { DatePickerInput } from "../components/datepicker";

const Home: NextPage = () => {
  const { watch, register, control } = useForm(); 
  const form = watch();
  const onSubmit = () => {
    console.log(form);
  };

  return (
    <div>
      <Controller
        control={control}
        name='mydate'
        selected={form.mydate}
        render={({ onChange, onBlur, value, ref }) => (
          <DatePickerInput onChange={onChange} onBlur={onBlur} selected={value} inputRef={ref} />
        )}
      />
      <button onClick={onSubmit}>
        submit!
      </button>
    </div>
  );
};

export default Home;
