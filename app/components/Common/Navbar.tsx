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
      <Navbar onMenuOpenChange={setIsMenuOpen} className="py-">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="invisible md:visible">
            <Image src="/logo.png" alt="" width="113" height="33" />
          </NavbarBrand>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full text-white" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>{" "}
        <div className="invisible md:visible"></div>
        <div>
          <Image src="/logo.png" alt="" width="64" height="64" />
        </div>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
