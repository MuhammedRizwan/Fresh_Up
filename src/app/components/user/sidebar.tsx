'use client';

import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
const users = [
    {
        sender: 'Nancy J. Martinez',
        preview: 'Moved thing. Second found units behind farts. He created.',
        time: 'Just now',
        unread: true,
        unreadCount: 5,
    },
    {
        sender: 'Helen Pool',
        preview: 'abundantly be fruitful morning moved forth. Divided into the...',
        time: '06:42 AM',
        unread: true,
        unreadCount: 7,
    },
    {
        sender: 'Jennifer Lisity',
        preview: 'Said, one let. Morning them, So were. Over after image',
        time: '12:38 PM',
        unread: true,
        highlighted: true,
    },
    {
        sender: 'Marcel Rubio',
        preview: 'Image first meat great. Lesser, brought life moving created...',
        time: '06:12 AM',
        unread: false,
    },
    {
        sender: 'Frances J. Royster',
        preview: 'Whales in whales midst whales after the cattle an he form...',
        time: '05:12 PM',
        unread: false,
    },
    {
        sender: 'Melissa E. Hudson',
        preview: "They're gathered gathered can't created have dominion...",
        time: '11:23 PM',
        unread: true,
        unreadCount: 4,
    },
    {
        sender: 'Lorrine Jones',
        preview: 'Moved thing. Second third units behind farts. He created.',
        time: '12:38 PM',
        unread: true,
        unreadCount: 5,
    },
];

interface SidebarProps {
    view: "sidebar" | "chatarea" | "profile",
    setView: Dispatch<SetStateAction<"sidebar" | "chatarea" | "profile">>
}

function truncateWithEllipsis(text: string, maxLength = 55) {
    return text.length > maxLength
        ? text.slice(0, maxLength).replace(/\.*$/, '') + '...'
        : text;
}

export default function Sidebar({ view, setView }: SidebarProps) {
    return (
        <div className="w-full bg-zinc-800 min-h-screen">
            <div className="w-full py-5 bg-zinc-950 border-b-3 border-zinc-950">
                <div className="mx-auto w-9/12 md:w-11/12">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full pl-10 pr-4 py-2 rounded-3xl backdrop-blur-md text-zinc-700 placeholder-zinc-700 border border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-800 shadow-lg"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-700 w-5 h-5" />
                    </div>
                </div>
            </div>
            <div className="w-full px-7 md:px-3 mt-5">
                <div className="space-y-2">
                    {users.map((user, index) => (
                        <div key={index} className={`flex items-center p-5 md:p-3 rounded-lg ${user.highlighted ? 'bg-gradient-to-r from-pink-500 to-purple-500' : 'bg-zinc-900'} ${user.unread ? 'font-bold' : ''}`}
                            onClick={() => setView('chatarea')}>
                            <div className="w-10 h-10 rounded-full bg-gray-600 mr-3 flex items-center justify-center">
                                <span className="text-white">{user.sender[0]}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between ">
                                    <span className="text-sm">{user.sender}</span>
                                    <span className="text-gray-400 text-xs">{user.time}</span>
                                </div>
                                <p className="text-gray-300 text-xs line-clamp-2">
                                    {truncateWithEllipsis(user.preview)}
                                </p>
                            </div>
                            {user.unreadCount && (
                                <div className="ml-3 bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                                    {user.unreadCount}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

