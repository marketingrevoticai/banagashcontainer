import React from "react";

const GoogleMapEmbed = () => {
  return (
    <section className="w-full h-[400px]">
      <iframe
        title="Bangash Containers Location"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3323.297976699378!2d72.79524607569705!3d33.59757227333156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM1JzUxLjMiTiA3MsKwNDcnNTIuMiJF!5e0!3m2!1sen!2s!4v1778863067723!5m2!1sen!2s"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-none"
      ></iframe>
    </section>
  );
};

export default GoogleMapEmbed;
