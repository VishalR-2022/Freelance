import type { NextComponentType } from 'next/dist/shared/lib/utils';
import { isValidElement } from 'react';

import type { AdminDashboardLayoutProps } from './index';
// eslint-disable-next-line import/no-named-as-default
import AdminDashboardLayout from './index';

export const WithAdminLayout =
  (props?: Omit<AdminDashboardLayoutProps, 'children'>) =>
  (WrappedComponent: NextComponentType) => {
    const Wrapper = () => (
      <AdminDashboardLayout {...props}>
        {isValidElement(WrappedComponent) ? (
          WrappedComponent
        ) : (
          <WrappedComponent />
        )}
      </AdminDashboardLayout>
    );

    return Wrapper;
  };
