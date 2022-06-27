import {
    Box,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text,
    StackDivider,
    AccordionIcon,
} from '@chakra-ui/react';

export default function OrderContainer() {
    return (
        <Box minW="100%">
            <VStack
                spacing={4}
                divider={<StackDivider borderColor="gray.200" />}
                align="stretch"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    fontWeight="semibold"
                    ms="1.5rem"
                >
                    <Text w="20%">Order_id</Text>
                    <Text w="20%">Status</Text>
                    <Text align="center" w="20%">
                        Date
                    </Text>
                </Box>
                <Accordion allowToggle>
                    <AccordionItem>
                        <Text>
                            <AccordionButton
                                ps="0"
                                _hover={{
                                    backgroundColor: 'teal.100',
                                }}
                            >
                                <Box
                                    display="flex"
                                    alignItems="flex-start"
                                    w="100%"
                                >
                                    <Text w="10%">OD9988</Text>
                                    <Text w="30%">Success</Text>
                                    <Text align="center" w="30%">
                                        28-06-2022
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Text>

                        <AccordionPanel>
                            <Box
                                align="start"
                                display="flex"
                                justifyContent="space-around"
                                w="100%"
                            >
                                <Text>id_buyer: US74788</Text>
                                <Text>Total Product: 5</Text>
                                <Text>Total: $748</Text>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <Text>
                            <AccordionButton
                                ps="0"
                                _hover={{
                                    backgroundColor: 'teal.100',
                                }}
                            >
                                <Box
                                    display="flex"
                                    alignItems="flex-start"
                                    w="100%"
                                >
                                    <Text w="10%">OD9584</Text>
                                    <Text w="30%">Canceled</Text>
                                    <Text align="center" w="30%">
                                        28-06-2022
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </Text>

                        <AccordionPanel>
                            <Box
                                align="start"
                                display="flex"
                                justifyContent="space-around"
                                w="100%"
                            >
                                <Text>id_buyer: US788</Text>
                                <Text>Total Product: 2</Text>
                                <Text>Total: $201</Text>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
        </Box>
    );
}
