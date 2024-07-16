import React from 'react'
import './userSidebar.css'
import { Link } from 'react-router-dom'
function UserSidebar() {
  return (
    <aside id="sidebar" className='sidebar'>
    <ul className="sidebar-nav" id='sidebar-nav'>
        <li className="nav-item">
            <Link to="/" className='nav-link a'>
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/user/required_inform" className='nav-link collapsed'>
            <i class="bi bi-chat-left-quote"></i>
                <span>Request a Quote</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="" className='nav-link collapsed a' data-bs-target="#components-nav" data-bs-toggle="collapse" >
            <i class="bi bi-shop-window"></i>
                    <span>Place the Order</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id='components-nav'
                className='nav-content collapse'
                data-bs-parent="#sidebar-nav"
            >
                <li>
                    <Link to="/user/get_quote" className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Get the quote</span>
                    </Link>
                </li>
            </ul>
        </li>
        <li className="nav-item">
            <Link to="/user/user_history" className='nav-link collapsed'>
            <i class="bi bi-clock-history"></i>
                <span>History</span>
            </Link>
        </li>
        <li className="nav-item">
            <Link to="" className='nav-link collapsed a' data-bs-target="#forms-nav" data-bs-toggle="collapse" >
            <i class="bi bi-truck"></i>
                    <span>Track the order</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id='forms-nav'
                className='nav-content collapse'
                data-bs-parent="#sidebar-nav"
            >
                <li>
                    <Link to="/user/user_order_status" className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Order Status</span>
                    </Link>
                </li>

            </ul>
        </li>
        <li className="nav-item">
            <Link to="/" className='nav-link collapsed'>
            <i class="bi bi-clock-history"></i>
                <span>Logout</span>
            </Link>
        </li>
        {/* <li className="nav-item">
            <Link to=" " className='nav-link collapsed a' data-bs-target="#tables-nav" data-bs-toggle="collapse" >
                <i className="bi bi-layout-text-window-reverse"></i>
                    <span>Tables</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id='tables-nav'
                className='nav-content collapse'
                data-bs-parent="#sidebar-nav"
            >
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>General Tables</span>
                    </Link>
                </li>

                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Data Tables</span>
                    </Link>
                </li>             
            </ul>
        </li>
        <li className="nav-item">
            <Link to=" " className='nav-link collapsed a' data-bs-target="#charts-nav" data-bs-toggle="collapse" >
                <i className="bi bi-bar-chart"></i>
                    <span>Charts</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id='charts-nav'
                className='nav-content collapse'
                data-bs-parent="#sidebar-nav"
            >
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Chart.js</span>
                    </Link>
                </li>

                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>ApexCharts</span>
                    </Link>
                </li>             
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>ECharts</span>
                    </Link>
                </li>             
            </ul>
        </li>

        <li className="nav-item">
            <Link to=" " className='nav-link collapsed a' data-bs-target="#icons-nav" data-bs-toggle="collapse" >
                <i className="bi bi-gem"></i>
                    <span>Icons</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
            <ul id='icons-nav'
                className='nav-content collapse'
                data-bs-parent="#sidebar-nav"
            >
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Bootstrap Icons</span>
                    </Link>
                </li>

                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>Remix Icons</span>
                    </Link>
                </li>             
                <li>
                    <Link to=" " className='a'>
                        <i className="bi bi-circle"></i>
                        <span>BoxIcons</span>
                    </Link>
                </li>             
            </ul>
        </li>
        <li className='nav-heading'> Pages</li>
        {
            navList.map(nav => (
                <li className="nav-item" key={nav._id}>
                    <Link className='nav-link collapsed' to=" ">
                        <i className={nav.icon}></i>
                        <span>{nav.name}</span>
                    </Link>
                </li>
            ))
        } */}
    </ul>
</aside>
  )
}

export default UserSidebar