import * as React from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "./yves-guillou-ok.svg";
import {sortBy} from 'lodash';
const StyledItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;
const StyledColumn = styled.span`
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  a {
    color: inherit;
  }
  width: ${(props) => props.width};
`;
const StyledButton = styled.button`
  background: transparent;
  border: 1px solid #171212;
  padding: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    fill: #ffffff;
    stroke: #ffffff;
  }
`;
const StyledButtonSmall = styled(StyledButton)`
  padding: 5px;
`;

const SORTS = {
    'NONE': (list) => list, 
    'TITLE':(list) => sortBy(list,'title'),
    'AUTHOR':(list) => sortBy(list,'author'),
    'COMMENT':(list) => sortBy(list,'num_comments'),
    'POINT':(list) => sortBy(list,'points')
}
const List = ({ list, onRemoveItem }) => {
    const [sort, setSort] = React.useState({
            sortKey:'NONE',
            isReverse:false,
        });
        const handleSort = (sortKey) => {
            const isReverse = sort.sortKey === sortKey && !sort.isReverse;
            setSort({ sortKey, isReverse });
        };
        
    const sortFunction = SORTS[sort.sortKey];
    const sortedList =  sort.isReverse ? sortFunction(list).reverse() : sortFunction(list)
    return (
        <div>
            <div>
                <span>
                    <button type="button" onClick={() => handleSort('TITLE')}>
                        Title
                    </button>
                </span>
                <span>
                    <button type="button" onClick={() => handleSort('AUTHOR')}>
                        Author
                    </button>
                </span>
                <span>
                    <button type="button" onClick={() => handleSort('COMMENT')}>
                        Comment
                    </button>
                </span>
                <span>
                    <button type="button" onClick={() => handleSort('POINT')}>
                        Points
                    </button>
                </span>

            </div>
            {sortedList.map((item) => (
                <Item
                    key={item.objectID}
                    item={item}
                    onRemoveItem={onRemoveItem}
                />
            ))}
        </div>
            
        
    );
};

const Item = ({ item, onRemoveItem }) => (
    <StyledItem>
        <StyledColumn width="40%">
            <a href={item.url}>{item.title}</a>
        </StyledColumn>
        <StyledColumn width="30%">{item.author}</StyledColumn>
        <StyledColumn width="10%">{item.num_comments}</StyledColumn>
        <StyledColumn width="10%">{item.points}</StyledColumn>
        <StyledColumn width="10%">
            <StyledButtonSmall
                type="button"
                onClick={() => onRemoveItem(item)}
            // className={`${styles.button} ${styles.buttonSmall}`}
            >
                <Check height="18px" width="18px" />
            </StyledButtonSmall>
        </StyledColumn>
    </StyledItem>
);

export { List };
