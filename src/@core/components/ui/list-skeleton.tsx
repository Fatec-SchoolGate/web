import { Skeleton } from "@mui/material";

const ListSkeleton = () => {
    return (
        <div>
            <Skeleton height={75}/>
            <Skeleton height={75}/>
            <Skeleton height={75}/>
            <Skeleton height={75}/>
        </div>
    );
}

export default ListSkeleton;