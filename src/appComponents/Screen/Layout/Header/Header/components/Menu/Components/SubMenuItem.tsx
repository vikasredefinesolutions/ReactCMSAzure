import { useActions, useTypedSelector } from 'hooks';
import Link from 'next/link';
import { _Store } from 'page.config';
import React from 'react';

interface _props {
  itemLabel: string;
  itemUrl: string;
  type: 'BRAND' | 'CATEGORY';
}

const SubMenuItem: React.FC<_props> = ({ type, itemLabel, itemUrl }) => {
  const { layout: storeLayout, view } = useTypedSelector(
    (state) => state.store,
  );
  const { toggleSideMenu } = useActions();

  if (storeLayout === _Store.type1) {
    if (type === 'BRAND') {
      if (view === 'MOBILE') {
        return (
          <li
            className="w-full flex items-center"
            onClick={() => toggleSideMenu('CLOSE')}
          >
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
      if (view === 'DESKTOP') {
        return (
          <li className="flex items-center">
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
    }

    if (type === 'CATEGORY') {
      if (view === 'MOBILE') {
        return (
          <li
            className="w-full lg:w-1/2 flex items-center"
            onClick={() => toggleSideMenu('CLOSE')}
          >
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }

      if (view === 'DESKTOP') {
        return (
          <li className="w-full lg:w-1/2 flex items-center">
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
    }
  }

  if (storeLayout === _Store.type2) {
    if (type === 'CATEGORY' || type === 'BRAND') {
      if (view === 'MOBILE' || view === 'DESKTOP') {
        return (
          <li
            className="flex items-center"
            onClick={() => toggleSideMenu('CLOSE')}
          >
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
    }
  }

  if (storeLayout === _Store.type3) {
    if (type === 'CATEGORY') {
      if (view === 'MOBILE') {
        return (
          <li
            className="flex items-center"
            onClick={() => toggleSideMenu('CLOSE')}
          >
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
      if (view === 'DESKTOP') {
        return (
          <li className="w-full lg:w-1/2 flex items-center">
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
    }
    if (type === 'BRAND') {
      if (view === 'MOBILE') {
        return (
          <li
            className="flex items-center"
            onClick={() => toggleSideMenu('CLOSE')}
          >
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
      if (view === 'DESKTOP') {
        return (
          <li className="w-full lg:w-1/2 flex items-center">
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
    }
  }

  if (storeLayout === _Store.type4) {
    if (type === 'BRAND') {
      if (view === 'MOBILE') {
        return (
          <li
            className="w-full lg:w-1/3 flex items-center"
            onClick={() => toggleSideMenu('CLOSE')}
          >
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }

      if (view === 'DESKTOP') {
        return (
          <li className="flex items-center">
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
    }
    if (type === 'CATEGORY') {
      if (view === 'MOBILE') {
        return (
          <li
            className="w-full lg:w-1/3 flex items-center"
            onClick={() => toggleSideMenu('CLOSE')}
          >
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }

      if (view === 'DESKTOP') {
        return (
          <li className="w-full lg:w-1/2 flex items-center">
            <span className="material-icons-outlined text-lg">
              chevron_right
            </span>
            <Link
              href={`/${itemUrl}`}
              className="text-anchor hover:text-anchor-hover"
            >
              {itemLabel}
            </Link>
          </li>
        );
      }
    }
  }
  return <></>;
};

export default SubMenuItem;
