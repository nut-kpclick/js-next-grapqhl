import React, { useRef } from 'react'
import { Button, Card, Input, Row, Col, Table, Select } from 'antd'
import Create from '../../components/admin/brand/Create'
import Delete from '../../components/admin/brand/Delete'
import Edit from '../../components/admin/brand/Edit'

const products = () => {
    const createRef = useRef()
    const deleteRef = useRef()
    const editRef = useRef()
    const data = [
        {
            name: 'john'
        }
    ]
    const columns = [
        {
            title: 'NAME',
            dataIndex: "name",
            key: "nname"
        },
        {
            title: 'LOGO',
            dataIndex: "image",
            key: "logo"
        },
        {
            title: 'ACTION',
            width: "12%",
            render: (row) => (
                <Select placeholder='List Action' style={{ width: "100%" }}>
                    <Select.Option>
                        <span onClick={() => editRef.current.showModal(row)}>Edit</span>
                    </Select.Option>
                    <Select.Option onClick={() => deleteRef.current.showModal(row)}>
                        Delete
                    </Select.Option>
                </Select>
            )
        },

    ]
    return (
        <Card style={{ height: '100%' }}>
            <h1>Products</h1>
            <Row justify="space-between" style={{ marginBottom: '1rem' }}>
                <Col xs={6}><Input.Search enterButton placeholder="Search Products" allowClear /></Col>
                <Col xs={4}><Button block type="primary" onClick={() => createRef.current.showModal()}>Create</Button></Col>
            </Row>
            <Table dataSource={data} columns={columns} />
            <Create ref={createRef} />
            <Delete ref={deleteRef} />
            <Edit ref={editRef} />
        </Card>
    )
}

export default products
