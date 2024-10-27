import { InputNode } from "../../components/nodes/inputNode"
import { LLMNode } from "../../components/nodes/llmNode"
import { TextNode } from "../../components/nodes/textNode"
import { OutputNode } from "../../components/nodes/outputNode"
import { LuFileText, LuFileInput, LuFileOutput } from "react-icons/lu"
import { RiOpenaiFill } from "react-icons/ri"


// extend this list to add more nodes

export const nodes = [
    { type: 'customInput', label: 'Input', nodeElement: InputNode, icon: LuFileInput },
    { type: 'llm', label: 'LLM', nodeElement: LLMNode, icon: RiOpenaiFill },
    { type: 'customOutput', label: 'Output', nodeElement: OutputNode, icon: LuFileOutput },
    { type: 'text', label: 'Text', nodeElement: TextNode, icon: LuFileText },
]
