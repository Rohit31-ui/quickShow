import logo from "../assets/logo.svg";
import { dateFormat } from "../lib/dateFormat";

const TicketPrint = (booking) => {


  const ticketHTML = `
    <html>
      <head>
        <title>QuickShow - Ticket</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
        <style>
          * {
            font-family: 'Outfit', sans-serif;
            margin: 0; padding: 0; box-sizing: border-box;
          }
          body {
            background-color: #09090B;
            padding: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .ticket {
            background: linear-gradient(145deg, #1c0f13, #2a0f14);
            border: 2px solid #F84565;
            border-radius: 16px;
            width: 380px;
            padding: 24px;
            box-shadow: 0 0 30px rgba(248, 69, 101, 0.4);
            color: white;
          }
          .logo {
            display: block;
            width: 120px;
            margin: 0 auto 20px auto;
          }
          .heading {
            text-align: center;
            color: #F84565;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .info {
            font-size: 15px;
            margin-bottom: 10px;
          }
          .label {
            color: #bbb;
            font-weight: 400;
          }
          .value {
            font-weight: 500;
            margin-left: 4px;
          }
          .footer {
            text-align: center;
            font-size: 13px;
            margin-top: 20px;
            color: #bbb;
          }
          @media print {
            body {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="ticket">
          <img src="${window.location.origin + logo}" alt="QuickShow Logo" class="logo"/>
          <div class="heading">🎟️ Movie Ticket</div>
          <div class="info"><span class="label">🎬 Movie:</span><span class="value">${booking.show.movie.title}</span></div>
          <div class="info"><span class="label">📅 Date:</span><span class="value">${dateFormat(booking.show.showDateTime)}</span></div>
          <div class="info"><span class="label">🕒 Time:</span><span class="value">${new Date(
            booking.show.showDateTime
          ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></div>
          <div class="info"><span class="label">🎫 Seats:</span><span class="value">${booking.bookedSeats.join(", ")}</span></div>
          <div class="info"><span class="label">💵 Amount:</span><span class="value">₹${booking.amount}</span></div>
          <div class="info"><span class="label">🔐 Booking ID:</span><span class="value">${booking._id}</span></div>
          <div class="footer">Enjoy your movie with QuickShow 🍿</div>
        </div>
        <script>window.onload = () => window.print();</script>
      </body>
    </html>
  `;

  const printWin = window.open("", "_blank");
  printWin.document.write(ticketHTML);
  printWin.document.close();
};

export default TicketPrint;
