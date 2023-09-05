{
    {
        class User {
            name: string = "";
            age: number = 0;
        }

        const uhyo = new User();

        // uhyoはUserのインスタンスなのでtrue
        console.log(uhyo instanceof User);

        // {}はUserのインスタンスでないのでfalse
        console.log({} instanceof User);

        const john: User = {
            name: "john Smith",
            age: 15,
        };

        // johnはUserのインスタンスではないのでfalse
        console.log(john instanceof User);
    }
    {
        type HasAge = {
            age: number;
        }

        class User {
            name: string;
            age: number;

            constructor(name: string, age: number) {
                this.name = name;
                this.age = age;
            }
        }

        function getPrice(customer: HasAge) {
            if (customer instanceof User) {
                if (customer.name === "uhyo") {
                    return 0;
                }
            }
            return customer.age < 18 ? 1000: 1800;
        }

        const customer1: HasAge= {age: 15};
        const customer2: HasAge= {age: 40};
        const uhyo = new User("uhyo", 26);

        // 1000
        console.log(getPrice(customer1));
        // 1800
        console.log(getPrice(customer2));
        // 0
        console.log(getPrice(uhyo));
    }
}