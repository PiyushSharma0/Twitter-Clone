import { HiHome } from 'react-icons/hi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { HiBell } from 'react-icons/hi'
import { FaEnvelope } from 'react-icons/fa'
import { BsBookmarksFill, BsTwitter } from 'react-icons/bs'
import { LuUser } from 'react-icons/lu'
import Link from 'next/link'

const NAVIGATION_ITEMS =[
  {
    title: 'Home',
    icon: HiHome
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: HiBell
  },
  {
    title: 'Messages',
    icon: FaEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmarksFill
  },
  {
    title: 'Profile',
    icon: LuUser
  },
]


const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        {/* SideBar */}
        <section className="fixed w-72 flex flex-col">
          <Link href={"/"}>
            <BsTwitter />
          </Link>
          {
            NAVIGATION_ITEMS.map((item) => (
              <Link className='bg-white/50 flex justify-center items-center space-x-2 rounded-3xl p-4' href={`/${item.title.toLowerCase()}`} key = {item.title}>
              <div>
                <item.icon />
              </div>
              <div>
                {
                  item.title
                }
              </div>
              </Link>
            ))
          }
        </section>

        {/* <main>Home Section</main>
        <section>What's Happening</section> */}
      </div>
    </div>
  )
}

export default page