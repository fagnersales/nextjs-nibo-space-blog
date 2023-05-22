import { useMDXComponent } from "next-contentlayer/hooks";

const components = {};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose-xl prose-stone prose-h1:font-black prose-h2:font-extrabold prose-h3:font-bold prose-a:text-blue-400 prose-a:font-semibold hover:prose-a:underline min-w-full">
      <Component />
    </article>
  );
}
