import './App.css'
import { createContext, useMemo, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About1 from './components/About1/About1'
import BlogGrid from './components/BlogGrid/BlogGrid'
import ComingSoon from './components/ComingSoon/ComingSoon'
import Contact from './components/Contact/Contact'
import FAQ from './components/FAQ/FAQ'
import Home1 from './components/Home1/Home1'
import Home2 from './components/Home2/Home2'
import NFT from './components/NFT/NFT'
import NFTdetails from './components/NFTdetails/NFTdetails'
import Error404 from './pages/Error404'
import HomeWrapper from './pages/HomeWrapper'

function App() {

  const [items, setItems] = useState([
    {
      id: '1',
      title: 'Unique, 1/1 Generated',
      text: 'Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.'
    },
    {
      id: '2',
      title: '140+ Traits In 16 Categories',
      text: 'Ornare faucibus urna, netus ut. Ac vulputate ornare donec orci sed gravida senectus. Felis quis morbi vivamus est eget sapien magnis quis.'
    },
    {
      id: '3',
      title: 'Usage Rights Included',
      text: 'Ac, bibendum duis gravida nullam. At amet nibh platea nibh interdum non, egestas bibendum iaculis. Etiam tristique ultricies tristique ullamcorper donec eget odio ut.'
    }
  ])

  const [slider1, setSlider1] = useState([
    {
      id: '1',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/img2.jpg',
      name: 'PESKY PENGUINS'
    },
    {
      id: '2',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/img3.jpg',
      name: 'AURORY'
    },
    {
      id: '3',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/img1.jpg',
      name: 'TAIYO ROBOTICS'
    },
    {
      id: '4',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/img5.jpg',
      name: 'PORTALS'
    },
    {
      id: '5',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/img6.jpg',
      name: 'GRIM SYNDICATE'
    },
    {
      id: '6',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/img7.jpg',
      name: 'JELLY BEASTS'
    },
    {
      id: '7',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/img4.jpg',
      name: 'JUNGLE CATS'
    },
    {
      id: '8',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/img1.jpg',
      name: 'TAIYO ROBOTICS'
    }
  ])

  const [items2, setItems2] = useState([
    {
      id: '1',
      title: 'Set Up Your Wallet',
      text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
    {
      id: '2',
      title: 'Buy Your Collection',
      text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
    {
      id: '3',
      title: "Add Your NFT's",
      text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
    {
      id: '4',
      title: "Add Your NFT's",
      text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    }
  ])

  const [team, setTeam] = useState([
    {
      id: '1',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team6.png',
      name: 'ESTHER HOWARD',
      profession: 'Co-Founder & COO',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    },
    {
      id: '2',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team7.png',
      name: 'DEVON LANE',
      profession: 'Blockchain Developer',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    },
    {
      id: '3',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team8.png',
      name: 'RALPH EDWARDS',
      profession: 'Backend Engineer',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    }
  ])

  const [items3, setItems3] = useState([
    {
      id: '1',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost11.jpg',
      name: 'Digitalart',
      date: '12 Jun 2023',
      question: 'NFT Guide: Why They Matter For Music?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.'
    },
    {
      id: '2',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost13.jpg',
      name: 'Nftartwork',
      date: '30 Jul 2021',
      question: 'Max Live X Tacnocde NFT Music',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.'
    },
    {
      id: '3',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost12.jpg',
      name: 'Digitalart',
      date: '20 Jun 2022',
      question: 'NFT Guide: Why They Matter For Music?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.'
    },
    {
      id: '4',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost17.jpg',
      name: 'Nftartwork',
      date: '20 Jun 2022',
      question: 'NFT Guide: Why They Matter For Music?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.'
    }
  ])

  const [walletImages, setWalletImages] = useState([
    {
      id: '1',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo1.png'
    },
    {
      id: '2',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo2.png'
    },
    {
      id: '3',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo3.png'
    },
    {
      id: '4',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo4.png'
    },
    {
      id: '5',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo5.png'
    },
    {
      id: '6',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo6.png'
    },
    {
      id: '7',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo7.png'
    },
    {
      id: '8',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo9.png'
    },
    {
      id: '9',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo8.png'
    },
    {
      id: '10',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo10.png'
    },
    {
      id: '11',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo11.png'
    },
    {
      id: '12',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo12.png'
    },
    {
      id: '13',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo13.png'
    },
    {
      id: '14',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo14.png'
    },
    {
      id: '15',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo15.png'
    },
    {
      id: '16',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo16.png'
    },
    {
      id: '17',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo17.png'
    },
    {
      id: '18',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo18.png'
    },
    {
      id: '19',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo7.png'
    },
    {
      id: '20',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo8.png'
    },
    {
      id: '21',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo9.png'
    },
    {
      id: '22',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo13.png'
    },
    {
      id: '23',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo14.png'
    },
    {
      id: '24',
      img: 'https://cyboxhtml.surielementor.com/assets/images/logo/logo15.png'
    }
  ])

  const [items4, setItems4] = useState([
    {
      id: '1',
      title: 'Unique, 1/1 Generated',
      text: 'Gravida viverra dui aliquet eu tortor lorem et gravida. Sed amet phasellus tellus mauris auctor rhoncus. Malesuada nisl at mauris cursus lorem mattis arcu.'
    },
    {
      id: '2',
      title: '140+ Traits In 16 Categories',
      text: 'Ornare faucibus urna, netus ut. Ac vulputate ornare donec orci sed gravida senectus. Felis quis morbi vivamus est eget sapien magnis quis.'
    },
    {
      id: '3',
      title: 'Usage Rights Included',
      text: 'Ac, bibendum duis gravida nullam. At amet nibh platea nibh interdum non, egestas bibendum iaculis. Etiam tristique ultricies tristique ullamcorper donec eget odio ut.'
    }
  ])

  const [items5, setItems5] = useState([
    {
      id: '1',
      title: 'Set Up Your Wallet',
      text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
    {
      id: '2',
      title: 'Buy Your Collection',
      text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
    {
      id: '3',
      title: "Add Your NFT's",
      text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    },
    {
      id: '4',
      title: "Sell Your NFT's",
      text: 'Arcu morbi sit laoreet semper ultrices maecenas auctor amet. Donec tortor facilisis risus, neque sit aliquet orci, malesuada.'
    }
  ])

  const [items6, setItems6] = useState([
    {
      id: '1',
      title: 'Clothing',
      name: 'Blank'
    },
    {
      id: '2',
      title: 'Headwear',
      name: 'Black Cap'
    },
    {
      id: '3',
      title: 'Eyewear',
      name: 'Blank'
    },
    {
      id: '4',
      title: 'Food',
      name: 'Potato Chip'
    },
    {
      id: '5',
      title: 'Face',
      name: 'One Eye'
    },
    {
      id: '6',
      title: 'Background',
      name: 'Galaxy'
    }
  ])

  const [items7, setItems7] = useState([
    {
      id: '1',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost6.jpg',
      name: 'Enior Apple Employee Alleges Sexism At',
      date: 'by Admin | 20 Jun 2022'
    },
    {
      id: '2',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost7.jpg',
      name: 'Enior Apple Employee Alleges Sexism At',
      date: ' by Admin | 20 Jun 2022'
    },
    {
      id: '3',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost8.jpg',
      name: 'Enior Apple Employee Alleges Sexism At',
      date: 'by Admin | 20 Jun 2022'
    }
  ])

  const [items8, setItems8] = useState([
    {
      id: '1',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost2.jpg',
      type: 'NFTARTWORK',
      date: 'by Admin | 20 Jun 2022',
      title: 'Why Choose A Theme That Looks Good With WooCommerce',
      text: 'We make daily use products more affordable & accessible for a billion Indians by using our...'
    },
    {
      id: '2',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost3.jpg',
      type: 'NFTARTWORK',
      date: 'by Admin | 20 Jun 2022',
      title: 'Why Choose A Theme That Looks Good With WooCommerce',
      text: 'We make daily use products more affordable & accessible for a billion Indians by using our...'
    },
    {
      id: '3',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost4.jpg',
      type: 'CRYPTOCURRENCIES',
      date: 'by Admin | 20 Jun 2022',
      title: 'Why Choose A Theme That Looks Good With WooCommerce',
      text: 'We make daily use products more affordable & accessible for a billion Indians by using our...'
    },
    {
      id: '4',
      img: 'https://cyboxhtml.surielementor.com/assets/images/post/imgpost5.jpg',
      type: 'DIGITALARTIST',
      date: 'by Admin | 20 Jun 2022',
      title: 'Why Choose A Theme That Looks Good With WooCommerce',
      text: 'We make daily use products more affordable & accessible for a billion Indians by using our...'
    }
  ])

  const [team2, setTeam2] = useState([
    {
      id: '1',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team6.png',
      name: 'ESTHER HOWARD',
      profession: 'Co-Founder & COO',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    },
    {
      id: '2',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team7.png',
      name: 'DEVON LANE',
      profession: 'Blockchain Developer',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    },
    {
      id: '3',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team8.png',
      name: 'RALPH EDWARDS',
      profession: 'Backend Engineer',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    },
    {
      id: '4',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team9.png',
      name: 'RALPH EDWARDS',
      profession: 'Backend Engineer',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    },
    {
      id: '5',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team10.png',
      name: 'ESTHER HOWARD',
      profession: 'Co-Founder & COO',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    },
    {
      id: '6',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team11.png',
      name: 'DEVON LANE',
      profession: 'Blockchain Developer',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    },
    {
      id: '7',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team6.png',
      name: 'RALPH EDWARDS',
      profession: 'Backend Engineer',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    },
    {
      id: '8',
      img: 'https://cyboxhtml.surielementor.com/assets/images/common/team7.png',
      name: 'RALPH EDWARDS',
      profession: 'Backend Engineer',
      icon1: 'fa-brands fa-twitter',
      icon2: 'fa-brands fa-facebook',
      icon3: 'fa-brands fa-telegram',
      icon4: 'fa-brands fa-discord'
    }
  ])
  
  const providerValue = useMemo(() => ({walletImages, items, items2, items3, slider1, team, items4, items5, team2, items6, items7, items8}), [walletImages, items, items2, items3, slider1, team, items4, items5, team2, items6, items7, items8])
  
  return (
    <div className="App">
      <UseContext.Provider value={providerValue}>
        <Routes>
          <Route path='/' element={<HomeWrapper/>}>
            <Route index element={<Home1/>}/>
            <Route path='/home2' element={<Home2/>}/>
            <Route path='/about' element={<About1/>}/>
            <Route path='/comingsoon' element={<ComingSoon/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/nft' element={<NFT/>}/>
            <Route path='/nftdetails' element={<NFTdetails/>}/>
            <Route path='/blog' element={<BlogGrid/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </UseContext.Provider>
    </div>
  )
}

export default App
export const UseContext = createContext(null)