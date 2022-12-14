import { InputContainer, ErrorMessage } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";

const Input = ({ name, errorMessage, control, ...rest }: IInputProps) => {
  return (
    <>
    <InputContainer>
      <Controller 
        control={control}
        name={name}
        render={({field: { onChange, onBlur, name, value, ref }}) => <input {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref} />}
      />
    </InputContainer>
    {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};

export default Input;
