import Image from "next/image";
import React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  projectname: string;
  message: string;
  service: string;
  submitDate: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  projectname,
  message,
  service,
  submitDate,
}) => {
  return (
    <div
      style={{
        color: "#023047",
        backgroundColor: "#f4f4f4",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "900px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <header
        style={{
          backgroundColor: "#219EBC",
          color: "#fff",
          padding: "20px",
          borderRadius: "10px 10px 0 0",
          textAlign: "center",
          borderBottom: "3px solid #FFB703",
        }}
      >
        <Image
          src="https://www.digle.org/_next/image?url=%2Fdigle-logo.png&w=384&q=75"
          alt="Digle Logo"
          style={{ width: "150px", marginBottom: "10px" }}
          width={150}
          height={150}
        />
        <h1 style={{ margin: 0, fontSize: "24px" }}>New Project Inquiry</h1>
      </header>
      <main
        style={{
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "0 0 10px 10px",
          lineHeight: "1.6",
        }}
      >
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${email}`} style={{ color: "#219EBC" }}>
            {email}
          </a>
        </p>
        <p>
          <strong>Project Name:</strong> {projectname}
        </p>
        <p>
          <strong>Service:</strong> {service}
        </p>
        <p>
          <strong>Message:</strong>
        </p>
        <p
          style={{ whiteSpace: "pre-line", margin: "10px 0", fontSize: "16px" }}
        >
          {message}
        </p>
      </main>
      <footer
        style={{
          textAlign: "center",
          padding: "10px",
          color: "#777",
          backgroundColor: "#f4f4f4",
          borderTop: "1px solid #ddd",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <small>
          Submitted on: {submitDate || new Date().toLocaleDateString()}
        </small>
      </footer>
    </div>
  );
};

export default EmailTemplate;
