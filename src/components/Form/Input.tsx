import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  label?: string;
  name: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props: InputProps,
  ref
) => {
  const { label, name, ...restProps } = props;

  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

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
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export default Input;
