import React from 'react'
import { Layout, Row, Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';




const AppHeader = () => {
    return (
        <Layout.Header style={{ backgroundColor: "white", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
            <Row justify='space-between' style={{ height: "100%" }}>
                <div></div>
                <div>
                    <BellOutlined style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
                    <Button type="text">SignUp</Button>
                    <span style={{ marginLeft: '1rem', marginRight: "1rem" }}>|</span>
                    <Button type="text">SignIn</Button>
                </div>
            </Row>
        </Layout.Header>
    )
}

export default AppHeader
