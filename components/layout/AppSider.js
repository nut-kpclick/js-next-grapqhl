import React from 'react'
import { useRouter } from 'next/router'
import { Layout, Menu, Row } from 'antd';
import { ApartmentOutlined, AppstoreAddOutlined, CodeSandboxOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';


const AppSider = () => {
    const router = useRouter()
    return (
        <Layout.Sider collapsed>
            <Row align="middle" justify="center" style={{ margin: '1rem', backgroundColor: "grey", height: '3rem' }}>
                <span>LOGO</span>
            </Row>
            <Menu theme="dark" >
                <Menu.Item key="Dashbord" icon={<PieChartOutlined onClick={() => router.push('/admin/')} />}>
                    Dashbord
            </Menu.Item>
                <Menu.Item key="Customer" icon={<UserOutlined onClick={() => router.push('/admin/customers')} />}>
                    Customers
            </Menu.Item>
                <Menu.Item key="Categories" icon={<ApartmentOutlined onClick={() => router.push('/admin/categories')} />}>
                    Categories
            </Menu.Item>

                <Menu.Item key="Brand" icon={<AppstoreAddOutlined onClick={() => router.push('/admin/brands')} />}>
                    Brands
            </Menu.Item>
                <Menu.Item key="product" icon={<CodeSandboxOutlined onClick={() => router.push('/admin/products')} />}>
                    Products
            </Menu.Item>
            </Menu>

        </Layout.Sider>
    )
}

export default AppSider
