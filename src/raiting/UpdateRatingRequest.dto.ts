import {IsInt, IsString, Matches, Max, Min} from "class-validator";

export class UpdateRatingRequestDto {
    @IsString()
    @Matches(/GC.{3,5}/)
    cacheId: string;

    @IsInt()
    @Max(5)
    @Min(1)
    rating: number;
}
