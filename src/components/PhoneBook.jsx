import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, addPhoneBook, deleteNum, filterOption } from './PhonebookSlice'

export default function PhoneBook() {
    const [phoneNum, setPhoneNum] = useState()
    const [phoneName, setPhoneName] = useState()
    const pBooks = useSelector((state) => state.phonebook.phoneBook)
    const filterOpt = useSelector((state) => state.phonebook.filterOption)
    const dispatch = useDispatch()
    return (
        <div>
            <Form
                onFinish={() => (dispatch(addPhoneBook([phoneName, phoneNum])))}
                style={{ width: 300 }}
            >
                <Form.Item label='Ten' name='Ten'>
                    <Input onChange={(e) => setPhoneName(e.target.value)} />
                </Form.Item>
                <Form.Item label='SDT' name='SDT'>
                    <Input onChange={(e) => setPhoneNum(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>Add</Button>
                </Form.Item>
            </Form>
            <table>
                <thead>
                    <th>STT</th>
                    <th>Ten</th>
                    <th>SDT</th>
                </thead>
                <tbody>
                    <tr>
                        <td><Button onClick={() => { dispatch(filterOption(true)) }}>All</Button></td>
                        <td><Button onClick={() => { dispatch(filterOption(false)) }}>Muc yeu thich</Button></td>
                    </tr>
                    {pBooks.map((pBook) => {

                        if (!filterOpt) {
                            if (pBook.status == true)
                                return <tr>
                                    <td>
                                        {pBook.id}
                                    </td>
                                    <td>
                                        {pBook.name}
                                    </td>
                                    <td>
                                        {pBook.num}
                                    </td>
                                    <td>
                                        <Button onClick={() => { dispatch(deleteNum(pBook.id)) }}>Xoa</Button>
                                    </td>
                                    <td>
                                        <Button
                                            onClick={() => { dispatch(addFavorite(pBook.id)) }}
                                        >
                                            {(!pBook.status) ? 'Them Muc Yeu Thich' : 'Da Them Muc Yeu Thich'}
                                        </Button>
                                    </td>
                                </tr>
                        }
                        else {
                            return <tr>
                                <td>
                                    {pBook.id}
                                </td>
                                <td>
                                    {pBook.name}
                                </td>
                                <td>
                                    {pBook.num}
                                </td>
                                <td>
                                    <Button onClick={() => { dispatch(deleteNum(pBook.id)) }}>Xoa</Button>
                                </td>
                                <td>
                                    <Button onClick={() => { dispatch(addFavorite(pBook.id)) }}>
                                        {(!pBook.status) ? 'Them Muc Yeu Thich' : 'Da Them Muc Yeu Thich'}
                                    </Button>
                                </td>
                            </tr>
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}
