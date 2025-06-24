export default function Profile() {
  return (
    <div className="w-1/4 bg-gradient-to-b from-gray-900 to-black text-white h-screen p-6 shadow-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold mb-10">Personal Info</h1>
        <div className="bg-red-700 rounded-full p-1 border-none">
          <img src="" alt="J" className="w-30 h-30 rounded-full object-cover" />
        </div>
        <p className="font-bold text-lg mt-3">Jennifer Lisity</p>
        <p className="text-green-400 text-sm font-semibold">Active Now</p>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">Attachment</h2><span className="bg-purple-600 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">15</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <img src="food.jpg" alt="Food" className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform" />
          <img src="building.jpg" alt="Building" className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform" />
          <img src="plane.jpg" alt="Plane" className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform" />
          <div className="bg-orange-500 flex items-center justify-center rounded-lg h-20 hover:bg-orange-600 transition-colors">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m-9 8a9 9 0 11.8-17 9 9 0 01-9 9z" />
            </svg>
          </div>
          <img src="lights.jpg" alt="Lights" className="w-full h-20 object-cover rounded-lg hover:scale-105 transition-transform" />
          <div className="bg-purple-600 flex items-center justify-center rounded-lg h-20 hover:bg-purple-700 transition-colors">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}