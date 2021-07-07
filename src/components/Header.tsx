import { Flex, Box, HStack, Text, Input, Icon, Avatar } from '@chakra-ui/react';
import {
  RiSearchLine,
  RiNotificationLine,
  RiUserAddLine,
} from 'react-icons/ri';

function Header() {
  return (
    <Flex
      as="header"
      align="center"
      marginX="auto"
      marginTop={4}
      paddingX={6}
      width="100%"
      maxWidth={1480}
      height={20}
    >
      <Text
        as="h1"
        width={64}
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
      >
        dashgo
        <Text as="span" marginLeft={1} color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        position="relative"
        flex={1}
        align="center"
        marginLeft={6}
        paddingX={8}
        paddingY={4}
        maxWidth={400}
        borderRadius="full"
        backgroundColor="gray.800"
        color="gray.200"
      >
        <Input
          placeholder="Buscar na plataforma"
          variant="unstyled"
          marginRight={4}
          paddingX={4}
          color="gray.50"
          _placeholder={{ color: 'gray:400' }}
        />

        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>

      <Flex align="center" marginLeft="auto">
        <HStack
          spacing={8}
          marginX={8}
          paddingRight={8}
          paddingY={1}
          borderRightWidth={1}
          borderColor="gray.700"
          color="gray.300"
        >
          <Icon as={RiNotificationLine} fontSize={20} />
          <Icon as={RiUserAddLine} fontSize={20} />
        </HStack>

        <Flex align="center">
          <Box marginRight={4} textAlign="right">
            <Text>José Eduardo Tomazeli</Text>
            <Text color="gray.300" fontSize="small">
              joseeduardo.tomazeli@outlook.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="José Eduardo Tomazeli"
            src="https://github.com/joseeduardotomazeli.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
