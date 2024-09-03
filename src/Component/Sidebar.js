
import { faBell, faBullhorn, faChartPie, faCircleInfo, faPeopleGroup, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function Sidebar(){
  const navigate =  useNavigate();
    return(
<div className="bg-white shadow-md p-6 w-64 ">
              <nav className="space-y-4">
                <div className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500 sidebarbutton" 
                onClick={()=>{
                  navigate('/')
                }}>
                   <FontAwesomeIcon icon={faHome} style={{width:"24",height:"24" , viewBox:"0 0 24 24", fill:"none", stroke:"currentcolor",strokeWidth:"2",
                    strokeLinecap:"round",
                    strokeLinejoin:"round"
                  }}   className="h-5 w-5 mr-2"/>
                  <span>Home</span>
                 
                </div>
                <div className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500 sidebarbutton" >
                <FontAwesomeIcon icon={faChartPie} style={{width:"24",height:"24" , viewBox:"0 0 24 24", fill:"none", stroke:"currentcolor",strokeWidth:"2",
                    strokeLinecap:"round",
                    strokeLinejoin:"round"
                  }}   className="h-5 w-5 mr-2"/>
                  
                  <span>Progress Stats</span>
                </div>
                <div
          className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500 sidebarbutton"
          href="#"
        >
        <FontAwesomeIcon icon={faPlus} style={{width:"24",height:"24" , viewBox:"0 0 24 24", fill:"none", stroke:"currentcolor",strokeWidth:"2",
                    strokeLinecap:"round",
                    strokeLinejoin:"round"
                  }}   className="h-5 w-5 mr-2"/>
          <span>Track</span>
        </div>
        <div
          className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500 sidebarbutton"
          href="#"
        >
        <FontAwesomeIcon icon={faBell} style={{width:"24",height:"24" , viewBox:"0 0 24 24", fill:"none", stroke:"currentcolor",strokeWidth:"2",
                    strokeLinecap:"round",
                    strokeLinejoin:"round"
                  }}   className="h-5 w-5 mr-2"/>
          <span>Notifications</span>
        </div>
        <div
          className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500 sidebarbutton"
          onClick={()=>{
            navigate('/About')
          }}
          >
             <FontAwesomeIcon icon={faPeopleGroup} style={{width:"24",height:"24" , viewBox:"0 0 24 24", fill:"none", stroke:"currentcolor",strokeWidth:"2",
                    strokeLinecap:"round",
                    strokeLinejoin:"round"
                  }}   className="h-5 w-5 mr-2"/>
          <span>Friends</span>
        </div>
        <div
          className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500 sidebarbutton"
          onClick={()=>{
            navigate('/About')
          }}
          >
             <FontAwesomeIcon icon={faBullhorn} style={{width:"24",height:"24" , viewBox:"0 0 24 24", fill:"none", stroke:"currentcolor",strokeWidth:"2",
                    strokeLinecap:"round",
                    strokeLinejoin:"round"
                  }}   className="h-5 w-5 mr-2"/>
          <span>Challenges</span>
        </div>
        <div
          className="flex items-center text-gray-600 hover:text-blue-500 focus:outline-none focus:text-blue-500 sidebarbutton"
          onClick={()=>{
            navigate('/About')
          }}
        >
         <FontAwesomeIcon icon={faCircleInfo} style={{width:"24",height:"24" , viewBox:"0 0 24 24", fill:"none", stroke:"currentcolor",strokeWidth:"2",
                    strokeLinecap:"round",
                    strokeLinejoin:"round"
                  }}   className="h-5 w-5 mr-2"/> 
          <span>About</span>
        </div>
              </nav>
            </div>

    )
}