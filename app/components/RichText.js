import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export const richTextRenderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { data } = node;
      const { uri } = data;
      return (
        <a
          className="text-primary underline dark:text-secondary"
          target="_blank"
          href={uri}
        >
          {children[0]}
        </a>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
          {children}
        </p>
      );
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h2 className="text-4xl">{children}</h2>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-3xl">{children}</h2>;
    },
  },
};

export const RichText = ({ body }) => {
  return <>{documentToReactComponents(body.json, richTextRenderOptions)}</>;
};
