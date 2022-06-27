import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Redirect } from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Redirect />} />
                    <Route path="/dashboard" element={<App />} />
                    <Route path="/product" element={<App />} />
                    <Route path="/category" element={<App />} />
                    <Route path="/account" element={<App />} />
                    <Route path="/notification" element={<App />} />
                    <Route path="/order" element={<App />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
