import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.COMPANY_EMAIL,
    pass: process.env.COMPANY_EMAIL_APP_PASSWORD
  }
});

const sendContactEmail = async ({ name, email, message }) => {
    const mailOptionsOne = {
        from: process.env.COMPANY_EMAIL,
        to: 'anchorpointdgnstudio@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    };

    return transporter.sendMail(mailOptionsOne);
};

const sendReminderEmail = async ({ lenderName,borrowerName,borrowerEmail, amnt}) => {
    const mailOptionsTwo = {
        from: process.env.COMPANY_EMAIL,
        to: borrowerEmail,
        subject: "Pending cash repayment reminder",
        html: `
            <p>Hello, ${borrowerName}</p>
            <p>This is a gentle reminder that you have a pending cash repayment of ₹${amnt} to ${lenderName}.</p>
            <p>Kindly arrange the repayment at your convenience.</p>
            <p>If you have already completed the payment, please ignore this message.</p>
            <p>This reminder was sent on behalf of ${lenderName} through our platform.If you believe this message was sent in error, you may safely ignore it.</p>
            <p>Thank you</p>
        `
    };

    return transporter.sendMail(mailOptionsTwo);
};

export { transporter, sendContactEmail, sendReminderEmail };