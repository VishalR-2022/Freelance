import React from 'react';

import AnimatedText from '@/components/animation/motionText';
import { WithAdminLayout } from '@/layouts/admin/wrapper';

function Index() {
  return (
    <div className="flex h-screen px-6">
      <AnimatedText
        tag="h2"
        className="text-xl font-medium"
        animate="fadeInRight"
      >
        Dashboard
      </AnimatedText>
    </div>
  );
}

export default WithAdminLayout({
  breadcrumbs: [
    { id: 1, label: 'Home', href: '/' },
    { id: 2, label: 'Admin', href: '/admin' },
  ],
  heading: 'Dashboard',
})(Index);
