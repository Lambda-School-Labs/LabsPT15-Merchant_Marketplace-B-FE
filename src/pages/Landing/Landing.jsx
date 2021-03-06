import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFetch } from '../../hooks/useFetch';
import { useProfile } from '../../contexts/profile/ProfileProvider';
import { BrowserBar } from '../../components/common/BrowserBar';
import { Layout } from '../../components/common/Layout/Layout';
import { ProductPreviewCard } from '../../components/common/ProductPreviewCard';
import sample from './sampleProducts.json';

export const Landing = () => {
  // Must use placeholder data as initial state, as fetching real data requires being logged in
  const [previewProducts, setPreviewProducts] = useState(sample);
  const { get } = useFetch();
  const { profile } = useProfile();
  const [loaded, setLoaded] = useState(false);

  useEffect(
    function fetchPreviews() {
      async function asyncFetch() {
        const previewArr = [];
        for (let i = 1; previewArr.length < 8; i++) {
          try {
            const res = await get(`products/${i}`);
            if (res.data.length > 0) {
              previewArr.push(res.data[0]);
            }
          } catch (error) {
            console.error(`product ${i} not found:`, { error });
          }
          if (i > 50) break;
        }
        setPreviewProducts(previewArr);
        setLoaded(true);
      }

      if (profile && !loaded) {
        // add loaded variable to avoid request spam on logout
        asyncFetch();
      }
    },
    [profile, get, loaded]
  );

  const preview = previewProducts.map(item => {
    return <ProductPreviewCard key={item.id} product={item} />;
  });

  return (
    <Layout>
      <Display>{preview}</Display>
    </Layout>
  );
};

const Display = styled.div`
  & {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;
