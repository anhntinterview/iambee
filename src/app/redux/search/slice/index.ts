import { coreStackExchangeSliceApi } from 'template/redux/slice/exchangestack';
import { QuestionDTO } from 'shared/dto/question.dto';
import { TagDTO } from 'shared/dto/tag.dto';
import { BaseDTO } from 'shared/dto/base.dto';

interface TagListDTO extends BaseDTO {
    items: Array<TagDTO>;
}
interface QuestionListDTO extends BaseDTO {
    items: Array<QuestionDTO>;
}

export type QuestionQueryType = { tag: string; page: number }

export const extendedApiSlice = coreStackExchangeSliceApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestionList: builder.query<
            Array<QuestionDTO>,
            QuestionQueryType
        >({
            query: ({ tag, page }) =>
                `/questions?tagged=${tag}&pagesize=20&page=${page}&&site=stackoverflow`,
            transformResponse(rawResult: QuestionListDTO, meta, arg) {
                return rawResult.items;
            },
            providesTags: (result) => {
                return result
                    ? [
                          ...result.map(({ question_id }) => ({
                              type: 'Questions' as const,
                              question_id,
                          })),
                          { type: 'Questions', id: 'LIST' },
                      ]
                    : [{ type: 'Questions', id: 'LIST' }];
            },
        }),
        getTagList: builder.query<Array<TagDTO>, void>({
            query: () =>
                `/tags?pagesize=10&page=1&order=desc&sort=popular&site=stackoverflow`,
            transformResponse(rawResult: TagListDTO, meta, arg) {
                return rawResult.items;
            },
            providesTags: (result) => {
                return result
                    ? [
                          ...result.map(({ name }) => ({
                              type: 'Tags' as const,
                              name,
                          })),
                          { type: 'Tags', id: 'LIST' },
                      ]
                    : [{ type: 'Tags', id: 'LIST' }];
            },
        }),
    }),
});

export const { useGetQuestionListQuery, useGetTagListQuery } = extendedApiSlice;
