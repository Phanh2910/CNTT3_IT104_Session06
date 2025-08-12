//ẩn đi thông tin quan trọng, chỉ hiển thị thông tin cần thiết
abstract class Product {
    //có thể chứa method bình thường và method abstract
    abstract getInfo(): string;
    abstract getName(): string;
    setPrice(price: number): void {
        console.log(`Giá sản phẩm đã được đặt là: ${price}`);
        
    }
}

//1 class khi kế thừa 1 class abstract thì phải triển khai các method abstract
class Iphone extends Product {
    getInfo(): string {
        return "Iphone là một sản phẩm của Apple";
    }
    getName(): string {
        return "Iphone 14 Pro Max";
    }
    //ghi đè phương thức: override
    setPrice(price: number): void {
        
    }
}