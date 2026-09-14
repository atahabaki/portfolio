import { useState } from "react";
import IconButton from "../IconButton/IconButton";
import TextField from "../TextField/TextField";
import "./Contact.css";

const Contact = () => {
  const mailToPrefix = "mailto:atahabaki@protonmail.com";
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const toUri = `${mailToPrefix}?subject=${encodeURI(subject)}&body=${encodeURI(message)}`;
  return (
    <div id="contact">
      <h2>Let's Build Together</h2>
      <div className="side-to-side">
        <div className="column form">
          <p>Would like to work with me or discuss a project? Feel free to get in touch:</p>
          <form>
            <TextField
              name="subject"
              placeholder="Subject:"
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              name="message"
              placeholder="Message:"
              type="text"
              multiline
              onChange={(e) => setMessage(e.target.value)}
            />
            <IconButton
              name="Send Me an E-Mail"
              icon="protonmail"
              to={toUri}
              type="submit"
              elevated
            />
          </form>
        </div>
        <div className="column socials">
          <p>Or connect with me on social media:</p>
          <div className="social-links">
            {[
              { icon: "github", name: "GitHub", to: "https://github.com/atahabaki" },
              { icon: "linkedin", name: "LinkedIn", to: "https://linkedin.com/in/atahabaki" },
              { icon: "mastodon", name: "Mastodon", to: "https://mastodon.social/@atahabaki" },
              // { icon: "instagram", name: "Instagram", to: "https://www.instagram.com/atahabaki" },
              // { icon: "threads", name: "Threads", to: "https://www.threads.com/@atahabaki" },
              // { icon: "x", name: "X.com", to: "https://x.com/atahabaki" },
              // { icon: "bluesky", name: "Bluesky", to: "https://bsky.app/profile/atahabaki" },
              {
                icon: "buymeacoffee",
                name: "Buy Me a Coffee",
                to: "https://buymeacoff.ee/atahabaki",
              },
            ].map(({ name, icon, to }) => (
              <IconButton
                key={name}
                name={name}
                icon={icon}
                to={to}
                buttonType="primary-inverted"
              />
            ))}
          </div>
        </div>
      </div>
      <p className="footer">
        &copy; 2026 A. Taha Baki. Engineered with logic, designed with passion.
      </p>
    </div>
  );
};

export default Contact;
