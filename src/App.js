import './App.css';
import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import Nav from './components/navBar';
import Side from './components/sideBar';
import ContainerContent from './components/container/container';
import { useNavigate } from 'react-router-dom';

export default function App() {
    return (
        <Box w="100vw" maxW="100%" alignContent="flex-start" display="flex">
            <Side />
            <Flex w="100%" direction="column">
                <Box boxShadow="lg">
                    <Nav />
                </Box>
                <Box minW="100%" h="100%" className="cxx" bg="gray.50" p="5">
                    <ContainerContent />
                </Box>
            </Flex>
        </Box>
    );
}

export function Redirect() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/dashboard');
    });
    return <p></p>;
}
