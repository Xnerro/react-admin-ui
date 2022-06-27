import { Box, SimpleGrid, Text, AspectRatio } from '@chakra-ui/react';

export default function ProductContainer() {
    return (
        <Box minW="100%">
            <SimpleGrid columns={5} spacing={5}>
                <AspectRatio ratio={1} maxW="100%">
                    <Box
                        role="group"
                        cursor="pointer"
                        w="100%"
                        boxShadow="xl"
                        minH="50%"
                        position="absolute"
                        border="1px"
                        borderColor="gray.200"
                        _after={{
                            position: 'absolute',
                            content: '""',
                            display: 'inline',
                            w: 'inherit',
                            h: 'inherit',
                            backgroundImage: "url('asset/sepatu1.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transition: 'all .5s',
                        }}
                        _hover={{
                            _after: {
                                transform: 'scale(1.2)',
                            },
                        }}
                    >
                        <Box
                            position="absolute"
                            visibility="hidden"
                            zIndex="dropdown"
                            w="100%"
                            h="100%"
                            _groupHover={{
                                color: '#fff',
                                visibility: 'visible',
                                backgroundColor: 'blackAlpha.700',
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDir="column"
                        >
                            <Text fontSize="20" fontWeight="bold">
                                Product Name
                            </Text>
                            <Text fontSize="sm" fontWeight="light">
                                Date Add
                            </Text>
                        </Box>
                    </Box>
                </AspectRatio>
                <AspectRatio ratio={1} maxW="100%">
                    <Box
                        role="group"
                        cursor="pointer"
                        w="100%"
                        boxShadow="xl"
                        minH="50%"
                        position="absolute"
                        border="1px"
                        borderColor="gray.200"
                        _after={{
                            position: 'absolute',
                            content: '""',
                            display: 'inline',
                            w: 'inherit',
                            h: 'inherit',
                            backgroundImage: "url('asset/sepatu2.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transition: 'all .5s',
                        }}
                        _hover={{
                            _after: {
                                transform: 'scale(1.2)',
                            },
                        }}
                    >
                        <Box
                            position="absolute"
                            visibility="hidden"
                            zIndex="dropdown"
                            w="100%"
                            h="100%"
                            _groupHover={{
                                color: '#fff',
                                visibility: 'visible',
                                backgroundColor: 'blackAlpha.700',
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDir="column"
                        >
                            <Text fontSize="20" fontWeight="bold">
                                Product Name
                            </Text>
                            <Text fontSize="sm" fontWeight="light">
                                Date Add
                            </Text>
                        </Box>
                    </Box>
                </AspectRatio>
                <AspectRatio ratio={1} maxW="100%">
                    <Box
                        role="group"
                        cursor="pointer"
                        w="100%"
                        boxShadow="xl"
                        minH="50%"
                        position="absolute"
                        border="1px"
                        borderColor="gray.200"
                        _after={{
                            position: 'absolute',
                            content: '""',
                            display: 'inline',
                            w: 'inherit',
                            h: 'inherit',
                            backgroundImage: "url('asset/sepatu3.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transition: 'all .5s',
                        }}
                        _hover={{
                            _after: {
                                transform: 'scale(1.2)',
                            },
                        }}
                    >
                        <Box
                            position="absolute"
                            visibility="hidden"
                            zIndex="dropdown"
                            w="100%"
                            h="100%"
                            _groupHover={{
                                color: '#fff',
                                visibility: 'visible',
                                backgroundColor: 'blackAlpha.700',
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDir="column"
                        >
                            <Text fontSize="20" fontWeight="bold">
                                Product Name
                            </Text>
                            <Text fontSize="sm" fontWeight="light">
                                Date Add
                            </Text>
                        </Box>
                    </Box>
                </AspectRatio>
                <AspectRatio ratio={1} maxW="100%">
                    <Box
                        role="group"
                        cursor="pointer"
                        w="100%"
                        boxShadow="xl"
                        minH="50%"
                        position="absolute"
                        border="1px"
                        borderColor="gray.200"
                        _after={{
                            position: 'absolute',
                            content: '""',
                            display: 'inline',
                            w: 'inherit',
                            h: 'inherit',
                            backgroundImage: "url('asset/jacket1.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transition: 'all .5s',
                        }}
                        _hover={{
                            _after: {
                                transform: 'scale(1.2)',
                            },
                        }}
                    >
                        <Box
                            position="absolute"
                            visibility="hidden"
                            zIndex="dropdown"
                            w="100%"
                            h="100%"
                            _groupHover={{
                                color: '#fff',
                                visibility: 'visible',
                                backgroundColor: 'blackAlpha.700',
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDir="column"
                        >
                            <Text fontSize="20" fontWeight="bold">
                                Product Name
                            </Text>
                            <Text fontSize="sm" fontWeight="light">
                                Date Add
                            </Text>
                        </Box>
                    </Box>
                </AspectRatio>
                <AspectRatio ratio={1} maxW="100%">
                    <Box
                        role="group"
                        cursor="pointer"
                        w="100%"
                        boxShadow="xl"
                        minH="50%"
                        position="absolute"
                        border="1px"
                        borderColor="gray.200"
                        _after={{
                            position: 'absolute',
                            content: '""',
                            display: 'inline',
                            w: 'inherit',
                            h: 'inherit',
                            backgroundImage: "url('asset/jacket2.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            transition: 'all .5s',
                        }}
                        _hover={{
                            _after: {
                                transform: 'scale(1.2)',
                            },
                        }}
                    >
                        <Box
                            position="absolute"
                            visibility="hidden"
                            zIndex="dropdown"
                            w="100%"
                            h="100%"
                            _groupHover={{
                                color: '#fff',
                                visibility: 'visible',
                                backgroundColor: 'blackAlpha.700',
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDir="column"
                        >
                            <Text fontSize="20" fontWeight="bold">
                                Product Name
                            </Text>
                            <Text fontSize="sm" fontWeight="light">
                                Date Add
                            </Text>
                        </Box>
                    </Box>
                </AspectRatio>
            </SimpleGrid>
        </Box>
    );
}
