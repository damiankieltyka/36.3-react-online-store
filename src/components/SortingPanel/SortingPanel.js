import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SortingPanel.scss';

const SortingPanel = props => {
  const { sortProducts, getCategory } = props;
  return (
    <aside className="sortingPanel" id="sortingPanel">
      <div className="col-12">
        <div className="wrapper">
          <div className="section sortingButtons">
            <p>Filter by:</p>
            <button onClick={() => sortProducts("fromAToZ")}>Name: A-Z</button>
            <button onClick={() => sortProducts("fromZToA")}>Name: Z-A</button>
            <button onClick={() => sortProducts("lowToHigh")}>Price: Low to high</button>
            <button onClick={() => sortProducts("highToLow")}>Price: High to low</button>
          </div>
          <div className="section filterButtons">
            <p>Categories:</p>
            <button onClick={() => getCategory("Leather")}>Leather</button>
            <button onClick={() => getCategory("Suede")}>Suede</button>
            <button onClick={() => getCategory("Evening")}>Evening</button>
            <button onClick={() => getCategory("Sneakers")}>Sneakers</button>
            <button onClick={() => getCategory("Boots")}>Boots</button>
            <button className="backgroundBtn" onClick={() => getCategory("All")}>
              <FontAwesomeIcon icon="search" className="searchIcon" />
              Show all products
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SortingPanel;
