import { Flex, Text } from "@mantine/core"

import classes from './not-found.module.css'

export const NotFound = () => {
  return (
    <Flex direction="column" justify="center" align="center" h="100vh">
       <Text className={classes["sub-title"]}>Page Not Found</Text>
       <Text className={classes["main-title"]}>404</Text>
    </Flex>
  );
};
