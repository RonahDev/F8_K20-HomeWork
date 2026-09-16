//Tạo một đối tượng Order với các thuộc tính orderId, customerName, items và status
function Order (orderId , customerName , items , status = "pending") {
    this.orderId = orderId;
    this.customerName = customerName;
    this.items = items;
    this.status = status;
}

  // Method: Tính tổng tiền đơn hàng
  this.getTotalAmount = function () {
    let total = 0;

    for (const item of this.items) {
      total += item.price * item.quantity;
    }

    return total;
  };