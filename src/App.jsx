import NewProject from "./components/NewProject.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
