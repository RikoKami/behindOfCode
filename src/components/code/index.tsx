interface ICodeProps {
  code: string;
  language: string;
  transpiled?: boolean;
}

function createMarkup(code: string) {
  return { __html: code };
}
export const Code = ({ code, language, transpiled = false }: ICodeProps) => (
  <pre>
    {transpiled ? (
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={createMarkup(code)}
      />
    ) : (
      <code className={`language-${language}`}>{code}</code>
    )}
  </pre>
);
