import { RootState } from "template/redux/app/store";

export const selectTagList = (state: RootState) => {
    return state.stackExchangeApi.data?.list;
}