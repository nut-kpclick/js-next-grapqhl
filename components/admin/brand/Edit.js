import { Modal, Button } from 'antd';
import React, { useImperativeHandle, useState } from 'react'

const Edit = (props, ref) => {
    const [visible, setvisible] = useState(false)
    useImperativeHandle(ref, () => {
        return {
            showModal: (record) => {
                setvisible(true)
            },
            closeModal: (record) => {

            }
        }
    })
    return (
        <Modal
            title="Edit "
            visible={visible}
            onOk={() => setvisible(false)}
            onCancel={() => setvisible(false)}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>

    )
}

export default React.forwardRef(Edit)
