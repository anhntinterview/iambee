import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import * as React from 'react';

interface ITrendingTagsErrorProps {
    error: FetchBaseQueryError | SerializedError | undefined;
}

export const TrendingTagsError: React.FunctionComponent<
    ITrendingTagsErrorProps
> = (props) => {
    const { error } = props;
    return <div>{error?.toString()}</div>;
};

