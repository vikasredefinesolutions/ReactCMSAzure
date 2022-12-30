import { useTypedSelector } from 'hooks';
import { _Store } from 'page.config';
import React from 'react';
import Backdrop from '../Backdrop';
import CloseIcon from '../Icons/CloseIcon';
import MenuItem from './MenuItem';

interface _props {
  screen: 'DESKTOP' | 'MOBILE';
}

const MenuItems: React.FC<_props> = ({ screen }) => {
  const { layout: storeLayout, menuItems } = useTypedSelector(
    (state) => state.store,
  );
  const showSideMenu = useTypedSelector((state) => state.modals.sideMenu);

  if (menuItems === null) {
    return <></>;
  }

  if (screen === 'MOBILE' && showSideMenu === 'CLOSE') {
    return <></>;
  }

  if (storeLayout === _Store.type1) {
    if (screen === 'MOBILE') {
      return (
        <div className="relative z-40 lg:hidden">
          <Backdrop />
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
            >
              <CloseIcon />
              {menuItems.items_content?.map((menu, index) => {
                if (menu === null) {
                  return <></>;
                }
                return (
                  <MenuItem
                    key={index}
                    title={menu.title}
                    type={menu.type}
                    content={menu.items}
                    url={menu.seName}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full xl:flex items-center justify-center flex-1">
          <div className="ml-5">
            <div className="h-full flex justify-center space-x-5 relative text-sm">
              {menuItems.items_content?.map((menu, index) => {
                if (menu === null) {
                  return <></>;
                }
                return (
                  <MenuItem
                    key={index}
                    title={menu.title}
                    type={menu.type}
                    content={menu.items}
                    url={menu.seName}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type2) {
    if (screen === 'MOBILE') {
      return (
        <div className="relative z-40 lg:hidden">
          <Backdrop />
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              className="relative max-w-xs w-full bg-white shadow-xl pb-6 flex flex-col overflow-y-auto"
            >
              <CloseIcon />
              <div className="my-6 px-0 border-t border-gray-300">
                {menuItems.items_content?.map((menu, index) => {
                  if (menu === null) {
                    return <></>;
                  }
                  return (
                    <MenuItem
                      key={index}
                      title={menu.title}
                      type={menu.type}
                      content={menu.items}
                      url={menu.seName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full py-2 lg:flex items-center justify-center bg-[#051c2c] relative">
          <div className="">
            <div className="ml-6">
              <div className="h-full flex justify-center gap-x-4 xl:gap-x-10 text-base xl:tracking-widest">
                {menuItems.items_content?.map((menu, index) => {
                  if (menu === null) {
                    return <></>;
                  }
                  return (
                    <MenuItem
                      key={index}
                      title={menu.title}
                      type={menu.type}
                      content={menu.items}
                      url={menu.seName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type3) {
    if (screen === 'MOBILE') {
      return (
        <div className="relative z-40 lg:hidden">
          <Backdrop />
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              className="relative max-w-xs w-full bg-white shadow-xl pb-6 flex flex-col overflow-y-auto"
            >
              <CloseIcon />
              <div className="my-6 px-0 border-t border-gray-300">
                {menuItems.items_content?.map((menu, index) => {
                  if (menu === null) {
                    return <></>;
                  }
                  return (
                    <MenuItem
                      key={index}
                      title={menu.title}
                      type={menu.type}
                      content={menu.items}
                      url={menu.seName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full lg:flex items-center justify-center">
          <div className="">
            <div className="ml-6">
              <div className="h-full flex justify-center space-x-6 xl:space-x-10 relative text-base xl:tracking-widest">
                {menuItems.items_content?.map((menu, index) => {
                  if (menu === null) {
                    return <></>;
                  }
                  return (
                    <MenuItem
                      key={index}
                      title={menu.title}
                      url={menu.seName}
                      type={menu.type}
                      content={menu.items}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  if (storeLayout === _Store.type4) {
    if (screen === 'MOBILE') {
      return (
        <div className="relative z-40 lg:hidden">
          <Backdrop />
          <div className="fixed inset-0 flex z-40">
            <div
              // x-transition:enter="transition ease-in-out duration-300 transform"
              // x-transition:enter-start="-translate-x-full"
              // x-transition:enter-end="translate-x-0"
              // x-transition:leave="transition ease-in-out duration-300 transform"
              // x-transition:leave-start="translate-x-0"
              // x-transition:leave-end="-translate-x-full"
              className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto"
            >
              <CloseIcon />
              <div className="my-6 px-0 border-t border-gray-300">
                {menuItems.items_content?.map((menu, index) => {
                  if (menu === null) {
                    return <></>;
                  }
                  return (
                    <MenuItem
                      key={index}
                      title={menu.title}
                      type={menu.type}
                      content={menu.items}
                      url={menu.seName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (screen === 'DESKTOP') {
      return (
        <div className="hidden h-full lg:flex items-center justify-center flex-1">
          <div className="ml-6">
            <div className="h-full flex justify-center space-x-6 relative">
              {menuItems.items_content?.map((menu, index) => {
                if (menu === null) {
                  return <></>;
                }
                return (
                  <MenuItem
                    key={index}
                    title={menu.title}
                    type={menu.type}
                    content={menu.items}
                    url={menu.seName}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }

  return <></>;
};

export default MenuItems;
