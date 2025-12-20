"use strict";
/**
 * Base Email Template / Əsas Email Şablonu
 * Base template for all emails
 * Bütün emaillər üçün əsas şablon
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseTemplate = baseTemplate;
exports.orderConfirmationTemplate = orderConfirmationTemplate;
exports.passwordResetTemplate = passwordResetTemplate;
exports.welcomeTemplate = welcomeTemplate;
/**
 * Generate base email template wrapper
 * Əsas email şablon wrapper-ini yarat
 *
 * @param content - Email content / Email məzmunu
 * @param data - Template data / Şablon datası
 * @returns HTML string / HTML stringi
 */
function baseTemplate(content, data = {}) {
    const { companyName = 'ulustore', logoUrl = 'https://ulustore.com/logo.png', supportEmail = 'support@ulustore.com', websiteUrl = 'https://ulustore.com', } = data;
    return `
<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${companyName}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #ef4444;
      padding: 24px;
      text-align: center;
    }
    .header img {
      max-height: 50px;
    }
    .content {
      padding: 32px 24px;
    }
    .footer {
      background-color: #f9fafb;
      padding: 24px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
    }
    .button {
      display: inline-block;
      background-color: #ef4444;
      color: #ffffff !important;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-weight: 600;
      margin: 16px 0;
    }
    .button:hover {
      background-color: #dc2626;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="${logoUrl}" alt="${companyName}" />
    </div>
    <div class="content">
      ${content}
    </div>
    <div class="footer">
      <p>© ${new Date().getFullYear()} ${companyName}. Bütün hüquqlar qorunur.</p>
      <p>
        <a href="${websiteUrl}">Website</a> | 
        <a href="mailto:${supportEmail}">Dəstək</a>
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
/**
 * Generate order confirmation email
 * Sifariş təsdiqi emaili yarat
 */
function orderConfirmationTemplate(data) {
    const currency = data.currency || 'AZN';
    const content = `
    <h1>Sifariş Təsdiqi / Order Confirmation</h1>
    <p>Hörmətli ${data.customerName},</p>
    <p>Sifarişiniz uğurla qəbul edildi. / Your order has been successfully received.</p>
    <p><strong>Sifariş nömrəsi / Order ID:</strong> ${data.orderId}</p>
    <p><strong>Ümumi məbləğ / Total:</strong> ${data.total} ${currency}</p>
    <p>Sifarişinizin statusunu izləmək üçün hesabınıza daxil olun.</p>
    <a href="https://ulustore.com/orders/${data.orderId}" class="button">
      Sifarişi İzlə / Track Order
    </a>
  `;
    return baseTemplate(content);
}
/**
 * Generate password reset email
 * Şifrə sıfırlama emaili yarat
 */
function passwordResetTemplate(data) {
    const content = `
    <h1>Şifrə Sıfırlama / Password Reset</h1>
    <p>Hörmətli ${data.userName},</p>
    <p>Şifrənizi sıfırlamaq üçün aşağıdakı düyməyə klikləyin.</p>
    <p>To reset your password, click the button below.</p>
    <a href="${data.resetLink}" class="button">
      Şifrəni Sıfırla / Reset Password
    </a>
    <p style="font-size: 12px; color: #6b7280;">
      Bu link 1 saat ərzində aktiv olacaq. / This link will be active for 1 hour.
    </p>
  `;
    return baseTemplate(content);
}
/**
 * Generate welcome email
 * Xoş gəldin emaili yarat
 */
function welcomeTemplate(data) {
    const verificationSection = data.verificationLink
        ? `<a href="${data.verificationLink}" class="button">Emaili Təsdiqlə / Verify Email</a>`
        : '';
    const content = `
    <h1>ulustore-a Xoş Gəldiniz! / Welcome to ulustore!</h1>
    <p>Hörmətli ${data.userName},</p>
    <p>ulustore ailəsinə xoş gəldiniz! / Welcome to the ulustore family!</p>
    <p>İndi minlərlə məhsul arasından seçim edə bilərsiniz.</p>
    ${verificationSection}
    <p>Suallarınız varsa, bizə yazın: support@ulustore.com</p>
  `;
    return baseTemplate(content);
}
