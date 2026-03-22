import { Header } from '../../components/Header/Header.jsx'
import { Footer } from '../../components/Footer/Footer.jsx'
import './mainpage.css'

function Mainpage() {
    return (
        <>
            <Header />
            <div className='top'>
                <div className='mainpagetitle'>
                    <h1 className='안녕하세요'>안녕하세요</h1>
                    <p className='홈페이지입니다'>XMFL 홈페이지입니다</p>
                </div>
                <img className='Logo' src="/XMFL.png" alt="설명" />
            </div>
            <Footer />
        </>
    )
}
export default Mainpage
