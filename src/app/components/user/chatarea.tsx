import { Paperclip, Send, Smile, UserPlus } from "lucide-react";

const messages = [
    {
        sender: 'Jennifer Lisity',
        content:
            "Said, one let. Morning them, said. So were. Over after darkness void green, after evening won't days set",
        time: '12:45 PM',
        isSelf: false,
    },
    {
        sender: 'You',
        content:
            "Hey Jennifer, I just saw your message right now, we are going on the trip right?",
        time: '09:45 PM',
        isSelf: true,
    },
    {
        sender: 'Jennifer Lisity',
        content: "YES I'M REALLY EXCITED!",
        time: '09:47 PM',
        isSelf: false,
    },
    {
        sender: 'You',
        content: "So did you book the hotel and flight tickets? I'm packing everything.",
        time: '09:48 PM',
        isSelf: true,
    },
    {
        sender: 'Jennifer Lisity',
        content: 'Flight Tickets.pdf',
        time: '09:50 PM',
        isSelf: false,
        isFile: true,
    },
    {
        sender: 'You',
        content: "Thanks! I got it, pack your things we will move out early in the morning.",
        time: '09:52 PM',
        isSelf: true,
    },
];
export default function ChatArea() {
    return (
        <div className="w-2/4 bg-zinc-800 text-white flex flex-col">
            <div className="w-full p-5 flex justify-between items-center bg-zinc-950">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700 mr-3 flex justify-center items-center">
                        <span className="text-white font-bold">J</span>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Jennifer Lisity</h2>
                        <p className="text-xs text-green-400">Active now</p>
                    </div>
                </div>

                <div className="flex gap-4 me-3">
                    <button
                        title="Attach File"
                        className="text-gray-300 hover:text-white transition"
                    >
                        <Paperclip className="w-5 h-5" />
                    </button>
                    <button
                        title="Send Contact"
                        className="text-gray-300 hover:text-white transition"
                    >
                        <UserPlus className="w-5 h-5" />
                    </button>
                </div>
            </div>
            <div className="flex-1 p-4 overflow-auto overflow-y-hidden">
                {messages.map((message, index) => (
                    <div key={index} className="mb-4">
                        <div className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'}`}>
                            {!message.isSelf && (
                                <div className="w-8 h-8 rounded-full bg-gray-800 mr-2 flex items-center justify-center">
                                    <span>{message.sender[0]}</span>
                                </div>
                            )}

                            <div className="flex flex-col">
                                <div
                                    className={`max-w-xs p-3 rounded-lg
                                            ${message.isSelf
                                            ? 'bg-gradient-to-r from-pink-500 to-purple-500 self-end'
                                            : 'bg-gradient-to-r from-orange-500 to-pink-500 self-start'}`}
                                >
                                    {message.isFile ? (
                                        <div className="flex items-center">
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 4v16m8-8H4"
                                                ></path>
                                            </svg>
                                            <span>{message.content}</span>
                                        </div>
                                    ) : (
                                        <p>{message.content}</p>
                                    )}
                                </div>
                                <span className={`mt-1 text-xs text-gray-400 ${message.isSelf ? 'self-start' : 'self-end'}`}>
                                    {message.time}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mb-2 mx-1 p-4 px-6 border-t border-zinc-900 flex items-center bg-zinc-900 rounded-4xl">
                <button className="text-white hover:text-yellow-200 "> <Smile className="w-7 h-7" /></button>
                <input type="text" placeholder="type here..."
                    className="mx-3 flex-1 p-2 rounded-lg bg-transparent text-white placeholder-white shadow-2xl 
                 focus:outline-none  focus:ring-0 focus:placeholder-purple-300"/>
                 <button className="text-white hover:text-purple-300">
                    <Send className="h-7 w-7" />
                 </button>
            </div>
        </div >
    )
}
