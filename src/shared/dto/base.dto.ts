import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class BaseDTO {
    @Expose()
    readonly has_more!: boolean;

    @Expose()
    readonly quota_max!: number;

    @Expose()
    readonly quota_remaining!: number;
}