import Image from "next/image";
import { postsData } from "../public/json_data";

export default function TrendingCard(postData: postsData) {
  return (
    <div className=" bg-grey-secondary bg-opacity-30 rounded-md">
      <div className="w-full">
        <div className="">
          {postData.tag} {postData.time}
        </div>
        <div className=" flex">
          <Image
            src={"/icons/comment.svg"}
            alt="comment-icon"
            height={10}
            width={10}
          />
          {postData.comments}
        </div>
      </div>
      <div>
        <h3>{postData.postTopic}</h3>
        <p className=" h-18 truncate-multiline">{postData.text}</p>
      </div>
      <div>
        <Image
          src={postData.imagePath}
          alt="profile-image"
          height={20}
          width={20}
        />
        {postData.username}
      </div>
    </div>
  );
}
