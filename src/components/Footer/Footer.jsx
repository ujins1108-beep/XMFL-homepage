import './Footer.css'

export function Footer() {
    return (
        <>
            <div className='Footerbox'>
                <div className='Footertitle'>
                    <h1 className='XMFLname'>XMFL</h1>
                    <h1 className='Introduce'>웹 프론트엔드 개발자</h1>
                </div>

                <img src='Youtube_logo.png' className='youtube' 
                onClick={() => window.location.href = 'https://www.youtube.com/@%ED%8A%B8%EB%A6%AC-x9o'}></img>
            </div>
        </>
    )
}