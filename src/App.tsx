import './App.scss';

import logo from './images/logo.svg';
import document from './images/icon-document.svg';
import folder from './images/icon-folder.svg';
import upload from './images/icon-upload.svg';
import { useState } from 'react';

export function App() {
  const [value, setValue] = useState('185');

  return (
    <div className='content'>
      <div className='content_first'>
        <img src={logo} alt='logo' />
        <div className='content_first_img'>
          <img src={document} alt='document' />
          <img src={folder} alt='folder' />
          <img src={upload} alt='upload' />
        </div>
      </div>
      <div className='content_second'>
        <p>You've used <span>815 GB</span> of your storage</p>
        <input type='range' min={0} max={1000} onChange={(e) => setValue(e.target.value)} />
        <div className='value'>
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
        <div className='left'>
          <strong>{value}</strong>
          GB LEFT
        </div>
      </div>
      <div className='bg'></div>
    </div>
  )
}
