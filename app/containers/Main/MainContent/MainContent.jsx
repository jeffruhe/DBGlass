// @flow
import React, { Component } from 'react';

import {
  ContentWrapper,
  TableHeader,
  ColumnName,
  TableContent,
} from './styled';

import Footer from './Footer/Footer';

class MainContent extends Component {
  render() {
    return (
      <ContentWrapper>
        <TableHeader>
          <ColumnName />
          <ColumnName />
        </TableHeader>
        <TableContent />
        <Footer />
      </ContentWrapper>
    );
  }
}

export default MainContent;