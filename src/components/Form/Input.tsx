import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage,
} from '@chakra-ui/react';
import { DeepMap, FieldValues, FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
  errors?: DeepMap<FieldValues, FieldError>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props: InputProps,
  ref
) => {
  const { label, name, errors, ...restProps } = props;

  const error = errors[name];

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        ref={ref}
        id={name}
        name={name}
        size="lg"
        variant="filled"
        backgroundColor="gray.900"
        focusBorderColor="pink.500"
        _hover={{ backgroundColor: 'gray.900' }}
        {...restProps}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export default Input;
