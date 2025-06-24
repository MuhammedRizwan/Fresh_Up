import ChatArea from "./components/user/chatarea";
import Menubar from "./components/user/menubar";
import Profile from "./components/user/profile";
import Sidebar from "./components/user/sidebar";


export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="flex h-full w-1/4">
        <Menubar />
        <Sidebar />
      </div>
      <ChatArea />
      <Profile />
    </div>
  );
}