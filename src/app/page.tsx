'use client'
import { useState } from "react";
import ChatArea from "./components/user/chatarea";
import Menubar from "./components/user/menubar";
import Profile from "./components/user/profile";
import Sidebar from "./components/user/sidebar";


export default function Home() {
  const [view,setView]=useState<'sidebar'|'chatarea'|'profile'>('sidebar')
  const handleViewChange = (newView: 'sidebar' | 'chatarea' | 'profile') => {
    setView(newView);
  };
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className={`flex h-full ${view === 'sidebar'? 'w-full':'hidden'} md:w-1/4`}>
        <Menubar  />
        <Sidebar view={view} setView={setView} />
      </div>
      <ChatArea view={view} setView={setView} />
      <Profile view={view} setView={setView} />
    </div>
  );
}