import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";



function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined, projects: []
  });

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState, selectedProjectId: null
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main>
      <ProjectSidebar className="h-screen my-8" />
      {content}
    </main>
  );
}

export default App;
