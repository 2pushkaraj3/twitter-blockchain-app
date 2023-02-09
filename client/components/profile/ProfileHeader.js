import { useContext, useEffect, useState } from 'react'

import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'




const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}


const isProfileImageNft =true
const currentAccount = '0x22dF...5xf2df'
const ProfileHeader = () => {
    const router = useRouter()
    return (
    <div className={style.wrapper}>
        <div className={style.header}>
            <div onClick={() => Router.push('/')} className={style.backButton}>
                <BsArrowLeftShort/>
                </div> 
                <div className={style.details}>
                    <div className={style.primary}>Pushkaraj</div>
                    <div className={style.secondary}> 4 tweets</div>
                </div>
        </div>
        <div className={style.coverPhotoContainer}>
            <img 
            src='https://timelinecovers.pro/facebook-cover/download/circular-moon-facebook-cover.jpg'
            alt='cover'
            className={style.coverPhoto}>
            </img>
            
        </div>
        <div className={style.profileImageContainer}>
            <div className={isProfileImageNft ? "hex" : style.profileImageContainer}>
                <img src='https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960' 
                alt='pushkaraj'
                className={isProfileImageNft ? "hex" : style.profileImageContainer}
                 />
            </div>
        </div>
        <div className={style.details}>
            <div>
                <div className={style.primary}>Pushkaraj</div>
            </div>
            <div className={style.secondary}></div>
                {
                    currentAccount && (
                        <>
                        @{currentAccount.slice(0,8)}....{currentAccount.slice(37)}
                        </>
                    )
                }
                </div>
      <div className={style.nav}>
        <div className={style.activeNav}>Tweets</div>
        <div>Tweets & Replies</div>
        <div>Media</div>
    </div>
    </div>
  
  )
}

export default ProfileHeader