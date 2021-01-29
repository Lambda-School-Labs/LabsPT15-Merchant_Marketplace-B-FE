import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { NavBar } from '../../components/common/NavBar';
import SearchResults from '../../components/inventory/SearchResults/searchResults';
import useSearch from '../../hooks/useSearch';
import { useAuth } from '../../contexts/auth/AuthProvider';
import { useFetch } from '../../hooks/useFetch';

export function CurrentInventory() {
  const [searchData, setSearchData] = useState({});
  const [inventory, setInventory] = useState([]);

  const { oktaId } = useAuth();
  const { get } = useFetch();

  useEffect(function fetchInventory() {
    async function asyncFetch() {
      const res = await get(`items/profile/${oktaId}`);
      setInventory(res.data);
    }

    asyncFetch();
  }, []);

  const displayedData = useSearch(inventory, 'name', searchData);

  return (
    <>
      <NavBar searchVisible={false} setData={setSearchData} />
      <div className="outerContainer">
        <div className="contents">
          <SearchResults data={displayedData} filter={searchData} />
          <Link to="/myprofile/inventory/additem">
            <Button>+Add Item</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
