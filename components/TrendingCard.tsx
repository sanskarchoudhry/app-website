import Image from "next/image";
import { PostsData } from "../public/json_data";

export default function TrendingCard(postData: PostsData) {
  return (
    <div className=" bg-grey-secondary bg-opacity-10 rounded-md p-4 gap-8 flex flex-col cursor-pointer">
      <div className="flex justify-between">
        <div className="flex gap-8">
          {postData.tag}{" "}
          <span className="text-grey-secondary">{postData.time}</span>
        </div>
        <div className=" flex gap-4">
          <Image
            src={"/icons/comment.svg"}
            alt="comment-icon"
            height={20}
            width={20}
          />
          {postData.comments}
        </div>
      </div>
      <div className="gap-4 flex flex-col">
        <h3 className=" font-satoshi-bold text-white-primary">
          {postData.postTopic}
        </h3>
        <p className=" h-18 truncate-multiline text-white-secondary">
          {postData.text}
        </p>
      </div>
      <div className="flex gap-12 items-center">
        <Image
          src={postData.imagePath}
          alt="profile-image"
          height={50}
          width={50}
          className="rounded-[50%] w-[40px] h-[40px]"
        />
        {postData.username}
      </div>
    </div>
  );
}
