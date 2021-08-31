import React from "react";


function Project({company, siteUrl, parts, youtube_id}) {
  return (
    <div>
      <img src=""/>
      <h2><a href={siteUrl} target="_blank" rel="noopener noreferrer">{company}</a></h2>
      <span>{parts.map(current=>(current))}</span>
    </div>
  );
}
class App extends React.Component{

  state = {
    projects: [
      {id: 1, company: '이그젝스디엑스', siteUrl: "http://exax-dx.com/", parts: ["frontend"], youtube: "", thumbnail: ""}
    ]
  }

  render() {
    return (
      <div>
        <h1>멋진 웹사이트를 만들도록 도와드립니다.</h1>
        {this.state.projects.map(project => (
          <Project key={project.id} company={project.company} siteUrl={project.siteUrl} parts={project.parts}/>
        ))}
      </div>
    )
  }
}

export default App;
