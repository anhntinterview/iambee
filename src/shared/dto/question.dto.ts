import { Exclude, Expose } from 'class-transformer';
import { OwnerDTO } from './owner.dto';

@Exclude()
export class QuestionDTO {
    @Expose()
    readonly tags!: Array<string>;

    @Expose()
    readonly owner!: OwnerDTO;

    @Expose()
    readonly is_answered!: boolean;

    @Expose()
    readonly view_count!: number;

    @Expose()
    readonly answer_count!: number;

    @Expose()
    readonly score!: number;

    @Expose()
    readonly last_activity_date!: Date;

    @Expose()
    readonly creation_date!: Date;

    @Expose()
    readonly last_edit_date!: Date;

    @Expose()
    readonly question_id!: number;

    @Expose()
    readonly content_license!: string;

    @Expose()
    readonly link!: string;

    @Expose()
    readonly title!: string;
}