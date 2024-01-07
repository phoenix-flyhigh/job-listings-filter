import styled from "styled-components";

interface FilterProps {
  selectedTags: string[];
  onRemoveTag: (tag: string) => void;
  onClear: () => void;
}

const Filter: React.FC<FilterProps> = ({
  selectedTags,
  onRemoveTag,
  onClear,
}: FilterProps) => {
  return (
    <FilterWrapper>
      <TagList>
        {selectedTags.map((tag) => (
          <SelectedTag>
            <TagName>{tag}</TagName>
            <RemoveButton onClick={() => onRemoveTag(tag)}>
              <img src="../images/icon-remove.svg" alt="remove-icon" />
            </RemoveButton>
          </SelectedTag>
        ))}
      </TagList>
      <ClearButton onClick={onClear}>Clear</ClearButton>
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  height: 70px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  width: 70%;
  background-color: #fff;
  position: absolute;
  top: 80px;
`;

const TagList = styled.section`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SelectedTag = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TagName = styled.span`
  color: hsl(180, 29%, 50%);
  background-color: hsl(180, 52%, 96%);
  padding: 0.5rem;
`;

const RemoveButton = styled.button`
  background-color: hsl(180, 29%, 50%);
  border: none;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`;

const ClearButton = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  color: hsl(180, 29%, 50%);
  text-decoration-color: hsl(180, 29%, 50%);
  cursor: pointer;
  font-weight: 700;
`;

export default Filter;
