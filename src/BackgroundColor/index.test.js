import React from 'react'
import BackgroundColor from './index'
import { render, screen, fireEvent, } from '@testing-library/react'


test("Check current background color", () => {
    render(< BackgroundColor />)
    const buttonDOM = screen.queryByTestId('button');
    expect(buttonDOM).toBeVisible();
    const bgDOM = screen.queryByTestId('background');
    expect(bgDOM).toBeVisible();
    expect(bgDOM.style['backgroundColor']).not.toEqual('blue')
    expect(bgDOM.style['backgroundColor']).not.toEqual('red')
    expect(bgDOM.style['backgroundColor']).toEqual('white')
})

test("Check current background color after one clicked", () => {
    render(< BackgroundColor />)
    const buttonDOM = screen.queryByTestId('button');
    expect(buttonDOM).toBeVisible();
    fireEvent.click(buttonDOM);
    const bgDOM = screen.queryByTestId('background');
    expect(bgDOM).toBeVisible();
    expect(bgDOM.style['backgroundColor']).not.toEqual('white')
    expect(bgDOM.style['backgroundColor']).not.toEqual('red')
    expect(bgDOM.style['backgroundColor']).toEqual('blue')
})

test("Check current background color after two clicked", () => {
    render(< BackgroundColor />)
    const buttonDOM = screen.queryByTestId('button');
    expect(buttonDOM).toBeVisible();
    fireEvent.click(buttonDOM);
    fireEvent.click(buttonDOM);
    const bgDOM = screen.queryByTestId('background');
    expect(bgDOM).toBeVisible();
    expect(bgDOM.style['backgroundColor']).not.toEqual('white')
    expect(bgDOM.style['backgroundColor']).not.toEqual('blue')
    expect(bgDOM.style['backgroundColor']).toEqual('red')
})