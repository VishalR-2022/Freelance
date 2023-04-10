import React from 'react';

import { WithAdminLayout } from '@/layouts/admin/wrapper';

function Index() {
  return <div>Prooooooooooooooooooooooooducts</div>;
}

export default WithAdminLayout({
  breadcrumbs: [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'Admin', href: '/admin' },
  ],
})(Index);
