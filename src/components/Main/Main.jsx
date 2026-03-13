import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
import SidebarRight from '../Sidebar/sidebarRight';

const Main = () => {
  return (
    /* vh-100 تضمن أن الصفحة بطول الشاشة فقط لمنع السكرول الخارجي */
    <div className='vh-100 d-flex flex-column overflow-hidden pageH'> 
      
      <header>
        <Navbar />
      </header>

      {/* الجزء الأساسي الذي يحتوي على السايدبارز والمحتوى */}
      <div className="container-fluid flex-grow-1 overflow-hidden">
        <div className="row flex-nowrap h-100">
          
          {/* السايد بار الشمال - ثابت في مكانه */}
          <div className="col-2 p-0 Sidebark h-100">
            <SidebarLeft /> 
          </div>

          {/* المحتوى الأوسط - هو الوحيد القابل للتمرير (Scrollable) */}
          {/* أضفنا pt-5 لضمان ظهور العناوين تحت النافبار الثابت */}
          <div className="col-8 p-0 h-100 overflow-y-auto pt-5">
            <main className="pageText p-3">
              {/* هنا تظهر صفحات Home, About, Product... إلخ */}
              <Outlet />
            </main>
          </div>

          {/* السايد بار اليمين - ثابت في مكانه */}
          <div className="col-2 p-0 SidebarkRight h-100">
             <SidebarRight /> 
          </div>

        </div>
      </div>

      {/* الفوتر في الأسفل دائماً */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;