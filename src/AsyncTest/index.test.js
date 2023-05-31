import React from 'react'
import AsyncTesting from '.'
import { render, screen, waitFor, } from '@testing-library/react'
import { handleFetchAPI } from './fetch';
jest.mock('./fetch');
test("Check Async Component fetch", async () => {
    handleFetchAPI.mockResolvedValueOnce("Async Testing")
    render(<AsyncTesting />);
    const loadingDOM = await screen.findByText('Loading');
    expect(loadingDOM).toBeVisible();
    await waitFor(() => expect(loadingDOM).not.toBeVisible());
    expect(handleFetchAPI).toHaveBeenCalledTimes(1);
    const resultDOM = screen.getByTestId('async-data');
    expect(resultDOM.textContent).toEqual('Async Testing')
    expect(resultDOM.textContent).not.toEqual('Hellow World')
})