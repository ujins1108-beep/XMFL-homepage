import './aboutpage.css'
import { Header} from '../../components/Header/Header.jsx'
import { Footer } from '../../components/Footer/Footer.jsx'
 
export function Aboutpage() {
    return (
        <>
            <Header />
            <div className='aboutwholetext'>
                <h1>안녕하세요</h1>
                <p>XMFL입니다.</p>
                <p>저는 2026년 1월즘에 코딩을 배우기 시작해서</p>
                <p>잘 하진 않지만</p>
                <p>그래도 열심히 해보겠습니다.</p>
                <p>사실 푸터 때문에 </p>
                <p>글씨를 최대한 많이 적어야 해서</p>
                <p>제 유튜브 링크나</p>
                <p>깃허브같은 소셜 링크라도 넣어봅니다.</p>
                <h1>Social</h1>
                <a href='https://github.com/ujins1108-beep' target="_blank" rel="noreferrer">깃허브 계정</a>
                <a href='https://www.youtube.com/@%ED%8A%B8%EB%A6%AC-x9o' target="_blank" rel="noreferrer">유튜브 계정</a>
            </div>
            <Footer />
        </>
    )
}