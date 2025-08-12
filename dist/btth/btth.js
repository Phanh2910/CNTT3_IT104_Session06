// //BTTH OOP//
// //B1: Tạo interface Animal
// interface IAnimal {
//     name: string;
//     age: number;
//     category: string | number | boolean; // Loại động vật (có thể là chuỗi hoặc số hoặc boolean)
//     //CÁC PHƯƠNG THỨC
//     makeSound(): string; //trả về âm thanh động vật
//     getDetails(): string; //Lấy thông tin chi tiết cua động vật
//     move(): string; //Mô tả hành động di chuyển của động vật
//     feed(): string; //Mô tả về thông tin thức ăn của động vật
// }
// //B2: Tạo abstract class Animal
// abstract class Animal implements IAnimal {
//     name: string;
//     age: number;
//     category: string | number | boolean;
//     constructor(name: string, age: number, category: string | number | boolean) {
//         this.name = name;
//         this.age = age;
//         this.category = category;
//     }
//     abstract makeSound(): string;
//     abstract move(): string;
//     abstract feed(): string;
//     getDetails(): string {
//         return `Tên: ${this.name}, Tuổi: ${this.age}, Loại: ${this.category}`;
//     }
// }
//     //B3: Tạo các class con kế thừa từ Animal
//     class Bird extends Animal {
//         makeSound(): string {
//             throw new Error("Method not implemented.");
//         }
//         feed(): string {
//             throw new Error("Method not implemented.");
//         }
//         private wingSpan: number|string; // Chiều dài cánh
//         constructor(name: string, age: number, wingSpan: number) {
//             super(name, age, wingSpan);
//             this.name = name;
//             this.age = age;
//             this.wingSpan = wingSpan;
//         }
//         move(): string {
//             return `Phương thức di chuyển chủa chim là bay`
//         }
//     }
//     class Mammal extends Animal {
//         makeSound(): string {
//             throw new Error("Method not implemented.");
//         }
//         feed(): string {
//             throw new Error("Method not implemented.");
//         }
//         private furColor: string;
//         constructor(name: string, age: number, furColor: string) {
//             super(name, age, furColor);
//             this.name = name;
//             this.age = age;
//             this.furColor = furColor;
//         }
//         move(): string {
//             return `Phương thức di chuyển chủa động vật có vú là chạy`
//         }
//         //viết phương thức cập nhật thuộc tính private
//         set Furcolor(NewfurColor: string){
//             this.NewfurColor = NewfurColor;
//         }
//         get Furcolor(): string {
//             return `Màu lông của động vật có vú là: ${this.NewfurColor}`;
//         }
//     }
//     class Reptile extends Animal {
//         makeSound(): string {
//             throw new Error("Method not implemented.");
//         }
//         feed(): string {
//             throw new Error("Method not implemented.");
//         }
//         //Động vật bò sát
//         private venomous: boolean; // Có nọc độc hay không
//         constructor(name: string, age: number, venomous: boolean) {
//             super(name, age, venomous);
//             this.name = name;
//             this.age = age;
//             this.venomous = venomous;
//         }
//         move(): string {
//             return `Mô phỏng phương thức di chuyển chủa động vật bò sát là bò`
//         }
//     }
// //B4: Tạo các đối tượng từ các class con
// let Animals = [
//     new Bird("Chim Sẻ", 2, 15),
//     new Mammal("Hổ", 5, "Vàng"),
//     new Reptile("Rắn Hổ Mang", 3, true)
// ];
// Animals.forEach(item=>console.log(item.move(),)
