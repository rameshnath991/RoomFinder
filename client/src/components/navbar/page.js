import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


const NavBar=()=> {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Available Room or Flats",
    "Upload Your Room/Flats",
    "Contect us",
    "Sign up",
    "About us",
    
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          
          <p className="font-bold text-inherit">ROOMFINDER</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent  className=" hidden sm:flex gap-4" justify="center">
        <NavbarItem className="hover:bg-gray-400  rounded  ">
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem  className="hover:bg-gray-400  rounded  ">
          <Link color="foreground" href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:bg-gray-400  rounded  ">
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem  >
        <Link href="/login"><Button color="primary" href="#" variant="flat" > 
       <b> <i>LogIn</i></b>
        </Button> </Link>
        </NavbarItem>
        <NavbarItem>
        <Link  href="/register"> <Button color="primary" href="#" variant="flat">
           <b><i> Sign Up </i></b>
          </Button> </Link>
        </NavbarItem>
      </NavbarContent>
    
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
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