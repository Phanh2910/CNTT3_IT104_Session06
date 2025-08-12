//ẩn đi thông tin quan trọng, chỉ hiển thị thông tin cần thiết
class Product {
    setPrice(price) {
        console.log(`Giá sản phẩm đã được đặt là: ${price}`);
    }
}
//1 class khi kế thừa 1 class abstract thì phải triển khai các method abstract
class Iphone extends Product {
    getInfo() {
        return "Iphone là một sản phẩm của Apple";
    }
    getName() {
        return "Iphone 14 Pro Max";
    }
    //ghi đè phương thức: override
    setPrice(price) {
    }
}
