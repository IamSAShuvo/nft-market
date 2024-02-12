import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import styles from './masonry.module.css';
import {Ethurm} from '../Icon';
import Link from 'next/link';
import img1 from '../../../public/landing.png';
import img2 from '../../../public/bg2.png';
import img3 from '../../../public/bg3.png';
import img4 from '../../../public/collectionImg.png';



const MasonryGallery = () => {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    { id: 1, title: 'ArtCrypto', userArray: [
        {
            name: 'Arkhan16',
            avatar: img1
        },
        {
            name: 'Arkhan16',
            avatar: img2
        }
    ], bitRate:'0.25 ETH', itemCount:'1 to 321', time:30000, category: 'art', imageUrl: img1 },
    { id: 2, title: 'Image 2',userArray: [
        {
            name: 'Arkhan16',
            avatar: img1
        },
        {
            name: 'Arkhan16',
            avatar: img2
        }
    ], bitRate:'0.25 ETH', itemCount:'1 to 321', time:30000, category: 'celebrities', imageUrl: img2 },
    { id: 3, title: 'Image 3', userArray: [
        {
            name: 'Arkhan16',
            avatar: img1
        },
        {
            name: 'Arkhan16',
            avatar: img2
        }
    ], bitRate:'0.25 ETH',  itemCount:'1 to 321', time:30000, category: 'gaming', imageUrl: img3 },
    { id: 4, title: 'Image 4', userArray: [
        {
            name: 'Arkhan16',
            avatar: img1
        },
        {
            name: 'Arkhan16',
            avatar: img2
        }
    ], bitRate:'0.25 ETH', itemCount:'1 to 321', time:30000, category: 'art', imageUrl: img4 },
    { id: 4, title: 'Image 4', userArray: [
      {
          name: 'Arkhan16',
          avatar: img1
      },
      {
          name: 'Arkhan16',
          avatar: img2
      }
  ], bitRate:'0.25 ETH', itemCount:'1 to 321', time:30000, category: 'art', imageUrl: img4 }
  ];

  const menuData  = [
    {
      id: 1,
      title: 'All',
      category: 'all'
    },
    {
      id: 2,
      title: 'Art',
      category: 'art'
    },
    {
      id: 3,
      title: 'Celebrities',
      category: 'celebrities'
    },
    {
      id: 4,
      title: 'Gaming',
      category: 'gaming'
    }
  ]

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className={styles.DiscoverNFT}>
      <h3>Discover more NFTs</h3>
      <div className={styles.menu}>
        {menuData.map(item => (
          <button className={item.category === filter ? styles.active : ''} key={item.id} onClick={() => handleFilterChange(item.category)}>
            {item.title}
          </button>
        ))}
      </div>
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 2,
          700: 1
        }}
        className={styles.myMasonryFrid}
        columnClassName={styles.myMasonryriGdColumn}
      >
        {filteredItems.map(item => (
          <div key={item.id} className={styles.galleryItem}>
            <div className={styles.galleryImg}>
                <img src={item.imageUrl.src} alt={item.title} />
                <div className={styles.userArray}>
                    {item.userArray.map((user, index) => (
                        <div key={index}>
                            <img src={user.avatar.src} alt={user.name}/>
                        </div>
                    ))}
                </div>
            </div>
            <h3>{item.title}</h3>
            <div className={styles.bidRate}>
                <p>
                    <Ethurm/>
                    {item.bitRate}
                </p>
                <p>{item.itemCount}</p>
            </div>
            <div className={styles.time}>
                <p>{item.time}</p>
                <Link href="" passHref>Place a Bid</Link>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default MasonryGallery;
