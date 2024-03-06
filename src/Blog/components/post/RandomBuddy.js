import { $generateHtmlFromNodes } from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import Box from '@mui/material/Box';
import React, { forwardRef } from "react";

import './Editor.css';

const RandomBuddy = forwardRef((props, ref) => {

    const [editor] = useLexicalComposerContext();

    function getHtml() {
        const editorState = editor.getEditorState();

        const html = editorState.read(() => $generateHtmlFromNodes(editor, null));
        return html;
    }

    {/* TODO: Find out a safe way to set the html instead of relying on dangerouslySetInnerHTML */}

    return (
        <>
            <Box className="editor-container" style={{ backgroundColor: 'white' }}

                dangerouslySetInnerHTML={{ __html: getHtml() }}>
            </Box>
        </>
    )
}); 

export default RandomBuddy; 