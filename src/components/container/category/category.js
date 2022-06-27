import { Box, VStack, Text, StackDivider } from '@chakra-ui/react';

export default function CategoryContainer() {
    return (
        <Box minW="100%">
            <VStack
                spacing={4}
                divider={<StackDivider borderColor="gray.200" />}
                align="stretch"
            >
                <Box display="flex" fontWeight="semibold">
                    <Text w="60%">Category Name</Text>
                    <Text align="center" w="20%">
                        Product
                    </Text>
                    <Text align="center" w="20%">
                        Date Add
                    </Text>
                </Box>
                <Box display="flex">
                    <Text w="60%">Sport</Text>
                    <Text align="center" w="20%">
                        10
                    </Text>
                    <Text align="center" w="20%">
                        10-04-2022
                    </Text>
                </Box>
                <Box display="flex">
                    <Text w="60%">Casual</Text>
                    <Text align="center" w="20%">
                        6
                    </Text>
                    <Text align="center" w="20%">
                        10-04-2022
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}
