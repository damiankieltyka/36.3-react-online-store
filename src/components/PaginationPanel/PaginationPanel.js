import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PaginationPanel.scss';

const PaginationPanel = props => {
  const { currentPage, pageScrollUp, changePageNumber, renderPaginationButtons } = props;
  return (
    <div className="paginationPanel">
      <ul>

        {}
        {currentPage !== 1 ?
          <li className="paginationButton" onClick={() => {pageScrollUp(); changePageNumber(currentPage - 1)}}>
            <FontAwesomeIcon icon="arrow-left" />
          </li>
        :
          ''
        }

        {}
        {renderPaginationButtons}

        {}
        {currentPage !== renderPaginationButtons.length ?
          <li className="paginationButton" onClick={() => {pageScrollUp(); changePageNumber(currentPage + 1)}}>
            <FontAwesomeIcon icon="arrow-right" />
          </li>
        :
          ''
        }
      </ul>
    </div>
  );
};

export default PaginationPanel;
