import { useState } from 'react';
import './App.css';
import { NavBar } from './components/ui';

function App() {
  const [activeMenu, setActiveMenu] = useState('home');

  // 메뉴 아이템 정의
  const menuItems = [
    { id: 'home', label: '홈', href: '#' },
    { id: 'about', label: '소개', href: '#' },
    { id: 'services', label: '서비스', href: '#' },
    { id: 'contact', label: '연락처', href: '#' },
  ];

  return (
    <div>
      {/* 완전히 컴포넌트화된 NavBar */}
      <NavBar
        activeMenu={activeMenu}
        onMenuChange={setActiveMenu}
        menuItems={menuItems}
        logoText='My UI'
        className='bg-white border-b border-gray-200'
      />

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
