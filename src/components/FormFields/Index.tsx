
import React from 'react'
import styles from './fromFields.module.css'
interface buttonProps {
    type : "button" | "submit";
    className: string;
    buttonText: string;
    clickHander: () => void;
}

interface InputProps {
    type: string;
    icon: boolean;
    placeholder: string;
    value: string;
    onchangeHandler: (e: any) => void;
}

interface FileUploadProps {
    type: string;
    placeholder: string;
    handleFileChange: (e: string) => void;
}

export function Button({type, className, buttonText, clickHander} : buttonProps) {
  return (
    <button type={type} onClick={clickHander} className={className}>{buttonText}</button>
  )
}

export function InputFields({type, icon, placeholder, value, onchangeHandler} : InputProps) {
    return (
      <div className={styles.inputFields}>
            <input type={type} placeholder={placeholder} value={value} onChange={(e) => onchangeHandler(e)}/>
            {icon && (
                <div className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#757575"/>
                        <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#757575"/>
                    </svg>
                </div>
            )}
      </div>
    )
  }


  export function FileUpload({type, placeholder, handleFileChange} : FileUploadProps) {
    return (
      <div className={styles.uploadButton}>
            <label htmlFor="file-upload">Upload</label>
            <input type={type} placeholder={placeholder} id="file-upload" className='hidden' onChange={() => handleFileChange}/>
      </div>
    )
  }
