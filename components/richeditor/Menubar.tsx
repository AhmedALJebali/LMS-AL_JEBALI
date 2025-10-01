"use client";

import { cn } from "@/lib/utils";
import { type Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  CheckSquare,
  Code,
  Italic,
  Link,
  List,
  RotateCcw,
  RotateCw,
  Slash,
  Strikethrough,
  Underline,
} from "lucide-react";
import { Toggle } from "../ui/toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface MenubarProps {
  editor: Editor | null;
}

const Menubar = ({ editor }: MenubarProps) => {
  if (!editor) return null;

  const getButtonClass = (active: boolean) =>
    cn(
      "p-2 rounded transition-colors",
      active
        ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
        : "bg-background text-foreground hover:bg-secondary"
    );

  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2 border p-2 rounded-lg bg-surface shadow-sm">
        {/* Text Styles */}
        <div className="flex gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Bold"
                pressed={editor.isActive("bold")}
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={getButtonClass(editor.isActive("bold"))}
              >
                <Bold className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Italic"
                pressed={editor.isActive("italic")}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={getButtonClass(editor.isActive("italic"))}
              >
                <Italic className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Underline"
                pressed={editor.isActive("underline")}
                onClick={() => editor.chain().focus().toggleUnderline?.().run()}
                className={getButtonClass(editor.isActive("underline"))}
              >
                <Underline className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Underline</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Strike"
                pressed={editor.isActive("strike")}
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={getButtonClass(editor.isActive("strike"))}
              >
                <Strikethrough className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Strike</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Code"
                pressed={editor.isActive("code")}
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={getButtonClass(editor.isActive("code"))}
              >
                <Code className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Code</TooltipContent>
          </Tooltip>
        </div>

        {/* Headings & Paragraph */}
        <div className="flex gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="H1"
                pressed={editor.isActive("heading", { level: 1 })}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={getButtonClass(
                  editor.isActive("heading", { level: 1 })
                )}
              >
                <span className="font-bold text-sm">H1</span>
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Heading 1</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="H2"
                pressed={editor.isActive("heading", { level: 2 })}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={getButtonClass(
                  editor.isActive("heading", { level: 2 })
                )}
              >
                <span className="font-bold text-sm">H2</span>
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Heading 2</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="H3"
                pressed={editor.isActive("heading", { level: 3 })}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={getButtonClass(
                  editor.isActive("heading", { level: 3 })
                )}
              >
                <span className="font-bold text-sm">H3</span>
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Heading 3</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Paragraph"
                pressed={editor.isActive("paragraph")}
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={getButtonClass(editor.isActive("paragraph"))}
              >
                <span className="text-sm">P</span>
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Paragraph</TooltipContent>
          </Tooltip>
        </div>

        {/* Lists */}
        <div className="flex gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Bullet List"
                pressed={editor.isActive("bulletList")}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={getButtonClass(editor.isActive("bulletList"))}
              >
                <List className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Bullet List</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Ordered List"
                pressed={editor.isActive("orderedList")}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={getButtonClass(editor.isActive("orderedList"))}
              >
                <List className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Ordered List</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Task List"
                pressed={editor.isActive("taskList")}
                onClick={() => editor.chain().focus().toggleTaskList().run()}
                className={getButtonClass(editor.isActive("taskList"))}
              >
                <CheckSquare className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Task List</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Blockquote"
                pressed={editor.isActive("blockquote")}
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={getButtonClass(editor.isActive("blockquote"))}
              >
                <Slash className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Blockquote</TooltipContent>
          </Tooltip>
        </div>

        {/* Alignment */}
        <div className="flex gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Align Left"
                pressed={editor.isActive({ textAlign: "left" })}
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
                className={getButtonClass(
                  editor.isActive({ textAlign: "left" })
                )}
              >
                <AlignLeft className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Align Left</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Align Center"
                pressed={editor.isActive({ textAlign: "center" })}
                onClick={() =>
                  editor.chain().focus().setTextAlign("center").run()
                }
                className={getButtonClass(
                  editor.isActive({ textAlign: "center" })
                )}
              >
                <AlignCenter className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Align Center</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Align Right"
                pressed={editor.isActive({ textAlign: "right" })}
                // onClick={() => editor.chain().focus().setTextAlign("right").run()}
                className={getButtonClass(
                  editor.isActive({ textAlign: "right" })
                )}
              >
                <AlignRight className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Align Right</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Align Justify"
                pressed={editor.isActive({ textAlign: "justify" })}
                // onClick={() => editor.chain().focus().setTextAlign("justify").run()}
                className={getButtonClass(
                  editor.isActive({ textAlign: "justify" })
                )}
              >
                <AlignJustify className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Align Justify</TooltipContent>
          </Tooltip>
        </div>

        {/* Links & Undo/Redo */}
        <div className="flex gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Link"
                pressed={editor.isActive("link")}
                onClick={() =>
                  editor
                    .chain()
                    .focus()
                    .toggleLink({ href: "https://example.com" })
                    .run()
                }
                className={getButtonClass(editor.isActive("link"))}
              >
                <Link className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Link</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Undo"
                pressed={false}
                onClick={() => editor.chain().undo().run()}
                className={getButtonClass(false)}
              >
                <RotateCcw className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Undo</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                aria-label="Redo"
                pressed={false}
                onClick={() => editor.chain().redo().run()}
                className={getButtonClass(false)}
              >
                <RotateCw className="w-4 h-4" />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Redo</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Menubar;
