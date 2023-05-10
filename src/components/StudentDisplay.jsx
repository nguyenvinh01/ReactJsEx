import { Button, Form, Input, Table } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addSubject, deleteStudent, deleteSubject } from './StudentSlice';

export default function StudentDisplay() {
    const [subject, setSubject] = useState('');
    const students = useSelector((state) => state.student.student)
    const dispatch = useDispatch();
    const handleDeleteSubject = (studentId, subjectIndex) => {
        dispatch(deleteSubject([studentId, subjectIndex]));
    }
    console.log(students);
    return (
        <div>
            <table>
                <thead>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Subject</td>
                </thead>
                <tbody>
                    {students.map((student) => {
                        return <tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>
                                <Form layout='inline' onFinish={(e) => {
                                    dispatch(addSubject([subject, student.id]))
                                    e.target.reset()
                                }}>
                                    <Form.Item name='Subject' rules={[{ required: true }]}>
                                        <Input onChange={(e) => {
                                            setSubject(e.target.value)
                                        }} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button htmlType='submit'>Add Subject</Button>
                                    </Form.Item>
                                </Form>
                                <ul>
                                    {student.subject.map((s, index) => {
                                        return <li>{s} <Button onClick={() => handleDeleteSubject(student.id, index)}>Delete</Button></li>
                                    })}
                                </ul>
                            </td>
                            <td><Button onClick={() => { dispatch(deleteStudent(student.id)) }}>Delete Student</Button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
