import { useState } from 'react';
import './App.css';
import { NavBar } from './components/ui';

function App() {
  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <div>
      {/* NavBar 사용 예시 - 기본 가로형 NavBar */}
      <NavBar
        orientation='horizontal'
        size='md'
        variant='default'
        className='bg-white border-b border-gray-200'
      >
        {/* NavBar 아이템들 - isActive: 현재 활성 메뉴 표시, href: 링크 주소, hasDropdown: 드롭다운 메뉴 여부 */}
        <div className='flex items-center space-x-8'>
          <a href='#' className='text-xl font-bold text-gray-900'>
            My UI
          </a>
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
      </NavBar>

      {/* 메인 콘텐츠 영역 */}
      <main className='p-8'>
        <h1 className='text-2xl font-bold text-gray-900 mb-4'>
          현재 선택된 메뉴: {activeMenu}
        </h1>
        <p className='text-gray-600'>
          NavBar 컴포넌트가 정상적으로 작동하고 있습니다.
        </p>
      </main>
    </div>
  );
}
export default App;
