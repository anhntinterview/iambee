import StackExchangeModel from 'app/controller/stackexchange.model';
import * as React from 'react';
import { TagDTO } from 'shared/dto/tag.dto';

export interface ISearchingProps {
    initValue: string;
    tagList: TagDTO[] | undefined;
    setTag: React.Dispatch<React.SetStateAction<string>>;
}

export const Searching: React.FunctionComponent<ISearchingProps> = (props) => {
    const { initValue, tagList, setTag } = props;
    const [valInput, setValInput] = React.useState<string>('');
    const [currentTags, setCurrentTags] = React.useState<TagDTO[] | undefined>(
        tagList
    );

    React.useEffect(() => {
        setTag(initValue);
    }, []);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValInput(e.target.value);
    };

    React.useEffect(() => {
        const filterTag = tagList?.filter(
            (item) => item.name.indexOf(valInput) !== -1
        );
        setCurrentTags(filterTag);
    }, [valInput]);

    let renderTagList;

    function handleOnSelectTagName(selectedTagName: string) {
        return () => {
            setValInput(selectedTagName);
            setTag(selectedTagName);
        };
    }

    renderTagList = (
        <div className="">
            <h3 className="inline-block mt-6 mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Trending
            </h3>
            <ul className="flex">
                {currentTags?.map((item, index) => (
                    <button
                        className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
                        key={`${index}-${item.name}`}
                        onClick={handleOnSelectTagName(item.name)}
                    >
                        {item.name}
                    </button>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="">
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Tag"
                onChange={handleOnChange}
                value={valInput}
            />
            {renderTagList}
        </div>
    );
};
