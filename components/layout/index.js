import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppSider from './AppSider';

const index = ({ children }) => {
    return (
        <Layout style={{ height: '100vh' }}>
            <AppHeader />
            <Layout >
                <AppSider />
                <Layout.Content style={{ padding: '1rem' }}>
                    {children}
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default index;
