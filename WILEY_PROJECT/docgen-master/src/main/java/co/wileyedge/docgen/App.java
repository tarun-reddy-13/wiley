package co.wileyedge.docgen;

import java.io.File;
import java.util.Properties;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.PasswordAuthentication;

public class App {

    private boolean emailSent = false;
    private int maxAttempts = 1; // Maximum number of attempts to send email
    private int attempts = 0; // Current attempt count

    // Function to send mail
    // Arguments -- name of the receiver and email of receiver.
    public void sendEmail(String username, String to, String filepath) {

        if (emailSent) {
            System.out.println("Email already sent. Skipping further attempts.");
            return;
        }

        while (attempts < maxAttempts) {
            try {
                String from = "ttr1322004@outlook.com";
                String password = "Nurat@13&2004";
                System.out.println(username);
                String host = "outlook.office365.com";
                Properties properties = System.getProperties();
                System.out.print("Properties: " + properties);

                // setting important info to properties
                // host set
                properties.put("mail.smtp.host", host);
                properties.put("mail.smtp.port", "587");
                properties.put("mail.smtp.starttls.enable", "true");
                properties.put("mail.smtp.auth", "true");

                // to get session obj...
                Session session = Session.getInstance(properties, new Authenticator() {
                    @Override
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(from, password);
                    }
                });

                session.setDebug(true);

                // compose message
                String message = "\tDear " + username + ",\n\tThanks for using our services!!!\n\tHere is Your resume...";
                String sub = "\nYour Resume is here";

                MimeMessage m = new MimeMessage(session);

                m.setFrom(from);
                // adding recipient to message
                m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

                // adding subject to message
                m.setSubject(sub);

                // attach the file
                String path = filepath;

                MimeMultipart mimeMultipart = new MimeMultipart();

                MimeBodyPart textMime = new MimeBodyPart();

                MimeBodyPart fileMime = new MimeBodyPart();

                // adding mail body
                textMime.setText(message);
                File file = new File(path);
                fileMime.attachFile(file);

                mimeMultipart.addBodyPart(textMime);
                mimeMultipart.addBodyPart(fileMime);

                // send the message using transport class
                m.setContent(mimeMultipart);

                Transport.send(m);

                // Set the flag to true indicating that email has been sent
                emailSent = true;

                System.out.println("SUCCESSFULL...");
                break; // Exit the loop if email sent successfully
            } catch (Exception e) {
                attempts++; // Increment the attempt count
                if (attempts >= maxAttempts) {
                    System.out.println("Maximum attempts reached. Email could not be sent.");
                } else {
                    System.out.println("Error occurred while sending email. Retrying...");
                }
            }
        }
    }
}
