import { Link as To } from 'react-router-dom';

import {
    Avatar,
    Text,
    Box,
    Button,
    VStack,
    Container,
    Flex,
} from '@chakra-ui/react';

const LinkItmes = [
    'dashboard',
    'product',
    'category',
    'notification',
    'order',
    'account',
];

export default function Side() {
    return (
        <Box
            minH="100vh"
            w="200px"
            maxH="100%"
            bg="blackAlpha.900"
            color="#fff"
        >
            <Container
                mt="3"
                pb="3"
                w="100%"
                h="fit-content"
                centerContent
                borderBottom="2px"
                borderColor="gray.700"
            >
                <Flex alignItems="center" justify="baseline" w="100%">
                    <Avatar
                        mt="1"
                        size="sm"
                        alignSelf="center"
                        src="Camera.jpg"
                    />
                    <Flex>
                        <Text ms="3" fontSize="1xl">
                            Xnerro
                        </Text>
                    </Flex>
                </Flex>
            </Container>
            <VStack spacing="5" align="center" mt="10">
                {LinkItmes.map((link, i) => (
                    <Button
                        _active={{
                            backgroundColor: 'blue.700',
                        }}
                        className="fx"
                        _before={{
                            content: '""',
                            width: '5px',
                            height: '100%',
                            left: '0%',
                            display: '',
                            position: 'absolute',
                        }}
                        textTransform="capitalize"
                        as="span"
                        key={i}
                        w="100%"
                        align="center"
                        fontSize={[12, 'md', 'lg']}
                        borderRadius="none"
                        paddingTop={[3, 5, 7]}
                        paddingBottom={[3, 5, 7]}
                        variant="ghost"
                        _hover={{
                            backgroundColor: 'blue.900',
                        }}
                    >
                        <To to={'/' + link}>{link}</To>
                    </Button>
                ))}
            </VStack>
        </Box>
    );
}
