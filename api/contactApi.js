import mongoose from "mongoose";
import joi from "joi";
import nodemailer from "nodemailer";

// ENV VARIABLES IMPORT - Updated for Gmail
const { MONGODB_URI, GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;

// MONGODB DATABASE CONNECTION
let cached = null;
const dbConnection = async () => {
  try {
    if (cached) {
      return cached;
    }
    cached = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      tls: true,
    });
    return cached;
  } catch (error) {
    console.log("Error While Connecting Database");
  }
};

// MONGODB SCHEMA - Updated with subject field
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "* Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "* Email is required"],
      lowercase: true,
      unique: true,
      trim: true,
    },
    subject: {
      type: String,
      required: [true, "* Subject is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "* Message is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

// MONGODB MODELS
const ContactModel =
  mongoose.models.contactModel || mongoose.model("contactModel", contactSchema);

// VALIDATION SCHEMA - Updated with subject field
const contactValidationSchema = joi.object({
  name: joi.string().required().messages({
    "string.base": "* Name Must Be String",
    "string.required": "* Name Is Required",
  }),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "* Email Must Be String",
      "string.required": "* Email is required",
    }),
  subject: joi.string().required().messages({
    "string.base": "* Subject Must Be String",
    "string.required": "* Subject Is Required",
  }),
  message: joi.string().required().messages({
    "string.base": "* Message Must Be String",
    "string.required": "* Message Is Required",
  }),
});

// GMAIL TRANSPORTER
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

// SEND MAIL
const sendMail = async (from, to, subject, template) => {
  try {
    let info = await transporter.sendMail({
      to,
      from,
      subject,
      html: template,
    });
    if (info) {
      console.log("Mail Sent Successfully");
    }
  } catch (error) {
    console.log("Error While Sending Mail", error);
  }
};

// firm Template - Updated with subject field

