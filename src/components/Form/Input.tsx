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

function Input(props: InputProps) {
  const { label, name, ...rest } = props;

  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        size="lg"
        variant="filled"
        backgroundColor="gray.900"
        focusBorderColor="pink.500"
        _hover={{ backgroundColor: 'gray.900' }}
        {...rest}
      />
    </FormControl>
  );
}

export default Input;
