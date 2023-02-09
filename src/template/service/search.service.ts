import { Container, Service } from 'typedi';
import HttpService from 'core/service/http.service';
import type { UseQuery } from 'core/redux/type';

@Service()
class SearchService<R> {
    protected httpService = Container.get(HttpService);

    public query(useQuery: UseQuery<R>, args?: any) {
        return args
            ? this.httpService.queryAPI(useQuery, args)
            : this.httpService.queryAPI(useQuery);
    }
}

export default SearchService;
