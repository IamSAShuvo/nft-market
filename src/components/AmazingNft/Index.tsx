import React from 'react'
import { FastIcon, GrowthIcon } from '../Icon'
import style from './amazing.module.css'

const amzingNFT = [{
    title: 'Fast Transaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.',
    icon: <FastIcon/>
},
{
    title: 'Growth Transaction',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus',
    icon: <GrowthIcon/>
}]
export default function Index() {

  return (
    <div className={style.amazingBg}>
        <div className={style.amazingNft}>
            <h2>The amazing NFT art of the world here</h2>
            {amzingNFT.map((item, index) => (
                <div key={index} className={style.amazingNFTChild}>
                    <div>{item.icon}</div>
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
