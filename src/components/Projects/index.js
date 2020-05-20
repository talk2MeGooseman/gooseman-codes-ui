import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { Title } from "../shared/StyledComponents";
import ProjectsList from "../../services/ProjectsList";

const ProjectsContainer = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
`;

class Projects extends PureComponent {
  _renderProject() {
    return ProjectsList.map(data => {
      return <Card pills={data.tags} title={data.caption} link={data.link} description={data.description} />;
    });
  }

  render() {
    return (
      <ProjectsContainer className="site-section" id="projects">
        <Title className="header" content="Projects && Code" />
        <div className="card-grid-container">{this._renderProject()}</div>
      </ProjectsContainer>
    );
  }
}

export default Projects;
