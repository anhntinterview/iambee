import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class TagDTO {
    @Expose()
    readonly has_synonyms!: boolean;

    @Expose()
    readonly is_moderator_only!: boolean;

    @Expose()
    readonly is_required!: boolean;

    @Expose()
    readonly name!: string;
}
