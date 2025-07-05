import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <div>
      {/* NavBar 사용 예시 - 기본 가로형 NavBar */}
      <nav className='bg-white border-b border-gray-200 px-4 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <a href='#' className='text-xl font-bold text-gray-900'>
              My UI
            </a>
            {/* NavBar 아이템들 - isActive: 현재 활성 메뉴 표시, href: 링크 주소, hasDropdown: 드롭다운 메뉴 여부 */}
            <a
              href='#'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeMenu === 'home'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setActiveMenu('home')}
            >
              홈
            </a>
            <a
              href='#'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeMenu === 'about'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setActiveMenu('about')}
            >
              소개
            </a>
            <a
              href='#'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeMenu === 'services'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setActiveMenu('services')}
            >
              서비스
            </a>
            <a
              href='#'
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeMenu === 'contact'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={() => setActiveMenu('contact')}
            >
              연락처
            </a>
          </div>
        </div>
      </nav>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
export default App;
