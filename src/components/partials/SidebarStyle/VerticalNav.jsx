import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import NavItemWithTooltip from './vericalnav/NavItemWithTooltip';
import AccordionMenu from './vericalnav/AccordionMenu';


const menuItems = [
    {
        path: '/',
        icon: 'newspaper',
        label: 'Newsfeed',
        tooltip: 'Newsfeed',
    },
    {
        eventKey: 'profile-menu',
        icon: 'person',
        label: 'Profiles',
        path: '/dashboard/app/profile',
        tooltip: 'Profiles',
    },
    {
        eventKey: 'friends-menu',
        icon: 'people',
        label: 'Friend',
        path: '/dashboards/app/friend-list',
        tooltip: 'Friend List',
    },
    {
        eventKey: 'friends-menu',
        icon: 'people',
        label: 'Notification',
        path: '/dashboards/app/friend-list',
        tooltip: 'Friend List',
    },
    // {
    //     eventKey: 'blog-menu',
    //     icon: 'article',
    //     label: 'Blog',
    //     subItems: [
    //         { path: '/dashboard/blog/blog-grid', label: 'Blog Grid', tooltip: 'Blog Grid', miniIcon: 'BG' },
    //         { path: '/dashboard/blog/blog-list', label: 'Blog List', tooltip: 'Blog List', miniIcon: 'BL' },
    //         { path: '/dashboard/blog/blog-detail', label: 'Blog Detail', tooltip: 'Blog Detail', miniIcon: 'BD' },
    //     ],
    // },
    // {
    //     eventKey: 'makeplace-menu',
    //     icon: 'build',
    //     label: 'Makeplace',
    //     subItems: [{ path: '/dashboards/makeplace/workshop', label: 'Workshop', tooltip: 'Workshop', miniIcon: 'W' }],
    // },
    {
        eventKey: 'message-menu',
        icon: 'chat',
        label: 'Message',
        path: '/chat/index',
        tooltip: 'Chat',
    },
    {
        eventKey: 'store-menu',
        icon: 'storefront',
        label: 'Store',
        subItems: [
            { path: '/dashboards/store/store-category-grid', label: 'Category Grid', tooltip: 'Category Grid', miniIcon: 'CG' },
            { path: '/dashboards/store/store-category-list', label: 'Category List', tooltip: 'Category List', miniIcon: 'CL' },
            { path: '/dashboards/store/store-detail', label: 'Store Detail', tooltip: 'Store Detail', miniIcon: 'SD' },
            { path: '/dashboards/store/product-detail', label: 'Product Detail', tooltip: 'Product Detail', miniIcon: 'PD' },
            { path: '/dashboards/store/store-checkout', label: 'Checkout', tooltip: 'Checkout', miniIcon: 'CO' },
        ],
    },
    // {
    //     eventKey: 'market-menu',
    //     icon: 'poll',
    //     label: 'Market Place',
    //     subItems: [
    //         { path: '/dashboards/market-place/market1', label: 'Market 1', tooltip: 'Market 1', miniIcon: 'M1' },
    //         { path: '/dashboards/market-place/market2', label: 'Market 2', tooltip: 'Market 2', miniIcon: 'M2' },
    //     ],
    // },
];



const VerticalNav = () => {
    const [activeMenu, setActiveMenu] = useState('');

    return (
        <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
            {menuItems.map((item, index) =>
                item.subItems ? (
                    <AccordionMenu
                        key={index}
                        eventKey={item.eventKey}
                        icon={item.icon}
                        label={item.label}
                        subItems={item.subItems}
                        onClick={() => setActiveMenu(item.eventKey)}
                    />
                ) : (
                    <NavItemWithTooltip key={index} path={item.path} icon={item.icon} label={item.label} tooltip={item.tooltip} />
                )
            )}
        </Accordion>
    );
};

export default VerticalNav;
