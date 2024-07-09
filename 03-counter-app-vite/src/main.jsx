import React from 'react'
import ReactDOM from 'react-dom/client'
import {HelloWorldApp} from './HelloWorldApp'

import './styles.css'


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelloWorldApp title='casa' ></HelloWorldApp>
    </React.StrictMode>
)