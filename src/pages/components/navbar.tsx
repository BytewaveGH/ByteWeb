

import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Card,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

import js from '../../../public/js.png'
import java from '../../../public/java.png'
import react from '../../../public/react.png'
import native from '../../../public/native.png'
import php from '../../../public/php.png'
import nodejs from '../../../public/nodejs.png'

import go from '../../../public/go.png'

import dotnet from '../../../public/dotnet.png'
import flutter from '../../../public/flutter.png'
import laravel from '../../../public/laravel.png'
import kotlin from '../../../public/kotlin.png'
import andriod from '../../../public/andriod.png'

import Image from "next/image";
import Link from "next/link";



const colors: any = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
  yellow: "bg-red-50 text-yellow-500",
};

const navListMenuItems = [
  // {
  //   color: "blue",
  //   icon: FlagIcon,
  //   title: "About us",
  //   description: "Learn about our story and our mission statement.",
  // },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Forum",
    description: "News and writings, press releases, and resources",
  },
  // {
  //   color: "green",
  //   icon: UsersIcon,
  //   title: (
  //     <div className="flex items-center gap-1">
  //       Careers{" "}
  //       <Chip
  //         size="sm"
  //         color="green"
  //         variant="ghost"
  //         value="We're hiring!"
  //         className="capitalize"
  //       />
  //     </div>
  //   ),
  //   description: "We are always looking for talented people. Join us!",
  // },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Case Studies",
    description: "All the stuff that we dan from legal made us add.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Our Services",
    description: "Checkout our products that helps a startup running.",
  },
  // {
  //   color: "teal",
  //   icon: FaceSmileIcon,
  //   title: "Icons",
  //   description: "Set of beautiful icons that you can use in your project.",
  // },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "UI Components",
    description: "High quality UI Kits helps you to 2x faster.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "Open Source",
    description: "List of all our open-source projects, it's all free.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "Academy of Ours",
    description: "List of all our open-source projects, it's all free.",
  },
];


const hireDev = [
  {
    color: "blue",
    icon: php,
    title: "App Developers",
    description: "",
  },
  {
    color: "orange",
    icon: php,
    title: "Web Developers",
    description: "",
  },
  {
    color: "green",
    icon: php,
    title: (
      <div className="flex items-center gap-1">
        Careers{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="We're hiring!"
          className="capitalize"
        />
      </div>
    ),
    description: "",
  },
  {
    color: "blue-gray",
    icon: php,
    title: "Software Developers",
    description: "",
  },
  {
    color: "purple",
    icon: php,
    title: "Full-stack Developers",
    description: "",
  },
  {
    color: "teal",
    icon: php,
    title: "Frontend Developers",
    description: "",
  },
  {
    color: "cyan",
    icon: php,
    title: "Backend Developers",
    description: "",
  },
  {
    color: "pink",
    icon: go,
    title: "UI/UX Developers",
    description: "",
  },
  {
    color: "pink",
    icon: andriod,
    title: "Andriod Developers",
    description: "",
  },
  {
    color: "yellow",
    icon: flutter,
    title: "Flutter Developers",
    description: "",
  },
  {
    color: "pink",
    icon: native,
    title: "React Native Developers",
    description: "",
  },
  {
    color: "pink",
    icon: kotlin,
    title: "Kotlin Developers",
    description: "",
  },
  {
    color: "pink",
    icon: java,
    title: "Java Developers",
    description: "",
  },
  {
    color: "pink",
    icon: react,
    title: "React Developers",
    description: "",
  },
  {
    color: "pink",
    icon: nodejs,
    title: "Node Developers",
    description: "",
  },
  {
    color: "pink",
    icon: go,
    title: "Go Developers",
    description: "",
  },
  {
    color: "pink",
    icon: dotnet,
    title: ".NET Developers",
    description: "",
  },
  {
    color: "pink",
    icon: laravel,
    title: "Laraval Developers",
    description: "",
  },
];






function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-1">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}


// Hire a developer

function NavListMenu2() {
  const [isMenuOpen2, setIsMenuOpen2] = React.useState(false);
  const [isMobileMenuOpen2, setIsMobileMenuOpen2] = React.useState(false);

  const renderItems = hireDev.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center  rounded-lg">
          <div className={`rounded-lg flex justify-items-center w-16`}>
            <Image src={icon} alt={"talents"} className="w-1/2 h-1/2 flex justify-items-center" />
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            {/* <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography> */}
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen2}
        handler={setIsMenuOpen2}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen2 || isMobileMenuOpen2}
              onClick={() => setIsMobileMenuOpen2((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Hire a developer
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen2 ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen2 ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-1">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen2}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

// End of Hire a developer 


function NavList() {
  const [openHireMenu, setOpenHireMenu] = useState<boolean>(false);

  const triggers = {
    onMouseEnter: () => setOpenHireMenu(true),
    onMouseLeave: () => setOpenHireMenu(false),
  };

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >

        <Link href='/whybytewave'>
          <ListItem className="flex items-center gap-2 py-2 pr-4">
            <CubeTransparentIcon className="h-[18px] w-[18px]" />
            Why Bytwave
          </ListItem>
        </Link>


      </Typography>

      <NavListMenu />

      <NavListMenu2 />


      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <UserCircleIcon className="h-[18px] w-[18px]" />
          Account
        </ListItem>
      </Typography>
    </List>
  );
}

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href={"/"} >
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          >
            Bytewave
          </Typography>
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Link href={"/signIn"}>
            <Button variant="text" size="sm" color="blue-gray">
              Sign In
            </Button>
          </Link>
          <Link href={"/contactUs"}>
            <Button variant="gradient" size="sm">
              Registry Contact
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link href={"/signIn"}>
            <Button variant="text" size="sm" color="blue-gray">
              Sign In
            </Button>
          </Link>
          <Link href={"/contactUs"}>
            <Button variant="gradient" size="sm">
              Registry Contact
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}