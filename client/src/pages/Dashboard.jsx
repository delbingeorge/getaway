import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location])

  return (
    <div className='flex'>
      <div>
        <DashSidebar />
      </div>
      <div className='w-full flex items-center justify-center'>
        {
          tab === 'profile' &&
          <DashProfile />
        }
      </div>
    </div>
  )
}

export default Dashboard
