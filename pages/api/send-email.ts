import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

  if (!SENDGRID_API_KEY) {
    return res.status(500).json({ error: 'SENDGRID_API_KEY is not set.' });
  }

  if (req.method === 'POST') {
    const { Name, appointmentDateTime, appointmentReason, Email } = req.body;

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: Email, // Replace with the patient's email address
      from: 'takudzwanashe.daudi@students.uz.ac.zw', // Replace with the doctor's email address
      subject: 'New Appointment Scheduled',
      text: `Name: ${Name}\nAppointment Date and Time: ${appointmentDateTime}\nReason for Appointment: ${appointmentReason}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Appointment scheduled successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Appointment scheduling failed. Please try again later.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

