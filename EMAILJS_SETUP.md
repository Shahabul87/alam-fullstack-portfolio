# Setting Up EmailJS for Contact Form

Follow these steps to set up EmailJS for your contact form:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## 2. Create an Email Service

1. In your EmailJS dashboard, navigate to "Email Services"
2. Click "Add New Service"
3. Select your email provider (Gmail, Outlook, or other)
4. Follow the authentication steps
5. Name your service and click "Create"
6. Note down your **Service ID**

## 3. Create an Email Template

1. In your EmailJS dashboard, navigate to "Email Templates"
2. Click "Create New Template"
3. Design your email template with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{message}}` - Sender's message
4. Save your template
5. Note down your **Template ID**

## 4. Get Your Public Key

1. In your EmailJS dashboard, navigate to "Account" > "API Keys"
2. Note down your **Public Key**

## 5. Update Your Environment Variables

Update the `.env.local` file in your project root with the following values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
```

Replace the placeholder values with the ones you noted down earlier.

## 6. Testing

1. Run your Next.js application
2. Fill out and submit the contact form
3. Check your email to verify that you received the message

## Template Example

Here's a simple email template example you can use:

```html
<h1>New Contact Message</h1>
<p>You have received a new message from your website contact form.</p>
<h2>Contact Details</h2>
<ul>
  <li><strong>Name:</strong> {{name}}</li>
  <li><strong>Email:</strong> {{email}}</li>
</ul>
<h2>Message:</h2>
<p>{{message}}</p>
```

## Notes

- The free plan of EmailJS allows 200 emails per month
- Make sure your email template matches the field names in your form
- In production, consider adding spam protection like reCAPTCHA 