const firmTemplate = (data) => {
  let { name, email, subject, message } = data;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Submission</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f7f7;
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 680px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background: #DB1A13;
            background: linear-gradient(135deg, #DB1A13, #ff4d4d);
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1.5px;
            position: relative;
          }
          .header-divider {
            height: 8px;
            background: #ff6666;
            background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2));
          }
          .content {
            padding: 40px 50px;
          }
          h2 {
            color: #333;
            margin: 0 0 20px 0;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .emoji {
            font-size: 28px;
            margin-right: 10px;
          }
          p {
            color: #555;
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 1.6;
          }
          .highlight {
            background-color: rgba(219, 26, 19, 0.08);
            border-left: 4px solid #DB1A13;
            padding: 15px;
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            border: none;
            border-radius: 14px;
            overflow: hidden;
            margin: 25px 0;
            box-shadow: 0 5px 15px rgba(219, 26, 19, 0.08);
            font-size: 16px;
          }
          th {
            background: #DB1A13;
            background: linear-gradient(to right, #DB1A13, #ff3333);
            color: #ffffff;
            width: 30%;
            font-weight: 600;
            letter-spacing: 0.5px;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          td {
            background-color: #ffffff;
            color: #444;
            border-bottom: 1px solid #f0f0f0;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:nth-child(even) td {
            background-color: #fafafa;
          }
          a {
            color: #DB1A13;
            text-decoration: none;
            font-weight: 500;
          }
          .message-cell {
            line-height: 1.7;
          }
          .footer {
            margin-top: 10px;
            background-color: #fcfcfc;
            font-size: 14px;
            color: #888;
            text-align: center;
            border-top: 1px solid #eee;
            padding: 25px 40px;
          }
          .footer-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: #aaa;
          }
          
          @media only screen and (max-width: 600px) {
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 25px 15px;
              font-size: 26px;
            }
            table {
              border-radius: 8px;
            }
            th, td {
              padding: 15px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">
            TétraTech
          </div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">📩</span> New Contact Form Submission</h2>
            <p class="highlight">You have received a new contact form submission with the following details:</p>
            <table>
              <tr>
                <th>Name</th>
                <td>${name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <th>Subject</th>
                <td>${subject}</td>
              </tr>
              <tr>
                <th>Message</th>
                <td class="message-cell">${message}</td>
              </tr>
            </table>
          </div>
          <div class="footer">
            This email was automatically generated by your website's contact form.
            <span class="footer-note">Please do not reply directly to this email.</span>
          </div>
        </div>
      </body>
    </html>
      `;
};

// user Template - Updated with red color scheme
const userTemplate = (data) => {
  let { name, email, subject, message } = data;
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Submission</title>
    <style>
      body, html {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
      }
      * {
        box-sizing: border-box;
      }
      body {
        background-color: #f7f7f7;
        padding: 40px 20px;
      }
      .email-wrapper {
        max-width: 680px;
        margin: auto;
        background-color: #ffffff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        background: #DB1A13;
        background: linear-gradient(135deg, #DB1A13, #ff4d4d);
        padding: 35px 20px;
        color: white;
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 1.5px;
        position: relative;
      }
      .header-divider {
        height: 8px;
        background: #ff6666;
        background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2));
      }
      .content {
        padding: 40px 50px;
      }
      h2 {
        color: #333;
        margin: 0 0 20px 0;
        font-size: 24px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .emoji {
        font-size: 28px;
        margin-right: 10px;
      }
      p {
        color: #555;
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 1.6;
      }
      .highlight {
        background-color: rgba(219, 26, 19, 0.08);
        border-left: 4px solid #DB1A13;
        padding: 15px;
        margin-bottom: 25px;
      }
      .message-box {
        background-color: #f9f9f9;
        border-radius: 12px;
        padding: 25px;
        margin: 30px 0;
        border: 1px solid #eee;
      }
      .message-box h3 {
        margin-top: 0;
        color: #DB1A13;
        font-size: 18px;
      }
      .button {
        display: inline-block;
        background: linear-gradient(to right, #DB1A13, #ff3333);
        color: white;
        text-decoration: none;
        padding: 12px 28px;
        border-radius: 50px;
        font-weight: 600;
        margin: 15px 0;
        text-align: center;
      }
      .divider {
        height: 1px;
        background-color: #eee;
        margin: 30px 0;
      }
      .footer {
        margin-top: 10px;
        background-color: #fcfcfc;
        font-size: 14px;
        color: #888;
        text-align: center;
        border-top: 1px solid #eee;
        padding: 25px 40px;
      }
      .social-links {
        margin: 20px 0;
      }
      .social-links a {
        display: inline-block;
        margin: 0 10px;
        color: #DB1A13;
        text-decoration: none;
      }
      .footer-note {
        display: block;
        margin-top: 8px;
        font-size: 13px;
        color: #aaa;
      }
      
      @media only screen and (max-width: 600px) {
        .content {
          padding: 30px 20px;
        }
        .header {
          padding: 25px 15px;
          font-size: 26px;
        }
        .message-box {
          padding: 20px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="header">
        TetraTech
      </div>
      <div class="header-divider"></div>
      <div class="content">
        <h2><span class="emoji">✅</span> Thank You for Your Submission</h2>
        <p class="highlight">Dear ${name}, thank you for contacting us regarding "${subject}"! We've received your message and appreciate your interest.</p>
        
        <p>We wanted to let you know that your form submission has been successfully received. Our team will review your message and get back to you as soon as possible.</p>
        
        <div class="message-box">
          <h3>What happens next?</h3>
          <p>One of our team members will contact you within 24-48 business hours to address your inquiry about "${subject}". We're committed to providing excellent service and look forward to assisting you.</p>
        </div>
        
        <p>In the meantime, feel free to explore our website for more information about our services and offerings.</p>
        
        <center><a href="https://www.tetratech.com" class="button">Visit Our Website</a></center>
        
        <div class="divider"></div>
        
        <p>If you have any urgent questions, please don't hesitate to call us directly at <strong><a href="tel:+918928138434">+91 8928138434</a></strong>.</p>
      </div>
      <div class="footer">
        <div class="social-links">
          <a href="#">Facebook</a> • 
          <a href="#">Instagram</a> • 
          <a href="#">LinkedIn</a>
        </div>
        Thank you for choosing TétraTech.
        <span class="footer-note">© 2025 TétraTech. All rights reserved.</span>
      </div>
    </div>
  </body>
</html>`;
};


// MAIN FUNCTION - Updated validation and email sending
const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ isSuccess: false, message: "Only Post Method Is Allowed" });
  }
  try {
    await dbConnection();
    let { name, email, subject, message } = req.body;
    
    // Updated validation to include subject and message
    let { error } = contactValidationSchema.validate({ name, email, subject, message });
    if (error) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Validation Error", error });
    }
    
    let isDataExist = await ContactModel.findOne({ email });
    if (isDataExist) {
      return res
        .status(409)
        .json({ isSuccess: false, message: "Email Already Exists" });
    }

    let newContact = new ContactModel(req.body);
    let isSaved = await newContact.save();
    if (isSaved) {
      await Promise.all([
        await sendMail(
          GMAIL_USER,
          email,
          "Thanks for Contacting TétraTech",
          userTemplate(req.body)
        ),
        await sendMail(
          GMAIL_USER,
          GMAIL_USER,
          `New Contact Request: ${subject} - from ${name}`,
          firmTemplate(req.body)
        ),
      ]);
      res.status(201).json({
        isSuccess: true,
        message: "New Contact Details Added Successfully",
      });
    } else {
      return res.status(400).json({
        isSuccess: false,
        message: "Error While Inserting Contact Details",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ isSuccess: false, message: "Internal Server Error",error });
  }
};

export default handler;
