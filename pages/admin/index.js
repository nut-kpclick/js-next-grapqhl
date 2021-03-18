import { Row, Card, Col } from 'antd'
import React from 'react'

const index = () => {
    return (
        <div >
            <Row gutter={[16, 16]} justify="space-around" align="middle">
                <Col xs={4}>
                    <Card style={{ widthL: '100%', borderRadius: "0.5rem" }}>
                        <h1>Customer Total</h1>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ widthL: '100%', borderRadius: "0.5rem" }}>
                        <h1>Brand Total</h1>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ widthL: '100%', borderRadius: "0.5rem" }}>
                        <h1>Category Total</h1>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ widthL: '100%', borderRadius: "0.5rem" }}>
                        <h1>Product Total</h1>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ widthL: '100%', borderRadius: "0.5rem" }}>
                        <h1>Order Total</h1>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card style={{ widthL: '100%', borderRadius: "0.5rem" }}>
                        <h1>? Total</h1>
                    </Card>
                </Col>
            </Row>

            <Card style={{ height: "100%", borderRadius: "0.5rem", marginTop: "1rem" }}>
                <h1>Grap</h1>
            </Card>

        </div >

    )
}

export default index
