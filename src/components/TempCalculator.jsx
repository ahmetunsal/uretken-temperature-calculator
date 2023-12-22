import React, { useState } from 'react'

function TempCalculator() {
    const [fahrenheit, setFahrenheit] = useState('');
    const [celsius, setCelsius] = useState('');
    const [kelvin, setKelvin] = useState('');

    const handleFahrenheitChange = (value) => {
        setFahrenheit(value);
        setCelsius((parseFloat(value) - 32) * 5 / 9);
        setKelvin((parseFloat(value) - 32) * 5 / 9 + 273.15);
    };

    const handleCelsiusChange = (value) => {
        setCelsius(value);
        setFahrenheit((parseFloat(value) * 9 / 5) + 32);
        setKelvin(parseFloat(value) + 273.15);
    };

    const handleKelvinChange = (value) => {
        setKelvin(value);
        setCelsius(parseFloat(value) - 273.15);
        setFahrenheit((parseFloat(value) - 273.15) * 9 / 5 + 32);
    };

    /** CSS */
    const bodyStyle = {
        backgroundColor: "#323232",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#323232",
        borderRadius: "10px",
        padding: "10px",
        height: "100vh",
        width: "100%"
    }

    const zimbirtiStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "30%",
        height: "60%",
        backgroundColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        color: 'white',
        padding: 10,
        borderRadius: 10,
    }

    const inputStyle = {
        width: "100%",
        padding: 10,
        borderRadius: 10,
    }

    const headerStyle = {
        marginTop: "50px"
    }

    const btnStyle = {
        width: "100%",
        padding: 10,
        borderRadius: 10,
        marginTop: "50px",
    }
    /** CSS */
    
    return (
        <div style={bodyStyle}>
            <div style={zimbirtiStyle}>
                <h2 style={headerStyle} >Celcius:</h2>
                <input
                    style={inputStyle}
                    type="number"
                    value={celsius}
                    placeholder='Sıcaklığı Celcius cinsinden giriniz.'
                    name="celcius"
                    id="celcius"
                    onChange={(e) => handleCelsiusChange(e.target.value)} />

                <h2 style={headerStyle}>Fahrenheit:</h2>
                <input
                    style={inputStyle}
                    type="number"
                    value={Math.round(fahrenheit)}
                    placeholder='Sıcaklığı Fahrenheit cinsinden giriniz.'
                    name="fahrenheit" id="fahrenheit"
                    onChange={(e) => handleFahrenheitChange(e.target.value)} />


                <h2 style={headerStyle}>Kelvin:</h2>
                <input style={inputStyle}
                    type="number"
                    value={Math.round(kelvin)}
                    placeholder='Sıcaklığı Kelvin cinsinden giriniz.'
                    name="kelvin" id="kelvin"
                    onChange={(e) => handleKelvinChange(e.target.value)} />


                <button style={btnStyle} className='btn btn-success disabled'>Mega Yazılım Akademisi Sıcaklık Hesaplama Ödevi</button>
            </div>
        </div>
    )
}

export default TempCalculator