import { InputNode } from "../../components/nodes/input";
import { LLMNode } from "../../components/nodes/llm";
import { TextNode } from "../../components/nodes/text";
import { OutputNode } from "../../components/nodes/output";
import { LuFileText, LuFileInput, LuFileOutput, LuSave } from "react-icons/lu";
import { NoteNode } from "../../components/nodes/note";
import { MdOutlineComment } from "react-icons/md";
import { FileSaveNode } from "../../components/nodes/fileSave";
import { ConditionNode } from "../../components/nodes/condition";
import { BiGitBranch } from "react-icons/bi";
import { APINode } from "../../components/nodes/api";
import { TbApi, TbTransform } from "react-icons/tb";
import { DataTransformNode } from "../../components/nodes/dataTransform";
import { SiOpenai } from "react-icons/si";

// extend this list to add more nodes

export const nodes = [
  {
    type: "customInput",
    label: "Input",
    nodeElement: InputNode,
    icon: LuFileInput,
  },
  { type: "llm", label: "LLM", nodeElement: LLMNode, icon: SiOpenai },
  {
    type: "customOutput",
    label: "Output",
    nodeElement: OutputNode,
    icon: LuFileOutput,
  },
  { type: "text", label: "Text", nodeElement: TextNode, icon: LuFileText },
  {
    type: "note",
    label: "Note",
    nodeElement: NoteNode,
    icon: MdOutlineComment,
  },
  {
    type: "fileSave",
    label: "File Save",
    nodeElement: FileSaveNode,
    icon: LuSave,
  },
  {
    type: "condition",
    label: "Condition",
    nodeElement: ConditionNode,
    icon: BiGitBranch,
  },
  {
    type: "api",
    label: "API Node",
    nodeElement: APINode,
    icon: TbApi,
  },
  {
    type: "dataTransform",
    label: "Data Transform",
    nodeElement: DataTransformNode,
    icon: TbTransform,
  },
];
