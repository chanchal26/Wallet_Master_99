import React from 'react'
import ReactDOM from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import App from './App.jsx'
import './index.css'

const options = {
  position: positions.BOTTOM_CENTER,
  offset: "30px",
  transition: transitions.SCALE,
};
const AlertTemplate = ({ style, message, close }) => (
  <div className='mx-auto flex justify-between bg-gray-300 p-5 rounded-md' style={style}>
    <div className='inline-flex items-center px-3'>{message}</div>
    <div className='flex'>
      <button
        onClick={close}
        className='inline-flex text-white bg-[#008DDA] border-0 py-2 px-4 mr-1 focus:outline-none hover:bg-indigo-600 rounded text-lg items-center'
      >
        Accept
      </button>
      <button
        onClick={close}
        className='inline-flex text-white bg-red-400 border-0 py-2 px-4 ml-1 focus:outline-none hover:bg-red-500 rounded text-lg items-center'
      >
        Reject
      </button>
    </div>
  </div>
);

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  document.getElementById('root')
)
