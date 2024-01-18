import "./CommentSection.scss";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import addIcon from "../../assets/images/icons/add_comment.svg";

function CommentSection() {
  return (
    <section className="comments-section">
      <p className="comments-section__subheader">3 Comments</p>
      <form className="form">
        <img className="form__user-img" src={userImage} alt="user icon" />
        <div className="form__content-wrapper">
          <label typeof="comment" className="form__input-label">
            Join the conversation
          </label>
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
      </form>
      <div className="comments-list">
        <article className="comment">
          <div className="comment__avatar-placeholder"></div>
          <div className="comment__body">
            <div className="comment__author-and-date">
              <p className="comment__author">Micheal Lyons</p>
              <p className="comment__date">08/09/2021</p>
            </div>
            <p className="comment__text">
              They BLEW the ROOF off at their last event, once everyone started
              figuring out they were going. This is still simply the greatest
              opening of an event I have EVER witnessed.
            </p>
          </div>
        </article>
        <article className="comment">
          <div className="comment__avatar-placeholder"></div>
          <div className="comment__body">
            <div className="comment__author-and-date">
              <p className="comment__author">Gary Wong</p>
              <p className="comment__date">08/09/2021</p>
            </div>
            <p className="comment__text">
              Every time I see him shred I feel so motivated to get off my couch
              and hop on my board. He’s so talented! I wish I can ride like him
              one day so I can really enjoy myself!
            </p>
          </div>
        </article>
        <article className="comment">
          <div className="comment__avatar-placeholder"></div>
          <div className="comment__body">
            <div className="comment__author-and-date">
              <p className="comment__author">Theodore Duncan</p>
              <p className="comment__date">08/09/2021</p>
            </div>
            <p className="comment__text">
              How can someone be so good!!! You can tell he lives for this and
              loves to do it every day. Everytime I see him I feel instantly
              happy! He’s definitely my favorite ever!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CommentSection;
