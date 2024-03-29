import React from "react";
import "./CommentSection.scss";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import addIcon from "../../assets/images/icons/add_comment.svg";
import moment from "moment";

function CommentSection({ selectedVideo }) {
  const comments = selectedVideo.comments || [];
  const commentCount = comments.length;

  const renderForm = commentCount === 0 || !selectedVideo.comments || comments;

  return (
    <section className="comments-section">
      <p className="comments-section__subheader">
        {commentCount === 0
          ? "No comments yet"
          : `${commentCount} ${commentCount === 1 ? "Comment" : "Comments"}`}
      </p>

      {renderForm && (
        <form className="form">
          <img className="form__user-img" src={userImage} alt="user icon" />
          <div className="form__content-wrapper">
            <label typeof="comment" className="form__input-label">
              Join the conversation
            </label>
            <div className="form__tablet-flex-container">
              <textarea
                className="form__input"
                id="comment"
                placeholder="Add a new comment"
                rows={4}
              ></textarea>
              <button className="form__add-comment-btn">
                <img className="form__add-icon" src={addIcon} alt="add icon" />
                <span className="form__button-text">Comment</span>
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="comments-list">
        {comments.map((comment) => (
          <article className="comment" key={comment.id}>
            <div className="comment__avatar-placeholder"></div>
            <div className="comment__body">
              <div className="comment__author-and-date">
                <p className="comment__author">{comment.name}</p>
                <p className="comment__date">
                  {moment(comment.timestamp).fromNow()}
                </p>
              </div>
              <p className="comment__text">{comment.comment}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CommentSection;
