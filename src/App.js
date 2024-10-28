import { PipelineToolbar } from "./components/ui/toolbar";
import { PipelineUI } from "./components/ui/ui";
import { SubmitButton } from "./components/ui/submit";

function App() {
  return (
    <div className="h-[100vh] bg-[#FEF9F2] text-[#333333] dark:bg-black/95">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
