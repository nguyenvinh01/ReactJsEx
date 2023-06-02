import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './Login';

test('Test khong nhap username', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    const errorMessage = getByText('Please enter a username');
    expect(errorMessage).toBeInTheDocument();
});

test('Test khong nhap password', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const usernameInput = getByLabelText('Username');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'username' } });
    fireEvent.click(submitButton);

    const errorMessage = getByText('Please enter a password');
    expect(errorMessage).toBeInTheDocument();
});

test('Test khi sai username va password', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'incorrectUsername' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    const errorMessage = getByText('Invalid username or password');
    expect(errorMessage).toBeInTheDocument();
});

test('Test khi nhap sai username va password', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'incorrectPassword' } });
    fireEvent.click(submitButton);

    const errorMessage = getByText('Invalid username or password');
    expect(errorMessage).toBeInTheDocument();
});

test('Test khi nhap dung username va password', () => {
    const { getByLabelText, getByText, queryByText } = render(<LoginForm />);
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    const errorMessage = queryByText('Invalid username or password');
    expect(errorMessage).toBeNull();
});
