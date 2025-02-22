"use client";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const Payment = () => {
  const { error, isLoading, Razorpay } = useRazorpay();

  const onPayment = async () => {
    const payload = {
      name: "abhi",
      amount: 10,
      address_id: "675436b04ec32c77d9f59aa2",
    };
    await fetch(
      "https://405d-103-184-70-33.ngrok-free.app/api/order/create-order",
      {
        method: "POST", // Corrected method to POST
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijk1MDcwNjE2MDYiLCJpZCI6IjY3NTMwMGQxZDA5NWY4YjdlMGI3NDNjMiIsImlhdCI6MTczNDc5MzY3MCwiZXhwIjoxNzM0ODgwMDcwfQ.03S_Nfde06jrwDrLcqasH5WmthDo2ZP413vkG5Z8DzU",
        },
        body: JSON.stringify(payload), // Ensure payload is properly stringified
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("res", data.responseData);

        if (data && data.responseData) {
          const options = {
            key: "rzp_test_4lIhTe8bFNN0em", // Enter the Key ID generated from the Dashboard
            amount: data.responseData.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: data.responseData.orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response) {
              console.log("response ss", data.responseData);
              const payload = {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                orderId: data.responseData.orderId,
                paymentMethod: "UPI",
              };
              alert(response.razorpay_payment_id);
              //   await fetch("http://localhost:5050/api/order/verify-payment", {
              //     method: "POST", // Corrected method to POST
              //     headers: {
              //       "Content-Type": "application/json",
              //       Authorization:
              //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6Ijk1MDcwNjE2MDYiLCJpZCI6IjY3NTMwMGQxZDA5NWY4YjdlMGI3NDNjMiIsImlhdCI6MTczNDM3MTYyMSwiZXhwIjoxNzM0NDU4MDIxfQ.TUfXmCwW0ztE_DqL7oHrK4zjkXy2u9jxTqWwOYHYu9E",
              //     },
              //     body: JSON.stringify(payload), // Ensure payload is properly stringified
              //   })
              //     .then((res) => res.json())
              //     .then((data) => {
              //       console.log("Data", data);
              //     });
            },
            prefill: {
              name: "Gaurav Kumar",
              email: "gaurav.kumar@example.com",
              contact: "9000090000",
            },
            notes: {
              user_id: data.responseData.userId,
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
          const razorpayInstance = new Razorpay(options);
          razorpayInstance.open();
        }
      });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Payment Gateway</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="button"
          style={{
            background: "blue",
            color: "#fff",
            padding: "8px 10px",
            margin: "20px 0px",
            borderRadius: "8px",
          }}
          onClick={onPayment}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
