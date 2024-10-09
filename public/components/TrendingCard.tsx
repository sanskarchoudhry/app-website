import Image from "next/image";

export default function TrendingCard() {
  return (
    <div>
      <div>
        <div className="flex gap-4">#general 14 hours ago</div>
        <div className=" flex">
          <Image
            src={"/icons/comment.svg"}
            alt="comment-icon"
            height={10}
            width={10}
          />
          12
        </div>
      </div>
      <div>
        <h3>Heading</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic
          tempora numquam incidunt at perspiciatis, neque eligendi ratione vel
          quis!
        </p>
      </div>
      <div>
        <Image src="/test.jpg" alt="profile-image" height={20} width={20} />
        name
      </div>
    </div>
  );
}
