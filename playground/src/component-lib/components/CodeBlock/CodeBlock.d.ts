import { FC } from 'react';
import { Language } from 'prism-react-renderer';
export declare type CodeBlockType = {
    children: string;
    language: Language;
};
export declare const CodeBlock: FC<CodeBlockType>;
