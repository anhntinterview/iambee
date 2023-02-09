import * as React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import StackExchangeModel from 'app/controller/stackexchange.model';
import { Loading } from 'template/component/Loading';

// *** ATTENTION: API maybe was banned because request many time by onScroll Event
// *** Please using comment below to mock data
import { questionsFakeData } from 'app/constant';


interface IQuestionListingProps {
    model: StackExchangeModel;
    tag: string;
}

const QuestionListing: React.FunctionComponent<IQuestionListingProps> = (
    props
) => {
    const [page, setPage] = React.useState<number>(1);
    const { tag, model } = props;

    let questionList;

    const { data, isLoading, isFetching, isSuccess, isError, error } =
        model.questions({
            tag,
            page,
        });

    const handleScroll = () => {
        const bottom =
            Math.ceil(window.innerHeight + window.scrollY) >=
            document.documentElement.scrollHeight;

        if (bottom) {
            setPage((prevState) => (prevState += 1));
            console.log('at the bottom');
        }
    };
    React.useEffect(() => {
        window.addEventListener('scroll', _.throttle(handleScroll, 10000), {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    if (isLoading) {
        questionList = <Loading isLoading={true} />;
    } else if (isSuccess) {
    questionList = (
        <ul className="">
            {/*
                // *** ATTENTION: API maybe was banned because request many time by onScroll Event
                // *** Please using comment below to mock data
            */}
            {/* {questionsFakeData.items!.map((item) => ( */}
            {data!.map((item) => (
                <li key={`${item.question_id}`}>
                    <article className="flex flex-col justify-between px-3 py-1 bg-white rounded-lg border border-gray-100 my-3">
                        <Link
                            to={`${item.link}`}
                            className="flex text-2xl font-semibold text-gray-800 dark:text-gray-200"
                        >
                            {item.title}
                        </Link>
                        <div className="flex justify-between px-3 py-1 bg-white items-center my-3 w-full">
                            <div className="flex relative">
                                <div className="flex flex-col relative w-16 rounded-full items-center">
                                    <label htmlFor="_score">score</label>
                                    <span
                                        className={`${
                                            item.score < 0
                                                ? 'text-red-500 font-bold'
                                                : ''
                                        }`}
                                    >
                                        {item.score}
                                    </span>
                                </div>
                                <div className="flex flex-col relative w-16 rounded-full items-center">
                                    <label htmlFor="_score">answer</label>
                                    <span
                                        className={`w-full text-center ${
                                            item.answer_count > 1 &&
                                            !item.is_answered
                                                ? 'border border-green-500 text-green-500'
                                                : ' text-white bg-green-500'
                                        }`}
                                    >
                                        {item.answer_count}
                                    </span>
                                </div>
                                <div className="flex flex-col relative w-16 rounded-full items-center">
                                    <label htmlFor="_count">count</label>
                                    <span>{item.view_count}</span>
                                </div>
                            </div>
                            <div className="flex flex-col relative w-16 rounded-full items-center">
                                <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={item.owner.profile_image}
                                    alt="_profile_img"
                                />
                                <span className="text-xs text-center mt-2">
                                    {item.owner.display_name}
                                </span>
                            </div>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    );
    } else if (isError) {
        questionList = <QuestionListingError error={error} />;
    }
    return <div className="">{questionList}</div>;
};

interface ITrendingTagsErrorProps {
    error: FetchBaseQueryError | SerializedError | undefined;
}

export const QuestionListingError: React.FunctionComponent<
    ITrendingTagsErrorProps
> = (props) => {
    const { error } = props;
    return <div>{error?.toString()}</div>;
};

export default QuestionListing;
