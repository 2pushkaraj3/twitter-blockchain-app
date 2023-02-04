import { FiMoreHorizontal } from 'react-icons/fi' 
import { VscTwitter } from 'react-icons/vsc' 
import SidebarOption from './SidebarOption'
import { useState } from 'react'
import { RiHome7line, RiHome7fill, RiFileList2fill} from 'react-icons/ri'
import { biHash } from 'react-icons/bi'
import { FiBell  } from 'react-icons/fi'
import { HiOutlineMail , HiMail } from 'react-icons/hi'
import { FaRegListAlt, FanHashtag, Fabell } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'


const style = {
    wrapper: `flex-[0.7] px-8 flex flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,

}

function Sidebar() {
    return (
        <div className={style.wrapper}>
        <div className={style.twitterIconContainer}>
            <VscTwitter/>
        </div>
        <div className={style.navContainer}>
            <SidebarOption
            Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
            text='Home'
            isActive={Boolean(selected === 'Home')}
            setSelected={setSelected}
            redirect={'/'}
            />
            <div>Home</div>
            <div>Explore</div>
            <div>Notifications</div>
            <div>Messages</div>
            <div>Bookmarks</div>
            <div>Lists</div>
            <div>Profile</div>
            <div>More</div>
        <div className={style.tweetButton}>Mint</div>
    </div>
    </div>

    )
    


}

export default Sidebar