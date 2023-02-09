import * as React from 'react';
import { Searching } from 'app/components/Searching';
import { TrendingTagsError } from 'app/components/TrendingTagsError';
import StackExchangeModel from 'app/controller/stackexchange.model';
import { Loading } from 'template/component/Loading';
import QuestionListing from 'app/components/QuestionListing';

// *** ATTENTION: API maybe was banned because request many time by onScroll Event
// *** Please using comment below to mock data
import { tagsFakeData } from 'app/constant';

export interface IStackExchangeViewProps {
    model: StackExchangeModel;
}

const StackExchangeView: React.FunctionComponent<IStackExchangeViewProps> = (
    props
) => {
    
    const { model } = props;

    let trendingTags;
    let searching;

    const [tag, setTag] = React.useState<string>('');
    // *** ATTENTION: API maybe was banned because request many time by onScroll Event
    // *** Please using comment below to mock data
    /*
    searching = (
        <Searching
            initValue={tagsFakeData.items[0].name}
            tagList={tagsFakeData.items}
            setTag={setTag}
        />
    );
    */
    // *** ATTENTION: API maybe was banned because request many time by onScroll Event
    // *** Please comment the fetching API:
    // *** START HERE
    const { data, isLoading, isFetching, isSuccess, isError, error } =
        model.tags();

    
    if (isLoading) {
        trendingTags = <Loading isLoading={true} />;
    } else if (isSuccess) {
        searching = (
            <Searching
                initValue={data![0].name}
                tagList={data}
                setTag={setTag}
            />
        );
    } else if (isError) {
        trendingTags = <TrendingTagsError error={error} />;
    }
    // *** ATTENTION: API maybe was banned because request many time by onScroll Event
    // *** Please comment the fetching API:
    // *** END HERE

    return (
        <div className="p-7">
            {searching}
            <QuestionListing tag={tag} model={model} />
        </div>
    );
};

export default StackExchangeView;
