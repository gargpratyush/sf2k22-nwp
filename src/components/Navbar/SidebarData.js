import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icons:<AiIcons.AiFillHome/>,
        CName:'nav-text'
    },
    {
        title:'My profile',
        path:'/profile',
        icons:<IoIcons.IoIosPaper/>,
        CName:'nav-text'
    },
    {
        title:'Cities',
        path:'/Citymap',
        icons:<IoIcons.IoIosPaper/>,
        CName:'nav-text'
    },
    {
        title:'Contact Us',
        path:'/Foot',
        icons:<IoIcons.IoMdPeople/>,
        CName:'nav-text'
    },
    {
        title:'Know More',
        path:'/Knowmore',
        icons:<IoIcons.IoMdPeople/>,
        CName:'nav-text'
    }
]