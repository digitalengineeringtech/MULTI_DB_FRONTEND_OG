import React from 'react'
import AdminHeader from '../Admin/components/AdminHeader';
import Header from '../components/Header';

function NavigationHeaderCon({value}) {
   switch (value) {
    case 'home':
      return <AdminHeader />;
    case 'dashboard':
      return <Header />;
    case 'admin':
      return <AdminHeader/>;
    default:
      return <Header />;
  }
}

export default NavigationHeaderCon