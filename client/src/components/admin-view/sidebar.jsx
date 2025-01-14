import { adminSidebarMenuItems } from "@/config";
import { ChartNoAxesCombined } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { BadgeCheck, LayoutDashboard, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";


export const adminSidebarMenuItems = [
    {
      id : 'dashboard',
      label : 'Dashboard',
      path: '/admin/dashboard',
      icon : <LayoutDashboard/>
    },{
      id : 'products',
      label : 'Products',
      path: '/admin/products',
      icon : <ShoppingBag/>
    },{
      id : 'orders',
      label : 'Orders',
      path: '/admin/orders',
      icon : <BadgeCheck/>
    },
  ]
function MenuItems({setOpen}){
    const navigate = useNavigate();

    return <nav className="mt-8 flex-col flex gap-2">
        {
            adminSidebarMenuItems.map(menuItems=> <div key={menuItems.id} onClick={()=>{navigate(menuItems.path); setOpen ? setOpen(false) : null;}} className="flex text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:big-muted hover:text-foreground">
                {menuItems.icon}
                <span>{menuItems.label}</span>
            </div>)
        }
    </nav>
}

function AdminSideBar({open , setOpen}){
    const navigate = useNavigate();

    return (
        <Fragment>
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="w-64">
                    <div className="flex flex-col h-full">
                        <SheetHeader className="border-b">
                            <SheetTitle className="flex gap-2 mt-5 mb-5">
                                <ChartNoAxesCombined size={30}/>
                                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
                            </SheetTitle>
                        </SheetHeader>
                        <MenuItems setOpen={setOpen} />
                    </div>
                </SheetContent>
            </Sheet>
            <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
                <div className="flex items-center gap-2" onClick={()=>navigate("/admin/dashboard")}>
                    <ChartNoAxesCombined size={30}/>
                    <h1 className="text-2xl font-extrabold">Admin Panel</h1>
                </div>
                <MenuItems />
            </aside>
        </Fragment>
    );
}
export default AdminSideBar;