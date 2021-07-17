import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showUserInformation?: boolean;
}

function Profile(props: ProfileProps) {
  const { showUserInformation = true } = props;

  return (
    <Flex align="center">
      {showUserInformation && (
        <Box marginRight={4} textAlign="right">
          <Text>José Eduardo Tomazeli</Text>
          <Text color="gray.300" fontSize="small">
            joseeduardo.tomazeli@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="José Eduardo Tomazeli"
        src="https://github.com/joseeduardotomazeli.png"
      />
    </Flex>
  );
}

export default Profile;
