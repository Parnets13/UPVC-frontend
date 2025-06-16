import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "./../../ui/sidebar"
import { AppSidebar } from '/src/components/Admin/sidebar/app-sidebar.jsx';



export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-[86rem]">
        <SidebarTrigger />
  
       <Outlet/>
      </main>
    </SidebarProvider>
  )
}