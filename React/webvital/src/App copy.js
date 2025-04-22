import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This values are the props in the UI
const amount = "2";
const currency = "USD";
const style = {"layout":"vertical"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      console.log("运行");
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);
console.log("(showSpinner && isPending) ",showSpinner,isPending);

  return (<>
      
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
        createOrder={()=>"9A689568TP034614P"}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
}

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
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
		</div>
	);
}