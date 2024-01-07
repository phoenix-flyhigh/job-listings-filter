import styled from "styled-components";
import "./App.css";
import { MockData } from "../data.ts";
import JobCard, { JobDetailsType } from "./JobCard.tsx";
import { useState } from "react";
import Filter from "./Filter.tsx";

const App = () => {
  const findCommonElements = (arr1: string[], arr2: string[]) => {
    return arr2.some((item) => arr1.includes(item));
  };

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (selectedTag: string) => {
    if (selectedTags.find((tag) => tag === selectedTag)) return;
    setSelectedTags((prev) => [...prev, selectedTag]);
  };

  const handleRemoveTag = (removedTag: string) => {
    setSelectedTags((prev) => prev.filter((tag: string) => tag !== removedTag));
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  let filteredData = MockData;

  if (selectedTags.length) {
    filteredData = filteredData.filter((data) => {
      const tags = [data.role, data.level, ...data.tools, ...data.languages];
      return findCommonElements(tags, selectedTags);
    });
  }

  return (
    <Wrapper>
      <Background />
      {selectedTags.length > 0 && (
        <Filter
          selectedTags={selectedTags}
          onRemoveTag={handleRemoveTag}
          onClear={clearAllTags}
        />
      )}
      <JobContainer>
        {filteredData.map((data: JobDetailsType) => (
          <JobCard
            key={data.id}
            jobDetails={data}
            onTagSelect={handleTagSelect}
          />
        ))}
      </JobContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  background-color: hsl(180, 52%, 96%);
`;

const Background = styled.div`
  height: 156px;
  width: 100%;
  background-color: hsl(180, 29%, 50%);
  background-image: url("../images/bg-header-desktop.svg");
  background-position: top;
  background-repeat: no-repeat;
  position: relative;

  @media only screen and (max-width: 720px) {
    background-image: url("../images/bg-header-mobile.svg");
    margin-bottom: 2rem;
  }
`;

const JobContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding-top: 1.5rem;

  @media only screen and (max-width: 720px) {
    padding-top: 1rem;
  }
`;

export default App;
