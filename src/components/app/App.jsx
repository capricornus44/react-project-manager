import React from 'react';
import Container from '../container/Container';
import Header from '../header/Header';
import ProjectDetails from '../projectDetails/ProjectDetails';
import Main from '../main/Main';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <ProjectDetails />
        {/* <Main/> */}
      </Container>
    </>
  );
};
export default App;
