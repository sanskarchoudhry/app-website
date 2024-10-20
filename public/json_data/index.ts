export interface websiteInfoData {
  heading: string;
  text: string;
}

export interface MenuItems {
  menuTitle: string;
  menuLink: string;
}

export interface postsData {
  tag: string;
  time: string;
  postTopic: string;
  text: string;
  imagePath: string;
  username: string;
  comments: number;
  likes?: string;
  dislikes?: string;
}

export const website_info_data: websiteInfoData[] = [
  {
    heading: "Heading 1",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
  },
  {
    heading: "Heading 2",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
  },
  {
    heading: "Heading 3",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
  },
  {
    heading: "Heading 4",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
  },
];

export const website_main_data = {
  heading: "HEADING",
  text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
};

export const menuItems: MenuItems[] = [
  {
    menuTitle: "Home",
    menuLink: "/home",
  },
  {
    menuTitle: "Movies",
    menuLink: "/movie",
  },
  {
    menuTitle: "TV Shows",
    menuLink: "/tv",
  },
  {
    menuTitle: "Most Popular",
    menuLink: "/most-popular",
  },
  {
    menuTitle: "Top airing",
    menuLink: "/top-airing",
  },
];

export const postsData: postsData[] = [
  {
    tag: "#general",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
    time: "7 hours ago",
    postTopic: "heading 1",
    username: "david56",
    imagePath: "/test.jpg",
    comments: 17,
  },
  {
    tag: "#discussion",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
    time: "2 days ago",
    postTopic: "heading 2",
    username: "synix022",
    imagePath: "/test.jpg",
    comments: 2,
  },
  {
    tag: "#discussion",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
    time: "1 hour ago",
    postTopic: "heading 3",
    username: "mark61",
    imagePath: "/test.jpg",
    comments: 78,
  },
  {
    tag: "#updates",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
    time: "7 hours ago",
    postTopic: "heading 4",
    username: "david56",
    imagePath: "/test.jpg",
    comments: 4,
  },
  {
    tag: "#suggestion",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
    time: "12 hours ago",
    postTopic: "heading 5",
    username: "milan2221",
    imagePath: "/test.jpg",
    comments: 23,
  },
  {
    tag: "#question",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
    time: "7 hours ago",
    postTopic: "heading 6",
    username: "mugiwara_90",
    imagePath: "/test.jpg",
    comments: 42,
  },
  {
    tag: "#feedback",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat maxime recusandae doloribus esse ratione at, nemo distinctio aut laborum fugit itaque repudiandae aspernatur magnam praesentium commodi velit, sunt, atque autem animi dolorem. Ipsa a iusto voluptatum, voluptate, pariatur excepturi nesciunt provident, sunt voluptatem repellat architecto velit esse molestias suscipit dolor.",
    time: "7 hours ago",
    postTopic: "heading 7",
    username: "david56",
    imagePath: "/test.jpg",
    comments: 101,
  },
];
