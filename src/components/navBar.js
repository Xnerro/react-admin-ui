import { Link, Box, Text, Flex } from '@chakra-ui/react';

export default function Nav() {
    return (
        <Box w="100" h="60px">
            <Flex h="100%" align="center" justify="space-between">
                <Text marginStart="5">Your Brand</Text>
                <Link marginRight="16">Logout</Link>
            </Flex>
        </Box>
    );
}
