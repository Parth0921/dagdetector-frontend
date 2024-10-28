// draggableNode.js

export const DraggableNode = ({ type, label, Icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`${type} cursor-grab min-w-24 h-20 flex flex-col items-center text-center justify-center gap-2 rounded-lg border-2 bg-white/25 hover:bg-white/50 hover:scale-105 active:scale-[1.025] transition-all text-gray-600 dark:bg-black dark:border-accent dark:text-white`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      // style={{
      //   cursor: 'grab',
      //   minWidth: '80px',
      //   height: '60px',
      //   display: 'flex',
      //   alignItems: 'center',
      //   borderRadius: '8px',
      //   backgroundColor: '#1C2536',
      //   justifyContent: 'center',
      //   flexDirection: 'column'
      // }}
      draggable
    >
      <Icon size={24} />
      <p className="">{label}</p>
    </div>
  );
};