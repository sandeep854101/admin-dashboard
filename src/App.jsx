import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'
import ProductPage from './pages/ProductPage'
import Sidebar from './components/common/Sidebar'
import AnalyticsPage from './pages/AnalyticsPage'
import UsersPage from './pages/UsersPage'
import SettingsPage from './pages/SettingsPage'
import SalesPage from './pages/SalesPage'
import OrdersPage from './pages/OrdersPage'

const App = () => {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>

      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
        <div className=' absolute inset-0 backdrop-blur-sm ' />
      </div>
      {/* sidebar */}
      <Sidebar/>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path='/analytics' element={<AnalyticsPage />} />
				<Route path='/users' element={<UsersPage />} />
				<Route path='/settings' element={<SettingsPage />} />
				<Route path='/sales' element={<SalesPage />} />
				<Route path='/orders' element={<OrdersPage />} />
      </Routes>

    </div>
  )
}

export default App
