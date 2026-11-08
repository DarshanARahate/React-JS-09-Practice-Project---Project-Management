import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main>
      <ProjectSidebar className="h-screen my-8" />
      <NewProject />
    </main>
  );
}

export default App;
