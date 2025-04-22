import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
} from "@paypal/react-paypal-js";

// This values are the props in the UI

// Custom component to wrap the PayPalButtons and handle currency changes

export default function App() {
	return (
		<div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "AS1ZuWBfxO0lQLvKKkigV9XiYJYKeL3KBHVu_yli2IekgbdJjN--m54TCREk8q0g-85yolnoooYXmlxR",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				 <PayPalButtons
      className="cccc"
                style={{"layout":"vertical"}}
                createOrder={()=>"4UR1211424459094P"}
                onApprove={function (data, actions) {
                  return actions.order.capture().then(function () {
                      console.log("提交");
                        // Your code here after capture the order
                    });
                }}
            />
			</PayPalScriptProvider>
		</div>
	);
}