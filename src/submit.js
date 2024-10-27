// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();
  const handleClick = async (e) => {
    e.preventDefault();
    const nodesList = nodes.map((node) => node.id);
    const edgesList = edges.map((edge) => {
      return {
        source: edge.source,
        target: edge.target,
      };
    });
    //handle when nodes and edges are empty

    const payload = {
      nodes: nodesList,
      edges: edgesList,
    };

    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button className="bg-gradient-to-r from-[#3A86FF] to-[#00F5D4] text-white font-semibold rounded p-1">
        <span className="flex w-full bg-[#F4F4F9] text-[#333333] rounded p-2">
          Gradient border
        </span>
        <p className="text-[#7D7D7D]">Subtitle text</p>
      </button>

      <button
        className="border-2 border-blue-400 p-2 rounded-full hover:bg-green-300"
        type="submit"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
};
