"use client";

import dynamic from 'next/dynamic';
import LoadingPlaceholder from './components/common/LoadingPlaceholder';

const Navbar = dynamic(() => import("./presentation/ui/Navbar"), {
  ssr: false,
  loading: () => <LoadingPlaceholder />,
});
const Content = dynamic(() => import("./presentation/ui/Content"), { 
  ssr: false, 
  loading: LoadingPlaceholder 
});
const Sidebar = dynamic(() => import("./presentation/ui/Sidebar"), { 
  ssr: false, 
  loading: LoadingPlaceholder 
});

export default function Home() {
  return (
    <div className="bg-[#EBF0F5] flex flex-col h-full min-h-screen gap-4">
      <Navbar />
      <div className="flex relative z-5 p-4 flex-1 gap-7 mx-auto">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
