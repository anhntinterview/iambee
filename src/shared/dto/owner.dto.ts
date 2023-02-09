import { IsNotEmpty } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class OwnerDTO {

    @Expose()
    @IsNotEmpty()
    readonly account_id!: number;

    @Expose()
    @IsNotEmpty()
    readonly reputation!: number;

    @Expose()
    @IsNotEmpty()
    readonly user_id!: number;

    @Expose()
    readonly user_type!: string;

    @Expose()
    readonly accept_rate!: number;

    @Expose()
    readonly profile_image!: string;

    @Expose()
    readonly display_name!: string;

    @Expose()
    readonly link!: string;
}
