import React from 'react';
import { render } from '@testing-library/react';
import UserDetails from './User';

const userInfo = {
    userName: 'Vinh',
    email: 'Vinh@gmail.com',
    phone: '01234567890',
};

test('Test khi dung username', () => {
    const { getByText } = render(<UserDetails info={userInfo} />);
    const usernameElement = getByText(`Username: ${userInfo.userName}`);
    expect(usernameElement).toBeInTheDocument();
});

test('Test khi dung email', () => {
    const { getByText } = render(<UserDetails info={userInfo} />);
    const emailElement = getByText(`Email: ${userInfo.email}`);
    expect(emailElement).toBeInTheDocument();
});

test('Test khi dung sdt', () => {
    const { getByText } = render(<UserDetails info={userInfo} />);
    const phoneElement = getByText(`Phone: ${userInfo.phone}`);
    expect(phoneElement).toBeInTheDocument();
});
