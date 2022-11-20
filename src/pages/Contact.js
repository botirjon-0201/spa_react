import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="row">
      <form className="col s12">
        <div className="input-field col s12">
          <i className="material-icons prefix">mode_edit</i>
          <textarea
            id="icon_prefix2"
            type="message"
            row="10"
            className="materialize-textarea"
          ></textarea>
          <label for="icon_prefix2">Message</label>
        </div>

        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="first_name" type="text" className="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="last_name" type="text" className="validate" />
          <label for="last_name">Last Name</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">email</i>
          <input id="icon_prefix" type="email" className="validate" />
          <label for="icon_prefix">Email</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label for="icon_telephone">Telephone</label>
        </div>
        <Link className="waves-effect waves-light btn col s12">button</Link>
      </form>
    </div>
  );
}
