import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'


import React, { useEffect, useState } from "react";
import { handleFetchAPI } from "./fetch";


const AsyncTesting = () => {

    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFetchAPIDidMount = () => {
        setLoading(true)
        return handleFetchAPI((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000)
        })
    }

    useEffect(() => {
        handleFetchAPIDidMount().then((data) => {
            setData(data || 'Hello World');
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        })
    }, [])


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
            }}
        >
            <div data-testid="async-data">{data}</div>
            <div>{loading && <div>Loading</div>}</div>
        </div>
    )
}

export default AsyncTesting;