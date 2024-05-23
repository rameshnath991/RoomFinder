import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";

const NavBar=()=> {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Dashbord",
    "Available Room or Flats",
    "Upload Your Room/Flats",
    "Contect us",
    "Log Out",
    "Sign up",
    "About us",
    
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="flex justify-between py-2  px-3" >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <Image src="/logo.png" width={90} height={30} alt="logo"/>
          <p className="font-bold text-inherit">ROOMFINDER</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent  className=" hidden sm:flex gap-2 " >
        <NavbarItem className="hover:bg-gray-400  rounded-lg px-5 py-4  ">
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem  className="hover:bg-gray-400  rounded-lg px-5 py-4  ">
          <Link color="foreground" href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:bg-gray-400  rounded-lg px-5 py-4 ">
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
        <NavbarItem  className="hover:bg-gray-400  rounded-lg px-5 py-4  ">
          <Link color="foreground" href="#" aria-current="page">
            For Rent
          </Link>
        </NavbarItem>

        <NavbarItem  className="hover:bg-gray-400  rounded-lg px-5 py-4  ">
          <Link color="foreground" href="#" aria-current="page">
            For Sale
          </Link>
        </NavbarItem>

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem  >
        <Link href="/login"><Button  color="primary" href="#" variant="flat" > 
       <b> <i>LogIn</i></b>
        </Button> </Link>
        </NavbarItem>
        <NavbarItem >
        <Link  href="/register"> <Button color="primary" href="#" variant="flat">
           <b><i> Sign Up </i></b>
          </Button> </Link>
        </NavbarItem>
      </NavbarContent>
    
      <NavbarMenu className="bg-transparents ">
        {menuItems.map((item, index) => (
          
          <NavbarMenuItem   key={`${item}-${index}`}>
            <Link color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                              }
               
              className="w-full hover:bg-black text-white  m-1"
             
              href="/register"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}


export default NavBar