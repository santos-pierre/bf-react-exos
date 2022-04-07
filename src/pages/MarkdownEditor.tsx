import { ChangeEvent, useState } from 'react';
import PageTitle from '../components/ui/Title/PageTitle';
import BaseLayout from '../Layouts/BaseLayout';

const MarkdownEditor = () => {
    const [content, setContent] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
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
                    <div className="bg-gray-700" />
                    {/* <div className="bg-gray-600" /> */}
                    <textarea
                        className="p-2 bg-gray-600 resize-none focus:outline-none"
                        value={content}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="rounded-b-md bg-sky-600"></div>
            </div>
        </BaseLayout>
    );
};

export default MarkdownEditor;
