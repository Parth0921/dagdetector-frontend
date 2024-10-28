// submit.js

import { useNodeStore } from "../../store/nodeStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useThemeStore } from "../../store/themeStore";

const displaySuccessToast = (message, theme) => {
  return toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    toastId: "backend-response",
    theme: theme,
    style: {
      whiteSpace: "pre-line",
    },
  });
};

const displayErrorToast = (message, theme) => {
  return toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    toastId: "backend-response",
    theme: theme,
    style: {
      whiteSpace: "pre-line",
    },
  });
};

export const SubmitButton = () => {
  const { nodes, edges } = useNodeStore();
  const { theme } = useThemeStore();
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
    if (nodesList.length === 0) {
      displayErrorToast("Error: No nodes found", theme);
      return;
    }
    if (edgesList.length === 0) {
      displayErrorToast("Error: No edges found", theme);
      return;
    }

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
      const { num_nodes, num_edges, is_dag } = data;

      if (is_dag !== "") {
        displayErrorToast(
          `Error: Graph is not a DAG. Please check node ${is_dag}`,
          theme
        );
        return;
      }
      const displayMessage = `
      Total nodes: ${num_nodes}
      Total edges: ${num_edges}
      Graph is a DAG
      `;
      displaySuccessToast(displayMessage, theme);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mt-8 flex items-center justify-center text-xl">
      <button
        className="shadow-lg px-6 py-2 md:px-12 md:py-4 rounded-full hover:bg-black/50 hover:scale-110 active:scale-105 transition-all bg-black/30 text-white dark:bg-white/40 dark:text-black dark:hover:bg-white/60 dark:hover:text-white dark:active:bg-white/60 dark:active:text-white"
        type="submit"
        onClick={handleClick}
      >
        Submit
      </button>
      <ToastContainer />
    </div>
  );
};
