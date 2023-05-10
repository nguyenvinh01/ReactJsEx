import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, addPhoneBook, deleteNum, filterOption } from './PhonebookSlice'

export default function PhoneBook() {
    const [phoneNum, setPhoneNum] = useState()
    const [phoneName, setPhoneName] = useState()
    const pBooks = useSelector((state) => state.phonebook.phoneBook)
    const filterOpt = useSelector((state) => state.phonebook.filterOption)
    const condition = useSelector((state) => state.phonebook.condition)
    const dispatch = useDispatch()
    // const condition = 'pBook.status == true || pBook.status == false'
    // if(filterOpt == true)
    // const condition = (filterOpt == false) ? 'pBook.status == true' : 'pBook.status == true || pBook.status == false'
    console.log(pBooks, 1111)
    // console.log(filterOpt, 1111)
    // let condition = 'pBook.status == true'
    // if (filterOpt == 'all') condition = 'pBook.status == true || pBook.status == false'
    // console.log(condition, 223, filterOpt);
    return (
        <div>
            <Form
                onFinish={() => (dispatch(addPhoneBook([phoneName, phoneNum])))}
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
                        <td><Button onClick={() => { dispatch(filterOption('all')) }}>All</Button></td>
                        <td><Button onClick={() => { dispatch(filterOption(true)) }}>Muc yeu thich</Button></td>
                    </tr>
                    {pBooks.map((pBook) => {

                        if (condition) {
                            // console.log(condition, '2222');
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
                                    <Button onClick={() => { dispatch(addFavorite(pBook.id)) }}>Them Muc Yeu Thich</Button>
                                </td>
                            </tr>
                        }
                    })}
                </tbody>
            </table>
        </div>
    )
}
