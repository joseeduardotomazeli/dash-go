import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

function Profile() {
  return (
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
  );
}

export default Profile;
