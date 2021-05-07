import React from 'react';
import Container from '../container/Container';
import Header from '../header/Header';
import ProjectDetails from '../projectDetails/ProjectDetails';
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <ProjectDetails />
      </Container>
    </>
  );
};
export default App;