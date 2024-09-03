import React from "react";

export default function Header(){
    return (
     <>
      <header className="bg-gradient-to-r from-[#1E40AF] to-[#2563EB] py-4 px-6 header" style={{display:"flex"}}>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Progress Tracker</h1>
              
            </div>
          </header>
     </>
    );
}