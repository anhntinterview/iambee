import Container from "typedi";
import SearchService from "template/service/search.service";
import { QuestionDTO } from "shared/dto/question.dto";
import { 
    QuestionQueryType,
    useGetQuestionListQuery, 
    useGetTagListQuery 
} from "app/redux/search/slice";
import { TagDTO } from "shared/dto/tag.dto";

class StackExchangeModel {
    public readonly questionService = Container.get(SearchService<Array<QuestionDTO>>);
    public readonly tagService = Container.get(SearchService<Array<TagDTO>>);

    public questions(questionQuery: QuestionQueryType) {
        return this.questionService.query(useGetQuestionListQuery, questionQuery);
    }

    public tags() {
        return this.tagService.query(useGetTagListQuery);
    }
}

export default StackExchangeModel