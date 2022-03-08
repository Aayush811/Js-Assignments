class person 
{
    constructor(name, age, salary, sex) 
    {
        this.name = name;
        this.age = age;
        this.salary = salary
        this.sex = sex;
    }

    static swap(newArr, i, j) 
    {
        let a = newArr[i];
        let b = newArr[j];
        newArr[i] = b;
        newArr[j] = a;
    }

    static partition(newArr, pivot, lo, hi, field, order) 
    {
        let i = lo;
        let j = lo;

        if (order === "asc") 
        {
            while (i <= hi) 
            {
                if (newArr[i][field] > pivot) i++;
                else 
                {
                    person.swap(newArr, i, j);
                    i++;
                    j++;
                }
            }
        }
        else 
        {
            while (i <= hi) 
            {
                if (newArr[i][field] < pivot) i++;
                else 
                {
                    person.swap(newArr, i, j);
                    i++;
                    j++;
                }
            }
        }
        return j - 1;
    }

    static quickSortHelper(newArr, lo, hi, field, order) 
    {
        if (lo > hi) return;

        let pivot = newArr[hi][field];
        let pIdx = person.partition(newArr, pivot, lo, hi, field, order);
        person.quickSortHelper(newArr, lo, pIdx - 1, field, order);
        person.quickSortHelper(newArr, pIdx + 1, hi, field, order);
    }

    static quickSort(arr, field, order) 
    {
        let newArr = [...arr]
        console.log(newArr);
        this.quickSortHelper(newArr, 0, newArr.length - 1, field, order);
        return newArr;
    }
}

let obj1 = new person("aayush", 22, 2500000, "male");
let obj2 = new person("harsh", 20, 3000000, "male");
let obj3 = new person("has", 24, 2600000, "male");
let obj4 = new person("tanu", 21, 100000, "Female");
let obj5 = new person("luv", 26, 654522, "male");
let obj6 = new person("rashmi", 22, 543515, "Female");
let obj7 = new person("priti", 32, 6443548, "Female");
let obj8 = new person("hrx", 42, 564448, "male");

let arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8];

console.log(person.quickSort(arr,"sex","asc"));