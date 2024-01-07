import React from "react";
import styled from "styled-components";

export type JobDetailsType = {
  id: number;
  company: string;
  logo: string;
  isNew: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

interface JobCardProps {
  jobDetails: JobDetailsType;
  onTagSelect: (tag: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({
  jobDetails: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  },
  onTagSelect,
}: JobCardProps) => {
  return (
    <Wrapper>
      <JobInfo>
        <StyledImg src={logo} alt="logo" />
        <JobDescription>
          <CompanyDetails>
            <CompanyName>{company}</CompanyName>
            {isNew && <NewJobTag>NEW!</NewJobTag>}
            {featured && <FeaturedTag>FEATURED</FeaturedTag>}
          </CompanyDetails>
          <JobTitle>{position}</JobTitle>
          <JobDetails>
            <span>{postedAt}</span>
            <span>&middot;</span>
            <span>{contract}</span>
            <span>&middot;</span>
            <span>{location}</span>
          </JobDetails>
        </JobDescription>
      </JobInfo>
      <Divider />
      <JobTagsWrapper>
        {[role, level, ...tools, ...languages].map((tag: string) => (
          <JobTag onClick={() => onTagSelect(tag)}>{tag}</JobTag>
        ))}
      </JobTagsWrapper>
    </Wrapper>
  );
};

const StyledImg = styled.img`
  @media only screen and (max-width: 720px) {
    position: absolute;
    transform: translateY(-80%);
    left: 0;
  }
`;

const Divider = styled.hr`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: block;
    width: 100%;
    margin: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 1rem;
  background-color: #fff;
  height: fit-content;
  border-radius: 8px;
  cursor: pointer;
  width: 70%;

  &:hover {
    border-left: 5px solid hsl(180, 29%, 50%);
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    max-width: 720px;
    min-width: 360px;
    padding: 1rem;
    margin: 2rem;
  }
  @media only screen and (max-width: 720px) {
    justify-content: flex-start;
  }
`;

const JobInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    display: inline-flex;
    position: relative;
    margin-top: 1rem;
  }
`;

const JobTagsWrapper = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  flex-wrap: wrap;

  @media only screen and (max-width: 720px) {
    justify-content: flex-start;
  }
`;

const JobDescription = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 280px;

  @media only screen and (max-width: 720px) {
    margin-top: 1.5rem;
    justify-content: flex-start;
  }
`;

const CompanyDetails = styled.p`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0;
`;

const CompanyName = styled.span`
  color: hsl(180, 29%, 50%);
  font-weight: 700;
`;

const JobTitle = styled.h2`
  cursor: pointer;
  margin: 0.5rem 0;
  align-self: flex-start;

  &:hover {
    color: hsl(180, 29%, 50%);
  }
`;
const JobDetails = styled.p`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const JobTag = styled.button`
  border: none;
  background-color: hsl(180, 52%, 96%);
  color: hsl(180, 29%, 50%);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    color: #fff;
    background-color: hsl(180, 29%, 50%);
  }
`;

const NewJobTag = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 24px;
  color: #fff;
  background-color: hsl(180, 29%, 50%);
`;

const FeaturedTag = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 24px;
  color: #fff;
  background-color: hsl(180, 14%, 20%);
`;

export default JobCard;
