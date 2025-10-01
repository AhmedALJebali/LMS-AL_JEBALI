"use client";
import Link from "@tiptap/extension-link";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Menubar from "./Menubar";
const RochTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: { keepMarks: true, keepAttributes: false },
        orderedList: { keepMarks: true, keepAttributes: false },
      }),
      Link,
      Underline,
      TaskList,
      TaskItem,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
  });

  return (
    <div>
      <Menubar editor={editor} />
      <div className="mt-2">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default RochTextEditor;
