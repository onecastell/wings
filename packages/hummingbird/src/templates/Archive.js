import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '@wingscms/hummingbird';
import { ComplexCard, FlexGrid } from '@wingscms/crane';
import { navigate } from 'gatsby-link';

const HighlightedArticles = styled.div`
  display: block;
  position: relative;
  width: 100%;
  max-width: 1180px;
  height: auto;
  padding: 10px;
  margin: ${({ image }) => (image ? '-300px auto 40px auto' : '0 auto 40px auto')};
`;

const Archive = ({ pageContext }) => {
  const { group } = pageContext; // , index, first, last, pageCount
  // const previousUrl = index - 1 === 1 ? '/' : (index - 1).toString();
  // const nextUrl = (index + 1).toString();
  return (
    <HighlightedArticles>
      <FlexGrid
        divisions={3}
        margins={10}
        alignItems="stretch"
        style={{
          marginLeft: '-10px',
          marginTop: '10px',
          marginBottom: '10px',
          width: 'calc(100% + 20px)',
        }}
      >
        {group.map(node => (
          <ComplexCard
            item={node}
            key={`node${node.id}`}
            title={node.featured.title}
            image={node.featured.image && node.featured.image.url}
            onClickHandler={() => {
              navigate(node.path ? `articles/${node.path}` : `articles/${node.slug}`);
            }}
            summary={node.featured.description}
            size="medium"
            bottomBackground
            shadow
          />
        ))}
      </FlexGrid>
    </HighlightedArticles>
  );
};

export default props => (
  <PageTemplate {...props}>
    <PageTemplate.Navigation {...props} />
    <Archive {...props} />
  </PageTemplate>
);
