"use client";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";
import { menuItems } from "../../Data/NavbarItems";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <Navbar
        isBordered={false}
        onMenuOpenChange={setIsMenuOpen}
        className="py-2 px-10 w-full"
        maxWidth="full"
        position="static"
      >
        {/* Mobile: Logo and Menu Toggle */}
        <NavbarContent
          justify="start"
          className="flex sm:hidden justify-between w-full"
        >
          <NavbarBrand>
            <Image src="/logo.png" alt="Logo" width="113" height="33" />
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        {/* Desktop: Logo Centered */}
        <NavbarContent className="hidden sm:flex justify-center gap-4">
          <NavbarBrand className="invisible lg:visible">
            <Image src="/logo.png" alt="Logo" width="113" height="33" />
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop: Menu Items */}
        <NavbarContent className="hidden sm:flex gap-10 font-thin justify-center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link className="w-full text-white font-thin" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Mobile: Hidden login and sign-up */}
        <NavbarContent className="hidden sm:flex " justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button radius="full" variant="bordered" href="#">
              Contact us
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button radius="full" as={Link} color="primary" href="#">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile: Collapsible Menu */}
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full text-white" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
