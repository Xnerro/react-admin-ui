import React, { useState } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import DashboardPanel from './dashboard/dashboard';
import ProductContainer from './product/product';
import CategoryContainer from './category/category';
import NotifikasiContainer from './notifikasi/notifikasi';
import OrderContainer from './order/order';
import AccountContainer from './account/account';

export default function ContainerContent(props) {
    const path = window.location.pathname.split('/')[1];
    const [time, setTime] = useState('');

    const getTime = () => {
        let d = new Date();
        console.log();
        setTime(d.toLocaleString());
    };
    setTimeout(() => {
        getTime();
    }, 1000);
    return (
        <Box>
            <Flex justify="space-between" w="100%" align="center">
                <Text
                    fontSize="2xl"
                    marginBottom="8"
                    textTransform="capitalize"
                >
                    {path}
                </Text>
                <Text
                    fontSize="1xl"
                    marginBottom="8"
                    textTransform="capitalize"
                >
                    {time}
                </Text>
            </Flex>
            {path === 'dashboard' && <DashboardPanel />}
            {path === 'product' && <ProductContainer />}
            {path === 'account' && <AccountContainer />}
            {path === 'category' && <CategoryContainer />}
            {path === 'notification' && <NotifikasiContainer />}
            {path === 'order' && <OrderContainer />}
        </Box>
    );
}
