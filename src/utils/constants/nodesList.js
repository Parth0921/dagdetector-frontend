import { InputNode } from "../../components/nodes/inputNode"
import { LLMNode } from "../../components/nodes/llmNode"
import { TextNode } from "../../components/nodes/textNode"
import { CustomNode1 } from "../../components/nodes/customNode"
import { OutputNode } from "../../components/nodes/outputNode"

// extend this list to add more nodes

export const nodes = [
    { type: 'customInput', label: 'Input', nodeElement: InputNode },
    { type: 'llm', label: 'LLM', nodeElement: LLMNode },
    { type: 'customOutput', label: 'Output', nodeElement: OutputNode },
    { type: 'text', label: 'Text', nodeElement: TextNode },
    { type: 'customNode1', label: 'Custom Node 1', nodeElement: CustomNode1 }
]
