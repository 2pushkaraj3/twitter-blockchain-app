import { useEffect, useContext, useState } from 'react'

import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: 'Pushkaraj',
        userName : '0x22dF...5xf2df',  
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPX_87fZW3gwcG5mV1hOsxHhH8BbIgPuUw7Q&usqp=CAU',
        text: 'It’s is so gratifying and wonderful!',
        isProfileImageNft: false,
        timestamp: '2020-02-04T10:48:07.000z',
        
    },
    {
        displayName: 'Devashish',
        userName : '0x22dF...5xf2df',
        avatar: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960',
        text: 'Making a tech twitter gc, where people can network and build connections. Drop 🥳 to join',
        isProfileImageNft: false,
        timestamp: '2023-02-04T10:48:07.000z',
        
    },
    {
        displayName: 'Rushikesh',
        userName : '0x22dF...5xf2df',
        avatar: 'https://w7.pngwing.com/pngs/476/592/png-transparent-bitgem-digital-future-system-security-crypto-sign-nft-pixel-set-icon.png',
        text: 'If you are somehow in Web Design & Development(HTML, CSS, JavaScript), say "Hi" 👋 ',
        isProfileImageNft: false,
        timestamp: '2023-02-04T10:48:07.000z',
    },
    {
        displayName: 'Rounak',
        userName : '0x22dF...5xf2df',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_Zf8X-75uMDFHRmah6GxGDFlG5WFkMRf9Q&usqp=CAU',
        text: 'Starting today, Twitter will share ad revenue with creators for ads that appear in their reply threads',
        isProfileImageNft: false,
        timestamp: '2023-02-04T10:48:07.000z',
    },
    {
        displayName: 'Aamer',
        userName : '0x22dF...5xf2df',
        avatar: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960',
        text: 'Jai Hind to all. It’s a salutation that means the most to all us Indians maybe that’s why. #Pathaan https://twitter.com/raghavsharmara1/status/1621753181654089729',
        isProfileImageNft: false,
        timestamp: '2023-02-04T10:48:07.000z',
    },
    {
        displayName: 'Manoj',
        userName : '0x22dF...5xf2df',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQczPT1vzsTuf-th2bZP33oBoefrq1wpBaDa60XAqsfnrAJO5h6ADoRtu2KFGgQqpCZ21c&usqp=CAU',
        text: 'बिहार प्रारंभिक शिक्षक नियोजन - सुप्रभातम्!',
        isProfileImageNft: false,
        timestamp: '2023-02-04T10:48:07.000z',
    },
  ]

const ProfileTweets = () => {
return (
    <div className={style.wrapper}>
        {tweets?.map((tweet,index) => (
            <Post
            key ={index}
            displayName="Pushkaraj"
            userName={`${tweet.userName.slice(0,4)}....${tweet.userName.slice(-4)}`}
            text = {tweet.text}
            avatar={tweet.avatar}
            isProfileImageNft={tweet.isProfileImageNft}
            timestamp={tweet.timestamp}

            />
        ))} 
        ProfileTweets</div>
  )
}

export default ProfileTweets