"use client";
import SideBar from "@/components/sidebar/page";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import React from "react";
import { Avatar } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/reducerSlices/userSlice";
import { useRouter } from "next/navigation";
const layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logout = () => {
    dispatch(logoutUser());
    router.push("/");
  };
  const { userDetails } = useSelector((state) => state.user);
  return (
    <div>
      <div className="flex m-4">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" width={80} height={80} className="" />

          <SideBar />
        </div>
        <div className="w-4/5">
          <div className="flex justify-end ">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold"></p>

                  <p className="font-semibold">{userDetails.fullName}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Help & Feedback
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  onClick={() => logout()}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
