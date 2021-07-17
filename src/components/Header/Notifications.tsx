import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

function Notifications() {
  return (
    <HStack
      spacing={[6, 8]}
      marginX={[6, 8]}
      paddingRight={[6, 8]}
      paddingY={1}
      borderRightWidth={1}
      borderColor="gray.700"
      color="gray.300"
    >
      <Icon as={RiNotificationLine} fontSize={20} />
      <Icon as={RiUserAddLine} fontSize={20} />
    </HStack>
  );
}

export default Notifications;
