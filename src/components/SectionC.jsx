import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Text from './Typography';

const Root = styled.section`
  padding: 10rem 0;
  background: var(--color-brand-2);
  color: #fff;
`;

export default () => (
  <Root>
    <Container>
      <Text as="h4">WE PUT THE &ldquo;S&rdquo; IN SIMPLICITY</Text>
      <Text>
        StyleQ is breaching a gap between professional stylists
        and customer needs. By providing stylists with all the
        resources they need for an outstanding job, we help users
        get a great and desirable service.
      </Text>
      <Text>
        By becoming a stylist for StyleQ you get to fill empty seats
        by connecting with clients who need same day appointments on
        the platform.
      </Text>
      <Text>
        This maximizes the client's time by favoring last minute
        services around their busy schedules.
      </Text>
      <Text>
        Our society today is always on constrained time and we play
        a part in taking away some of the difficulty of time management
        by making time work for both stylists and clients.
      </Text>
    </Container>
  </Root>
);
