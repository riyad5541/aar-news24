import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import swimming from '../assets/swimming.png'
import class1 from '../assets/class.png'

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find us on</h2>

      <div className="join flex join-vertical bg-base-100">
        <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
        <button className="btn join-item justify-start"><FaInstagram></FaInstagram>Instagram</button>
        <button className="btn join-item justify-start"><FaTwitter />witter</button>
      </div>

      <div>
      <h2 className="font-semibold my-3">Q-zone</h2>
      <div>
        <img className="my-2" src={swimming} alt="" />
        <img className="my-2" src={class1} alt="" />
      </div>
      </div>
    </div>
  );
};

export default FindUs;
