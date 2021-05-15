import React, { FC, useRef } from 'react';
import { Container } from './styles';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula/index.js';

export type CodeBlockType = {
  children: string;
  language: Language;
};

export const CodeBlock: FC<CodeBlockType> = ({ children, language }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // const code = children.trim();
  const code = children;

  const onClick = () => {
    textareaRef?.current?.select();
    document.execCommand('copy');
  };

  return (
    <Container>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={dracula}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className='wrapper'>
            <div className='lang-tab' style={{ ...style }}>
              {language}
            </div>
            <pre className={className} style={{ ...style }} onClick={onClick}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => {
                    return (
                      <span key={key} {...getTokenProps({ token, key })} />
                    );
                  })}
                </div>
              ))}
            </pre>
            {/* Hidden text area containing snippet, used for copy to clipboard */}
            <textarea value={code} ref={textareaRef} readOnly />
          </div>
        )}
      </Highlight>
    </Container>
  );
};
