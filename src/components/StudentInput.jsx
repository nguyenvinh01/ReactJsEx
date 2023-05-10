import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from './StudentSlice'

export default function StudentInput() {
    const [name, setName] = useState()
    const dispatch = useDispatch()
    return (
        <div>
            <Form
                onFinish={() => { dispatch(addStudent(name)) }}
            >
                <Form.Item
                    label='Ten hoc sinh'
                    name='Ten hoc sinh'
                    rules={[{
                        required: true,
                    }]}
                >
                    <Input onChange={(e) => { setName(e.target.value) }} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>Add</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
