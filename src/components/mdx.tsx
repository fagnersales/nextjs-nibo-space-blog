import { useMDXComponent } from "next-contentlayer/hooks";
import { Spacing } from "./markdown/spacing";

const components = {
  Spacing: Spacing
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="text-neutral-400 prose-xl prose-stone prose-h1:font-black prose-h2:font-extrabold prose-h3:font-bold prose-a:text-blue-400 prose-a:font-semibold hover:prose-a:underline min-w-full">
      <Component components={components} />
    </article>
  );
}
