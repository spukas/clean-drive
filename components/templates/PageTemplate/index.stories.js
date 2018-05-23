import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageTemplate } from './';
import { Header, Hero, Footer } from '../../organisms';

const Template = () => (
  <PageTemplate header={<Header />} hero={<Hero />} footer={<Footer />}>
    <div />
  </PageTemplate>
);

storiesOf('Template', module)
    .add('default', () => <Template />)