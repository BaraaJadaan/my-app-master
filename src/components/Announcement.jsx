import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  font-size: medium;
  /* margin-top: 64px; */
`;

const Announcement = () => {
  return <Container>For Any Item You Buy You Have a Chance of Winning 100ps</Container>;
};

export default Announcement;