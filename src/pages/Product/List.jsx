import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import ProductCard from '../../components/list/ProductCard';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

//todo: refacotring을 할 때, style 폴더로 옮겨야 함.
const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Introduction = styled.section`
  width: 100%;
  height: 313px;
  background-color: #eef8ec;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & img {
    width: 46px;
    height: 46px;
  }
  & h3 {
    color: #4a9536;
    font-size: 22px;
    font-weight: bold;
  }
  & p {
    text-align: center;
    line-height: 19px;
    display: flex;
    flex-direction: column;
  }
  & p span {
    margin-bottom: 10px;
  }
`;
const ChipMenu = styled.section`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const ChipMenuButton = styled.span`
  color: ${({ selected }) => (selected ? '#206B0C' : '#000000')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  cursor: pointer;
`;
const ProductCardContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > div {
    margin-right: 10px;
    margin-bottom: 28px;
  }
`;
const Pagination = styled.div`
  margin-top: 48px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
const StyledPrev = styled(MdNavigateBefore)`
  visibility: ${({ disabled }) => (disabled ? 'hidden' : 'visible')};
`;
const StyledNext = styled(MdNavigateNext)`
  visibility: ${({ disabled }) => (disabled ? 'hidden' : 'visible')};
`;
const PaginationButton = styled.span`
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  color: ${({ isSelected }) => isSelected && '#206B0C'};
`;

function List() {
  const [productItems, setproductItems] = useState([]);
  const [pagination, setPagination] = useState(0);

  const [onPage, setOnPage] = useState(1);
  const [onChip, setOnChip] = useState('BEST');

  const chipsMenus = ['SALE', 'BEST', 'MD', 'ALL'];

  useEffect(() => {
    const fetchProducItems = async () => {
      try {
        const { data } = await axios.get(`getfruits?page=${onPage}&chip=${onChip}`);
        const { returnPageData, meta } = data;
        const { pagination } = meta;

        if (!returnPageData) throw new Error('서버로부터의 데이터가 없습니다.');

        setPagination(pagination);
        setproductItems(returnPageData);
      } catch (err) {
        console.error(err);
        setproductItems([]);
      }
    };

    fetchProducItems();
  }, [onPage, onChip]);

  const onClickPage = e => {
    setOnPage(parseInt(e.target.textContent, 10));
  };
  const pageSpans = [];
  for (let i = 0; i < pagination; i++) {
    pageSpans.push(
      <PaginationButton key={i} isSelected={onPage === i + 1} onClick={onClickPage}>
        {i + 1}
      </PaginationButton>
    );
  }
  const createHandleClickChipMenu = chip => () => {
    setOnChip(chip);
    setOnPage(1);
  };
  const onClickPrevPage = () => {
    setOnPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
  };
  const onClickNextPage = () => {
    setOnPage(prevPage => (prevPage < pagination ? prevPage + 1 : prevPage));
  };

  return (
    <ListContainer>
      <Introduction>
        <img src="/imgs/프룻파비콘.png" alt="프롯 로고" />
        <h3>프루떼 [수확배송]</h3>
        <p>
          <span>
            친환경 농가의 맛있고 바른 먹거리를 만났을때 게릴라로 열리는 프루떼의 반짝스토어
          </span>
          <span>가장 알맞게 익었을때 농장에서 바로! 수확해서 배송해드립니다.</span>
        </p>
      </Introduction>
      <ChipMenu>
        {chipsMenus.map((chip, idx) => (
          <ChipMenuButton
            key={idx}
            onClick={createHandleClickChipMenu(chip)}
            selected={onChip === chip}
          >
            {chip}
          </ChipMenuButton>
        ))}
      </ChipMenu>
      <ProductCardContainer>
        {productItems.map(productItem => (
          <ProductCard key={productItem.id} productItem={productItem} />
        ))}
      </ProductCardContainer>
      <Pagination>
        <StyledPrev onClick={onClickPrevPage} disabled={onPage === 1} />
        {pageSpans}
        <StyledNext onClick={onClickNextPage} disabled={onPage >= pagination} />
      </Pagination>
    </ListContainer>
  );
}

export default List;
