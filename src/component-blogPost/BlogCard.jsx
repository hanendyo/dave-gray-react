import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <div className="cardContentContainer">
              <div className="cardContent" style={{ paddingTop: 0 }}>
                {item.title.length <= 18
                  ? item.title
                  : `${item.title.slice(0, 18)}...`}
              </div>
              <div
                className="cardContent"
                style={{ paddingTop: 0, fontSize: "10px" }}
              >
                {item.date}
              </div>
              <div className="brLine"></div>
              <div className="cardContent">
                {item.post.length <= 65
                  ? item.post
                  : `${item.post.slice(0, 65)}...`}
              </div>
            </div>
            <div className="postDetailButton">
              <Link
                to={`/post/${item.id}`}
                style={{ textDecoration: "none" }}
                key={item.id}
              >
                <p>see more...</p>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
