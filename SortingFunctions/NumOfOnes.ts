export function NumberOfOnes(num: number): number{
    var total: number = 0;
    while(num != 0){
        if(num%2 == 1){
            num--;
            total++;
        }
        num=num/2;
    }
    return total;
}