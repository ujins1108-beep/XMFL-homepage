import './Header.css'
import { useNavigate } from 'react-router-dom'

export function Header() {

    const navigate = useNavigate()
    return (
        <>
            <div className='Headerbox'>
                <div className='wholetext'>
                    <div className='title'>
                        <h1 className='titletext' onClick={() => {navigate('/mainpage')}}>XMFL</h1>
                        <div className='Logoheader'></div>
                    </div>
                    <div className='Navtitle'>
                        <h1 className='Aboutpage' onClick={() => {navigate('/aboutpage')}}>About</h1>
                    </div>
                </div>
            </div>
        </>
    )
}