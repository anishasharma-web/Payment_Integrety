import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Order;

@RestController
public class PaymentController {

    @Value("${rzp_key_id}")
    private String keyId;

    @Value("${rzp_key_secret}")
    private String secret;

    @GetMapping("/payment/{amount}")
    public String createOrder(@PathVariable String amount) throws RazorpayException {

        RazorpayClient razorpayClient = new RazorpayClient(keyId, secret);

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount", amount);
        orderRequest.put("currency", "INR");
        orderRequest.put("receipt", "order_receipt_11");
        orderRequest.put("payment_capture", 1);
        Order order = razorpayClient.Orders.create(orderRequest);

        String orderId = order.get("id");
        return orderId;
    }
}
