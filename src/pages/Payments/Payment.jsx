import React,{ useState, useEffect} from "react";
import logo from '../../../public/vite.svg'
import axios from "axios";
import tickets from '../../assets/tickets';
import { ethers } from "ethers";

const Payment = () =>{
    const [ticketData,setTicketData] = useState({})
    const [sectedSeats,setSectedSeats] = useState({})

    const [currentAccount, setCurrentAccount] = useState(null);
    const [status, setStatus] = useState("");
    const [amount, setAmount] = useState(1200);
    const [recipient, setRecipient] = useState("");

    useEffect(() =>{
        setTicketData(tickets)
    },[])

    const connectWallet = async () => {
        console.log("Hello")
        if (typeof window.ethereum !== "undefined") {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setCurrentAccount(accounts[0]);
                setStatus(`Connected: ${accounts[0]}`);
            } catch (error) {
                setStatus("Failed to connect wallet");
            }
        } else {
            setStatus("MetaMask is not installed. Please install it to connect your wallet.");
            alert("MetaMask is not installed. Please install it to connect your wallet.")
        }
    };

    const sendPayment = async () => {
        console.log("Hell")

        if (!currentAccount) {
            setStatus("Please connect your wallet first.");
            alert("Please connect to your wallet first")
            return;
        }

        if(typeof window.ethereum !== undefined){
            try{
                const contractAddress = ""; 
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = provider.getSigner();

                const tx = await signer.sendTransaction({
                    to: recipient,
                    value: amount,
                });

                setStatus(`Transaction sent! Hash: ${tx.hash}`);
                await tx.wait();
                setStatus("Transaction successful!");
            }
            catch (error) {
                console.error("Error sending payment:", error);
                setStatus("Transaction failed.");
            }
        };
        }

        const sendTelegramNotification = async (transaction) => {
            const telegramBotToken = "7798623745:AAHDkxtP-EsGXVTQgvVk8NdYHH4s5Rx1yyY"; // Replace with your bot's token
            const chatId = "800619704"; // Replace with your chat ID
            const message = `
        🚀 *Transaction Successful* 🚀
        - *From*: ${currentAccount} 
        - *To*: ${transaction.to}
        - *Amount*: ETH
        - *Hash*:
            `;
        
            try {
                const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: "Markdown", // Enables bold, italic, and links
                    }),
                });
        
                if (response.ok) {
                    console.log("Notification sent to Telegram successfully!");
                } else {
                    console.error("Failed to send Telegram notification:", await response.text());
                }
            } catch (error) {
                console.error("Error sending Telegram notification:", error);
            }
        };
        
    

//     async function displayRazorpay() {
//         const res = await loadScript(
//             "https://checkout.razorpay.com/v1/checkout.js"
//         );

//         if (!res) {
//             alert("Razorpay SDK failed to load. Are you online?");
//             return;
//         }

//         // creating a new order
//         const result = await axios.post("http://localhost:5000/payment/orders");

//         if (!result) {
//             alert("Server error. Are you online?");
//             return;
//         }

//         // Getting the order details back
//         const { amount, id: order_id, currency } = result.data;

//         console.log("Amount",amount)

//         const options = {
//             key: "rzp_test_T1hMVwg2u6p6uA", // Enter the Key ID generated from the Dashboard
//             amount: amount.toString(),
//             currency: currency,
//             name: "ICC",
//             description: "Test Transaction",
//             image: { logo },
//             order_id: order_id,
//             handler: async function (response) {
//                 const data = {
//                     orderCreationId: order_id,
//                     razorpayPaymentId: response.razorpay_payment_id,
//                     razorpayOrderId: response.razorpay_order_id,
//                     razorpaySignature: response.razorpay_signature,
//                 };

//                 const result = await axios.post("http://localhost:5000/payment/success", data);

//                 alert(result.data.msg);
//             },
//             prefill: {
//                 name: "ICC Body",
//                 email: "enquiries@icc-cricket.com",
//                 contact: "+971-4-3828800",
//             },
//             notes: {
//                 address: "ICC Body",
//             },
//             theme: {
//                 color: "#61dafb",
//             },
//         };

//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
// }

//     function loadScript(src) {
//         return new Promise((resolve) => {
//             const script = document.createElement("script");
//             script.src = src;
//             script.onload = () => {
//                 resolve(true);
//             };
//             script.onerror = () => {
//                 resolve(false);
//             };
//             document.body.appendChild(script);
//         });
// }
    return(
        <div className="container">
            {console.log(ticketData)}
            <header className="content">
                <div className="payment_details">
                    {tickets.map((ticket) =>(
                        <div>
                            <h1 className="ud">Payment Details</h1>
                            <div className="details">
                                <div className="payHeading">Mode of the match - <p>{ticket.name}</p></div>
                                <div className="payHeading">Total price - <p>{ticket.price}</p></div>
                                <div className="payHeading">Selected Seats - <p>{ticket.selected_seats}</p></div>
                                <div className="payHeading">Date of the match - <p>{ticket.date}</p></div>
                            </div>
                        </div>
                    )

                )}
                </div>
                <button className="ticketBook sze" onClick={currentAccount == null ? connectWallet :sendPayment}>
                    Pay &#8377;1200
                </button>
                <button className="ticketBook sze" onClick={sendTelegramNotification}>
                    Send &#8377;1200
                </button>
            </header>
        </div>
    )
}

export default Payment;