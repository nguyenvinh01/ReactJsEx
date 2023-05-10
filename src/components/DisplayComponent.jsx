import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addArticles, deleteArticles, deleteUser } from './StudentSlice';

export default function DisplayComponent() {
    const [articles, setArticles] = useState('');
    const users = useSelector((state) => state.user.userList)
    const dispatch = useDispatch();
    const handleDeleteArticles = (userId, articleIndex) => {
        dispatch(deleteArticles([userId, articleIndex]));
    }
    return (
        <div>
            <table>
                <thead>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Articles</td>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <Form layout='inline' onFinish={(e) => {
                                    dispatch(addArticles([articles, user.id]))
                                    e.target.reset()
                                }}>
                                    <Form.Item name='Articles' rules={[{ required: true }]}>
                                        <Input onChange={(e) => {
                                            setArticles(e.target.value)
                                        }} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button htmlType='submit'>Add</Button>
                                    </Form.Item>
                                </Form>
                                <ul>
                                    {user.articles.map((article, index) => {
                                        return <li>{article} <Button onClick={() => handleDeleteArticles(user.id, index)}>Delete</Button></li>
                                    })}
                                </ul>
                            </td>
                            <td><Button onClick={() => { dispatch(deleteUser(user.id)) }}>Delete User</Button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div >
    )
}
