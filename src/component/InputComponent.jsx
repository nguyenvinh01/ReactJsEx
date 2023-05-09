import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './todoSlice'
import { Button, Form, Input } from 'antd'

export default function InputComponent() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    const onInputChange = (e) => {
        setTodo(e.target.value)
    }
    return (
        <div>
            <Form
                layout='vertical'
                onFinish={() => {
                    dispatch(add(todo))
                }
                }
            >
                <Form.Item
                    name={'text'}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input onChange={onInputChange} style={{ width: 300 }} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">Add</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
