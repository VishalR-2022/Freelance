import React from 'react';
import { IconContext } from 'react-icons';
import { MdFilterAlt } from 'react-icons/md';

import { Table } from '@/components/Table';
import { WithAdminLayout } from '@/layouts/admin/wrapper';
import { Filter } from '@/module/admin/products/filter';

function Index() {
  return (
    <div className="flex h-screen flex-col px-6">
      <div className="flex items-center justify-between rounded-xl bg-white p-6">
        <div className="text-xl font-medium">Filters</div>
        <label htmlFor="my-modal" className="btn border-0 bg-white">
          <IconContext.Provider value={{ className: 'text-accent text-2xl' }}>
            <MdFilterAlt />
          </IconContext.Provider>{' '}
        </label>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <Filter />
        </div>
        {/* <div className="divider"></div>
        <div className="  ">
          <div className="flex items-center">
            <div className="mr-4 text-base text-gray-600">Category</div>
            <div className="dropdown my-2">
              <label
                tabIndex={0}
                className="btn m-1 rounded-3xl bg-blue-600 text-white hover:bg-white hover:text-blue-600"
              >
                Select Category
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box flex max-h-40 w-52 flex-col flex-nowrap overflow-auto bg-blue-100 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 text-base text-gray-600">Tenants</div>
            <div className="dropdown my-2">
              <label
                tabIndex={0}
                className="btn m-1 rounded-3xl bg-blue-600 text-white hover:bg-white hover:text-blue-600"
              >
                Select Tenants
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box flex max-h-40 w-52 flex-col flex-nowrap overflow-auto bg-blue-100 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="divider"></div>
      <div className="rounded-xl bg-white p-6">
        <Table />
      </div>
    </div>
  );
}

export default WithAdminLayout({
  breadcrumbs: [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'Admin', href: '/admin' },
    { id: 3, label: 'Products', href: '/admin/products' },
  ],
  heading: 'Products',
})(Index);
