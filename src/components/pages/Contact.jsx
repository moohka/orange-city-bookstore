import user from "../../assets/images/user.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-card">
        <img src={user} alt="user" className="contact-user"></img>

        <div className="contact-text-container">
          <p className="contact-p" id="contact-p-text">
            Designed and developed by a web developer, Moohyun Kang.
            <br />
            <br />
            This website allow users to search books that are saved in Google
            book database.
            <br />
            The information of the book can be searched with book's title,
            author, and publisher.
            <br />
            The search data is retrieved from Google Books APIs through Google
            Cloud server.
          </p>
          <p className="contact-p" id="contact-p-anchor">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="contact-p-anchor-item"
            >
              GitHub
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="contact-p-anchor-item"
            >
              CodePen
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="contact-p-anchor-item"
            >
              Email
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;