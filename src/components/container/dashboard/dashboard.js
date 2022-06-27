import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import { BsFillBarChartLineFill } from 'react-icons/bs';
import { FaPager, FaBox, FaUserAlt } from 'react-icons/fa';
import { IoMdArrowDropupCircle } from 'react-icons/io';
import { RiBillFill } from 'react-icons/ri';
import FirstModel from '../chart/firstModel';
import SecondModel from '../chart/secondModel';

export default function DashboardPanel() {
    return (
        <Box minW="100%">
            <Flex
                flexDir={['column', 'row', 'row']}
                w="100%"
                justify="space-between"
                align="flex-start"
            >
                <Container
                    minW="60%"
                    w={['70%', '50%']}
                    maxH="fit-content"
                    bg="white"
                    p="10"
                    borderRadius="md"
                    boxShadow="md"
                    fontSize={['xl', 'md', 'xl']}
                >
                    <Heading as="h2" p="4" align="center" size="1xl">
                        Monthly Income
                    </Heading>
                    <FirstModel />
                </Container>
                <Container
                    fontSize={['xl', 'md', 'xl']}
                    minW="inherit"
                    w="40%"
                    pt="0"
                    pb="10"
                    ps="10"
                    pe="10"
                >
                    <Container pt="3" pb="3" w="fit-content">
                        <Text as="h3" fontSize="1xl" align="center">
                            Incomes
                        </Text>
                    </Container>
                    <Flex justify="space-between" align="center" mt="5">
                        <Container
                            pt="3"
                            pb="3"
                            bg="#fff"
                            borderRadius="lg"
                            boxShadow="lg"
                            minW="inherit"
                            w="45%"
                        >
                            <Text
                                as="h3"
                                fontSize={['10', '10', '10', 'md']}
                                align="center"
                                mb="5"
                            >
                                Daily
                            </Text>
                            <Flex
                                as="span"
                                w="100%"
                                align="center"
                                justify="space-between"
                            >
                                <BsFillBarChartLineFill color="teal" />
                                <Heading fontSize={['10', '10', '10', 'md']}>
                                    $ 7857
                                </Heading>
                            </Flex>
                        </Container>
                        <Container
                            pt="3"
                            pb="3"
                            bg="#fff"
                            borderRadius="lg"
                            boxShadow="lg"
                            minW="inherit"
                            w="45%"
                        >
                            <Text
                                as="h3"
                                fontSize={['10', '10', '10', 'md']}
                                align="center"
                                mb="5"
                            >
                                Yearly
                            </Text>
                            <Flex
                                as="span"
                                w="100%"
                                align="center"
                                justify="space-between"
                            >
                                <BsFillBarChartLineFill color="teal" />
                                <Heading fontSize={['10', '10', '10', 'md']}>
                                    $ 7857
                                </Heading>
                            </Flex>
                        </Container>
                    </Flex>
                    <Container
                        mt="5"
                        w="100%"
                        bg="#fff"
                        boxShadow="md"
                        borderRadius="md"
                        p="3"
                    >
                        <Text
                            as="h3"
                            fontSize={['10', '10', '10', 'md']}
                            align="center"
                            mb="5"
                        >
                            Sales
                        </Text>
                        <Flex
                            w="100%"
                            h={['180px', '200px']}
                            minH="50%"
                            justify="center"
                        >
                            <SecondModel />
                        </Flex>
                    </Container>
                </Container>
            </Flex>
            <Flex w="100%" justify="space-between" flexWrap="wrap">
                <Flex
                    mt="5"
                    w="20%"
                    minH="10%"
                    h="100px"
                    bg="#fff"
                    boxShadow="md"
                    borderRadius="md"
                    flexDir="column"
                    justify="space-between"
                >
                    <Flex
                        align="center"
                        h="70%"
                        justify="space-around"
                        color="red.200"
                    >
                        <Box fontSize={['20', '30', '30', '45']}>
                            <FaPager />
                        </Box>
                        <Flex flexDir="column" align="flex-end">
                            <Text fontSize={['smaller', 'sm', 'sm', 'larger']}>
                                Visit
                            </Text>
                            <Text fontSize="smaller">851</Text>
                        </Flex>
                    </Flex>
                    <Box h="30%" bg="red.200" borderBottomRadius="md" w="100%">
                        <Flex
                            w="100%"
                            align="center"
                            justify="space-evenly"
                            h="100%"
                            color="green.400"
                        >
                            <Text align="center">50%</Text>
                            <IoMdArrowDropupCircle />
                        </Flex>
                    </Box>
                </Flex>
                <Flex
                    mt="5"
                    w="20%"
                    minH="10%"
                    h="100px"
                    bg="#fff"
                    boxShadow="md"
                    borderRadius="md"
                    flexDir="column"
                    justify="space-between"
                >
                    <Flex
                        align="center"
                        h="70%"
                        justify="space-around"
                        color="green.200"
                    >
                        <Box fontSize={['20', '30', '30', '45']}>
                            <FaBox />
                        </Box>
                        <Flex flexDir="column" align="flex-end">
                            <Text fontSize={['smaller', 'sm', 'sm', 'larger']}>
                                Product Whistlist
                            </Text>
                            <Text fontSize="smaller">584</Text>
                        </Flex>
                    </Flex>
                    <Box
                        h="30%"
                        bg="green.200"
                        borderBottomRadius="md"
                        w="100%"
                    >
                        <Flex
                            w="100%"
                            align="center"
                            justify="space-evenly"
                            h="100%"
                            color="green.400"
                        >
                            <Text align="center">50%</Text>
                            <IoMdArrowDropupCircle />
                        </Flex>
                    </Box>
                </Flex>
                <Flex
                    mt="5"
                    w="20%"
                    minH="10%"
                    h="100px"
                    bg="#fff"
                    boxShadow="md"
                    borderRadius="md"
                    flexDir="column"
                    justify="space-between"
                >
                    <Flex
                        align="center"
                        h="70%"
                        justify="space-around"
                        color=" blue.200"
                    >
                        <Box fontSize={['20', '30', '30', '45']}>
                            <FaUserAlt />
                        </Box>
                        <Flex flexDir="column" align="flex-end">
                            <Text fontSize={['smaller', 'sm', 'sm', 'larger']}>
                                Account
                            </Text>
                            <Text fontSize="smaller">215</Text>
                        </Flex>
                    </Flex>
                    <Box h="30%" bg="blue.200" borderBottomRadius="md" w="100%">
                        <Flex
                            w="100%"
                            align="center"
                            justify="space-evenly"
                            h="100%"
                            color="green.400"
                        >
                            <Text align="center">50%</Text>
                            <IoMdArrowDropupCircle />
                        </Flex>
                    </Box>
                </Flex>
                <Flex
                    mt="5"
                    w="20%"
                    minH="10%"
                    h="100px"
                    bg="#fff"
                    boxShadow="md"
                    borderRadius="md"
                    flexDir="column"
                    justify="center"
                >
                    <Flex
                        align="center"
                        h="70%"
                        justify="space-around"
                        color=" teal.200"
                    >
                        <Box fontSize={['20', '30', '30', '45']}>
                            <RiBillFill />
                        </Box>
                        <Flex flexDir="column" align="flex-end">
                            <Text fontSize={['smaller', 'sm', 'sm', 'larger']}>
                                Total Order
                            </Text>
                            <Text fontSize="smaller">215</Text>
                        </Flex>
                    </Flex>
                    <Box h="30%" bg="teal.200" borderBottomRadius="md" w="100%">
                        <Flex
                            w="100%"
                            align="center"
                            justify="space-evenly"
                            h="100%"
                            color="green.400"
                        >
                            <Text align="center">50%</Text>
                            <IoMdArrowDropupCircle />
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}
