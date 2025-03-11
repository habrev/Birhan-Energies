import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Home'); // Track the selected sidebar item

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Update the selected item based on sidebar click
  const handleSidebarItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar 
        openSidebarToggle={openSidebarToggle} 
        OpenSidebar={OpenSidebar}
        handleItemClick={handleSidebarItemClick} // Pass the function to Sidebar
      />
      <Home selectedItem={selectedItem} /> {/* Pass selectedItem to Home */}
    </div>
  );
}

export default App;
