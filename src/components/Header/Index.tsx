import Link from 'next/link'
import React, { useState } from 'react'
import { Button, FileUpload, InputFields } from '../FormFields/Index'
import style from './header.module.css'

const menubar  = [
    {
        label: 'Marketplace',
        url: ''
    },{
        label: 'Resource',
        url: ''
    },{
        label: 'About',
        url: ''
    }
]

export default function Index() {
  const [searchText, setSearchText] = useState<string>('');
  const [file, setFile] = useState(null);


  const ChangeHandler = (e: any) => {
    setSearchText(e.target.value)
  }

  const connectWalletHandler = () => {
    console.log('connectWallet')
  }

  //file upload handler 
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      console.log(event?.target?.result);
    };
    reader.readAsText(selectedFile);
  };

  return (
    <div className={style.mainheader}>
      <div className={style.header}>
          <div  className={style.logo}>
              <h2>NFTERS</h2>
          </div>
          <div className={style.menubar}>
              <ul>
                  {menubar && menubar.map((item, index) => (
                      <li key={index}>
                          <Link href={item.url} passHref>{item.label}</Link>
                      </li>
                  ))}
              </ul>
          </div>
          <div className={style.uploadFields}>
              <form action="#">
                  <InputFields type='text' icon={true} placeholder='Search' value={searchText} onchangeHandler={(e) => ChangeHandler(e)}/>
              </form>
              <FileUpload type='file' placeholder="Upload" handleFileChange={() => handleFileChange(event)}/>
              <Button type='button' clickHander={connectWalletHandler} className='connectWallet' buttonText='Connect Wallet'/>
          </div>
      </div>
    </div>
  )
}
