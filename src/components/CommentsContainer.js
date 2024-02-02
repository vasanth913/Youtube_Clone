import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Vasanth Ravi",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Monica Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Siva Sankar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Rithika Sri",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Senthan Benthan",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Niranjana Niran",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Rakesh Rocky",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Lokesh lokey",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Vignesh Vickey",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shanvi Monica",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Muthukesh Muki",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Pavikesh Pavi",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Anti Bikili",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

// Recursion Logic
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} >
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
