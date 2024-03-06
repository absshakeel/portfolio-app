import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from "react";

/**
 * Stackoverflow: 
 * 
 * https://stackoverflow.com/questions/77357735/how-to-pass-the-text-content-of-lexical-editor-when-pressing-enter-key-using-rea
 */
export default function TextContentListener({ onChange }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        return editor.registerTextContentListener((text) => {
            onChange(text);
        });
    }, [editor]);
}