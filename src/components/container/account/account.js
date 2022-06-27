import {
    Box,
    VStack,
    StackDivider,
    Text,
    Container,
    Avatar,
} from '@chakra-ui/react';

export default function AccountContainer() {
    return (
        <Box minW="100%">
            <VStack
                spacing={4}
                divider={<StackDivider borderColor="gray.200" />}
                align="stretch"
            >
                <Box display="flex" alignItems="center" fontWeight="semibold">
                    <Text w="10%">Avatar</Text>
                    <Text w="30%">Name</Text>
                    <Text w="40%">email</Text>
                    <Text align="center" w="20%">
                        Last Online
                    </Text>
                </Box>
                <Box display="flex" alignItems="center">
                    <Container w="10%">
                        <Avatar src="Camera.jpg" />
                    </Container>
                    <Text w="30%">Lorem Ipsum</Text>
                    <Text w="40%">test@test.com</Text>
                    <Text align="center" w="20%">
                        3 hour ago
                    </Text>
                </Box>
                <Box display="flex" alignItems="center">
                    <Container w="10%">
                        <Avatar src="asset/default.jpg" />
                    </Container>
                    <Text w="30%">Lorem Ipsum</Text>
                    <Text w="40%">test@test.com</Text>
                    <Text align="center" w="20%">
                        Online
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}
