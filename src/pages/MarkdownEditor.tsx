import { ChangeEvent, useState } from 'react';
import PageTitle from '../components/ui/Title/PageTitle';
import BaseLayout from '../Layouts/BaseLayout';
import { micromark } from 'micromark';
import { PencilIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

const MarkdownEditor = () => {
    const [content, setContent] = useState<string>('# Hello This is a markdown editor');
    const [markdown, setMarkdown] = useState<string>(micromark(content));
    const [isEditing, setEditing] = useState<boolean>(true);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
        setMarkdown(micromark(event.target.value));
    };

    return (
        <BaseLayout>
            <PageTitle>Markdown Editor</PageTitle>
            <div className="min-h-[40rem] grid grid-rows-[25px_1fr_10px]">
                <div className="flex px-3 bg-gray-800 border-t border-l border-r border-gray-600 rounded-t-md">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                </div>
                <div className="grid grid-cols-[50px,1fr]">
                    <div className="bg-gray-700">
                        <div
                            className={clsx(
                                { 'bg-gray-600': isEditing },
                                'inline-flex items-center justify-center w-full py-3 cursor-pointer hover:bg-gray-600'
                            )}
                            onClick={() => setEditing(true)}
                        >
                            <PencilIcon className="w-8 h-8" />
                        </div>
                        <div
                            className={clsx(
                                { 'bg-gray-600': !isEditing },
                                'inline-flex items-center justify-center w-full py-3 cursor-pointer hover:bg-gray-600'
                            )}
                            onClick={() => setEditing(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-8 h-8 fill-current stroke-current"
                            >
                                <path d="M475 64H37C16.58 64 0 81.38 0 102.77v306.42C0 430.59 16.58 448 37 448h438c20.38 0 37-17.41 37-38.81V102.77C512 81.38 495.42 64 475 64zM288 368h-64V256l-48 64-48-64v112H64V144h64l48 80 48-80h64zm96 0l-80-112h48.05L352 144h64v112h48z" />
                            </svg>
                        </div>
                    </div>
                    {isEditing ? (
                        <textarea
                            className="p-2 bg-gray-600 resize-none focus:outline-none"
                            value={content}
                            onChange={handleChange}
                        />
                    ) : (
                        <section
                            className="max-h-[40rem] p-2 overflow-y-scroll prose bg-gray-600 prose-invert max-w-none"
                            dangerouslySetInnerHTML={{ __html: markdown }}
                        ></section>
                    )}
                </div>
                <div className="rounded-b-md bg-sky-600"></div>
            </div>
        </BaseLayout>
    );
};

export default MarkdownEditor;
