import React from 'react'
// import check from './index'
import { render, screen, fireEvent, } from '@testing-library/react'
import CheckInput from './checkInput';
test("Check user type less than 15 characters", () => {
    render(< CheckInput />)
    const inputDOM = screen.queryByTestId('input_name');
    expect(inputDOM).toBeDefined();
    fireEvent.change(inputDOM, { target: { value: 'less than 15' } })
    fireEvent.keyPress(inputDOM, { key: 'Enter', code: 'Enter', charCode: 13 })
    const errorDOM = screen.queryByTestId('error_message');
    expect(errorDOM.textContent).toContain('Nội dung hợp lệ.')
})
test("Check user type more than 15 characters", () => {
    render(< CheckInput />)
    const inputDOM = screen.queryByTestId('input_name');
    expect(inputDOM).toBeDefined();
    fireEvent.change(inputDOM, { target: { value: 'more than 15 characters (will show error now)' } })
    fireEvent.keyPress(inputDOM, { key: 'Enter', code: 'Enter', charCode: 13 })
    const errorDOM = screen.queryByTestId('error_message');
    expect(errorDOM.textContent).not.toContain('Nội dung hợp lệ.')
    expect(errorDOM.textContent).toContain('Nội dung quá dài, vui lòng đảm bảo nội dung nhỏ hơn hoặc bằng 15 ký tự')
})
test("Check user do not type anything", () => {
    render(< CheckInput />)
    const inputDOM = screen.queryByTestId('input_name');
    expect(inputDOM).toBeDefined();
    fireEvent.keyPress(inputDOM, { key: 'Enter', code: 'Enter', charCode: 13 })
    const errorDOM = screen.queryByTestId('error_message');
    expect(errorDOM).toBeNull();
})

