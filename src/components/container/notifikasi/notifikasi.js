import {
    Box,
    VStack,
    Text,
    StackDivider,
    Avatar,
    Container,
} from '@chakra-ui/react';

export default function NotifikasiContainer() {
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
                    <Text w="40%">Notification</Text>
                    <Text align="center" w="20%">
                        Notification Add
                    </Text>
                </Box>
                <Box display="flex" alignItems="center">
                    <Container w="10%">
                        <Avatar src="Camera.jpg" />
                    </Container>
                    <Text w="30%">Lorem Ipsum</Text>
                    <Text w="40%">
                        Lorem was order an product with id PD0299
                    </Text>
                    <Text align="center" w="20%">
                        10-04-2022
                    </Text>
                </Box>
                <Box display="flex" alignItems="center">
                    <Container w="10%">
                        <Avatar src="asset/default.jpg" />
                    </Container>
                    <Text w="30%">Lorem Ipsum</Text>
                    <Text w="40%">
                        Lorem was add to whistlist with product id PD9587
                    </Text>
                    <Text align="center" w="20%">
                        10-04-2022
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}
