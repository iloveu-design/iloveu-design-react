import styled from "styled-components";

const Project =({company, siteUrl, parts, youtube_id, thumbnail}) => {
    return (
      <div>
        <img src={thumbnail} alt={company}/>
        <h2><a href={siteUrl} target="_blank" rel="noopener noreferrer">{company}</a></h2>
        <span>{parts.map(current=>(current))}</span>
      </div>
    );
  }

  const PageTitle = styled.h1`
    font-size: 3rem;
  `;

const Home = () => {
    // const state = {
    //     projects: [
    //       {id: 1, company: '이그젝스디엑스', siteUrl: "http://exax-dx.com/", parts: ["frontend"], youtube: "", thumbnail: "https://cdn.jsdelivr.net/gh/iloveu-design/iloveu-design-react/public/images/projects/exaxdx-og-image.jpg"}
    //     ]
    //   }
    
      return (
        <div>
            <PageTitle>멋진 웹사이트를 만들도록 도와드립니다.</PageTitle>
            {/* {this.state.projects.map(project => (
                <Project key={project.id} company={project.company} siteUrl={project.siteUrl} parts={project.parts} thumbnail={project.thumbnail}/>
            ))} */}
        </div>
      )
   
};


export default Home;