import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './StudentSlice'

export default function InputComponent() {
    const [user, setUser] = useState()
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.userList)
    console.log(users);
    return (
        <div>
            <Form
                onFinish={() => { dispatch(addUser(user)) }}>
                <Form.Item
                    name='User'
                    label='Name'
                    rules={[{ required: true },]}
                >
                    <Input placeholder="input placeholder" style={{ width: 300 }} onChange={(e) => { setUser(e.target.value) }} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>Add</Button>
                </Form.Item>
            </Form>
        </div >
    )
}
