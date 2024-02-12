import React from 'react'
import { Button } from '../FormFields/Index'
import {Ethurm} from '../Icon'
import bidder from '../../../public/user.png'
import style from './landing.module.css'
import Image from 'next/image'
import Explordesh from '../../../public/dotbg.png'
import staticImg from '../../../public/absolute.png'

const nftData = {
    title: 'Discover, and collect Digital Art  NFTs ',
    description: 'Digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.',
    nftArray: [
        {
            title: 'Artwork',
            value: '98k'
        },
        {
            title: 'Auction',
            value: '12k'
        },{
            title: 'Artist',
            value: '15k'
        }
    ],
    bidName: 'Abstr Gradient NFT',
    bidderName: 'Arkhan16',
    bidderAvatar: bidder.src,
    currentBid: {
        bidValue: '0.25 ETH',
        icon: <Ethurm/>
    },
    endsIn: '12h  43m  42s'
}
export default function Index() {

  const exploreHandler = () => {
    console.log('explore')
  }
  return (
    <div className={style.landing}>
        <div className={style.leftLanding}>
            <h3>{nftData.title}</h3>
            <p>{nftData.description}</p>
            <div className={style.exploreBg}>
                <Button type='button' buttonText='Explore Now' className='exploreBtn' clickHander={exploreHandler}/>
                <div className={style.nftAuctoin}>
                    {nftData.nftArray.map((item, index) => (
                        <div key={index}>
                            <h2>{item.value} +</h2>
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div>
                <img src={Explordesh.src} alt="Explore bg" />
            </div>
        </div>
        <div className={style.rightLanding}>
            <div className={style.staticImg}>
                <img src={staticImg.src} alt="bid"/>
            </div>
            <div className={style.biddertop}>
                <h4>{nftData.bidName}</h4>
                <div>
                    <Image
                    src={nftData.bidderAvatar}
                    alt={nftData.bidderName}
                    width={40}
                    height={40}
                    />
                    <h4>{nftData.bidderName}</h4>
                </div>
            </div>
            <div className={style.bidderBottom}>
                <div>
                    <h5>Current Bid</h5>
                    <div className={style.currentBid}>
                        {nftData.currentBid.icon}
                        <p>{nftData.currentBid.bidValue}</p>
                    </div>
                </div>
                <div>
                    <h5>Ends in</h5>
                    <p>{nftData.endsIn}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
