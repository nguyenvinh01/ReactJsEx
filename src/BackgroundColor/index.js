import React, { useMemo, useState } from 'react';

const BackgroundColor = () => {

    const [number, setNumber] = useState(0);


    const color = useMemo(() => {
        if (number === 0) {
            return 'white'
        }
        if (number % 2 === 0) {
            return 'red'
        }
        if (number % 2 !== 0) {
            return 'blue'
        }
        return 'white'
    }, [
        number
    ])

    const changeNumer = () => {
        setNumber((curr) => {
            return curr + 1
        })
    }

    return (
        <div>
            <button onClick={changeNumer} data-testid="button">Click here</button>
            <div
                style={{
                    width: 100,
                    height: 100,
                    backgroundColor: color,
                }}
                data-testid="background"
            ></div>
        </div>
    )
}

export default BackgroundColor;