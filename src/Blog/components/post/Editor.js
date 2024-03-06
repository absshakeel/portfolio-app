import React, { forwardRef, useEffect, useState } from "react";

import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import './Editor.css';
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import MyOnChangePlugin from "./plugins/MyOnChangePlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import ExampleTheme from "./themes/ExampleTheme";
import TextContentListener from "./plugins/TextContextListenerPlugin";
import {$generateHtmlFromNodes} from '@lexical/html';
import RandomBuddy from "./RandomBuddy";
import {
  $getRoot,
} from 'lexical';
import { Button } from "react-scroll";
import { useRef } from "react";
import {EditorRefPlugin} from '@lexical/react/LexicalEditorRefPlugin'

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode
  ]
};





const Editor = () => {
  const [textValue, setTextValue] = useState("")

  const randomBuddyRef = useRef(); 

  useEffect(() => {
    console.log(randomBuddyRef.current); 
  }, [])
  return (
    <>
    <LexicalComposer initialConfig={editorConfig} >
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner" >
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin /> 
          {/* <TreeViewPlugin /> */}
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <TextContentListener
                            onChange={(text) => {
                                if (text.trim() != "") setTextValue(text);
                                else setTextValue(text.trim());
                            }}
                        />
          {/* <MyOnChangePlugin onChange={onChange}/> */}
        </div>
      </div>

      <RandomBuddy ref={randomBuddyRef} />
    </LexicalComposer>

    </>
  );
}

export default Editor; 
