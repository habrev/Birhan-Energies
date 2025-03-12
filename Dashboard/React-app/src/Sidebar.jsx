import React from 'react';
import {
  BsGrid1X2Fill, BsFilter, BsFillCalculatorFill, BsInfoCircle, BsBarChart, BsGraphUp, BsFillCloudSunFill
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar, handleItemClick }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsBarChart className='icon_header' /> Analysis Result
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item' onClick={() => handleItemClick('Home')}>
          <a href="#">
            <BsGrid1X2Fill className='icon' /> Home
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleItemClick('Historical Analysis')}>
          <a href="#">
            <BsGraphUp className='icon' /> Historical Analysis
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleItemClick('Forecast')}>
          <a href="#">
            <BsFillCloudSunFill className='icon' /> Forecast
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleItemClick('Filters')}>
          <a href="#">
            <BsFilter className='icon' /> Filters
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleItemClick('Key Metrics')}>
          <a href="#">
            <BsFillCalculatorFill className='icon' /> Key Metrics
          </a>
        </li>
        <li className='sidebar-list-item' onClick={() => handleItemClick('About')}>
          <a href="#">
            <BsInfoCircle className='icon' /> About
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
