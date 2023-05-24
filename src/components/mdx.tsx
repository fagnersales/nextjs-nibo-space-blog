import { useMDXComponent } from "next-contentlayer/hooks";
import { Spacing } from "./markdown/spacing";
import { ListItem } from "./markdown/list";

const components = {
  Spacing,
  ListItem,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose-xl prose-stone min-w-full text-neutral-400 prose-h1:font-black prose-h2:font-extrabold prose-h3:font-bold prose-a:font-semibold prose-a:text-blue-400 hover:prose-a:underline">
      <Component components={components} />
    </article>
  );
}
